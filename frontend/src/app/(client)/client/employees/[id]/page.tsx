"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  Award, 
  Check, 
  CheckCircle2, 
  X, 
  ChevronRight, 
  Clock, 
  Bot, 
  Send, 
  Edit3, 
  ShieldCheck, 
  MessageSquare,
  Wine,
  Sparkles
} from "lucide-react";
import { ClientHeader } from "@/components/layout/client/ClientHeader";
import { APP_ROUTES } from "@/constants/routes";

export default function EmployeeDetailPage() {
  const params = useParams();
  const staffId = params?.id || "1";

  const [modalOpen, setModalOpen] = useState(false);
  const [managerNote, setManagerNote] = useState("");
  const [successToast, setSuccessToast] = useState(false);

  const handleSendFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessToast(true);
    setModalOpen(false);
    setTimeout(() => setSuccessToast(false), 4000);
  };

  return (
    <div className="space-y-6">
      <ClientHeader breadcrumb="Nhân sự" />

      {/* Header Profile Card (Figma SCR-CLI-05) */}
      <div className="bg-white border border-[#ECE5D8] rounded-2xl p-6 shadow-2xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80" 
                alt="Lê Bảo Trâm"
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-2 border-[#ECE5D8] shadow-xs" 
              />
              <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-[#C69214] text-white flex items-center justify-center text-xs shadow-xs">
                <Wine className="w-3.5 h-3.5" />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2.5">
                <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
                  Lê Bảo Trâm
                </h1>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-[#8C6005] border border-amber-200 text-xs font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C69214]" />
                  Đang hoạt động
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs font-mono font-medium">
                  Mã: EMP-2024-089
                </span>
              </div>

              <div className="text-sm font-bold text-[#8C6005]">
                Trainee Waitstaff / Sommelier Apprentice
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 pt-1">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" /> The Landmark Dining Lounge (Chi nhánh Q.1)
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" /> Nhập tham gia: 15/09/2024 (40 ngày rèn luyện)
                </span>
                <span className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#C69214]" /> Cấp độ: Palace Standard Level 2
                </span>
              </div>
            </div>
          </div>

          {/* Action button */}
          <div className="shrink-0 self-start lg:self-auto">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="min-h-[44px] px-5 py-2.5 bg-[#C69214] hover:bg-[#B07E0F] text-white text-xs sm:text-sm font-bold rounded-xl flex items-center gap-2 shadow-2xs transition cursor-pointer"
            >
              <Edit3 className="w-4 h-4" />
              <span>+ GỬI NHẬN XÉT MỚI</span>
            </button>
          </div>
        </div>
      </div>

      {successToast && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-xs sm:text-sm text-emerald-800 flex items-center gap-2 animate-in fade-in">
          <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>Nhận xét và chỉ dẫn đào tạo đã được gửi thành công đến Lê Bảo Trâm!</span>
        </div>
      )}

      {/* 2 Large KPI Cards (Figma SCR-CLI-05) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Card 1: Tiến độ Lý thuyết SOP */}
        <div className="bg-white border border-[#ECE5D8] rounded-2xl p-6 shadow-2xs space-y-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 text-[#8C6005]">
              <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center">
                <Award className="w-4 h-4 text-[#C69214]" />
              </div>
              <div>
                <h2 className="font-serif font-bold text-base text-[#0F172A]">
                  Tiến độ Lý thuyết SOP
                </h2>
                <div className="text-[11px] text-slate-400">Giáo trình Michelin Front-of-House</div>
              </div>
            </div>

            <div className="mt-4">
              <div className="font-serif text-4xl sm:text-5xl font-bold text-[#0F172A] tracking-tight">
                80<span className="text-2xl font-normal text-slate-400">%</span>
              </div>
              <div className="text-xs text-slate-500 font-semibold mt-1">16/20 Tài liệu</div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mt-2">
                <div className="bg-[#C69214] h-full rounded-full" style={{ width: "80%" }} />
              </div>
            </div>

            {/* 4 Check/Status Pills */}
            <div className="grid grid-cols-2 gap-2.5 mt-5">
              <div className="p-2.5 rounded-xl border border-slate-200 bg-slate-50/50 flex items-center gap-2 text-xs text-slate-800 font-medium">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="truncate">Vệ sinh &amp; An toàn</span>
              </div>

              <div className="p-2.5 rounded-xl border border-slate-200 bg-slate-50/50 flex items-center gap-2 text-xs text-slate-800 font-medium">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="truncate">Nghi thức khui rượu</span>
              </div>

              <div className="p-2.5 rounded-xl border border-slate-200 bg-slate-50/50 flex items-center gap-2 text-xs text-slate-800 font-medium">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="truncate">Xếp khăn nghệ thuật</span>
              </div>

              <div className="p-2.5 rounded-xl border border-amber-200 bg-amber-50/30 flex items-center gap-2 text-xs text-[#8C6005] font-semibold">
                <span className="w-3.5 h-3.5 rounded-full border border-[#C69214] flex items-center justify-center text-[10px] shrink-0">⊘</span>
                <span className="truncate">Xử lý rượu lỗi TCA</span>
              </div>
            </div>
          </div>

          <div className="text-[11px] text-slate-400 pt-3 border-t border-slate-100">
            Kỳ kiểm tra tiếp theo: <strong>28/10/2024</strong>
          </div>
        </div>

        {/* Card 2: Điểm Đánh giá Thực chiến Role-play AI */}
        <div className="bg-white border border-[#ECE5D8] rounded-2xl p-6 shadow-2xs space-y-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-slate-900 text-[#E2B755] flex items-center justify-center">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="font-serif font-bold text-base text-[#0F172A]">
                    Điểm Đánh giá Thực chiến Role-play AI
                  </h2>
                  <div className="text-[11px] text-slate-400">
                    Mô phỏng hội thoại âm thanh &amp; biểu cảm thời gian thực
                  </div>
                </div>
              </div>

              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200">
                Đạt Chuẩn
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center mt-5">
              {/* Circular Gauge */}
              <div className="sm:col-span-5 p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex flex-col items-center justify-center text-center">
                <div className="w-24 h-24 rounded-full border-4 border-[#C69214] flex flex-col items-center justify-center">
                  <div className="font-serif text-2xl font-bold text-[#0F172A]">85.0</div>
                  <div className="text-[9.5px] font-bold text-slate-400">/ 100 ĐIỂM</div>
                </div>
                <div className="text-xs text-slate-500 mt-2 font-medium">Tổng cộng 14 phiên</div>
              </div>

              {/* 4 Pillar Bars */}
              <div className="sm:col-span-7 space-y-2.5">
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-slate-700">Menu &amp; Pairing</span>
                    <span className="font-bold text-[#0F172A]">88</span>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#C69214] h-full rounded-full" style={{ width: "88%" }} />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-slate-700">Nghi thức giao tiếp Etiquette &amp; Tác phong</span>
                    <span className="font-bold text-[#0F172A]">82</span>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#C69214] h-full rounded-full" style={{ width: "82%" }} />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-slate-700">Xử lý tình huống (Crisis Handling)</span>
                    <span className="font-bold text-[#0F172A]">85</span>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#C69214] h-full rounded-full" style={{ width: "85%" }} />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-slate-700">Kỹ năng Upsell (Đề xuất món cao cấp)</span>
                    <span className="font-bold text-[#0F172A]">78</span>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-amber-600 h-full rounded-full" style={{ width: "78%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-right pt-2">
            <span className="text-xs font-semibold text-[#8C6005] hover:underline cursor-pointer">
              Xem biểu đồ Radar &gt;
            </span>
          </div>
        </div>
      </div>

      {/* Section 3: Lịch sử Phiên Luyện tập Thực chiến AI (Figma SCR-CLI-05) */}
      <div className="bg-white border border-[#ECE5D8] rounded-2xl shadow-2xs overflow-hidden">
        <div className="p-5 border-b border-[#ECE5D8]">
          <h2 className="font-serif text-lg font-bold text-[#0F172A]">
            Lịch sử Phiên Luyện tập Thực chiến AI
          </h2>
          <p className="text-xs text-slate-500">
            Bản ghi âm hội thoại và phân tích ngữ điệu, kiến thức nghiệp vụ chi tiết
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-50/70 border-b border-slate-200 text-[10.5px] font-bold tracking-wider uppercase text-slate-400">
                <th className="py-3 px-5">MÃ &amp; NỘI DUNG KỊCH BẢN</th>
                <th className="py-3 px-5 text-center">ĐIỂM SỐ</th>
                <th className="py-3 px-5 text-center">TRẠNG THÁI</th>
                <th className="py-3 px-5">THỜI GIAN THỰC HIỆN</th>
                <th className="py-3 px-5 text-right">HÀNH ĐỘNG</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {/* Row 1 */}
              <tr className="hover:bg-[#FAF8F5] transition">
                <td className="py-4 px-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-[#0F172A]">
                        RP-04: Khai mở &amp; Chiết vang Decanter
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Mô phỏng bàn 4 khách VIP - Vang Grand Vin de Pauillac 2010
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-5 text-center font-serif text-base font-bold text-[#0F172A]">
                  85 <span className="text-xs font-normal text-slate-400">/ 100</span>
                </td>
                <td className="py-4 px-5 text-center">
                  <span className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-[11px] font-bold">
                    • ĐẠT TIÊU CHUẨN
                  </span>
                </td>
                <td className="py-4 px-5 text-xs text-slate-600">
                  24/10/2024 • 14:32 (18 phút)
                </td>
                <td className="py-4 px-5 text-right">
                  <Link
                    href={APP_ROUTES.EMPLOYEE_ROLEPLAY_RESULTS("2")}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#8C6005] hover:underline"
                  >
                    <span>Xem Transcript &amp; Báo cáo AI</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="hover:bg-[#FAF8F5] transition">
                <td className="py-4 px-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-[#0F172A]">
                        RP-01: Đón tiếp Khách VVIP Trễ hẹn
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Khách phàn nàn bàn đặt bị chuyển vị trí và yêu cầu Sommelier
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-5 text-center font-serif text-base font-bold text-[#0F172A]">
                  88 <span className="text-xs font-normal text-slate-400">/ 100</span>
                </td>
                <td className="py-4 px-5 text-center">
                  <span className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-[11px] font-bold">
                    • ĐẠT TIÊU CHUẨN
                  </span>
                </td>
                <td className="py-4 px-5 text-xs text-slate-600">
                  22/10/2024 • 10:15 (14 phút)
                </td>
                <td className="py-4 px-5 text-right">
                  <Link
                    href={APP_ROUTES.EMPLOYEE_ROLEPLAY_RESULTS("1")}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#8C6005] hover:underline"
                  >
                    <span>Xem Transcript &amp; Báo cáo AI</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="hover:bg-[#FAF8F5] transition">
                <td className="py-4 px-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                      <Wine className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-[#0F172A]">
                        RP-06: Tư vấn Wine Pairing Omakase
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Khách dị ứng hải sản giáp xác kết hợp rượu vang trắng vùng Alsace
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-5 text-center font-serif text-base font-bold text-amber-700">
                  72 <span className="text-xs font-normal text-slate-400">/ 100</span>
                </td>
                <td className="py-4 px-5 text-center">
                  <span className="px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-[11px] font-bold">
                    • CẦN CẢI THIỆN
                  </span>
                </td>
                <td className="py-4 px-5 text-xs text-slate-600">
                  19/10/2024 • 16:45 (22 phút)
                </td>
                <td className="py-4 px-5 text-right">
                  <Link
                    href={APP_ROUTES.EMPLOYEE_ROLEPLAY_RESULTS("3")}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#8C6005] hover:underline"
                  >
                    <span>Xem Transcript &amp; Báo cáo AI</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t border-[#ECE5D8] text-xs text-slate-500">
          Hiển thị <strong>3</strong> trên tổng số <strong>14</strong> bản ghi
        </div>
      </div>

      {/* Section 4: Dòng thời gian Nhận xét & Đào tạo 1-1 của Quản lý (Figma SCR-CLI-05) */}
      <div className="bg-white border-l-4 border-l-[#C69214] border border-[#ECE5D8] rounded-2xl p-6 shadow-2xs space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-[#8C6005]" />
            <h2 className="font-serif text-lg font-bold text-[#0F172A]">
              Dòng thời gian Nhận xét &amp; Đào tạo 1-1 của Quản lý
            </h2>
          </div>

          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="text-xs font-bold text-[#8C6005] hover:underline flex items-center gap-1"
          >
            <span>+ Thêm phản hồi mới</span>
          </button>
        </div>

        <div className="space-y-6">
          {/* Timeline Item 1: Jean-Luc Dupont */}
          <div className="space-y-2.5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-[#C69214] ring-4 ring-amber-50" />
                <span className="font-bold text-sm text-[#0F172A]">Jean-Luc Dupont</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200">
                  F&amp;B Director
                </span>
                <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Đã gửi tới học viên
                </span>
              </div>
              <span className="text-xs text-slate-400">24/10/2024 • 17:15</span>
            </div>

            <div className="pl-5 border-l-2 border-slate-100 space-y-2">
              <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed bg-[#FEFCF7] p-4 rounded-xl border border-[#ECE5D8]">
                "Trâm có sự tự tin rất tốt khi giới thiệu rượu vang vùng Bordeaux. Tuy nhiên cần chú ý tốc độ rót rượu và góc nghiêng của Decanter để tránh làm xáo trộn cặn rượu vintage. Khuyên nên luyện thêm kịch bản <strong className="text-[#8C6005]">RP-04 2 lần nữa</strong> trước khi ra phục vụ bàn thực tế."
              </p>
              <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-400">
                <span>Trọng tâm: <strong>Kỹ thuật Phục vụ Vang</strong></span>
                <span>•</span>
                <span>Học viên đã xem lúc 24/10 18:20</span>
              </div>
            </div>
          </div>

          {/* Timeline Item 2: Trần Hoàng Long */}
          <div className="space-y-2.5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-slate-300 ring-4 ring-slate-100" />
                <span className="font-bold text-sm text-[#0F172A]">Trần Hoàng Long</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                  Assistant F&amp;B Manager
                </span>
              </div>
              <span className="text-xs text-slate-400">20/10/2024 • 11:30</span>
            </div>

            <div className="pl-5 border-l-2 border-slate-100 space-y-2">
              <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed bg-[#FEFCF7] p-4 rounded-xl border border-[#ECE5D8]">
                "Phản xạ xử lý tình huống dị ứng thực phẩm rất chuẩn chỉ. Đã ghi nhớ đúng SOP thông báo bếp trưởng trong vòng 60 giây."
              </p>
              <div className="text-[11px] text-slate-400">
                Trọng tâm: <strong>Xử lý tình huống &amp; Tác phong</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal: Gửi Nhận Xét 1-1 Mới */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-[#ECE5D8] space-y-5 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-serif text-lg font-bold text-[#0F172A]">
                  Gửi nhận xét 1-1 cho Lê Bảo Trâm
                </h3>
                <div className="text-xs text-slate-500">Phản hồi sẽ được gửi trực tiếp đến ứng dụng của học viên</div>
              </div>
              <button 
                type="button"
                onClick={() => setModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSendFeedback} className="space-y-4 text-xs sm:text-sm">
              <div className="space-y-1.5">
                <label className="font-bold text-[#0F172A] block">Nội dung đánh giá &amp; Chỉ dẫn SOP:</label>
                <textarea
                  rows={4}
                  value={managerNote}
                  onChange={(e) => setManagerNote(e.target.value)}
                  placeholder="Nhập lời khen, lỗi kỹ thuật cần khắc phục hoặc kịch bản yêu cầu học viên luyện tập lại..."
                  required
                  className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-[#C69214] leading-relaxed"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="min-h-[44px] px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-semibold rounded-xl transition cursor-pointer"
                >
                  Hủy bỏ
                </button>
                <button
                  type="submit"
                  className="min-h-[44px] px-4 py-2 bg-[#C69214] hover:bg-[#B07E0F] text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition cursor-pointer"
                >
                  Gửi nhận xét
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
