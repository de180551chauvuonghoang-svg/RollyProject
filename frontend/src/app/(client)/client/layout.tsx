"use client";

import React, { Suspense } from "react";
import { SidebarProvider, useSidebar } from "@/context/SidebarContext";
import { ClientSidebar } from "@/components/layout/client/ClientSidebar";
import { ClientFooter } from "@/components/layout/client/ClientFooter";

function ClientLayoutContent({ children }: { children: React.ReactNode }) {
  const { isOpen, closeSidebar } = useSidebar();

  return (
    <div className="min-h-screen flex bg-[#F8FAFC]">
      {/* Sidebar: Responsive drawer on mobile, fixed column on md+ */}
      <Suspense fallback={<div className="w-64 bg-white border-r border-[#ECE5D8] hidden md:block" />}>
        <ClientSidebar isOpen={isOpen} onClose={closeSidebar} />
      </Suspense>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <main className="flex-1 p-3.5 sm:p-6 lg:p-8 flex flex-col justify-between">
          <div className="w-full max-w-[1400px] mx-auto min-w-0">
            <Suspense fallback={<div className="p-8 text-center text-slate-400">Đang tải...</div>}>
              {children}
            </Suspense>
          </div>
          <div className="w-full max-w-[1400px] mx-auto mt-8">
            <ClientFooter />
          </div>
        </main>
      </div>
    </div>
  );
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <ClientLayoutContent>{children}</ClientLayoutContent>
    </SidebarProvider>
  );
}

