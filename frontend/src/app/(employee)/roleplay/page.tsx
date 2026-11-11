"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Search, 
  ChevronDown, 
  Play, 
  History, 
  Clock, 
  User, 
  Lightbulb, 
  CheckCircle, 
  Award,
  Sparkles,
  RotateCcw
} from "lucide-react";
import { EmployeeHeader } from "@/components/layout/employee/EmployeeHeader";
import { APP_ROUTES } from "@/constants/routes";

interface ScenarioItem {
  id: string;
  title: string;
  duration: string;
  guestName: string;
  guestPersona: string;
  difficulty: "Easy" | "Medium" | "Hard" | "VVIP";
  description: string;
  sopTag: string;
  actionTag: string;
  recordScore: number | null;
  level: "basic" | "advanced";
}

const scenariosData: ScenarioItem[] = [
  {
    id: "1",
    title: "Bàn VIP Dị ứng nấm & Đổi món đột xuất",
    duration: "~8 - 10 phút",
    guestName: "Mr. Arthur Vance",
    guestPersona: "VVIP, Khắt khe",
    difficulty: "VVIP",
    description: "Khách dùng tiệc Set Menu Tasting phát hiện món sốt Truffle dù đã lưu ý dị ứng. Học viên cần bình tĩnh nhận lỗi, đổi đĩa...",
    sopTag: "SOP-FNB-07: Quản lý Dị ứng",
    actionTag: "Giao tiếp khẩn cấp Bếp trưởng",
    recordScore: null,
    level: "advanced",
  },
  {
    id: "2",
    title: "Xử lý Khiếu nại Vang bị chua & Nhiệt độ sai",
    duration: "~10 - 12 phút",
    guestName: "Jean-Paul",
    guestPersona: "Master, Medium Hard",
    difficulty: "Medium",
    description: "Khách nhận xét chai Burgundy 2015 bị oxy hóa và chua gắt. Học viên thực hiện quy trình nếm kiểm tra chuyên nghiệp,...",
    sopTag: "SOP-FNB-04: Thẩm định vang lỗi",
    actionTag: "Nghi thức đổi chai Meillard Bourgogne",
    recordScore: 85,
    level: "advanced",
  },
  {
    id: "3",
    title: "Nghệ thuật Upsell Tráng miệng & Rượu Digestif",
    duration: "~6 - 8 phút",
    guestName: "Madame Hélène",
    guestPersona: "Visitor, Easy",
    difficulty: "Easy",
    description: "Gợi ý khách kết hợp bánh Soufflé Chocolate với ly rượu vang ngọt Sauternes hoặc Cognac cổ điển để nâng tầm trải nghiệm.",
    sopTag: "SOP-UPSELL-02: Bán thêm tự nhiên",
    actionTag: "Kiến thức Cognac & Port Wine",
    recordScore: 92,
    level: "basic",
  },
  {
    id: "4",
    title: "Nghi thức Đón tiếp & Khách VVIP Trễ hẹn",
    duration: "~5 - 7 phút",
    guestName: "Ông Nguyễn",
    guestPersona: "Khách vãng lai, Hard",
    difficulty: "Hard",
    description: "Khách đến trễ khi bàn đang chuẩn bị cho lượt đặt tiếp theo. Thuyết phục khách chuyển sang khu vực Lounge dùng cocktail.",
    sopTag: "SOP-FNB-01: Chào đón Fine Dining",
    actionTag: "Quản lý thời gian đặt bàn",
    recordScore: null,
    level: "basic",
  },
  {
    id: "5",
    title: "Khách say rượu làm phiền các bàn lân cận",
    duration: "~8 - 10 phút",
    guestName: "Nhóm khách VIP",
    guestPersona: "Say xỉn, Gây ồn ào",
    difficulty: "Hard",
    description: "Khéo léo ngưng phục vụ thêm rượu có cồn một cách tế nhị, đề xuất Mocktail signature và hỗ trợ xe đưa đón an toàn.",
    sopTag: "SOP-SEC-03: Kỹ năng khách say rượu",
    actionTag: "Hạ giọng & Hỗ trợ phương tiện",
    recordScore: null,
    level: "advanced",
  },
  {
    id: "6",
    title: "Tư vấn Vang Trắng & Hải sản Sống Omakase",
    duration: "~7 - 9 phút",
    guestName: "Ông Kenji Sato",
    guestPersona: "Doanh nhân, Hard",
    difficulty: "Hard",
    description: "Khách phân vân giữa Chablis Premier Cru và Sancerre Sauvignon Blanc cho món hàu Belon & cá tuyết nướng. Học viên cần...",
    sopTag: "MAT-WINE-05: Wine Pairing Hải sản",
    actionTag: "Kể chuyện nguồn gốc niên vụ",
    recordScore: null,
    level: "advanced",
  },
];

export function RoleplayPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | "basic" | "advanced">("all");

  const filteredScenarios = scenariosData.filter((s) => {
    const matchSearch = s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        s.guestName.toLowerCase().includes(searchTerm.toLowerCase());
    if (activeTab === "basic") return matchSearch && s.level === "basic";
    if (activeTab === "advanced") return matchSearch && s.level === "advanced";
    return matchSearch;
  });

  return (
    <div className="space-y-4 sm:space-y-6">
      <EmployeeHeader breadcrumb="Kịch bản Role - Play" />

      {/* 1. Header Title & History Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
        <div className="min-w-0">
          <h1 className="font-serif text-xl sm:text-2xl lg:text-[30px] font-bold text-[#0F172A] tracking-tight mb-1">
            Quản lý Kịch bản Role - Play
          </h1>
          <p className="text-[13px] sm:text-[13.5px] text-[#64748B] max-w-2xl leading-relaxed">
            Rèn luyện phản xạ giao tiếp và xử lý tình huống phục vụ thực tế với khách hàng VIP mô phỏng bằng AI Voice đa nhân vật chuẩn phong thái Michelin.
          </p>
        </div>

        <button 
          type="button"
          onClick={() => alert("Chuyển tới Lịch sử 12 phiên luyện tập")}
          className="self-start sm:self-auto min-h-[44px] px-3.5 sm:px-4 py-2.5 bg-white hover:bg-slate-50 border border-[#E2E8F0] rounded-xl text-[12.5px] sm:text-[13px] font-semibold text-[#1E293B] flex items-center gap-2 shadow-2xs transition cursor-pointer shrink-0"
        >
          <History className="w-4 h-4 text-[#A67C1E]" />
          <span>Lịch sử luyện tập &amp; Đánh giá</span>
          <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-[#FAF6ED] text-[#8C6005]">
            12 phiên
          </span>
        </button>
      </div>

      {/* 2. Top 3 KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#EAE5D9] shadow-2xs flex items-center justify-between">
          <div>
            <span className="text-[10px] sm:text-[10.5px] font-bold tracking-wider uppercase text-[#94A3B8]">
              TỔNG KỊCH BẢN KHẢ DỤNG
            </span>
            <div className="text-2xl sm:text-[28px] font-serif font-bold text-[#0F172A] mt-1">16</div>
          </div>
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#FFF9EB] border border-[#F5E6BF] flex items-center justify-center text-[#C69214] shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#EAE5D9] shadow-2xs flex items-center justify-between">
          <div>
            <span className="text-[10px] sm:text-[10.5px] font-bold tracking-wider uppercase text-[#94A3B8]">
              ĐÃ CHINH PHỤC
            </span>
            <div className="text-2xl sm:text-[28px] font-serif font-bold text-[#0F172A] mt-1">
              9 <span className="text-[15px] sm:text-[16px] font-sans font-medium text-[#94A3B8]">/ 16</span>
            </div>
          </div>
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] flex items-center justify-center text-[#16A34A] shrink-0">
            <CheckCircle className="w-5 h-5" />
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#EAE5D9] shadow-2xs flex items-center justify-between">
          <div>
            <span className="text-[10px] sm:text-[10.5px] font-bold tracking-wider uppercase text-[#94A3B8]">
              ĐIỂM TRUNG BÌNH
            </span>
            <div className="text-2xl sm:text-[28px] font-serif font-bold text-[#0F172A] mt-1">
              84.2 <span className="text-[15px] sm:text-[16px] font-sans font-medium text-[#94A3B8]">/ 100</span>
            </div>
          </div>
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#FFF9EB] border border-[#F5E6BF] flex items-center justify-center text-[#C69214] shrink-0">
            <Award className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* 3. Search & Filters Bar */}
      <div className="bg-white rounded-2xl p-3.5 sm:p-4 border border-[#EAE5D9] shadow-xs space-y-3 sm:space-y-3.5">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
          {/* Search Box */}
          <div className="relative w-full lg:w-96">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Tìm kiếm tên kịch bản, tình huống..."
              className="w-full min-h-[44px] pl-10 pr-4 py-2 bg-white border border-[#E2E8F0] rounded-xl text-[13px] text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#C69214] transition"
            />
          </div>

          {/* Filter Pills: wrap smoothly on mobile */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 w-full lg:w-auto">
            <button
              onClick={() => setActiveTab("all")}
              className={`min-h-[38px] px-3.5 py-1.5 rounded-xl text-[12px] sm:text-[12.5px] font-bold transition cursor-pointer ${
                activeTab === "all"
                  ? "bg-[#C69214] text-white shadow-xs"
                  : "bg-slate-50 text-[#64748B] hover:bg-slate-100"
              }`}
            >
              Tất cả (16)
            </button>
            <button
              onClick={() => setActiveTab("basic")}
              className={`min-h-[38px] px-3.5 py-1.5 rounded-xl text-[12px] sm:text-[12.5px] font-semibold transition cursor-pointer ${
                activeTab === "basic"
                  ? "bg-[#C69214] text-white shadow-xs"
                  : "bg-slate-50 text-[#64748B] hover:bg-slate-100"
              }`}
            >
              Cơ bản (1-2 sao) 4
            </button>
            <button
              onClick={() => setActiveTab("advanced")}
              className={`min-h-[38px] px-3.5 py-1.5 rounded-xl text-[12px] sm:text-[12.5px] font-semibold transition cursor-pointer ${
                activeTab === "advanced"
                  ? "bg-[#C69214] text-white shadow-xs"
                  : "bg-slate-50 text-[#64748B] hover:bg-slate-100"
              }`}
            >
              Nâng cao (3 sao) 6
            </button>
          </div>
        </div>

        {/* 3 Dropdowns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-2 border-t border-[#F1EFEA]">
          <div className="relative">
            <select className="w-full min-h-[42px] appearance-none pl-3.5 pr-8 py-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-[12px] sm:text-[12.5px] text-[#475569] font-medium focus:outline-none cursor-pointer truncate">
              <option>Nghiệp vụ: Tất cả</option>
              <option>Sommelier / Rượu vang</option>
              <option>Tiếp tân / Đặt bàn</option>
              <option>Xử lý sự cố Fine Dining</option>
            </select>
            <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8] pointer-events-none" />
          </div>

          <div className="relative">
            <select className="w-full min-h-[42px] appearance-none pl-3.5 pr-8 py-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-[12px] sm:text-[12.5px] text-[#475569] font-medium focus:outline-none cursor-pointer truncate">
              <option>Nhân vật AI: Tất cả hình tượng</option>
              <option>Khách VVIP khó tính</option>
              <option>Chuyên gia nếm rượu</option>
              <option>Doanh nhân bận rộn</option>
            </select>
            <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8] pointer-events-none" />
          </div>

          <div className="relative">
            <select className="w-full min-h-[42px] appearance-none pl-3.5 pr-8 py-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-[12px] sm:text-[12.5px] text-[#475569] font-medium focus:outline-none cursor-pointer truncate">
              <option>Trạng thái: Tất cả</option>
              <option>Chưa luyện tập</option>
              <option>Đã đạt điểm xuất sắc (&gt;80)</option>
            </select>
            <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8] pointer-events-none" />
          </div>
        </div>
      </div>

      {/* 4. Grid of Scenario Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {filteredScenarios.map((scenario) => (
          <div
            key={scenario.id}
            className="bg-white rounded-2xl p-4 sm:p-5 border border-[#ECE5D8] shadow-xs flex flex-col justify-between hover:shadow-md transition group"
          >
            <div>
              {/* Card Title */}
              <h3 className="font-serif font-bold text-[15px] sm:text-[16px] text-[#0F172A] leading-snug mb-3 group-hover:text-[#A67C1E] transition">
                {scenario.title}
              </h3>

              {/* Meta: Duration & Persona */}
              <div className="space-y-1.5 mb-3 text-[12px] sm:text-[12.5px] text-[#64748B]">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#94A3B8] shrink-0" />
                  <span>Thời lượng ước tính: <strong className="text-[#0F172A]">{scenario.duration}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-3.5 h-3.5 text-[#94A3B8] shrink-0" />
                  <span>
                    Đối tượng: <strong className="text-[#0F172A]">{scenario.guestName}</strong>
                    <span className="mx-1.5 text-slate-300">•</span>
                    Đặc điểm: <strong className="text-[#C69214]">{scenario.guestPersona}</strong>
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-[12.5px] sm:text-[13px] text-[#64748B] line-clamp-3 leading-relaxed mb-4">
                {scenario.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                <span className="px-2.5 py-1 rounded-md text-[10.5px] sm:text-[11px] font-semibold bg-[#F8FAFC] border border-[#E2E8F0] text-[#475569]">
                  {scenario.sopTag}
                </span>
                <span className="px-2.5 py-1 rounded-md text-[10.5px] sm:text-[11px] font-semibold bg-[#F8FAFC] border border-[#E2E8F0] text-[#475569]">
                  {scenario.actionTag}
                </span>
              </div>
            </div>

            {/* Bottom Actions & Record Score */}
            <div className="pt-3 border-t border-[#F1EFEA] space-y-2.5">
              <div className="text-center">
                {scenario.recordScore !== null ? (
                  <span className="inline-block px-3 py-0.5 rounded-full text-[10.5px] sm:text-[11px] font-bold bg-[#DCFCE7] text-[#166534] border border-[#BBF7D0]">
                    Kỷ lục điểm số: {scenario.recordScore}/100
                  </span>
                ) : (
                  <span className="text-[11px] sm:text-[11.5px] text-[#94A3B8] font-medium">
                    Kỷ lục điểm số: <span className="italic">Chưa có</span>
                  </span>
                )}
              </div>

              {scenario.recordScore !== null ? (
                <div className="grid grid-cols-2 gap-2">
                  <Link 
                    href={APP_ROUTES.EMPLOYEE_PRACTICE(scenario.id)}
                    className="min-h-[44px] py-2.5 px-3 bg-[#C69214] hover:bg-[#B38210] active:scale-[0.99] text-white rounded-xl text-[12px] sm:text-[12.5px] font-bold flex items-center justify-center gap-1.5 transition shadow-xs cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Luyện tập</span>
                  </Link>
                  <Link 
                    href={APP_ROUTES.EMPLOYEE_ROLEPLAY_RESULTS(scenario.id)}
                    className="min-h-[44px] py-2.5 px-3 bg-white hover:bg-slate-50 border border-[#CBD5E1] rounded-xl text-[12px] sm:text-[12.5px] font-semibold text-[#1E293B] flex items-center justify-center gap-1.5 transition cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-[#64748B]" />
                    <span>Xem lại</span>
                  </Link>
                </div>
              ) : (
                <Link 
                  href={APP_ROUTES.EMPLOYEE_PRACTICE(scenario.id)}
                  className="w-full min-h-[44px] py-2.5 px-4 bg-[#C69214] hover:bg-[#B38210] active:scale-[0.99] text-white rounded-xl text-[12.5px] sm:text-[13px] font-bold flex items-center justify-center gap-2 transition shadow-xs cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Bắt đầu luyện tập</span>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* 5. Pagination Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-[#EAE5D9]">
        <div className="text-[12px] sm:text-[12.5px] text-[#64748B] text-center sm:text-left">
          Hiển thị 1 - 6 trên tổng số 16 kịch bản (Trang 1/3)
        </div>
        <div className="flex items-center gap-1.5">
          <button className="min-h-[36px] min-w-[36px] rounded-lg border border-[#E2E8F0] bg-white flex items-center justify-center text-[13px] text-[#64748B] hover:bg-slate-50 transition cursor-pointer">
            &lt;
          </button>
          <button className="min-h-[36px] min-w-[36px] rounded-lg bg-[#C69214] text-white font-bold flex items-center justify-center text-[13px] shadow-xs">
            1
          </button>
          <button className="min-h-[36px] min-w-[36px] rounded-lg border border-[#E2E8F0] bg-white flex items-center justify-center text-[13px] text-[#64748B] hover:bg-slate-50 transition cursor-pointer">
            2
          </button>
          <button className="min-h-[36px] min-w-[36px] rounded-lg border border-[#E2E8F0] bg-white flex items-center justify-center text-[13px] text-[#64748B] hover:bg-slate-50 transition cursor-pointer">
            3
          </button>
          <button className="min-h-[36px] min-w-[36px] rounded-lg border border-[#E2E8F0] bg-white flex items-center justify-center text-[13px] text-[#64748B] hover:bg-slate-50 transition cursor-pointer">
            &gt;
          </button>
        </div>
      </div>

      {/* 6. Michelin Tip Box */}
      <div className="bg-[#FFFDF7] border border-[#F3E3B8] rounded-2xl p-4 sm:p-5 flex items-start gap-3 sm:gap-4 shadow-2xs">
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#C69214] text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
          <Lightbulb className="w-5 h-5" />
        </div>
        <div className="text-[12.5px] sm:text-[13px] leading-relaxed">
          <h4 className="font-bold text-[#0F172A] mb-1">
            Mẹo luyện tập chuẩn phong thái Michelin
          </h4>
          <p className="text-[#64748B]">
            Hãy nói to, rõ ràng và sử dụng kính ngữ chuẩn mực. Hệ thống AI Voice v3.4 sẽ phân tích <strong>Ngữ điệu giọng nói (Tone of Voice)</strong>, <strong>Độ chuẩn từ ngữ SOP</strong> và <strong>Thời gian phản xạ dưới 3 giây</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default RoleplayPage;
