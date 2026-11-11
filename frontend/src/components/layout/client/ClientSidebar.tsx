"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  Bot, 
  Settings2, 
  Store, 
  X, 
  ShieldCheck, 
  ChevronsUpDown, 
  LogOut, 
  Sparkles,
  SlidersHorizontal,
  UserCheck,
  ExternalLink,
  HardDrive
} from "lucide-react";
import { cn } from "@/lib/utils";
import { APP_ROUTES } from "@/constants/routes";
import { RollyLogo } from "@/components/common/RollyLogo";

interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const mainNavItems: NavItem[] = [
  { label: "Tổng quan", href: APP_ROUTES.CLIENT_DASHBOARD, icon: LayoutDashboard },
  { label: "Kho Tri thức", href: APP_ROUTES.CLIENT_SOP, icon: BookOpen },
  { label: "Kịch bản & Prompt AI", href: APP_ROUTES.CLIENT_SCENARIOS, icon: Bot },
  { label: "Quản lý Nhân sự", href: APP_ROUTES.CLIENT_EMPLOYEES, icon: Users },
  { label: "Cài đặt chung", href: APP_ROUTES.CLIENT_SETTINGS, icon: Settings2 },
];

const secondaryNavItems: NavItem[] = [
  { label: "Scenario Dashboard", href: "/client/scenarios-dashboard", icon: SlidersHorizontal },
  { label: "Đánh giá Năng lực 1-1", href: "/client/employees/EMP-01", icon: UserCheck },
];

interface ClientSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function ClientSidebar({ isOpen, onClose }: ClientSidebarProps) {
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

      {/* Sidebar Container: Fixed 100% viewport height, never leaves gaps when scrolling */}
      <aside 
        className={cn(
          "w-64 bg-white border-r border-[#ECE5D8] text-slate-800 flex flex-col justify-between p-4 shrink-0 transition-transform duration-300 z-40",
          "fixed inset-y-0 left-0 h-full overflow-y-auto md:relative md:h-full md:translate-x-0",
          isOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full md:translate-x-0"
        )}
      >
        {/* Top & Middle Sections */}
        <div className="space-y-4">
          {/* Header Row: Brand Logo (Unified with Employee Portal format) + Mobile Close Button */}
          <div className="flex items-center justify-between">
            <RollyLogo 
              href={APP_ROUTES.CLIENT_DASHBOARD} 
              size="md" 
              title="Rolly"
              suffix="For Client"
              subtitle="Client Portal" 
              verified={true}
            />

            {/* Mobile close button */}
            <button
              type="button"
              onClick={onClose}
              className="md:hidden p-2 text-slate-400 hover:text-slate-800 rounded-lg hover:bg-slate-100 transition min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
              aria-label="Đóng thanh điều hướng"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Branch Selector Card */}
          <div className="p-2.5 bg-[#F1F4FA] border border-[#E2E8F0] rounded-xl flex items-center justify-between text-xs text-slate-800 cursor-pointer hover:bg-[#E8EEF8] transition">
            <div className="flex items-center gap-2.5 min-w-0">
              <Store className="w-4 h-4 text-slate-600 shrink-0" />
              <div className="truncate">
                <div className="font-bold text-[#0F172A] leading-tight truncate">The Landmark</div>
                <div className="text-[11px] text-slate-500">Chi nhánh Q.1</div>
              </div>
            </div>
            <ChevronsUpDown className="w-4 h-4 text-slate-400 shrink-0 ml-1" />
          </div>

          {/* Main Navigation Section */}
          <div>
            <p className="px-3 text-[10.5px] font-bold tracking-[0.14em] uppercase text-slate-400 mb-1.5">
              PHÂN HỆ ĐÀO TẠO
            </p>
            <nav className="space-y-1">
              {mainNavItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href || (item.href !== APP_ROUTES.CLIENT_DASHBOARD && pathname?.startsWith(item.href));

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      "flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-[13px] font-medium transition cursor-pointer min-h-[42px]",
                      isActive
                        ? "bg-[#C69214] text-white font-bold shadow-xs"
                        : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                    )}
                  >
                    <Icon className={cn("w-4 h-4 shrink-0", isActive ? "text-white" : "text-slate-600")} />
                    <span className="truncate">{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Secondary Navigation Section (Fills empty void & quick shortcuts) */}
          <div className="pt-2 border-t border-slate-100">
            <p className="px-3 text-[10.5px] font-bold tracking-[0.14em] uppercase text-slate-400 mb-1.5">
              TIỆN ÍCH &amp; GIÁM SÁT
            </p>
            <nav className="space-y-1">
              {secondaryNavItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href || pathname?.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      "flex items-center gap-3 px-3.5 py-2 rounded-xl text-[12.5px] font-medium transition cursor-pointer min-h-[38px]",
                      isActive
                        ? "bg-[#FCF8EC] text-[#936806] font-semibold border border-[#EEDFB6]"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    )}
                  >
                    <Icon className={cn("w-3.5 h-3.5 shrink-0", isActive ? "text-[#C69214]" : "text-slate-500")} />
                    <span className="truncate">{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Bottom Section: Storage Card + Portal Switch + Profile */}
        <div className="space-y-3 pt-4 border-t border-[#ECE5D8] mt-4">
          {/* Storage Status Card (From Figma SCR-CLI-01) */}
          <div className="p-3 bg-[#F1F4FA] border border-[#E2E8F0] rounded-xl text-xs space-y-1.5">
            <div className="flex items-center justify-between text-[11px] font-semibold text-slate-700">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
                <HardDrive className="w-3.5 h-3.5 text-slate-500 inline" />
                <span>Storage</span>
              </span>
              <span className="text-slate-500 font-mono text-[10.5px]">Sync 100%</span>
            </div>
            <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#C69214] h-full rounded-full transition-all" style={{ width: "18%" }} />
            </div>
            <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono">
              <span>1.8GB / 10GB</span>
              <span className="text-slate-400">RAG Vector</span>
            </div>
          </div>

          {/* Quick Switch to Employee Portal */}
          <Link
            href="/courses"
            className="w-full py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11.5px] font-medium flex items-center justify-between transition min-h-[38px]"
          >
            <span>Employee Portal (Học viên)</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
          </Link>

          {/* User Profile Card: Jean-Luc Dupont (F&B Director) */}
          <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-full bg-[#78350F] text-[#FEFCF7] font-bold text-xs flex items-center justify-center shrink-0">
                JD
              </div>
              <div className="truncate">
                <div className="font-bold text-xs text-[#0F172A] truncate">Jean-Luc Dupont</div>
                <div className="text-[10.5px] text-slate-500 truncate">F&amp;B Director</div>
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
