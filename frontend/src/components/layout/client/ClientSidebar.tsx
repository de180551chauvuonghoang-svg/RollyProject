"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Bot, 
  BarChart3, 
  Settings, 
  Store,
  X,
  ShieldCheck,
  ChevronRight,
  ExternalLink
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

const clientNavItems: NavItem[] = [
  { label: "Tổng quan chi nhánh", href: APP_ROUTES.CLIENT_DASHBOARD, icon: LayoutDashboard },
  { label: "Quản lý nhân sự", href: APP_ROUTES.CLIENT_EMPLOYEES, icon: Users, badge: 24 },
  { label: "Kho SOP nhà hàng", href: APP_ROUTES.CLIENT_SOP, icon: FileText, badge: 18 },
  { label: "Kịch bản Role-play AI", href: APP_ROUTES.CLIENT_SCENARIOS, icon: Bot, badge: 16 },
  { label: "Báo cáo & Phân tích", href: APP_ROUTES.CLIENT_REPORTS, icon: BarChart3 },
  { label: "Cài đặt & Phân quyền", href: APP_ROUTES.CLIENT_SETTINGS, icon: Settings },
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

      {/* Sidebar Container */}
      <aside 
        className={cn(
          "w-64 bg-[#0F172A] border-r border-slate-800 text-slate-300 flex flex-col justify-between p-4 shrink-0 transition-transform duration-300 z-50",
          "fixed inset-y-0 left-0 h-full overflow-y-auto md:static md:translate-x-0 md:min-h-screen",
          isOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full md:translate-x-0"
        )}
      >
        {/* Top Section */}
        <div>
          {/* Header Row: Brand Logo + Mobile Close Button */}
          <div className="flex items-center justify-between mb-4">
            <RollyLogo href={APP_ROUTES.CLIENT_DASHBOARD} theme="dark" size="md" subtitle="Client Portal" />

            {/* Mobile close button */}
            <button
              type="button"
              onClick={onClose}
              className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
              aria-label="Đóng thanh điều hướng"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Branch / Multi-unit Selector */}
          <div className="mb-5 p-2.5 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-between text-[12px] text-slate-300 font-medium">
            <div className="flex items-center gap-2 truncate">
              <Store className="w-3.5 h-3.5 text-[#C69214] shrink-0" />
              <span className="truncate">The Landmark Dining</span>
            </div>
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
              Live
            </span>
          </div>

          {/* Nav Header */}
          <p className="px-3 text-[10px] font-bold tracking-[0.16em] uppercase text-slate-400 mb-2">
            QUẢN TRỊ DOANH NGHIỆP
          </p>

          {/* Nav Items */}
          <nav className="space-y-1">
            {clientNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    "flex items-center justify-between px-3.5 py-2.5 rounded-xl text-[13.5px] font-medium transition min-h-[44px]",
                    isActive
                      ? "bg-gradient-to-r from-[#C69214]/20 to-transparent text-[#F1C40F] font-semibold border-l-2 border-[#C69214]"
                      : "text-slate-400 hover:bg-slate-850 hover:text-white"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={cn("w-4 h-4 shrink-0", isActive ? "text-[#C69214]" : "text-slate-400")} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="px-2 py-0.5 rounded-full text-[10.5px] font-bold bg-slate-800 text-slate-300 border border-slate-700">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Section: Security Badge & Switch to Employee Portal */}
        <div className="space-y-3 mt-6">
          <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xs">
            <div className="flex items-center gap-2 text-slate-200 font-semibold text-[12px] mb-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Multi-Tenant RLS</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-snug">
              Dữ liệu SOP và nhân sự được cách ly an toàn theo mã chi nhánh.
            </p>
          </div>

          {/* Switch to Employee Portal */}
          <Link
            href={APP_ROUTES.EMPLOYEE_COURSES}
            className="w-full py-2.5 px-3 rounded-xl bg-[#C69214] hover:bg-[#B38210] text-slate-950 font-bold text-[12px] flex items-center justify-between transition min-h-[42px] shadow-sm"
          >
            <span>Vào Portal Học viên</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </aside>
    </>
  );
}

