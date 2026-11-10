"use client";

import React from "react";
import { ChevronRight, User, Menu } from "lucide-react";
import { useSidebar } from "@/context/SidebarContext";

interface EmployeeHeaderProps {
  breadcrumb: string;
  onOpenSidebar?: () => void;
}

export function EmployeeHeader({ breadcrumb, onOpenSidebar }: EmployeeHeaderProps) {
  const { openSidebar } = useSidebar();
  const handleOpen = onOpenSidebar || openSidebar;

  return (
    <header className="h-16 px-4 sm:px-6 md:px-8 bg-white border border-[#EFEBE3] rounded-2xl flex items-center justify-between shrink-0 shadow-2xs">
      {/* Left: Mobile Menu Toggle & Breadcrumb */}
      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
        <button
          type="button"
          onClick={handleOpen}
          className="md:hidden p-2 -ml-1 text-[#475569] hover:text-[#0F172A] rounded-xl hover:bg-slate-100 transition min-h-[44px] min-w-[44px] flex items-center justify-center shrink-0 cursor-pointer"
          aria-label="Mở thanh điều hướng"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-1.5 sm:gap-2 text-[13px] sm:text-[13.5px] font-medium text-[#0F172A] truncate">
          <ChevronRight className="w-4 h-4 text-[#94A3B8] shrink-0" />
          <span className="truncate">{breadcrumb}</span>
        </div>
      </div>

      {/* Right: User Profile */}
      <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
        <div className="text-right hidden sm:block">
          <div className="text-[13px] sm:text-[13.5px] font-bold text-[#0F172A] leading-tight">
            Nguyễn Hoàng Long
          </div>
          <div className="text-[10.5px] sm:text-[11px] text-[#A67C1E] font-medium">
            Head Sommelier Resident
          </div>
        </div>
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-[#1E293B] to-[#0F172A] text-white flex items-center justify-center font-bold text-xs ring-2 ring-[#C69214]/50 shadow-xs shrink-0">
          <User className="w-4 h-4" />
        </div>
      </div>
    </header>
  );
}
