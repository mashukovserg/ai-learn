"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { AuthProvider } from "@/hooks/useAuth";

export default function AppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <AuthProvider>
      <div
        className="min-h-screen md:grid md:transition-[grid-template-columns] md:duration-300 md:ease-out md:[grid-template-columns:var(--sidebar-w)_minmax(0,1fr)]"
        style={{ "--sidebar-w": sidebarCollapsed ? "64px" : "208px" } as React.CSSProperties}
      >
        {/* Mobile drawer backdrop */}
        {mobileOpen && (
          <button
            type="button"
            aria-label={"Close menu"}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          />
        )}
        <Sidebar
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed((v) => !v)}
          mobileOpen={mobileOpen}
          onNavigate={() => setMobileOpen(false)}
        />
        <div className="min-w-0 flex flex-col">
          <Navbar onMenuClick={() => setMobileOpen(true)} />
          <main className="app-main flex-1 min-w-0">
            <div className="content-shell">{children}</div>
          </main>
        </div>
      </div>
    </AuthProvider>
  );
}
