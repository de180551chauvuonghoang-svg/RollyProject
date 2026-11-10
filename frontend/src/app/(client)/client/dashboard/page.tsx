"use client";

import React from "react";
import Link from "next/link";
import { 
  Users, 
  FileText, 
  Bot, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle2, 
  ArrowUpRight,
  Shield,
  Download,
  Filter,
  BarChart3
} from "lucide-react";
import { ClientHeader } from "@/components/layout/client/ClientHeader";
import { APP_ROUTES } from "@/constants/routes";

export function ClientDashboardPage() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <ClientHeader breadcrumb="Tổng quan chi nhánh" />

      {/* 1. Header & Quick Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
        <div>
          <h1 className="font-serif text-xl sm:text-2xl lg:text-[28px] font-bold text-[#0F172A] tracking-tight mb-1">
            Bảng điều hành Chi nhánh (Client Portal)
          </h1>
          <p className="text-[13px] sm:text-[13.5px] text-[#64748B] leading-relaxed">
            Giám sát chất lượng dịch vụ, tỷ lệ tuân thủ tiêu chuẩn SOP và tiến độ rèn luyện AI của toàn bộ đội ngũ nhân sự.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
          <button
            type="button"
            onClick={() => alert("Xuất báo cáo định dạng PDF/Excel")}
            className="min-h-[42px] px-3.5 py-2 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl text-[12.5px] font-semibold text-slate-700 flex items-center gap-2 shadow-2xs transition cursor-pointer"
          >
            <Download className="w-4 h-4 text-slate-500" />
            <span>Xuất báo cáo</span>
          </button>
          <Link
            href={APP_ROUTES.CLIENT_SOP}
            className="min-h-[42px] px-4 py-2 bg-[#C69214] hover:bg-[#B38210] active:scale-[0.99] text-white font-bold rounded-xl text-[12.5px] flex items-center gap-1.5 shadow-sm transition"
          >
            <span>+ Tải lên SOP mới</span>
          </Link>
        </div>
      </div>

      {/* 2. 4 Key Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#ECE5D8] shadow-2xs flex items-center justify-between">
          <div>
            <span className="text-[10px] sm:text-[10.5px] font-bold tracking-wider uppercase text-slate-400">
              NHÂN SỰ ĐANG ĐÀO TẠO
            </span>
            <div className="text-2xl sm:text-[28px] font-serif font-bold text-[#0F172A] mt-1">
              24 <span className="text-sm font-sans font-medium text-slate-400">thành viên</span>
            </div>
            <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 mt-1">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>100% tài khoản kích hoạt</span>
            </div>
          </div>
          <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
            <Users className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#ECE5D8] shadow-2xs flex items-center justify-between">
          <div>
            <span className="text-[10px] sm:text-[10.5px] font-bold tracking-wider uppercase text-slate-400">
              TỶ LỆ TUÂN THỦ SOP
            </span>
            <div className="text-2xl sm:text-[28px] font-serif font-bold text-[#0F172A] mt-1">
              94.6%
            </div>
            <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 mt-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>+3.8% so với tháng trước</span>
            </div>
          </div>
          <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
            <Shield className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#ECE5D8] shadow-2xs flex items-center justify-between">
          <div>
            <span className="text-[10px] sm:text-[10.5px] font-bold tracking-wider uppercase text-slate-400">
              TỔNG GIỜ LUYỆN TẬP AI
            </span>
            <div className="text-2xl sm:text-[28px] font-serif font-bold text-[#0F172A] mt-1">
              186.4 <span className="text-sm font-sans font-medium text-slate-400">giờ</span>
            </div>
            <div className="text-[11px] text-slate-500 mt-1">
              Trung bình 7.7h / nhân viên
            </div>
          </div>
          <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-[#C69214] shrink-0">
            <Bot className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#ECE5D8] shadow-2xs flex items-center justify-between">
          <div>
            <span className="text-[10px] sm:text-[10.5px] font-bold tracking-wider uppercase text-slate-400">
              KHO SOP HIỆN HÀNH
            </span>
            <div className="text-2xl sm:text-[28px] font-serif font-bold text-[#0F172A] mt-1">
              18 <span className="text-sm font-sans font-medium text-slate-400">quy chuẩn</span>
            </div>
            <div className="text-[11px] text-slate-500 mt-1">
              4 quy trình Fine Dining mới
            </div>
          </div>
          <div className="w-11 h-11 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 shrink-0">
            <FileText className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* 3. Main Dashboard Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Left 2 Cols: Leaderboard & Nhân sự xuất sắc */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-4 sm:p-6 border border-[#ECE5D8] shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-serif font-bold text-lg text-[#0F172A]">
                Bảng Xếp Hạng Năng Lực Nhân Sự
              </h3>
              <p className="text-[12.5px] text-slate-500">
                Top nhân sự hoàn thành xuất sắc các bài kiểm tra thực cảnh AI tuần này.
              </p>
            </div>
            <Link
              href={APP_ROUTES.CLIENT_EMPLOYEES}
              className="text-[12.5px] font-semibold text-[#C69214] hover:underline flex items-center gap-1"
            >
              <span>Xem tất cả 24 nhân sự</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-[13px]">
              <thead>
                <tr className="border-b border-slate-100 text-[10.5px] font-bold tracking-wider uppercase text-slate-400">
                  <th className="py-2.5 px-3">Học viên</th>
                  <th className="py-2.5 px-3">Vị trí</th>
                  <th className="py-2.5 px-3 text-center">Tiến độ</th>
                  <th className="py-2.5 px-3 text-center">Điểm TB</th>
                  <th className="py-2.5 px-3 text-right">Trạng thái</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition">
                  <td className="py-3 px-3 font-semibold text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-amber-100 text-[#8C6005] font-bold text-[11px] flex items-center justify-center">1</span>
                    <span>Nguyễn Hoàng Long</span>
                  </td>
                  <td className="py-3 px-3 text-slate-600">Head Sommelier</td>
                  <td className="py-3 px-3 text-center font-medium">78%</td>
                  <td className="py-3 px-3 text-center font-bold text-slate-900">84.2/100</td>
                  <td className="py-3 px-3 text-right">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Xuất sắc
                    </span>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50 transition">
                  <td className="py-3 px-3 font-semibold text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 font-bold text-[11px] flex items-center justify-center">2</span>
                    <span>Trần Mai Anh</span>
                  </td>
                  <td className="py-3 px-3 text-slate-600">Captain (Trưởng ca)</td>
                  <td className="py-3 px-3 text-center font-medium">85%</td>
                  <td className="py-3 px-3 text-center font-bold text-slate-900">82.0/100</td>
                  <td className="py-3 px-3 text-right">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Đạt chuẩn
                    </span>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50 transition">
                  <td className="py-3 px-3 font-semibold text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 font-bold text-[11px] flex items-center justify-center">3</span>
                    <span>Lê Quốc Bảo</span>
                  </td>
                  <td className="py-3 px-3 text-slate-600">Bartender Specialist</td>
                  <td className="py-3 px-3 text-center font-medium">62%</td>
                  <td className="py-3 px-3 text-center font-bold text-slate-900">76.5/100</td>
                  <td className="py-3 px-3 text-right">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
                      Đang luyện tập
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Col: Cảnh báo sự cố SOP & Quick Actions */}
        <div className="space-y-4">
          <div className="bg-[#FFFDF7] rounded-2xl p-4 sm:p-5 border border-[#F3E3B8] shadow-xs">
            <div className="flex items-center gap-2 text-[#C69214] font-bold text-[14px] mb-2">
              <AlertCircle className="w-4 h-4" />
              <span>Điểm cần củng cố tuần này</span>
            </div>
            <p className="text-[12.5px] text-slate-600 leading-relaxed mb-3">
              Kịch bản <strong>SOP-FNB-07: Xử lý dị ứng nấm</strong> ghi nhận tỷ lệ phản xạ trễ &gt; 3 giây ở 4 học viên mới. Nên tổ chức phiên role-play nhóm để ôn luyện.
            </p>
            <Link
              href={APP_ROUTES.CLIENT_SCENARIOS}
              className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-[#8C6005] hover:underline"
            >
              <span>Xem cấu hình kịch bản này</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-2xs">
            <h4 className="font-bold text-[14px] text-slate-900 mb-2">
              Lối tắt tác vụ Quản lý
            </h4>
            <div className="space-y-2">
              <Link
                href={APP_ROUTES.CLIENT_EMPLOYEES}
                className="w-full p-2.5 rounded-xl border border-slate-200 hover:border-[#C69214] hover:bg-[#FAF8F5] transition flex items-center justify-between text-[13px] text-slate-700"
              >
                <span>Thêm nhân sự mới vào hệ thống</span>
                <Users className="w-4 h-4 text-slate-400" />
              </Link>
              <Link
                href={APP_ROUTES.CLIENT_SOP}
                className="w-full p-2.5 rounded-xl border border-slate-200 hover:border-[#C69214] hover:bg-[#FAF8F5] transition flex items-center justify-between text-[13px] text-slate-700"
              >
                <span>Cập nhật Menu Tasting &amp; Wine List</span>
                <FileText className="w-4 h-4 text-slate-400" />
              </Link>
              <Link
                href={APP_ROUTES.CLIENT_REPORTS}
                className="w-full p-2.5 rounded-xl border border-slate-200 hover:border-[#C69214] hover:bg-[#FAF8F5] transition flex items-center justify-between text-[13px] text-slate-700"
              >
                <span>Phân tích dữ liệu giọng nói AI Voice</span>
                <BarChart3 className="w-4 h-4 text-slate-400" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientDashboardPage;
