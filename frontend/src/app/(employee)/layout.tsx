"use client";

import React, { Suspense } from "react";
import { SidebarProvider, useSidebar } from "@/context/SidebarContext";
import { EmployeeSidebar } from "@/components/layout/employee/EmployeeSidebar";
import { EmployeeFooter } from "@/components/layout/employee/EmployeeFooter";

function EmployeeLayoutContent({ children }: { children: React.ReactNode }) {
  const { isOpen, closeSidebar } = useSidebar();

  return (
    <div className="min-h-screen flex bg-[#F8FAFC]">
      {/* Sidebar: Responsive drawer on mobile, sticky fixed column on md+ */}
      <Suspense fallback={<div className="w-64 bg-white border-r border-[#EFEBE3] hidden md:block" />}>
        <EmployeeSidebar isOpen={isOpen} onClose={closeSidebar} />
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
            <EmployeeFooter />
          </div>
        </main>
      </div>
    </div>
  );
}

export default function EmployeeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <EmployeeLayoutContent>{children}</EmployeeLayoutContent>
    </SidebarProvider>
  );
}
