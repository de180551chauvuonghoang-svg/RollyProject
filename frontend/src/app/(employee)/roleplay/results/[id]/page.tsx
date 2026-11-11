"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { 
  ArrowLeft, 
  Award, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  RotateCcw, 
  Download, 
  Sparkles, 
  User, 
  ShieldCheck, 
  MessageSquare, 
  TrendingUp,
  ChevronRight,
  ExternalLink,
  ThumbsUp,
  FileText
} from "lucide-react";
import { APP_ROUTES } from "@/constants/routes";

export function RoleplayResultPage() {
  const params = useParams();
  const id = params?.id ? String(params.id) : "2";

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-12">
      {/* 1. Header Bar */}
      <header className="h-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#EFEBE3] flex items-center justify-between shrink-0 sticky top-0 z-30 shadow-2xs">
        <div className="flex items-center gap-3 min-w-0">
          <Link
            href={APP_ROUTES.EMPLOYEE_ROLEPLAY}
            className="p-2 -ml-1 text-slate-500 hover:text-slate-900 rounded-xl hover:bg-slate-100 transition min-h-[44px] min-w-[44px] flex items-center justify-center shrink-0 cursor-pointer"
            aria-label="Quay lại danh sách kịch bản"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="min-w-0">
            <span className="text-[10px] sm:text-[10.5px] font-bold tracking-wider text-[#A67C1E] uppercase block">
              AI ROLE-PLAY ASSESSMENT REPORT
            </span>
            <h1 className="font-serif font-bold text-[14.5px] sm:text-[16px] text-[#0F172A] truncate">
              Kết Quả Đánh Giá: Xử lý Khiếu nại Vang bị chua &amp; Nhiệt độ sai
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => window.print()}
            className="min-h-[40px] px-3.5 py-2 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl text-[12.5px] font-semibold text-slate-700 flex items-center gap-1.5 shadow-2xs transition cursor-pointer"
          >
            <Download className="w-4 h-4 text-slate-500" />
            <span className="hidden sm:inline">Xuất Báo Cáo PDF</span>
          </button>
          <Link
            href={APP_ROUTES.EMPLOYEE_PRACTICE(id)}
            className="min-h-[40px] px-4 py-2 bg-[#C69214] hover:bg-[#B38210] active:scale-[0.99] text-white font-bold rounded-xl text-[12.5px] flex items-center gap-1.5 shadow-xs transition"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Luyện tập lại</span>
          </Link>
        </div>
      </header>

      {/* Main Container */}
      <main className="w-full max-w-[1240px] mx-auto p-3.5 sm:p-6 lg:p-8 space-y-6">
        {/* 2. Top Summary Banner with Score & Distinction */}
        <section className="bg-white rounded-2xl p-5 sm:p-8 border border-[#EAE5D9] shadow-xs flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#FAF6ED] text-[#8C6005] border border-[#EEDFB6]">
                SOP-FNB-04
              </span>
              <span className="text-[12.5px] text-slate-500">
                Khách VVIP: <strong className="text-slate-900">Jean-Paul (Master Sommelier)</strong>
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-[12.5px] text-slate-500">
                Thời gian: <strong className="text-slate-900">04:31</strong>
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-[12.5px] text-slate-500">
                Lượt thoại: <strong className="text-slate-900">8 turns</strong>
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
              ĐẠT TIÊU CHUẨN
            </h2>
            <p className="text-[13.5px] text-slate-600 leading-relaxed">
              Xếp hạng năng lực: <strong className="text-[#8C6005]">Haute Silver Distinction</strong>. Học viên thể hiện bản lĩnh điềm đạm, ứng xử đúng chuẩn mực khi đối thoại với chuyên gia rượu vang khó tính.
            </p>

            <div className="flex items-center gap-2 pt-2 text-[12px] text-slate-500 font-medium">
              <span className="w-6 h-6 rounded-full bg-[#FAF6ED] text-[#8C6005] font-bold text-[10.5px] flex items-center justify-center">HL</span>
              <span>Học viên: <strong>Nguyễn Hoàng Long (Head Sommelier Level 2)</strong></span>
            </div>
          </div>

          {/* Big Score Badge */}
          <div className="flex sm:flex-col items-center justify-center bg-gradient-to-br from-[#FFFDF7] to-[#FBF5E6] border border-[#EEDFB6] rounded-2xl p-5 sm:p-6 text-center shrink-0 min-w-[160px] shadow-2xs">
            <span className="text-[11px] font-bold tracking-wider text-[#8C6005] uppercase block mb-1">
              ĐIỂM TỔNG HỢP AI
            </span>
            <div className="text-4xl sm:text-5xl font-serif font-bold text-[#0F172A] tracking-tight">
              85<span className="text-lg sm:text-xl font-sans text-slate-400">/100</span>
            </div>
            <div className="mt-2 inline-flex items-center gap-1 px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-[11px] font-bold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Đạt chuẩn kiểm định</span>
            </div>
          </div>
        </section>

        {/* 3. 4 Pillar Metric Cards */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#ECE5D8] shadow-2xs">
            <span className="text-[10px] sm:text-[10.5px] font-bold tracking-wider uppercase text-slate-400 block truncate">
              1. TUÂN THỦ SOP
            </span>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-[#0F172A] mt-1">
              92<span className="text-xs sm:text-sm font-sans text-slate-400">/100</span>
            </div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden">
              <div className="bg-emerald-600 h-full rounded-full" style={{ width: "92%" }}></div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#ECE5D8] shadow-2xs">
            <span className="text-[10px] sm:text-[10.5px] font-bold tracking-wider uppercase text-slate-400 block truncate">
              2. NGỮ ĐIỆU &amp; GIỌNG NÓI
            </span>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-[#0F172A] mt-1">
              80<span className="text-xs sm:text-sm font-sans text-slate-400">/100</span>
            </div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden">
              <div className="bg-[#C69214] h-full rounded-full" style={{ width: "80%" }}></div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#ECE5D8] shadow-2xs">
            <span className="text-[10px] sm:text-[10.5px] font-bold tracking-wider uppercase text-slate-400 block truncate">
              3. KIỂM SOÁT CẢM XÚC
            </span>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-[#0F172A] mt-1">
              88<span className="text-xs sm:text-sm font-sans text-slate-400">/100</span>
            </div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden">
              <div className="bg-emerald-600 h-full rounded-full" style={{ width: "88%" }}></div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#ECE5D8] shadow-2xs">
            <span className="text-[10px] sm:text-[10.5px] font-bold tracking-wider uppercase text-slate-400 block truncate">
              4. GIẢI PHÁP NGHIỆP VỤ
            </span>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-[#0F172A] mt-1">
              80<span className="text-xs sm:text-sm font-sans text-slate-400">/100</span>
            </div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden">
              <div className="bg-[#C69214] h-full rounded-full" style={{ width: "80%" }}></div>
            </div>
          </div>
        </section>

        {/* 4. Radar Chart & Detailed AI Analysis Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column: Visual Radar Chart SVG */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#ECE5D8] shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="font-serif font-bold text-[17px] text-[#0F172A] mb-1">
                Biểu Đồ Năng Lực Phản Xạ
              </h3>
              <p className="text-[12px] text-slate-500 mb-6 leading-relaxed">
                Biểu diễn tương quan 4 trụ cột nghiệp vụ Service Fine Dining Michelin qua thuật toán phân tích ngữ âm &amp; phản xạ thời gian thực.
              </p>

              {/* Vector SVG Radar Chart */}
              <div className="relative w-full aspect-square max-w-[280px] mx-auto flex items-center justify-center my-4">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  {/* Background concentric diamonds/axes */}
                  <polygon points="100,20 180,100 100,180 20,100" fill="none" stroke="#E2E8F0" strokeWidth="1" />
                  <polygon points="100,45 155,100 100,155 45,100" fill="none" stroke="#E2E8F0" strokeWidth="1" />
                  <polygon points="100,70 130,100 100,130 70,100" fill="none" stroke="#E2E8F0" strokeWidth="1" />
                  <line x1="100" y1="20" x2="100" y2="180" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="20" y1="100" x2="180" y2="100" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="3 3" />

                  {/* Student performance polygon (SOP: 92%, Pitch: 80%, Emotion: 88%, Solution: 80%) */}
                  <polygon
                    points="100,26 164,100 100,170 36,100"
                    fill="#C69214"
                    fillOpacity="0.25"
                    stroke="#C69214"
                    strokeWidth="2.5"
                  />
                  <circle cx="100" cy="26" r="4" fill="#C69214" />
                  <circle cx="164" cy="100" r="4" fill="#C69214" />
                  <circle cx="100" cy="170" r="4" fill="#C69214" />
                  <circle cx="36" cy="100" r="4" fill="#C69214" />
                </svg>

                {/* Axis Labels */}
                <span className="absolute top-0 text-[10.5px] font-bold text-slate-800 bg-white/90 px-1 rounded">SOP 92%</span>
                <span className="absolute right-0 text-[10.5px] font-bold text-slate-800 bg-white/90 px-1 rounded">Giọng 80%</span>
                <span className="absolute bottom-0 text-[10.5px] font-bold text-slate-800 bg-white/90 px-1 rounded">Thấu cảm 88%</span>
                <span className="absolute left-0 text-[10.5px] font-bold text-slate-800 bg-white/90 px-1 rounded">Giải pháp 80%</span>
              </div>
            </div>

            {/* AI Executive Judge Verdict Summary */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mt-4 space-y-2">
              <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                <span>AI EXECUTIVE JUDGE VERDICT</span>
                <span className="text-[#C69214]">EQ Service: 8.8/10</span>
              </div>
              <p className="text-[12.5px] text-slate-700 leading-relaxed italic">
                “Học viên xử lý tình huống rất chuyên nghiệp, giữ vững sự điềm tĩnh chuẩn phong thái 5 sao khi đối diện khách VVIP khắt khe. Việc chủ động nhận diện khiếu nại và đề xuất đo nhiệt độ tại bàn đã xoa dịu 90% sự căng thẳng của thực khách.”
              </p>
            </div>
          </div>

          {/* Right 2 Columns: Strengths, Areas for Improvement, Actionable Advice */}
          <div className="lg:col-span-2 space-y-5">
            {/* 1. Điểm Sáng Thực Hiện */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#ECE5D8] shadow-xs">
              <div className="flex items-center gap-2 text-emerald-700 font-bold text-[15px] mb-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Điểm Sáng Thực Hiện (Key Strengths)</span>
              </div>
              <div className="space-y-3 text-[13px] text-slate-700 leading-relaxed">
                <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-100">
                  <strong className="text-emerald-950 block mb-0.5">Mở đầu tinh tế và thể hiện lòng hiếu khách chuẩn mực:</strong>
                  Nhận lỗi nhanh mà không làm giảm uy tín nhà hàng: <em className="text-slate-900 font-serif">“Dạ kính thưa quý khách, em rất lấy làm tiếc về trải nghiệm vị giác chưa hoàn hảo này của mình...”</em>
                </div>
                <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-100">
                  <strong className="text-emerald-950 block mb-0.5">Nắm vững quy chuẩn kỹ thuật SOP-FNB-04:</strong>
                  Đề xuất kiểm tra nhiệt độ bằng nhiệt kế hồng ngoại laser không tiếp xúc ngay tại bàn trước mặt khách, minh bạch và chuẩn chỉ.
                </div>
                <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-100">
                  <strong className="text-emerald-950 block mb-0.5">Ngữ điệu giọng nói ổn định, phong thái đĩnh đạc:</strong>
                  Tốc độ phát âm duy trì 130 wpm (chuẩn sommelier quốc tế), không bị vỡ thanh hoặc ngắt quãng khi khách truy vấn gắt gao.
                </div>
              </div>
            </div>

            {/* 2. Điểm Cần Khắc Phục */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#ECE5D8] shadow-xs">
              <div className="flex items-center gap-2 text-amber-800 font-bold text-[15px] mb-3">
                <AlertCircle className="w-5 h-5 text-amber-600" />
                <span>Điểm Cần Khắc Phục (Areas for Improvement)</span>
              </div>
              <div className="space-y-3 text-[13px] text-slate-700 leading-relaxed">
                <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-100">
                  <strong className="text-amber-950 block mb-0.5">Giải thích quy trình thử nút bần (Cork Taint / TCA) chưa đủ sâu:</strong>
                  Thiếu bước đề xuất mời Sommelier Trưởng hoặc F&amp;B Director thẩm định mẫu chai thứ hai nếu khách vẫn chưa thực sự an tâm về chất lượng niên vụ. (SOP-FNB-04 Mục 4.2: Điều phối Cấp Quản lý).
                </div>
                <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-100">
                  <strong className="text-amber-950 block mb-0.5">Thời gian phản hồi ở lượt thoại chốt còn ngập ngừng:</strong>
                  Độ trễ ghi nhận 3.2 giây so với tiêu chuẩn phản xạ đàm phán dưới 2 giây. Cần chủ động lấp đầy khoảng lặng bằng ngôn từ tiếp dẫn lịch thiệp.
                </div>
              </div>
            </div>

            {/* 3. Lời Khuyên Thực Chiến */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#ECE5D8] shadow-xs">
              <div className="flex items-center gap-2 text-[#8C6005] font-bold text-[15px] mb-3">
                <Sparkles className="w-5 h-5 text-[#C69214]" />
                <span>Lời Khuyên Thực Chiến Michelin</span>
              </div>
              <div className="space-y-2.5 text-[13px] text-slate-700 leading-relaxed">
                <p>
                  • Khi khách đề cập tới nhiệt độ phục vụ vang đỏ Burgundy (chuẩn 16°C), hãy bổ sung kiến thức về niên vụ (Vintage Character) để tăng tính thuyết phục học thuật trước các Sommelier kỳ cựu.
                </p>
                <p>
                  • Luyện tập thêm bài tập kiểm soát nhịp thở (Box Breathing) trước ca trực để làm chủ khoảng lặng, phản hồi dứt khoát không ngắt nhịp ở những tình huống thử thách.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Manager's Feedback Section (SCR-EMP-04B Integration) */}
        <section className="bg-white rounded-2xl p-5 sm:p-8 border border-[#ECE5D8] shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-[#DFC88A] flex items-center justify-center font-bold text-xs ring-2 ring-[#C69214]/50 shadow-xs shrink-0">
                F&amp;B
              </div>
              <div>
                <h3 className="font-serif font-bold text-[17px] text-[#0F172A]">
                  Đánh Giá Từ Quản Lý Chi Nhánh (Manager&apos;s 1-on-1 Feedback)
                </h3>
                <p className="text-[12px] text-slate-500">
                  Thẩm định bởi <strong>F&amp;B Director</strong> lúc 16:10 • 24/10/2026
                </p>
              </div>
            </div>

            {/* 3 Manager Scores */}
            <div className="flex items-center gap-3 self-start sm:self-auto">
              <div className="text-center px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="text-[10px] font-bold text-slate-400 block uppercase">THÁI ĐỘ</span>
                <span className="text-[15px] font-bold text-[#0F172A]">9.5/10</span>
              </div>
              <div className="text-center px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="text-[10px] font-bold text-slate-400 block uppercase">KIẾN THỨC</span>
                <span className="text-[15px] font-bold text-[#0F172A]">9.0/10</span>
              </div>
              <div className="text-center px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="text-[10px] font-bold text-slate-400 block uppercase">XỬ LÝ KHIẾU NẠI</span>
                <span className="text-[15px] font-bold text-[#0F172A]">8.5/10</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE5D9] text-[13.5px] text-slate-800 leading-relaxed">
            “Long xử lý tình huống đo nhiệt độ hồng ngoại rất chuẩn xác theo SOP-FNB-04. Tuy nhiên ở lượt thoại thứ 3, khi khách đề cập đến lỗi nút bần TCA, em cần chủ động đề xuất mở chai dự phòng ngay thay vì chờ khách yêu cầu thêm một lần nữa. Tác phong giọng nói rất điềm đạm, đáng khen ngợi trong môi trường Grand Dining.”
          </div>
        </section>

        {/* 6. Bottom Action Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-200">
          <Link
            href={APP_ROUTES.EMPLOYEE_ROLEPLAY}
            className="w-full sm:w-auto min-h-[44px] px-5 py-2.5 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl text-[13px] font-semibold text-slate-700 flex items-center justify-center gap-2 shadow-2xs transition"
          >
            <span>Thực hành kịch bản khác</span>
          </Link>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Link
              href={APP_ROUTES.EMPLOYEE_HISTORY}
              className="flex-1 sm:flex-initial min-h-[44px] px-5 py-2.5 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl text-[13px] font-semibold text-slate-700 flex items-center justify-center gap-2 shadow-2xs transition"
            >
              <span>Xem lịch sử luyện tập</span>
            </Link>

            <Link
              href={APP_ROUTES.EMPLOYEE_PRACTICE(id)}
              className="flex-1 sm:flex-initial min-h-[44px] px-6 py-2.5 bg-[#C69214] hover:bg-[#B38210] active:scale-[0.99] text-white font-bold rounded-xl text-[13px] flex items-center justify-center gap-2 shadow-xs transition"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Luyện tập lại</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default RoleplayResultPage;

