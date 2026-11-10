"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  BookOpen, 
  Bot, 
  History, 
  UserCircle, 
  Settings, 
  Store 
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string | number;
}

const navItems: NavItem[] = [
  { label: "Tổng quan", href: "/dashboard", icon: LayoutDashboard },
  { label: "Học tập & Tài liệu", href: "/courses", icon: BookOpen },
  { label: "Kịch bản Role-play", href: "/roleplay", icon: Bot, badge: 12 },
  { label: "Lịch sử & Đánh giá", href: "/history", icon: History },
  { label: "Hồ sơ cá nhân", href: "/profile", icon: UserCircle },
  { label: "Cài đặt tài khoản", href: "/settings", icon: Settings },
];

export function PortalSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r border-[#EFEBE3] flex flex-col justify-between p-4 shrink-0 min-h-screen">
      {/* Top Section */}
      <div>
        {/* Brand Logo */}
        <Link href="/courses" className="flex items-center gap-2.5 px-2 py-1 mb-4 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FDF9EE] to-[#F5EACB] border border-[#DFC88A] flex items-center justify-center text-[#C29324] text-base font-bold shadow-2xs group-hover:scale-105 transition">
            ★
          </div>
          <span className="font-serif font-bold text-lg text-[#0F172A] tracking-tight">
            Rolly Academy
          </span>
        </Link>

        {/* Branch / Store Badge */}
        <div className="mb-6 px-3 py-2 bg-[#F6F8FA] border border-[#E9ECEF] rounded-xl flex items-center gap-2 text-[12px] text-[#475569] font-medium">
          <Store className="w-3.5 h-3.5 text-[#64748B] shrink-0" />
          <span className="truncate">The Landmark Dining Lounge</span>
        </div>

        {/* Nav Header */}
        <p className="px-3 text-[10px] font-bold tracking-[0.16em] uppercase text-[#94A3B8] mb-2">
          THANH ĐIỀU HƯỚNG
        </p>

        {/* Nav Items */}
        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname.startsWith(item.href) || (item.href === "/courses" && pathname === "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center justify-between px-3.5 py-2.5 rounded-xl text-[13.5px] font-medium transition",
                  isActive
                    ? "bg-[#FCF8EC] text-[#936806] font-semibold border border-[#EEDFB6]"
                    : "text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F172A]"
                )}
              >
                <div className="flex items-center gap-3">
                  <Icon className={cn("w-4 h-4", isActive ? "text-[#C29324]" : "text-[#64748B]")} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-[#EEDFB6] text-[#8C6005]">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Curriculum Level Card */}
      <div className="mt-6 p-4 rounded-2xl bg-[#FCFAF5] border border-[#EFE7D5] shadow-2xs">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-bold tracking-wider uppercase text-[#8C6005]">
            CURRICULUM LEVEL
          </span>
          <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-[#EEDFB6] text-[#8C6005]">
            Level 2
          </span>
        </div>
        <h4 className="font-bold text-[14px] text-[#0F172A] leading-tight">
          Sommelier Level 2
        </h4>
        <p className="text-[11.5px] text-[#64748B] mb-3">
          Advanced Specialist
        </p>
        <div className="w-full bg-[#E8E1CE] h-1.5 rounded-full overflow-hidden mb-1.5">
          <div className="bg-[#C69214] h-full rounded-full" style={{ width: "68%" }}></div>
        </div>
        <div className="flex items-center justify-between text-[11px] font-semibold text-[#64748B]">
          <span>Tiến độ</span>
          <span className="text-[#0F172A]">68%</span>
        </div>
      </div>
    </aside>
  );
}

