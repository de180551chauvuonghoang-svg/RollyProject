import React from "react";
import { PortalSidebar } from "@/components/layout/PortalSidebar";
import { PortalFooter } from "@/components/layout/PortalFooter";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-[#F8FAFC]">
      {/* Cố định Sidebar bên trái */}
      <PortalSidebar />

      {/* Vùng nội dung chính bên phải */}
      <div className="flex-1 flex flex-col min-w-0">
        <main className="flex-1 p-6 lg:p-8">
          {children}
          <PortalFooter />
        </main>
      </div>
    </div>
  );
}

