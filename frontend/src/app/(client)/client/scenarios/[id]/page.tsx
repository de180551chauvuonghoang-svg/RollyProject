"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { 
  ArrowLeft, 
  Bot, 
  Edit3, 
  Play, 
  ShieldCheck, 
  Users, 
  Award, 
  Clock, 
  BookOpen, 
  FileText, 
  AlertCircle,
  Sparkles,
  ChevronRight,
  TrendingUp,
  Sliders
} from "lucide-react";
import { ClientHeader } from "@/components/layout/client/ClientHeader";
import { APP_ROUTES } from "@/constants/routes";

export default function ScenarioDetailPage() {
  const params = useParams();
  const scenarioId = params?.id || "1";

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <ClientHeader breadcrumb={`Kịch bản Role-play AI / SCN-FNB-01`} />

      {/* Navigation & Header Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <Link 
          href={APP_ROUTES.CLIENT_SCENARIOS}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#64748B] hover:text-[#C69214] transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Quay lại danh mục kịch bản</span>
        </Link>

        <div className="flex items-center gap-2.5">
          <Link
            href={APP_ROUTES.CLIENT_SCENARIO_EDIT(String(scenarioId))}
            className="min-h-[42px] px-4 py-2 bg-white border border-[#CBD5E1] hover:bg-slate-50 text-[#1E293B] text-xs sm:text-sm font-semibold rounded-xl flex items-center gap-2 transition cursor-pointer"
          >
            <Edit3 className="w-4 h-4 text-[#C69214]" />
            <span>Chỉnh sửa kịch bản</span>
          </Link>

          <Link
            href={APP_ROUTES.EMPLOYEE_PRACTICE("2")}
            className="min-h-[42px] px-4 py-2 bg-[#C69214] hover:bg-[#B07E0F] text-white text-xs sm:text-sm font-bold rounded-xl flex items-center gap-2 shadow-xs transition cursor-pointer"
          >
            <Bot className="w-4 h-4" />
            <span>Luyện tập thử với AI</span>
          </Link>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="bg-white border border-[#ECE5D8] rounded-2xl p-6 sm:p-7 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="font-mono text-xs font-bold text-[#8C6005] bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
            SCN-FNB-01
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200 text-xs font-bold">
            Thử thách cao
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" /> Đang hoạt động
          </span>
          <span className="text-xs text-[#64748B]">Bộ phận: F&B / Sommelier</span>
        </div>

        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A] leading-tight">
          Khách VVIP Phàn nàn Chai Vang có mùi ẩm mốc (TCA Cork Taint)
        </h1>

        <p className="text-xs sm:text-sm text-[#475569] max-w-4xl leading-relaxed">
          Tình huống mô phỏng đối thoại thực tế giữa nhân viên Sommelier và thực khách Jean-Paul khi chai vang Bordeaux Grand Cru niên vụ 2010 gặp sự cố lỗi nút bần. Thử thách khả năng kiềm chế cảm xúc, xoa dịu khách và kích hoạt quy trình đổi vang tức thì.
        </p>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Details & Rubrics */}
        <div className="lg:col-span-2 space-y-6">
          {/* Persona Card */}
          <div className="bg-white border border-[#ECE5D8] rounded-2xl p-6 shadow-xs space-y-5">
            <div className="flex items-center gap-2 text-xs font-bold text-[#C69214] uppercase tracking-wider">
              <Bot className="w-4 h-4" />
              <span>Hồ sơ Persona Khách Hàng Giả Lập AI</span>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 rounded-xl bg-[#FEFCF7] border border-[#ECE5D8]">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-[#E2B755] flex items-center justify-center font-serif text-xl font-bold shrink-0 shadow-xs">
                JP
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-serif font-bold text-base text-[#0F172A]">Jean-Paul (62 tuổi)</h3>
                  <span className="text-xs text-slate-500 font-medium">Paris, Pháp</span>
                </div>
                <div className="text-xs text-[#8C6005] font-semibold">Chuyên gia ẩm thực &amp; Nhà phê bình Michelin độc lập</div>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Phong thái lịch thiệp nhưng cực kỳ nghiêm khắc về kỹ thuật phục vụ rượu vang. Có khứu giác nhạy bén, nhận biết lỗi nút bần TCA ngay từ ngụm đầu tiên.
                </p>
              </div>
            </div>

            {/* Persona Behavioral Attributes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
              <div className="p-3.5 rounded-xl border border-slate-200 space-y-1">
                <div className="font-bold text-[#0F172A]">Tâm trạng khởi đầu (Initial State):</div>
                <p className="text-[#64748B]">Bực bội, thất vọng vì bữa tối quan trọng bị gián đoạn, nghi ngờ chất lượng bảo quản hầm rượu.</p>
              </div>
              <div className="p-3.5 rounded-xl border border-slate-200 space-y-1">
                <div className="font-bold text-[#0F172A]">Điều kiện làm dịu (Satisfied Trigger):</div>
                <p className="text-[#64748B]">Sommelier thừa nhận lịch sự không tranh cãi, xin phép kiểm tra và đề xuất mở ngay chai mới cùng niên vụ.</p>
              </div>
            </div>
          </div>

          {/* AI Scoring Rubric */}
          <div className="bg-white border border-[#ECE5D8] rounded-2xl p-6 shadow-xs space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-[#C69214] uppercase tracking-wider">
                <Sliders className="w-4 h-4" />
                <span>Trọng số 4 Tiêu Chí Đánh Giá AI</span>
              </div>
              <span className="text-xs text-slate-400 font-medium">Tổng 100%</span>
            </div>

            <div className="space-y-3.5">
              <div className="p-4 rounded-xl border border-slate-200 space-y-2">
                <div className="flex justify-between items-center text-xs sm:text-sm font-bold text-[#0F172A]">
                  <span>1. Tuân thủ Quy trình SOP Thẩm định Rượu vang</span>
                  <span className="text-[#C69214]">35%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-[#C69214] h-full rounded-full" style={{ width: "35%" }} />
                </div>
                <p className="text-xs text-[#64748B]">
                  Kiểm tra xem Sommelier có đưa ra quy trình đối chiếu nhãn chai, kiểm tra nút bần và bảo quản đúng chuẩn không.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 space-y-2">
                <div className="flex justify-between items-center text-xs sm:text-sm font-bold text-[#0F172A]">
                  <span>2. Ngữ điệu &amp; Tác phong Giao tiếp (Tone of Voice)</span>
                  <span className="text-[#C69214]">25%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-[#C69214] h-full rounded-full" style={{ width: "25%" }} />
                </div>
                <p className="text-xs text-[#64748B]">
                  Giọng nói điềm tĩnh, ấm áp, dùng kính ngữ, không dùng từ ngữ tranh cãi hay phủ nhận cảm nhận của khách.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 space-y-2">
                <div className="flex justify-between items-center text-xs sm:text-sm font-bold text-[#0F172A]">
                  <span>3. Kỹ năng Xoa dịu &amp; Xử lý Khủng hoảng</span>
                  <span className="text-[#C69214]">25%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-[#C69214] h-full rounded-full" style={{ width: "25%" }} />
                </div>
                <p className="text-xs text-[#64748B]">
                  Chủ động đề xuất phương án thay thế nhanh gọn, linh hoạt tặng kèm ly tráng miệng hoặc lời xin lỗi chân thành.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 space-y-2">
                <div className="flex justify-between items-center text-xs sm:text-sm font-bold text-[#0F172A]">
                  <span>4. Tính Chuyên nghiệp &amp; Tốc độ Phản xạ</span>
                  <span className="text-[#C69214]">15%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-[#C69214] h-full rounded-full" style={{ width: "15%" }} />
                </div>
                <p className="text-xs text-[#64748B]">
                  Giải quyết tình huống trong vòng 5 lượt thoại, không ngập ngừng kéo dài thời gian chờ của thực khách.
                </p>
              </div>
            </div>
          </div>

          {/* Attached SOP reference */}
          <div className="bg-white border border-[#ECE5D8] rounded-2xl p-6 shadow-xs space-y-3">
            <div className="text-xs font-bold text-[#64748B] uppercase tracking-wider">Tài liệu SOP Tham chiếu Liên kết</div>
            <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-[#C69214] shrink-0" />
                <div>
                  <div className="font-bold text-xs sm:text-sm text-[#0F172A]">
                    SOP-FNB-04: Khai mở, Chiết vang Decanter &amp; Kiểm soát Nhiệt độ
                  </div>
                  <div className="text-xs text-[#8C6005]">Thời lượng học: 12 phút • Bắt buộc cho Sommelier</div>
                </div>
              </div>
              <Link
                href={APP_ROUTES.EMPLOYEE_COURSE_DETAIL("1")}
                className="px-3 py-1.5 bg-white border border-amber-200 hover:bg-amber-100 text-[#8C6005] text-xs font-semibold rounded-lg transition shrink-0"
              >
                Xem SOP
              </Link>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Quick Stats */}
          <div className="bg-white border border-[#ECE5D8] rounded-2xl p-5 shadow-xs space-y-4">
            <div className="text-xs font-bold text-[#64748B] uppercase tracking-wider">Thống kê hiệu quả kịch bản</div>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-[#64748B]">Số lượt thực hành:</span>
                <span className="font-bold text-[#0F172A]">382 lượt</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-[#64748B]">Điểm TB toàn chuỗi:</span>
                <span className="font-bold text-[#C69214]">84.5 / 100</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-[#64748B]">Tỷ lệ vượt qua:</span>
                <span className="font-bold text-emerald-700">78%</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-[#64748B]">Thời lượng TB:</span>
                <span className="font-bold text-[#0F172A]">06 phút 15 giây</span>
              </div>
            </div>
          </div>

          {/* Top Performers */}
          <div className="bg-white border border-[#ECE5D8] rounded-2xl p-5 shadow-xs space-y-3">
            <div className="text-xs font-bold text-[#64748B] uppercase tracking-wider">Nhân viên đạt điểm cao nhất</div>
            <div className="space-y-2.5">
              {[
                { name: "Nguyễn Hoàng Long", role: "Head Sommelier", score: 96 },
                { name: "Trần Mai Anh", role: "Captain", score: 92 },
                { name: "Phan Anh Tuấn", role: "Sommelier Junior", score: 89 },
              ].map((staff, idx) => (
                <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-[#FEFCF7] border border-[#ECE5D8] text-xs">
                  <div>
                    <div className="font-bold text-[#0F172A]">{staff.name}</div>
                    <div className="text-[11px] text-slate-500">{staff.role}</div>
                  </div>
                  <div className="font-bold text-[#C69214] text-sm">{staff.score}đ</div>
                </div>
              ))}
            </div>
          </div>

          {/* Version & Metadata */}
          <div className="bg-white border border-[#ECE5D8] rounded-2xl p-5 shadow-xs space-y-2 text-xs text-[#64748B]">
            <div>Người tạo: <strong>Lê Thanh Phong (Corporate Trainer)</strong></div>
            <div>Phiên bản AI Prompt: <strong>v3.2.0 (GPT-4o / Claude 3.5 Sonnet)</strong></div>
            <div>Cập nhật lần cuối: <strong>05/11/2026</strong></div>
          </div>
        </div>
      </div>
    </div>
  );
}
