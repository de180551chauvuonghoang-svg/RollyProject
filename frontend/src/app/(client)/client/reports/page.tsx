"use client";

import React from "react";
import { BarChart3, TrendingUp, Download, Calendar, Award } from "lucide-react";
import { ClientHeader } from "@/components/layout/client/ClientHeader";

export function ClientReportsPage() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <ClientHeader breadcrumb="Báo cáo & Phân tích" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
        <div>
          <h1 className="font-serif text-xl sm:text-2xl lg:text-[28px] font-bold text-[#0F172A] tracking-tight mb-1">
            Báo Cáo Phân Tích Hiệu Suất Đào Tạo
          </h1>
          <p className="text-[13px] sm:text-[13.5px] text-[#64748B]">
            Đo lường thời gian phản xạ giao tiếp, chỉ số tuân thủ SOP và sự tiến bộ của đội ngũ theo từng ca làm việc.
          </p>
        </div>

        <button
          type="button"
          onClick={() => alert("Xuất dữ liệu báo cáo PDF/Excel")}
          className="min-h-[44px] px-4 py-2.5 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl text-[13px] font-semibold text-slate-800 flex items-center gap-2 shadow-2xs transition self-start sm:self-auto cursor-pointer"
        >
          <Download className="w-4 h-4 text-slate-500" />
          <span>Tải báo cáo tháng 10/2026</span>
        </button>
      </div>

      {/* Analytics Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-[#ECE5D8] shadow-xs">
          <span className="text-[10.5px] font-bold tracking-wider text-slate-400 uppercase">
            THỜI GIAN PHẢN XẠ TRUNG BÌNH
          </span>
          <div className="text-3xl font-bold text-[#0F172A] mt-1">2.4 giây</div>
          <p className="text-[12px] text-emerald-600 font-medium mt-1">
            Đạt chuẩn phản xạ Michelin (&lt; 3.0 giây)
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-[#ECE5D8] shadow-xs">
          <span className="text-[10.5px] font-bold tracking-wider text-slate-400 uppercase">
            TỶ LỆ UPSELL THÀNH CÔNG
          </span>
          <div className="text-3xl font-bold text-[#0F172A] mt-1">+26.4%</div>
          <p className="text-[12px] text-emerald-600 font-medium mt-1">
            Nhờ kỹ năng kết hợp rượu vang &amp; tráng miệng
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-[#ECE5D8] shadow-xs">
          <span className="text-[10.5px] font-bold tracking-wider text-slate-400 uppercase">
            CHỈ SỐ HÀI LÒNG KHÁCH HÀNG VIP
          </span>
          <div className="text-3xl font-bold text-[#0F172A] mt-1">4.92 / 5.0</div>
          <p className="text-[12px] text-emerald-600 font-medium mt-1">
            Dựa trên khảo sát thực tế tại bàn ăn
          </p>
        </div>
      </div>
    </div>
  );
}

export default ClientReportsPage;

