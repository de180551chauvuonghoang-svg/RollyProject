"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, User } from "lucide-react";

interface PortalHeaderProps {
  breadcrumb: string;
}

export function PortalHeader({ breadcrumb }: PortalHeaderProps) {
  return (
    <header className="h-16 px-8 bg-white border-b border-[#EFEBE3] flex items-center justify-between shrink-0">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-[13.5px] font-medium text-[#0F172A]">
        <ChevronRight className="w-4 h-4 text-[#94A3B8]" />
        <span>{breadcrumb}</span>
      </div>

      {/* User Profile */}
      <div className="flex items-center gap-3">
        <div className="text-right">
          <div className="text-[13.5px] font-bold text-[#0F172A] leading-tight">
            Nguyễn Hoàng Long
          </div>
          <div className="text-[11px] text-[#A67C1E] font-medium">
            Head Sommelier Resident
          </div>
        </div>
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#1E293B] to-[#0F172A] text-white flex items-center justify-center font-bold text-xs ring-2 ring-[#C69214]/50 shadow-xs">
          <User className="w-4 h-4" />
        </div>
      </div>
    </header>
  );
}

