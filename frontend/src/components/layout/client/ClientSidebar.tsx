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
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";
import { APP_ROUTES } from "@/constants/routes";

interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const clientNavItems: NavItem[] = [
  { label: "Tổng quan", href: APP_ROUTES.CLIENT_DASHBOARD, icon: LayoutDashboard },
  { label: "Kho Tri thức", href: APP_ROUTES.CLIENT_SOP, icon: BookOpen },
  { label: "Kịch bản & Prompt AI", href: APP_ROUTES.CLIENT_SCENARIOS, icon: Bot },
  { label: "Quản lý Nhân sự", href: APP_ROUTES.CLIENT_EMPLOYEES, icon: Users },
  { label: "Cài đặt chung", href: APP_ROUTES.CLIENT_SETTINGS, icon: Settings2 },
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

      {/* Sidebar Container - Figma White / Cream Light Theme */}
      <aside 
        className={cn(
          "w-64 bg-white border-r border-[#ECE5D8] text-slate-800 flex flex-col justify-between p-4 shrink-0 transition-transform duration-300 z-50",
          "fixed inset-y-0 left-0 h-full overflow-y-auto md:static md:translate-x-0 md:min-h-screen",
          isOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full md:translate-x-0"
        )}
      >
        {/* Top Section */}
        <div>
          {/* Brand Header: Star Logo + Rolly For Client + Verified Badge */}
          <div className="flex items-center justify-between mb-4 px-1">
            <Link 
              href={APP_ROUTES.CLIENT_DASHBOARD}
              className="flex items-center gap-2.5 group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-[#C69214] bg-[#FEFCF7] shadow-xs">
                <Sparkles className="w-4 h-4 fill-[#C69214]" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-lg font-bold text-[#0F172A] tracking-tight">
                  Rolly For Client
                </span>
                <ShieldCheck className="w-4 h-4 text-[#C69214]" />
              </div>
            </Link>

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
          <div className="mb-6 p-2.5 bg-[#F1F4FA] border border-[#E2E8F0] rounded-xl flex items-center justify-between text-xs text-slate-800 cursor-pointer hover:bg-[#E8EEF8] transition">
            <div className="flex items-center gap-2.5 min-w-0">
              <Store className="w-4 h-4 text-slate-600 shrink-0" />
              <div className="truncate">
                <div className="font-bold text-[#0F172A] leading-tight truncate">The Landmark</div>
                <div className="text-[11px] text-slate-500">Chi nhánh Q.1</div>
              </div>
            </div>
            <ChevronsUpDown className="w-4 h-4 text-slate-400 shrink-0 ml-1" />
          </div>

          {/* Nav Header */}
          <p className="px-3 text-[11px] font-bold tracking-[0.14em] uppercase text-slate-400 mb-2">
            PHÂN HỆ ĐÀO TẠO
          </p>

          {/* Nav Items */}
          <nav className="space-y-1.5">
            {clientNavItems.map((item) => {
              const Icon = item.icon;
              // Check active status
              const isActive = pathname === item.href || (item.href !== APP_ROUTES.CLIENT_DASHBOARD && pathname?.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    "flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-[13.5px] font-medium transition cursor-pointer min-h-[44px]",
                    isActive
                      ? "bg-[#D4AF37] text-white font-bold shadow-xs"
                      : "text-slate-700 hover:bg-slate-100/80 hover:text-slate-900"
                  )}
                >
                  <Icon className={cn("w-4 h-4 shrink-0", isActive ? "text-white" : "text-slate-600")} />
                  <span className="truncate">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Profile Section: Jean-Luc Dupont (F&B Director) */}
        <div className="pt-4 border-t border-[#ECE5D8] mt-6">
          <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-full bg-[#78350F] text-[#FEFCF7] font-bold text-xs flex items-center justify-center shrink-0">
                JD
              </div>
              <div className="truncate">
                <div className="font-bold text-xs text-[#0F172A] truncate">Jean-Luc Dupont</div>
                <div className="text-[10.5px] text-slate-500 truncate">F&B Director</div>
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
