"use client";

import React, { useState } from "react";
import { ChevronRight, User, Menu, Search } from "lucide-react";
import { useSidebar } from "@/context/SidebarContext";

interface ClientHeaderProps {
  breadcrumb?: string;
  onOpenSidebar?: () => void;
}

export function ClientHeader({ breadcrumb = "Tổng quan", onOpenSidebar }: ClientHeaderProps) {
  const { openSidebar } = useSidebar();
  const handleOpen = onOpenSidebar || openSidebar;
  const [searchValue, setSearchValue] = useState("");

  return (
    <header className="h-16 px-4 sm:px-6 md:px-8 bg-white border-b border-[#ECE5D8] flex items-center justify-between shrink-0 sticky top-0 z-30">
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

        <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-[13px] text-slate-600 truncate">
          <span className="text-slate-500 font-medium">Client Portal</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-[#0F172A] font-semibold truncate">{breadcrumb}</span>
        </div>
      </div>

      {/* Center: Global Search Input (Figma Standard) */}
      <div className="hidden md:flex items-center flex-1 max-w-md mx-6">
        <div className="relative w-full">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Tìm kiếm tài liệu SOP, công thức, quy chuẩn..."
            className="w-full min-h-[40px] pl-10 pr-4 py-2 bg-[#F1F5F9] border border-transparent hover:border-slate-300 focus:border-[#C69214] rounded-xl text-xs sm:text-[13px] text-slate-900 placeholder-slate-400 focus:outline-none transition"
          />
        </div>
      </div>

      {/* Right: Quản lý Đào tạo F&B • Admin Portal + Avatar */}
      <div className="flex items-center gap-3 shrink-0">
        <div className="text-right hidden sm:block">
          <div className="text-xs sm:text-sm font-bold text-[#0F172A] leading-tight">
            Quản lý Đào tạo F&amp;B
          </div>
          <div className="text-[11px] text-slate-400">
            Admin Portal
          </div>
        </div>

        <div className="w-9 h-9 rounded-full bg-[#78350F] text-[#E2B755] flex items-center justify-center font-bold text-xs ring-2 ring-amber-100 shadow-xs shrink-0 cursor-pointer">
          <User className="w-4 h-4 text-amber-200" />
        </div>
      </div>
    </header>
  );
}
