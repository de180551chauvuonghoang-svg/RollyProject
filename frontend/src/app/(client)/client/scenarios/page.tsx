"use client";

import React from "react";
import Link from "next/link";
import { Bot, Plus, Sliders, Sparkles, Shield, User, BarChart3, ChevronRight, Eye } from "lucide-react";
import { ClientHeader } from "@/components/layout/client/ClientHeader";
import { APP_ROUTES } from "@/constants/routes";

export function ClientScenariosPage() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <ClientHeader breadcrumb="Kịch bản Role-play AI" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
        <div>
          <h1 className="font-serif text-xl sm:text-2xl lg:text-[28px] font-bold text-[#0F172A] tracking-tight mb-1">
            Quản Lý Kịch Bản AI &amp; Voice Persona (16)
          </h1>
          <p className="text-[13px] sm:text-[13.5px] text-[#64748B]">
            Cấu hình tính cách khách hàng ảo (khách sành rượu, khách vội vàng, khách VIP khó tính) và thiết lập độ khó luyện tập.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <Link
            href={APP_ROUTES.CLIENT_SCENARIOS_DASHBOARD}
            className="min-h-[44px] px-3.5 py-2.5 bg-white border border-[#ECE5D8] hover:bg-slate-50 text-slate-700 font-semibold rounded-xl text-[13px] flex items-center gap-2 transition cursor-pointer"
          >
            <BarChart3 className="w-4 h-4 text-[#C69214]" />
            <span>Dashboard phân tích</span>
          </Link>
          <button
            type="button"
            onClick={() => alert("Tạo kịch bản AI mới từ SOP")}
            className="min-h-[44px] px-4 py-2.5 bg-[#C69214] hover:bg-[#B38210] active:scale-[0.99] text-white font-bold rounded-xl text-[13px] flex items-center gap-2 shadow-xs transition cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>+ Tạo kịch bản mới</span>
          </button>
        </div>
      </div>

      {/* Scenarios Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {/* Scenario 1 */}
        <div className="bg-white rounded-2xl p-5 border border-[#ECE5D8] shadow-xs flex flex-col justify-between hover:border-[#C69214] transition">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="px-2 py-0.5 rounded text-[10.5px] font-bold bg-amber-50 text-amber-800 border border-amber-200">
                Độ khó: VVIP Khắt khe
              </span>
              <span className="text-[11px] text-slate-400">8 - 10 phút</span>
            </div>
            <h3 className="font-serif font-bold text-[16px] text-[#0F172A] mb-1">
              Bàn VIP Dị ứng nấm &amp; Đổi món đột xuất
            </h3>
            <p className="text-[12px] text-[#C69214] font-medium mb-3">
              Nhân vật: Mr. Arthur Vance (Doanh nhân Anh Quốc)
            </p>
            <p className="text-[12.5px] text-slate-600 line-clamp-3 mb-4">
              Khách dùng tiệc Set Menu Tasting phát hiện món sốt Truffle dù đã lưu ý dị ứng. Yêu cầu đổi món ngay lập tức.
            </p>
          </div>
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            <span className="text-[11.5px] text-slate-500">24 lượt thực hành</span>
            <div className="flex items-center gap-2">
              <Link 
                href={APP_ROUTES.CLIENT_SCENARIO_DETAIL("2")}
                className="text-[12px] font-semibold text-slate-600 hover:text-[#0F172A] flex items-center gap-1 cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Xem</span>
              </Link>
              <Link 
                href={APP_ROUTES.CLIENT_SCENARIO_EDIT("2")}
                className="text-[12px] font-bold text-[#C69214] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Sửa Prompt</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Scenario 2 */}
        <div className="bg-white rounded-2xl p-5 border border-[#ECE5D8] shadow-xs flex flex-col justify-between hover:border-[#C69214] transition">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="px-2 py-0.5 rounded text-[10.5px] font-bold bg-purple-50 text-purple-800 border border-purple-200">
                Độ khó: Master Sommelier
              </span>
              <span className="text-[11px] text-slate-400">10 - 12 phút</span>
            </div>
            <h3 className="font-serif font-bold text-[16px] text-[#0F172A] mb-1">
              Khiếu nại Vang bị chua &amp; Nhiệt độ sai (TCA)
            </h3>
            <p className="text-[12px] text-[#C69214] font-medium mb-3">
              Nhân vật: Jean-Paul (Chuyên gia nếm rượu Pháp)
            </p>
            <p className="text-[12.5px] text-slate-600 line-clamp-3 mb-4">
              Khách nhận xét chai Burgundy 2015 bị oxy hóa và chua gắt. Yêu cầu kiểm tra quy trình phục vụ rượu vang chuẩn.
            </p>
          </div>
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            <span className="text-[11.5px] text-slate-500">382 lượt thực hành</span>
            <div className="flex items-center gap-2">
              <Link 
                href={APP_ROUTES.CLIENT_SCENARIO_DETAIL("1")}
                className="text-[12px] font-semibold text-slate-600 hover:text-[#0F172A] flex items-center gap-1 cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Xem</span>
              </Link>
              <Link 
                href={APP_ROUTES.CLIENT_SCENARIO_EDIT("1")}
                className="text-[12px] font-bold text-[#C69214] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Sửa Prompt</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Scenario 3 */}
        <div className="bg-white rounded-2xl p-5 border border-[#ECE5D8] shadow-xs flex flex-col justify-between hover:border-[#C69214] transition">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="px-2 py-0.5 rounded text-[10.5px] font-bold bg-blue-50 text-blue-800 border border-blue-200">
                Độ khó: Tiêu chuẩn 5 sao
              </span>
              <span className="text-[11px] text-slate-400">6 - 8 phút</span>
            </div>
            <h3 className="font-serif font-bold text-[16px] text-[#0F172A] mb-1">
              Tư vấn Pairing Vang Trắng Omakase Hải Sản
            </h3>
            <p className="text-[12px] text-[#C69214] font-medium mb-3">
              Nhân vật: Mr. Kenji (Thực khách Tokyo)
            </p>
            <p className="text-[12.5px] text-slate-600 line-clamp-3 mb-4">
              Khách yêu cầu gợi ý loại vang trắng có độ khoáng cân bằng hoàn hảo với hàu ghém Pháp và cá ngừ Otoro.
            </p>
          </div>
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            <span className="text-[11.5px] text-slate-500">290 lượt thực hành</span>
            <div className="flex items-center gap-2">
              <Link 
                href={APP_ROUTES.CLIENT_SCENARIO_DETAIL("3")}
                className="text-[12px] font-semibold text-slate-600 hover:text-[#0F172A] flex items-center gap-1 cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Xem</span>
              </Link>
              <Link 
                href={APP_ROUTES.CLIENT_SCENARIO_EDIT("3")}
                className="text-[12px] font-bold text-[#C69214] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Sửa Prompt</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientScenariosPage;
