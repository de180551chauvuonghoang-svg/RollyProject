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
  ExternalLink,
  Award,
  Sparkles,
  HelpCircle,
  LogOut
} from "lucide-react";
import { cn } from "@/lib/utils";
import { APP_ROUTES } from "@/constants/routes";
import { RollyLogo } from "@/components/common/RollyLogo";

interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string | number;
}

const mainNavItems: NavItem[] = [
  { label: "Tổng quan", href: "/dashboard", icon: LayoutDashboard },
  { label: "Học tập & Tài liệu", href: "/courses", icon: BookOpen },
  { label: "Kịch bản Role-play", href: "/roleplay", icon: Bot, badge: 12 },
  { label: "Lịch sử & Đánh giá", href: "/history", icon: History },
  { label: "Hồ sơ cá nhân", href: "/profile", icon: UserCircle },
  { label: "Cài đặt tài khoản", href: "/settings", icon: Settings },
];

const resourceNavItems: NavItem[] = [
  { label: "Chuẩn Michelin 5 Sao", href: "/courses", icon: Sparkles },
  { label: "Trợ giúp & Hướng dẫn", href: "/settings", icon: HelpCircle },
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

      {/* Sidebar Container: Fixed 100% viewport height, never scrolls away or leaves empty white gap */}
      <aside 
        className={cn(
          "w-64 bg-white border-r border-[#EFEBE3] flex flex-col justify-between p-4 shrink-0 transition-transform duration-300 z-40",
          "fixed inset-y-0 left-0 h-full overflow-y-auto md:relative md:h-full md:translate-x-0",
          isOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full md:translate-x-0"
        )}
      >
        {/* Top & Middle Sections */}
        <div className="space-y-4">
          {/* Header Row: Brand Logo + Mobile Close Button */}
          <div className="flex items-center justify-between">
            <RollyLogo href="/courses" size="md" subtitle="Employee Portal" />

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
          <div className="px-3 py-2 bg-[#F6F8FA] border border-[#E9ECEF] rounded-xl flex items-center gap-2 text-[12px] text-[#475569] font-medium">
            <Store className="w-3.5 h-3.5 text-[#64748B] shrink-0" />
            <span className="truncate">The Landmark Dining Lounge</span>
          </div>

          {/* Main Navigation */}
          <div>
            <p className="px-3 text-[10px] font-bold tracking-[0.16em] uppercase text-[#94A3B8] mb-1.5">
              THANH ĐIỀU HƯỚNG
            </p>
            <nav className="space-y-1">
              {mainNavItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname.startsWith(item.href) || (item.href === "/courses" && pathname === "/");
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      "flex items-center justify-between px-3.5 py-2.5 rounded-xl text-[13px] font-medium transition min-h-[42px]",
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
                      <span className="px-2 py-0.5 rounded-full text-[10.5px] font-bold bg-[#EEDFB6] text-[#8C6005]">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Secondary Section (Eliminates awkward blank void) */}
          <div className="pt-2 border-t border-[#F1EFEA]">
            <p className="px-3 text-[10px] font-bold tracking-[0.16em] uppercase text-[#94A3B8] mb-1.5">
              TIÊU CHUẨN &amp; TÀI NGUYÊN
            </p>
            <nav className="space-y-1">
              {resourceNavItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center gap-3 px-3.5 py-2 rounded-xl text-[12.5px] font-medium text-[#64748B] hover:bg-[#F8FAFC] hover:text-[#0F172A] transition min-h-[38px]"
                  >
                    <Icon className="w-3.5 h-3.5 text-[#94A3B8] shrink-0" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Bottom Section: Curriculum Level + Switch to Client Portal shortcut */}
        <div className="space-y-3 pt-4 border-t border-[#EFEBE3] mt-4">
          {/* Curriculum Level Card (From Figma SCR-EMP-02B) */}
          <div className="p-3.5 rounded-2xl bg-[#FCFAF5] border border-[#EFE7D5] shadow-2xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold tracking-wider uppercase text-[#8C6005] flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#C69214]" />
                CURRICULUM LEVEL
              </span>
              <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-[#EEDFB6] text-[#8C6005]">
                Level 2
              </span>
            </div>
            <h4 className="font-bold text-[13.5px] text-[#0F172A] leading-tight">
              Sommelier Level 2
            </h4>
            <p className="text-[11px] text-[#64748B] mb-2.5">
              Advanced Specialist
            </p>
            <div className="w-full bg-[#E8E1CE] h-1.5 rounded-full overflow-hidden mb-1.5">
              <div className="bg-[#C69214] h-full rounded-full transition-all" style={{ width: "68%" }} />
            </div>
            <div className="flex items-center justify-between text-[10.5px] font-semibold text-[#64748B]">
              <span>Tiến độ</span>
              <span className="text-[#0F172A] font-bold">68%</span>
            </div>
          </div>

          {/* Quick link to Client Portal */}
          <Link
            href={APP_ROUTES.CLIENT_DASHBOARD}
            className="w-full py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11.5px] font-medium flex items-center justify-between transition min-h-[38px]"
          >
            <span>Client Portal (Quản lý)</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
          </Link>

          {/* User Profile Card & Logout: Nguyễn Hoàng Long (Head Sommelier Resident) */}
          <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1E293B] to-[#0F172A] text-amber-200 font-bold text-xs flex items-center justify-center shrink-0 ring-1 ring-[#C69214]/50 shadow-xs">
                NL
              </div>
              <div className="truncate">
                <div className="font-bold text-xs text-[#0F172A] truncate">Nguyễn Hoàng Long</div>
                <div className="text-[10.5px] text-[#A67C1E] font-medium truncate">Head Sommelier Resident</div>
              </div>
            </div>

            <Link
              href={APP_ROUTES.LOGIN}
              className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg transition"
              title="Đăng xuất"
            >
              <LogOut className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
