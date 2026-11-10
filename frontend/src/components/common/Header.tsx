"use client";

import React from "react";
import Link from "next/link";
import { APP_ROUTES } from "@/constants/routes";

export function Header() {
  return (
    <header className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between">
      <Link href={APP_ROUTES.HOME} className="flex items-center gap-2.5 sm:gap-3 group">
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg border border-[#D4AF37] flex items-center justify-center font-serif text-[#C49A28] font-bold text-base sm:text-lg bg-[#FAF8F5] shadow-xs group-hover:scale-105 transition">
          R
        </div>
        <span className="font-serif font-bold text-lg sm:text-xl text-[#0F172A] tracking-tight">
          Rolly Academy
        </span>
      </Link>
    </header>
  );
}
