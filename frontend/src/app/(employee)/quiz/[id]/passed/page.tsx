"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { 
  Award, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  RotateCcw, 
  Download, 
  Share2, 
  BookOpen, 
  Bot, 
  Clock, 
  Check, 
  ChevronDown
} from "lucide-react";
import { EmployeeHeader } from "@/components/layout/employee/EmployeeHeader";
import { APP_ROUTES } from "@/constants/routes";
import { RollyLogo } from "@/components/common/RollyLogo";

export default function QuizPassedPage() {
  const params = useParams();
  const courseId = params?.id || "1";

  return (
    <div className="min-h-screen bg-[#FEFCF7] text-[#0F172A] flex flex-col">
      <EmployeeHeader breadcrumb="Bài kiểm tra SOP / Kết quả đạt chuẩn" />

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-8 sm:py-12 space-y-8">
        {/* Celebration Banner Card */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#C69214] to-[#F59E0B] text-white shadow-lg mx-auto animate-bounce duration-1000">
            <Award className="w-8 h-8 sm:w-10 sm:h-10" />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold rounded-full uppercase tracking-wider">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Vượt qua bài kiểm tra • Đạt chuẩn 100%
          </div>

          <h1 className="font-serif text-2xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
            Chúc mừng bạn đã hoàn thành bài kiểm tra!
          </h1>
          <p className="text-xs sm:text-sm text-[#64748B] max-w-lg mx-auto">
            Bạn đã nắm vững toàn bộ kiến thức quy chuẩn trong <strong className="text-[#0F172A]">SOP-FNB-04: Khai mở & Chiết vang Decanter</strong>.
          </p>
        </div>

        {/* Score Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <div className="bg-white border border-[#ECE5D8] rounded-2xl p-4 sm:p-5 text-center shadow-xs">
            <div className="text-xs text-[#64748B] font-medium">Điểm số</div>
            <div className="font-serif text-2xl sm:text-3xl font-bold text-[#C69214] mt-1">100<span className="text-sm font-normal text-slate-400">/100</span></div>
            <div className="text-[11px] text-emerald-600 font-semibold mt-0.5">Xuất sắc</div>
          </div>

          <div className="bg-white border border-[#ECE5D8] rounded-2xl p-4 sm:p-5 text-center shadow-xs">
            <div className="text-xs text-[#64748B] font-medium">Số câu đúng</div>
            <div className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A] mt-1">5<span className="text-sm font-normal text-slate-400">/5</span></div>
            <div className="text-[11px] text-emerald-600 font-semibold mt-0.5">Chính xác 100%</div>
          </div>

          <div className="bg-white border border-[#ECE5D8] rounded-2xl p-4 sm:p-5 text-center shadow-xs">
            <div className="text-xs text-[#64748B] font-medium">Thời gian hoàn thành</div>
            <div className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A] mt-1">04:32</div>
            <div className="text-[11px] text-[#64748B] mt-0.5">Tiêu chuẩn: 10:00</div>
          </div>

          <div className="bg-white border border-[#ECE5D8] rounded-2xl p-4 sm:p-5 text-center shadow-xs">
            <div className="text-xs text-[#64748B] font-medium">Huy hiệu năng lực</div>
            <div className="font-serif text-xl sm:text-2xl font-bold text-[#C69214] mt-1 flex items-center justify-center gap-1">
              <Sparkles className="w-5 h-5" /> 5-Star
            </div>
            <div className="text-[11px] text-[#64748B] mt-0.5">Fine Dining Certified</div>
          </div>
        </div>

        {/* Digital Certificate of Completion Card */}
        <div className="relative bg-gradient-to-b from-[#FFFDF9] to-[#F9F5EB] border-2 border-[#D4AF37] rounded-3xl p-6 sm:p-10 shadow-md overflow-hidden">
          {/* Decorative Corner Borders */}
          <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-[#C69214]" />
          <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[#C69214]" />
          <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[#C69214]" />
          <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[#C69214]" />

          <div className="text-center space-y-4">
            <div className="inline-block">
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#A67C1E] uppercase">
                Chứng Nhận Tiêu Chuẩn Nghiệp Vụ Nhà Hàng
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A]">
              CHỨNG NHẬN HOÀN THÀNH SOP
            </h2>

            <p className="text-xs text-[#64748B]">Hệ thống Đào tạo & Chuẩn hóa Dịch vụ Khách hàng Rolly chứng nhận:</p>

            <div className="py-2">
              <div className="font-serif text-xl sm:text-2xl font-bold text-[#C69214] border-b border-[#D4AF37]/50 inline-block px-8 pb-1">
                Nguyễn Văn Hùng
              </div>
              <div className="text-xs text-[#64748B] mt-1">Sommelier Junior • The Grand Bistro Chi nhánh 1</div>
            </div>

            <p className="text-xs sm:text-sm text-[#475569] max-w-xl mx-auto leading-relaxed">
              Đã vượt qua kỳ kiểm tra đánh giá lý thuyết quy chuẩn nghiệp vụ:
              <br />
              <strong className="text-[#0F172A]">SOP-FNB-04: Khai mở, Chiết vang Decanter & Kiểm soát Nhiệt độ phục vụ</strong>
            </p>

            <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#E8DEC8] text-xs text-[#64748B]">
              <div className="text-left">
                <div>Mã chứng nhận: <strong className="font-mono text-[#0F172A]">RLY-2026-FNB04-9842</strong></div>
                <div>Ngày cấp: <strong>11/11/2026</strong></div>
              </div>

              {/* Gold Seal Graphic */}
              <div className="w-16 h-16 rounded-full border-2 border-dashed border-[#C69214] flex flex-col items-center justify-center bg-amber-50 text-[10px] text-[#A67C1E] font-bold leading-tight">
                <span>ROLLY</span>
                <span>★ ★ ★</span>
                <span>VERIFIED</span>
              </div>

              <div className="text-right">
                <div className="font-serif italic font-bold text-sm text-[#0F172A]">Lê Thanh Phong</div>
                <div>Trưởng ban Khảo thí Rolly Academy</div>
              </div>
            </div>
          </div>
        </div>

        {/* Primary Next Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
          <Link
            href={APP_ROUTES.EMPLOYEE_PRACTICE("2")}
            className="w-full sm:w-auto min-h-[48px] px-6 py-3 bg-gradient-to-r from-[#C69214] to-[#B07E0F] hover:from-[#B07E0F] hover:to-[#996D0D] text-white text-sm font-bold rounded-xl flex items-center justify-center gap-2 shadow-md transition cursor-pointer"
          >
            <Bot className="w-4 h-4 text-[#FEFCF7]" />
            <span>Thực hành Role-play AI với Jean-Paul</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href={APP_ROUTES.EMPLOYEE_COURSES}
            className="w-full sm:w-auto min-h-[48px] px-6 py-3 bg-white hover:bg-[#F8FAFC] border border-[#CBD5E1] text-[#1E293B] text-sm font-semibold rounded-xl flex items-center justify-center gap-2 transition cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-[#C69214]" />
            <span>Xem danh sách bài học khác</span>
          </Link>

          <button
            type="button"
            onClick={() => window.print()}
            className="w-full sm:w-auto min-h-[48px] px-4 py-3 bg-white hover:bg-slate-50 border border-[#ECE5D8] text-slate-600 text-sm font-medium rounded-xl flex items-center justify-center gap-2 transition cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>In / Lưu chứng chỉ</span>
          </button>
        </div>
      </main>
    </div>
  );
}
