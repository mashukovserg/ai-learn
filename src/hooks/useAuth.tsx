"use client";

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { ROOMS_METADATA } from '@/data/rooms/metadata';

interface UserProfile {
  user_id: number;
  login: string;
  email: string;
  points: number;
  streak_days: number;
  completed_rooms_count: number;
}

interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (login: string, password: string) => Promise<void>;
  signup: (email: string, login: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);
const PROGRESS_STORAGE_PREFIX = 'progress:';
const KNOWN_ROOM_IDS = new Set(ROOMS_METADATA.map(room => room.id));

interface LocalProgressEntry {
  roomId: string;
  taskIds: number[];
}

function readGuestProgressEntries(): LocalProgressEntry[] {
  if (typeof window === 'undefined') return [];

  const entries: LocalProgressEntry[] = [];
  try {
    for (let i = 0; i < localStorage.length; i += 1) {
      const key = localStorage.key(i);
      if (!key || !key.startsWith(PROGRESS_STORAGE_PREFIX)) continue;

      const roomId = key.slice(PROGRESS_STORAGE_PREFIX.length);
      if (!roomId || !KNOWN_ROOM_IDS.has(roomId)) continue;

      try {
        const raw = localStorage.getItem(key);
        if (!raw) continue;

        const parsed: unknown = JSON.parse(raw);
        if (!Array.isArray(parsed)) continue;

        const taskIds = [...new Set(
          parsed.filter((value): value is number => Number.isInteger(value) && value > 0)
        )].sort((a, b) => a - b);

        if (taskIds.length > 0) {
          entries.push({ roomId, taskIds });
        }
      } catch {
        // Ignore malformed localStorage entries.
      }
    }
  } catch {
    // Ignore storage access failures.
  }

  return entries;
}

async function syncGuestProgressAfterSignup(): Promise<void> {
  const entries = readGuestProgressEntries();
  if (entries.length === 0) return;

  for (const entry of entries) {
    for (const taskId of entry.taskIds) {
      try {
        const res = await fetch(`/api/progress/${entry.roomId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify({ task_id: taskId }),
        });

        // If auth/session is gone, stop migration attempts.
        if (res.status === 401 || res.status === 403) {
          return;
        }
      } catch {
        // Best-effort migration: continue with next task.
      }
    }
  }

  window.dispatchEvent(new CustomEvent('progress-updated'));
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const refreshUser = useCallback(async () => {
    try {
      const res = await fetch('/api/me', { credentials: 'include' });
      if (res.ok) {
        setUser(await res.json());
      } else {
        setUser(null);
      }
    } catch {
      setUser(null);
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    refreshUser().finally(() => setIsLoading(false));
  }, [refreshUser]);

  const login = useCallback(async (loginVal: string, password: string) => {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ login: loginVal, password }),
    });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data.detail || 'Login failed');
    }
    await refreshUser();
  }, [refreshUser]);

  const signup = useCallback(async (email: string, loginVal: string, password: string) => {
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ email, login: loginVal, password }),
    });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data.detail || 'Signup failed');
    }
    await syncGuestProgressAfterSignup();
    await refreshUser();
  }, [refreshUser]);

  const logout = useCallback(async () => {
    await fetch('/api/auth/logout', {
      method: 'POST',
      credentials: 'include',
    });
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: user !== null,
      isLoading,
      login,
      signup,
      logout,
      refreshUser,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
