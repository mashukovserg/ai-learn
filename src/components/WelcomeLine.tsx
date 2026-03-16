"use client";

import { useAuth } from '@/hooks/useAuth';

export default function WelcomeLine({ welcomeText }: { welcomeText: string }) {
  const { user } = useAuth();
  const name = user?.login ?? 'Guest';
  return (
    <p className="text-xs text-neutral-500 mb-5">
      {welcomeText}, {name}
    </p>
  );
}
