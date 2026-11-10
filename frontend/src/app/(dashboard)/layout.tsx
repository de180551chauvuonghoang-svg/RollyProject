"use client";

import React from "react";
import { SidebarProvider, useSidebar } from "@/context/SidebarContext";
import { PortalSidebar } from "@/components/layout/PortalSidebar";
import { PortalFooter } from "@/components/layout/PortalFooter";

function DashboardContent({ children }: { children: React.ReactNode }) {
  const { isOpen, closeSidebar } = useSidebar();

  return (
    <div className="min-h-screen flex bg-[#F8FAFC]">
      {/* Sidebar: Responsive drawer on mobile, fixed column on md+ */}
      <PortalSidebar isOpen={isOpen} onClose={closeSidebar} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <main className="flex-1 p-3.5 sm:p-6 lg:p-8 flex flex-col justify-between">
          <div className="w-full max-w-[1400px] mx-auto min-w-0">
            {children}
          </div>
          <div className="w-full max-w-[1400px] mx-auto mt-8">
            <PortalFooter />
          </div>
        </main>
      </div>
    </div>
  );
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <DashboardContent>{children}</DashboardContent>
    </SidebarProvider>
  );
}
