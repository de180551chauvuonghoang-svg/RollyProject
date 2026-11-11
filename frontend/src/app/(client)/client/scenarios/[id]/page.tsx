"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { 
  ArrowLeft, 
  Edit3, 
  Clock, 
  MessageSquare, 
  Check, 
  X, 
  ChevronDown, 
  Sparkles, 
  SlidersHorizontal,
  FileText
} from "lucide-react";
import { ClientHeader } from "@/components/layout/client/ClientHeader";
import { APP_ROUTES } from "@/constants/routes";

export default function ScenarioDetailPage() {
  const params = useParams();
  const router = useRouter();
  const scenarioId = params?.id || "1";

  return (
    <div className="space-y-6">
      <ClientHeader breadcrumb="Kịch bản &amp; Prompt AI / Bàn VIP Dị ứng nấm &amp; Đổi món" />

      {/* Title with yellow vertical accent bar (Figma SCR-CLI-07) */}
      <div className="space-y-1.5">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-7 rounded-full bg-[#C69214]" />
          <h1 className="font-serif text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#0F172A] tracking-tight">
            Bàn VIP Dị ứng nấm và Đổi món
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-[#64748B] pl-4 leading-relaxed max-w-4xl">
          Thiết lập nhân vật thực khách ảo AI, liên kết vector SOP và bộ trọng số đánh giá đa chiều cho chuẩn dịch vụ nhà hàng fine dining.
        </p>
      </div>

      {/* 2-Column Layout (Figma SCR-CLI-07) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column (Span 7) */}
        <div className="lg:col-span-7 space-y-6">
          {/* 1. Tên kịch bản */}
          <div className="bg-white border border-[#ECE5D8] rounded-2xl p-5 sm:p-6 shadow-2xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">
                1. TÊN KỊCH BẢN
              </span>
              <span className="font-mono text-xs font-bold text-[#8C6005] bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
                MÃ: RP-09
              </span>
            </div>
            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-[#0F172A]">
              Bàn VIP Dị ứng nấm &amp; Đổi món
            </div>
          </div>

          {/* 2. Mô tả, bối cảnh */}
          <div className="bg-white border border-[#ECE5D8] rounded-2xl p-5 sm:p-6 shadow-2xs space-y-3">
            <div className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">
              2. MÔ TẢ, BỐI CẢNH
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-[13px] text-slate-700 leading-relaxed space-y-2">
              <p>
                Bối cảnh tiệc tối riêng tư tại Phòng Hoàng Gia của D'Honneur Salon 02. Thực khách VVIP là một nhà sưu tập lâu năm và có tiếng tăm rượu vang sang chảnh, vừa nếm thử chai Château Margaux 2015 và cho rằng rượu bị bảo quản quá ẩm hoặc tính 21°C thay vì 16–18°C chuẩn. Thực khách tỏ thái độ không hài lòng, nghi ngờ quy trình Cellar Master và yêu cầu Sommelier đổi ngay lập tức chai khác hoặc hoàn tiền toàn bộ thực đơn degustation. AI Persona phải duy trì thái độ kiên định, thử thách sự mềm mỏng, kiến thức định đặc và kỹ năng decanter lạnh của Sommelier.
              </p>
              <div className="text-right text-[11px] text-slate-400 font-mono pt-1">
                * 715/1500 ký tự
              </div>
            </div>
          </div>

          {/* 3. Lựa chọn persona khách hàng */}
          <div className="bg-white border border-[#ECE5D8] rounded-2xl p-5 sm:p-6 shadow-2xs space-y-3">
            <div className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">
              3. LỰA CHỌN PERSONA KHÁCH HÀNG
            </div>

            {/* Selected Persona: Ngài Arthur Pendleton */}
            <div className="p-4 rounded-xl border-2 border-[#C69214] bg-[#FFFDF9] flex items-center justify-between gap-3 shadow-2xs">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-[#E2B755] flex items-center justify-center font-bold text-sm shrink-0">
                  AP
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-[#0F172A]">Ngài Arthur Pendleton</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-50 text-rose-700 border border-rose-200">
                      KHÓ TÍNH
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">
                    VVIP Connoisseur • Khách quen thân niên • Anh quốc
                  </div>
                </div>
              </div>
              <div className="w-5 h-5 rounded-full border-2 border-[#C69214] flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-[#C69214]" />
              </div>
            </div>

            {/* Other Personas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-xl border border-slate-200 bg-white flex items-center gap-3 opacity-60">
                <div className="w-4 h-4 rounded-full border border-slate-300" />
                <div>
                  <div className="font-semibold text-xs text-[#0F172A]">Doanh nhân</div>
                  <div className="text-[11px] text-slate-400">Thiếu kiên nhẫn</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 bg-white flex items-center gap-3 opacity-60">
                <div className="w-4 h-4 rounded-full border border-slate-300" />
                <div>
                  <div className="font-semibold text-xs text-[#0F172A]">Cặp đôi kỷ niệm</div>
                  <div className="text-[11px] text-slate-400">Cảm xúc, lãng mạn</div>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Giới hạn thời lượng & lượt tương tác */}
          <div className="bg-white border border-[#ECE5D8] rounded-2xl p-5 sm:p-6 shadow-2xs space-y-3">
            <div className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">
              4. GIỚI HẠN THỜI LƯỢNG &amp; LƯỢT TƯƠNG TÁC
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-50 text-[#C69214] flex items-center justify-center">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 font-medium">Thời lượng</div>
                  <div className="font-bold text-sm text-[#0F172A]">08:00 phút</div>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-50 text-[#C69214] flex items-center justify-center">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 font-medium">Lượt thoại tối đa</div>
                  <div className="font-bold text-sm text-[#0F172A]">10 lượt</div>
                </div>
              </div>
            </div>
          </div>

          {/* 5. Độ khó của scenario */}
          <div className="bg-white border border-[#ECE5D8] rounded-2xl p-5 sm:p-6 shadow-2xs space-y-3">
            <div className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">
              5. ĐỘ KHÓ CỦA SCENARIO
            </div>
            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-[#0F172A] flex items-center justify-between">
              <span>Hard (Chuyên nghiệp / Thử thách)</span>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </div>
          </div>
        </div>

        {/* Right Column (Span 5) */}
        <div className="lg:col-span-5 space-y-6">
          {/* 6. Tài liệu SOP tham chiếu */}
          <div className="bg-white border border-[#ECE5D8] rounded-2xl p-5 sm:p-6 shadow-2xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">
                6. TÀI LIỆU SOP THAM CHIẾU
              </span>
              <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> 2 Tài liệu được chọn
              </span>
            </div>

            <div className="space-y-2.5">
              <div className="p-3.5 rounded-xl border border-amber-300 bg-[#FFFDF9] flex items-start gap-3">
                <input type="checkbox" checked readOnly className="mt-0.5 accent-[#C69214] rounded" />
                <div>
                  <div className="font-bold text-xs text-[#0F172A]">
                    SOP-FNB-04_Khoi-tao-chai-vang-Sommelier.pdf
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    Quy chuẩn mở/ thử/ phục vụ Bordeaux &amp; kỹ thuật ướp xô đá nhanh 4 phút
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl border border-amber-300 bg-[#FFFDF9] flex items-start gap-3">
                <input type="checkbox" checked readOnly className="mt-0.5 accent-[#C69214] rounded" />
                <div>
                  <div className="font-bold text-xs text-[#0F172A]">
                    SOP-FNB-07_Nghe-thuat-Giai-quyet-Vintage-Wine.pdf
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    Nghệ thuật xoa dịu khi khách nghi ngờ mùi vị &amp; giới thiệu niên vụ thay thế
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 bg-white flex items-start gap-3 opacity-60">
                <input type="checkbox" disabled className="mt-0.5" />
                <div>
                  <div className="font-semibold text-xs text-[#0F172A]">
                    SOP-FNB-01_Nghi-thuc-Tiep-don-VVIP.pdf
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Nghi thức cúi chào 15 độ, cách xưng hô quý tộc và bảo mật thông tin bàn
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 7. Chủ đề cấm kỵ / Từ khóa vi phạm */}
          <div className="bg-white border border-[#ECE5D8] rounded-2xl p-5 sm:p-6 shadow-2xs space-y-3">
            <div className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">
              7. CHỦ ĐỀ CẤM KỴ / TỪ KHÓA VI PHẠM
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200 text-xs font-semibold flex items-center gap-1.5">
                <span>Tranh cãi với khách</span>
                <X className="w-3.5 h-3.5 cursor-pointer" />
              </span>

              <span className="px-3 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200 text-xs font-semibold flex items-center gap-1.5">
                <span>Đổ lỗi cho nhiệt độ phòng</span>
                <X className="w-3.5 h-3.5 cursor-pointer" />
              </span>

              <span className="px-3 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200 text-xs font-semibold flex items-center gap-1.5">
                <span>Tiết lộ giá với chai vang</span>
                <X className="w-3.5 h-3.5 cursor-pointer" />
              </span>

              <span className="px-3 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200 text-xs font-semibold flex items-center gap-1.5">
                <span>Từ chối đổi ly</span>
                <X className="w-3.5 h-3.5 cursor-pointer" />
              </span>
            </div>

            <div className="text-xs text-[#C69214] font-semibold cursor-pointer pt-1 hover:underline">
              + Thêm từ khóa cấm...
            </div>
          </div>

          {/* 8. Bộ trọng số đánh giá */}
          <div className="bg-white border border-[#ECE5D8] rounded-2xl p-5 sm:p-6 shadow-2xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">
                8. BỘ TRỌNG SỐ ĐÁNH GIÁ
              </span>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                Có tổng: 100%
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between font-medium">
                <span className="text-slate-700">Kiến thức Thực đơn &amp; Menu Pairing</span>
                <span className="font-bold text-[#C69214]">35 %</span>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between font-medium">
                <span className="text-slate-700">Nghi thức Giao tiếp &amp; Tác phong (Etiquette)</span>
                <span className="font-bold text-[#C69214]">30 %</span>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between font-medium">
                <span className="text-slate-700">Xử lý tình huống khẩn cấp (Crisis Handling)</span>
                <span className="font-bold text-[#C69214]">20 %</span>
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between font-medium">
                <span className="text-slate-700">Kỹ năng Upsell &amp; Thuyết phục</span>
                <span className="font-bold text-[#C69214]">15 %</span>
              </div>
            </div>
          </div>

          {/* 9. Điểm đạt yêu cầu */}
          <div className="bg-white border border-[#ECE5D8] rounded-2xl p-5 sm:p-6 shadow-2xs space-y-2">
            <div className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">
              9. ĐIỂM ĐẠT YÊU CẦU
            </div>
            <div className="flex items-center gap-3">
              <div className="w-24 p-3 bg-slate-50 border border-slate-200 rounded-xl font-serif text-xl font-bold text-center text-[#0F172A]">
                80
              </div>
              <span className="text-xs text-slate-500 font-medium">/ 100 điểm</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action Footer (Figma SCR-CLI-07) */}
      <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#ECE5D8]">
        <Link
          href={APP_ROUTES.CLIENT_SCENARIO_EDIT(String(scenarioId))}
          className="min-h-[44px] px-6 py-2.5 bg-white border border-[#CBD5E1] hover:bg-slate-50 text-[#1E293B] text-xs sm:text-sm font-semibold rounded-xl flex items-center gap-2 transition cursor-pointer"
        >
          <Edit3 className="w-4 h-4 text-[#C69214]" />
          <span>Edit</span>
        </Link>

        <button
          type="button"
          onClick={() => alert("Kịch bản đã được xuất bản trực tuyến thành công!")}
          className="min-h-[44px] px-6 py-2.5 bg-[#C69214] hover:bg-[#B07E0F] text-white text-xs sm:text-sm font-bold rounded-xl flex items-center gap-2 shadow-2xs transition cursor-pointer"
        >
          <span>Xuất bản kịch bản</span>
        </button>
      </div>
    </div>
  );
}
