import type { ReactNode } from "react";
import { Sidebar } from "@/app/_components/dashboard/Sidebar";
import { Topbar } from "@/app/_components/dashboard/Topbar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="app">
      <Sidebar />
      <main className="main">
        <Topbar />
        {children}
      </main>
    </div>
  );
}