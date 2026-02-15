"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function AppShell({
  lang,
  children,
}: {
  lang: string;
  children: React.ReactNode;
}) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div
      className="min-h-screen grid transition-[grid-template-columns] duration-300 ease-out"
      style={{ gridTemplateColumns: sidebarCollapsed ? "64px minmax(0,1fr)" : "208px minmax(0,1fr)" }}
    >
      <Sidebar
        lang={lang}
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed((v) => !v)}
      />
      <div className="min-w-0 flex flex-col">
        <Navbar lang={lang} />
        <main className="p-8 flex-1 min-w-0">{children}</main>
      </div>
    </div>
  );
}
