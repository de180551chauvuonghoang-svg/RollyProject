"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { 
  AlertCircle, 
  RotateCcw, 
  BookOpen, 
  ArrowLeft, 
  XCircle, 
  CheckCircle2, 
  HelpCircle,
  Sparkles,
  Bot
} from "lucide-react";
import { EmployeeHeader } from "@/components/layout/employee/EmployeeHeader";
import { APP_ROUTES } from "@/constants/routes";

export default function QuizFailedPage() {
  const params = useParams();
  const courseId = params?.id || "1";

  return (
    <div className="min-h-screen bg-[#FEFCF7] text-[#0F172A] flex flex-col">
      <EmployeeHeader breadcrumb="Bài kiểm tra SOP / Kết quả chưa đạt" />

      <main className="flex-1 max-w-3xl mx-auto w-full px-4 sm:px-6 py-8 sm:py-12 space-y-8">
        {/* Banner Alert */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-rose-50 border border-rose-200 text-rose-600 mx-auto">
            <AlertCircle className="w-8 h-8 sm:w-10 sm:h-10" />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-50 text-rose-700 border border-rose-200 text-xs font-bold rounded-full uppercase tracking-wider">
            Chưa đạt tiêu chuẩn SOP • Cần ≥ 80%
          </div>

          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A]">
            Bạn cần cải thiện thêm để vượt qua
          </h1>
          <p className="text-xs sm:text-sm text-[#64748B] max-w-md mx-auto">
            Hãy dành vài phút xem lại các câu trả lời chưa chính xác dưới đây trước khi thực hiện lần thi tiếp theo.
          </p>
        </div>

        {/* Score Summary Card */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          <div className="bg-white border border-[#ECE5D8] rounded-2xl p-4 text-center shadow-xs">
            <div className="text-xs text-[#64748B] font-medium">Điểm số</div>
            <div className="font-serif text-2xl sm:text-3xl font-bold text-rose-600 mt-1">60<span className="text-sm font-normal text-slate-400">/100</span></div>
            <div className="text-[11px] text-rose-500 font-semibold mt-0.5">Yêu cầu: ≥ 80</div>
          </div>

          <div className="bg-white border border-[#ECE5D8] rounded-2xl p-4 text-center shadow-xs">
            <div className="text-xs text-[#64748B] font-medium">Số câu đúng</div>
            <div className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A] mt-1">3<span className="text-sm font-normal text-slate-400">/5</span></div>
            <div className="text-[11px] text-[#64748B] mt-0.5">Cần đúng tối thiểu 4</div>
          </div>

          <div className="bg-white border border-[#ECE5D8] rounded-2xl p-4 text-center shadow-xs">
            <div className="text-xs text-[#64748B] font-medium">Lượt làm lại</div>
            <div className="font-serif text-2xl sm:text-3xl font-bold text-[#C69214] mt-1">2<span className="text-sm font-normal text-slate-400">/3</span></div>
            <div className="text-[11px] text-emerald-600 font-semibold mt-0.5">Còn 2 lượt thi</div>
          </div>
        </div>

        {/* AI Recommendations */}
        <div className="bg-amber-50/60 border border-amber-200 rounded-2xl p-5 space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-[#A67C1E] uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#C69214]" />
            Gợi ý khắc phục từ AI Trainer
          </div>
          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
            Bạn đã làm rất tốt ở phần chuẩn bị dụng cụ decanter và nghi thức rót rượu cho quý bà. Tuy nhiên, bạn đang nhầm lẫn giữa nhiệt độ phục vụ vang đỏ với vang trắng, và quy tắc an toàn khi cắt vỏ chì kim loại.
          </p>
        </div>

        {/* Detailed Breakdown of Incorrect Answers */}
        <div className="space-y-4">
          <h2 className="font-serif text-lg font-bold text-[#0F172A]">
            Phân tích 2 câu trả lời chưa đúng:
          </h2>

          {/* Question 2 Review */}
          <div className="bg-white border border-rose-200 rounded-2xl p-5 shadow-xs space-y-3">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="text-rose-600 flex items-center gap-1.5">
                <XCircle className="w-4 h-4" /> Câu hỏi 2 • Thao tác Sommelier
              </span>
              <span className="text-slate-400">0 / 20 Điểm</span>
            </div>
            <div className="text-sm font-bold text-[#0F172A]">
              Vị trí cắt vỏ chì bảo vệ cổ chai vang đạt chuẩn nhà hàng cao cấp Michelin là ở đâu?
            </div>
            <div className="space-y-1.5 text-xs">
              <div className="p-2.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-900 flex items-center justify-between">
                <span>Lựa chọn của bạn: <strong>A. Cắt ngay sát đỉnh miệng chai để lộ nút bần</strong></span>
                <span className="text-rose-600 font-bold">Sai</span>
              </div>
              <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-center justify-between">
                <span>Đáp án đúng: <strong>B. Cắt tại ngấn cổ chai thứ hai (dưới gờ nổi)</strong></span>
                <span className="text-emerald-700 font-bold">Chính xác</span>
              </div>
            </div>
            <p className="text-xs text-[#64748B] pt-1">
              <em>Trích dẫn SOP-FNB-04:</em> Cắt chì dưới ngấn thứ 2 giúp ngăn dòng rượu rót ra bị nhiễm độc kim loại từ vỏ chì và giữ miệng chai thẩm mỹ.
            </p>
          </div>

          {/* Question 4 Review */}
          <div className="bg-white border border-rose-200 rounded-2xl p-5 shadow-xs space-y-3">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="text-rose-600 flex items-center gap-1.5">
                <XCircle className="w-4 h-4" /> Câu hỏi 4 • Nhiệt độ & Bảo quản
              </span>
              <span className="text-slate-400">0 / 20 Điểm</span>
            </div>
            <div className="text-sm font-bold text-[#0F172A]">
              Nhiệt độ phục vụ chuẩn quốc tế đối với vang đỏ Bordeaux & Cabernet Sauvignon Grand Cru là bao nhiêu?
            </div>
            <div className="space-y-1.5 text-xs">
              <div className="p-2.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-900 flex items-center justify-between">
                <span>Lựa chọn của bạn: <strong>A. 4°C – 6°C (Ướp trong xô đá ngập nước)</strong></span>
                <span className="text-rose-600 font-bold">Sai</span>
              </div>
              <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-center justify-between">
                <span>Đáp án đúng: <strong>C. 16°C – 18°C (Nhiệt độ phòng hầm rượu tiêu chuẩn)</strong></span>
                <span className="text-emerald-700 font-bold">Chính xác</span>
              </div>
            </div>
            <p className="text-xs text-[#64748B] pt-1">
              <em>Trích dẫn SOP-FNB-04:</em> 4°C – 6°C chỉ áp dụng cho Champagne & Vang nổ sủi bọt. Vang đỏ đậm đà cần 16°C – 18°C để bộc lộ tầng hương gỗ sồi và tannin mịn màng.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
          <Link
            href={APP_ROUTES.EMPLOYEE_QUIZ(String(courseId))}
            className="w-full sm:w-auto min-h-[48px] px-6 py-3 bg-gradient-to-r from-[#C69214] to-[#B07E0F] hover:from-[#B07E0F] hover:to-[#996D0D] text-white text-sm font-bold rounded-xl flex items-center justify-center gap-2 shadow-md transition cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Làm lại bài Quiz (Lượt 2/3)</span>
          </Link>

          <Link
            href={APP_ROUTES.EMPLOYEE_COURSE_DETAIL(String(courseId))}
            className="w-full sm:w-auto min-h-[48px] px-6 py-3 bg-white hover:bg-[#F8FAFC] border border-[#CBD5E1] text-[#1E293B] text-sm font-semibold rounded-xl flex items-center justify-center gap-2 transition cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-[#C69214]" />
            <span>Ôn tập lại tài liệu SOP</span>
          </Link>

          <Link
            href={APP_ROUTES.EMPLOYEE_COURSES}
            className="w-full sm:w-auto min-h-[48px] px-4 py-3 bg-white hover:bg-slate-50 border border-[#ECE5D8] text-slate-600 text-sm font-medium rounded-xl flex items-center justify-center gap-2 transition cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Về trang học tập</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
