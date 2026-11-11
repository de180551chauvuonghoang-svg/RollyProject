"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Users, 
  ShieldCheck, 
  Hourglass, 
  Calendar, 
  Cpu, 
  AlertTriangle, 
  Zap, 
  Search, 
  SlidersHorizontal, 
  Video, 
  Database, 
  Mic, 
  FileText,
  ChevronRight,
  TrendingUp
} from "lucide-react";
import { ClientHeader } from "@/components/layout/client/ClientHeader";
import { APP_ROUTES } from "@/constants/routes";

export default function ClientDashboardPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const logRows = [
    {
      id: "1",
      initials: "LT",
      initialsBg: "bg-[#EFE8D8] text-[#8C6005]",
      name: "Lê Bảo Trâm",
      role: "Junior Sommelier • Bàn VIP",
      scenarioCode: "RP-04",
      scenarioTitle: "Xử lý Vang chua & Đổi chai",
      score: 85,
      scoreColor: "text-[#0F172A]",
      resultBadge: "Đạt chuẩn",
      resultBadgeStyle: "bg-slate-100 text-slate-700 border border-slate-200",
      managerComment: '"Thao tác ngửi nút bần và xin lỗi khách rất đúng chuẩn."',
      link: APP_ROUTES.CLIENT_EMPLOYEE_DETAIL("1")
    },
    {
      id: "2",
      initials: "NQ",
      initialsBg: "bg-[#C69214] text-white",
      name: "Nguyễn Minh Quân",
      role: "Head Butler • Khu Saloon",
      scenarioCode: "RP-01",
      scenarioTitle: "Đón tiếp VVIP & Nhận diện danh xưng",
      score: 92,
      scoreColor: "text-[#0F172A]",
      resultBadge: "Xuất sắc",
      resultBadgeStyle: "bg-[#C69214] text-white font-bold",
      managerComment: '"Tác phong chuẩn mực, ghi nhớ chuẩn xác tên Host."',
      link: APP_ROUTES.CLIENT_EMPLOYEE_DETAIL("2")
    },
    {
      id: "3",
      initials: "YN",
      initialsBg: "bg-[#FFE4E6] text-[#E11D48]",
      name: "Hoàng Yến Nhi",
      role: "Commis de Rang • Mới tuyển dụng",
      scenarioCode: "RP-02",
      scenarioTitle: "Truy vấn Dị ứng Thực khách & Ghi phiếu",
      score: 68,
      scoreColor: "text-[#E11D48]",
      resultBadge: "Cần luyện lại",
      resultBadgeStyle: "bg-rose-50 text-rose-700 border border-rose-200 font-bold",
      managerComment: '"Chưa đọc đúng thành phần đậu phộng trong sốt kem."',
      link: APP_ROUTES.CLIENT_EMPLOYEE_DETAIL("3")
    }
  ];

  return (
    <div className="space-y-6">
      <ClientHeader breadcrumb="Tổng quan" />

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C69214]" />
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#0F172A] tracking-tight">
              Dashboard Quản Trị
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-[#64748B] max-w-3xl leading-relaxed">
            Theo dõi sát sao hiệu chuẩn kỹ năng dịch vụ bàn, tỷ lệ lỗi xử lý rượu vang và tiến trình chuyển đổi năng lực phục vụ chuẩn của đội ngũ nhân sự.
          </p>
        </div>

        {/* Date Filter Button */}
        <button
          type="button"
          onClick={() => alert("Chọn chu kỳ báo cáo")}
          className="min-h-[42px] px-4 py-2 bg-white border border-[#E2E8F0] hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-semibold rounded-xl flex items-center gap-2 shadow-2xs transition self-start md:self-auto cursor-pointer"
        >
          <Calendar className="w-4 h-4 text-slate-500" />
          <span>Tháng 10/2024</span>
        </button>
      </div>

      {/* Top 3 Metric Cards (Figma SCR-CLI-04) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
        {/* Card 1: Tổng nhân sự hoạt động */}
        <div className="bg-white border border-[#ECE5D8] rounded-2xl p-5 sm:p-6 shadow-2xs flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">
              TỔNG NHÂN SỰ HOẠT ĐỘNG
            </span>
            <div className="w-9 h-9 rounded-xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-4">
            <div className="font-serif text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
              148 <span className="text-sm font-sans font-normal text-slate-500">nhân viên</span>
            </div>
            <div className="text-xs text-emerald-700 font-semibold mt-2 flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>+12.0% so với tháng trước</span>
            </div>
          </div>
        </div>

        {/* Card 2: Tỷ lệ vượt chuẩn SOP */}
        <div className="bg-white border border-[#ECE5D8] rounded-2xl p-5 sm:p-6 shadow-2xs flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">
              TỶ LỆ VƯỢT CHUẨN SOP
            </span>
            <div className="w-9 h-9 rounded-xl bg-[#FEF9C3] text-[#A16207] flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-4">
            <div className="font-serif text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
              84.6%
            </div>
            <div className="text-xs text-emerald-700 font-semibold mt-2 flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>+5.2% sau Role-play AI</span>
            </div>
          </div>
        </div>

        {/* Card 3: Phiên thực hành */}
        <div className="bg-white border border-[#ECE5D8] rounded-2xl p-5 sm:p-6 shadow-2xs flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">
              PHIÊN THỰC HÀNH
            </span>
            <div className="w-9 h-9 rounded-xl bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center">
              <Hourglass className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-4">
            <div className="font-serif text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
              1,420 <span className="text-sm font-sans font-normal text-slate-500">phiên</span>
            </div>
            <div className="text-xs text-slate-500 mt-2">
              Ghi nhận qua Voice AI Stream
            </div>
          </div>
        </div>
      </div>

      {/* Middle 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
        {/* Left Card: Tình trạng Hạ tầng & Hạn mức */}
        <div className="bg-white border border-[#ECE5D8] rounded-2xl p-5 sm:p-6 shadow-2xs space-y-4">
          <div className="flex items-center gap-2">
            <Cpu className="w-5 h-5 text-[#8C6005]" />
            <h2 className="font-serif text-lg font-bold text-[#0F172A]">
              Tình trạng Hạ tầng &amp; Hạn mức
            </h2>
          </div>
          <p className="text-xs text-[#64748B] leading-relaxed">
            Hạn ngạch tiêu thụ tính toán LLM, hình ảnh và tổng hợp giọng nói phục vụ sát hạch giả lập khách VIP.
          </p>

          <div className="space-y-4 pt-1">
            {/* Metric 1 */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                  <Video className="w-3.5 h-3.5 text-slate-600" /> D-ID Real-Time Video Stream
                </span>
                <span className="font-bold text-[#8C6005]">3,690 / 5,000 phút (73.8%)</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-[#1E293B] h-full rounded-full" style={{ width: "73.8%" }} />
              </div>
            </div>

            {/* Metric 2 */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-slate-600" /> Qdrant Vector RAG
                </span>
                <span className="font-bold text-[#8C6005]">428.5K / 600K vectors (70.0%)</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-[#C69214] h-full rounded-full" style={{ width: "70.0%" }} />
              </div>
            </div>

            {/* Metric 3 */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                  <Mic className="w-3.5 h-3.5 text-slate-600" /> Whisper AI Voice Transcription
                </span>
                <span className="font-bold text-[#8C6005]">1,240 / 2,000 giờ (62.0%)</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-[#C69214] h-full rounded-full" style={{ width: "62.0%" }} />
              </div>
            </div>
          </div>
        </div>

        {/* Right Card: Top 5 các Scenarios */}
        <div className="bg-white border border-[#ECE5D8] rounded-2xl p-5 sm:p-6 shadow-2xs space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              <h2 className="font-serif text-lg font-bold text-[#0F172A]">
                Top 5 các Scenarios
              </h2>
            </div>

            <div className="space-y-2.5">
              {[
                "1. Xử lý nhiệt độ & Decanting vang lâu năm",
                "2. Ghi nhớ thành phần dị ứng trong Menu Mùa Thu",
                "3. Xử lý tình huống thực khách phàn nàn chờ món >25 phút",
                "4. Nghi thức rót rượu xoay cổ chai, tránh chạm vành ly pha lê",
                "5. Nghệ thuật gợi mở Upsell rượu tráng miệng (Sauternes / Tokaji)",
              ].map((text, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-xs text-slate-800 font-medium truncate">{text}</div>
                  <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
                    <div 
                      className="bg-[#C69214] h-full rounded-full" 
                      style={{ width: `${85 - idx * 12}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Link
            href={APP_ROUTES.CLIENT_SCENARIOS}
            className="w-full min-h-[42px] mt-2 py-2.5 px-4 bg-[#C69214] hover:bg-[#B07E0F] text-white text-xs sm:text-sm font-bold rounded-xl flex items-center justify-center gap-1.5 shadow-2xs transition cursor-pointer"
          >
            <Zap className="w-4 h-4 fill-white" />
            <span>Tạo Kịch Bản Huấn Luyện</span>
          </Link>
        </div>
      </div>

      {/* Bottom Section: Nhật Ký Thực Hành & Thẩm Định Thời Gian Thực */}
      <div className="bg-white border border-[#ECE5D8] rounded-2xl shadow-2xs overflow-hidden">
        {/* Table Header Filter Bar */}
        <div className="p-5 sm:p-6 border-b border-[#ECE5D8] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#8C6005]" />
            <h2 className="font-serif text-lg font-bold text-[#0F172A]">
              Nhật Ký Thực Hành &amp; Thẩm Định Thời Gian Thực
            </h2>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Lọc theo tên hoặc mã kịch bản"
                className="w-full min-h-[38px] pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#C69214]"
              />
            </div>
            <button
              type="button"
              className="min-h-[38px] px-3 py-1.5 bg-white border border-slate-200 hover:bg-slate-50 rounded-xl text-xs font-semibold text-slate-700 flex items-center gap-1.5 transition cursor-pointer"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-slate-500" />
              <span>Bộ lọc</span>
            </button>
          </div>
        </div>

        {/* Table Data */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-50/70 border-b border-slate-200 text-[10.5px] font-bold tracking-wider uppercase text-slate-400">
                <th className="py-3 px-5">NHÂN SỰ ĐÀO TẠO</th>
                <th className="py-3 px-5">KỊCH BẢN ROLE-PLAY</th>
                <th className="py-3 px-5 text-center">ĐIỂM SỐ</th>
                <th className="py-3 px-5 text-center">KẾT QUẢ</th>
                <th className="py-3 px-5">NHẬN XÉT QUẢN LÍ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {logRows.map((row) => (
                <tr key={row.id} className="hover:bg-[#FAF8F5] transition">
                  {/* Nhân sự */}
                  <td className="py-3.5 px-5">
                    <Link href={row.link} className="flex items-center gap-3 group">
                      <div className={`w-8 h-8 rounded-full ${row.initialsBg} font-bold text-xs flex items-center justify-center shrink-0`}>
                        {row.initials}
                      </div>
                      <div>
                        <div className="font-bold text-[#0F172A] group-hover:text-[#C69214] transition">
                          {row.name}
                        </div>
                        <div className="text-[11px] text-slate-500 font-normal">
                          {row.role}
                        </div>
                      </div>
                    </Link>
                  </td>

                  {/* Kịch bản */}
                  <td className="py-3.5 px-5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10.5px] font-bold text-[#8C6005] bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        {row.scenarioCode}
                      </span>
                      <span className="font-semibold text-slate-800 line-clamp-1">
                        {row.scenarioTitle}
                      </span>
                    </div>
                  </td>

                  {/* Điểm số */}
                  <td className="py-3.5 px-5 text-center">
                    <span className={`font-serif text-lg font-bold ${row.scoreColor}`}>
                      {row.score}
                    </span>
                    <span className="text-[11px] text-slate-400">/100</span>
                  </td>

                  {/* Kết quả */}
                  <td className="py-3.5 px-5 text-center">
                    <span className={`inline-block px-3 py-0.5 rounded-full text-[11px] ${row.resultBadgeStyle}`}>
                      {row.resultBadge}
                    </span>
                  </td>

                  {/* Nhận xét Quản lý */}
                  <td className="py-3.5 px-5 text-xs text-slate-600 italic">
                    {row.managerComment}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table Footer */}
        <div className="p-4 sm:p-5 border-t border-[#ECE5D8] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            Hiển thị <strong>3</strong> trên tổng số <strong>1,420</strong> lượt sát hạch ghi nhận tháng 10/2024
          </div>

          <div className="flex items-center gap-1">
            <button className="px-3 py-1 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 disabled:opacity-40">
              Trước
            </button>
            <button className="px-3 py-1 rounded-lg bg-[#C69214] text-white font-bold">
              1
            </button>
            <button className="px-3 py-1 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600">
              2
            </button>
            <button className="px-3 py-1 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600">
              3
            </button>
            <span className="px-1 text-slate-400">...</span>
            <button className="px-3 py-1 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600">
              47
            </button>
            <button className="px-3 py-1 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600">
              Sau
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
