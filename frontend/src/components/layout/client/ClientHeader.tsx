"use client";

import React from "react";
import { ChevronRight, User, Menu, Bell, Building2 } from "lucide-react";
import { useSidebar } from "@/context/SidebarContext";

interface ClientHeaderProps {
  breadcrumb: string;
  onOpenSidebar?: () => void;
}

export function ClientHeader({ breadcrumb, onOpenSidebar }: ClientHeaderProps) {
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
          aria-label="Mở thanh điều hướng quản trị"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-1.5 sm:gap-2 text-[13px] sm:text-[13.5px] font-medium text-[#0F172A] truncate">
          <span className="text-[#C69214] font-bold hidden sm:inline">Client Portal</span>
          <ChevronRight className="w-4 h-4 text-[#94A3B8] shrink-0" />
          <span className="truncate">{breadcrumb}</span>
        </div>
      </div>

      {/* Right: Branch badge + Notification + Manager Profile */}
      <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
        <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 bg-slate-100 rounded-lg text-[12px] font-medium text-slate-700">
          <Building2 className="w-3.5 h-3.5 text-[#C69214]" />
          <span>Chi nhánh: The Landmark (Trụ sở)</span>
        </div>

        <button 
          type="button"
          className="p-2 text-slate-500 hover:text-slate-900 rounded-xl hover:bg-slate-100 transition min-h-[40px] min-w-[40px] flex items-center justify-center relative cursor-pointer"
          aria-label="Thông báo"
        >
          <Bell className="w-4 h-4" />
          <span className="w-2 h-2 rounded-full bg-red-500 absolute top-2 right-2 ring-2 ring-white"></span>
        </button>

        <div className="flex items-center gap-2.5">
          <div className="text-right hidden sm:block">
            <div className="text-[13px] sm:text-[13.5px] font-bold text-[#0F172A] leading-tight">
              Giám đốc F&amp;B / Owner
            </div>
            <div className="text-[10.5px] sm:text-[11px] text-[#16A34A] font-semibold">
              Quản trị viên cấp cao
            </div>
          </div>
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs ring-2 ring-[#C69214] shadow-xs shrink-0">
            <User className="w-4 h-4 text-[#DFC88A]" />
          </div>
        </div>
      </div>
    </header>
  );
}

