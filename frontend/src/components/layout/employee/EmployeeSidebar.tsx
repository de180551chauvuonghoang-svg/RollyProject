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
  Store,
  X,
  ExternalLink
} from "lucide-react";
import { cn } from "@/lib/utils";
import { APP_ROUTES } from "@/constants/routes";

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

interface EmployeeSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function EmployeeSidebar({ isOpen, onClose }: EmployeeSidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          onClick={onClose}
          className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40 md:hidden transition-opacity"
          aria-hidden="true"
        />
      )}

      {/* Sidebar Container */}
      <aside 
        className={cn(
          "w-64 bg-white border-r border-[#EFEBE3] flex flex-col justify-between p-4 shrink-0 transition-transform duration-300 z-50",
          "fixed inset-y-0 left-0 h-full overflow-y-auto md:static md:translate-x-0 md:min-h-screen",
          isOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full md:translate-x-0"
        )}
      >
        {/* Top Section */}
        <div>
          {/* Header Row: Brand Logo + Mobile Close Button */}
          <div className="flex items-center justify-between mb-4">
            <Link 
              href="/courses" 
              onClick={onClose}
              className="flex items-center gap-2.5 px-2 py-1 group"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FDF9EE] to-[#F5EACB] border border-[#DFC88A] flex items-center justify-center text-[#C29324] text-base font-bold shadow-2xs group-hover:scale-105 transition">
                ★
              </div>
              <div>
                <span className="font-serif font-bold text-lg text-[#0F172A] tracking-tight block leading-tight">
                  Rolly Academy
                </span>
                <span className="text-[10px] text-[#A67C1E] font-bold tracking-wider uppercase">
                  Employee Portal
                </span>
              </div>
            </Link>

            {/* Mobile close button */}
            <button
              type="button"
              onClick={onClose}
              className="md:hidden p-2 text-[#64748B] hover:text-[#0F172A] rounded-lg hover:bg-slate-100 transition min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
              aria-label="Đóng thanh điều hướng"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Branch / Store Badge */}
          <div className="mb-5 px-3 py-2 bg-[#F6F8FA] border border-[#E9ECEF] rounded-xl flex items-center gap-2 text-[12px] text-[#475569] font-medium">
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
                  onClick={onClose}
                  className={cn(
                    "flex items-center justify-between px-3.5 py-2.5 rounded-xl text-[13.5px] font-medium transition min-h-[44px]",
                    isActive
                      ? "bg-[#FCF8EC] text-[#936806] font-semibold border border-[#EEDFB6]"
                      : "text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F172A]"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={cn("w-4 h-4 shrink-0", isActive ? "text-[#C29324]" : "text-[#64748B]")} />
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

        {/* Bottom Section: Curriculum Level + Switch to Client Portal shortcut */}
        <div className="space-y-3 mt-6">
          <div className="p-4 rounded-2xl bg-[#FCFAF5] border border-[#EFE7D5] shadow-2xs">
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

          {/* Quick link to Client Portal */}
          <Link
            href={APP_ROUTES.CLIENT_DASHBOARD}
            className="w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-[12px] font-semibold flex items-center justify-between transition min-h-[42px]"
          >
            <span>Client Portal (Quản lý)</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </Link>
        </div>
      </aside>
    </>
  );
}

