"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Search, 
  Filter, 
  Calendar, 
  Clock, 
  Award, 
  CheckCircle2, 
  ChevronRight, 
  MessageSquare, 
  TrendingUp, 
  ArrowUpRight,
  RotateCcw
} from "lucide-react";
import { EmployeeHeader } from "@/components/layout/employee/EmployeeHeader";
import { APP_ROUTES } from "@/constants/routes";

interface HistorySession {
  id: string;
  scenarioCode: string;
  scenarioTitle: string;
  guestName: string;
  date: string;
  duration: string;
  turns: number;
  score: number;
  status: "passed" | "needs_review";
  managerComment?: string;
  managerName?: string;
}

const historyData: HistorySession[] = [
  {
    id: "2",
    scenarioCode: "SOP-FNB-04",
    scenarioTitle: "Xử lý Khiếu nại Vang bị chua & Nhiệt độ sai",
    guestName: "Jean-Paul (Master Sommelier)",
    date: "24/10/2026 lúc 16:10",
    duration: "04:31",
    turns: 8,
    score: 85,
    status: "passed",
    managerComment: "Long xử lý tình huống đo nhiệt độ hồng ngoại rất chuẩn xác theo SOP-FNB-04. Tuy nhiên cần chủ động đề xuất mở chai dự phòng ngay khi khách thắc mắc về lỗi nút bần TCA.",
    managerName: "F&B Director",
  },
  {
    id: "1",
    scenarioCode: "SOP-FNB-07",
    scenarioTitle: "Bàn VIP Dị ứng nấm & Đổi món đột xuất",
    guestName: "Mr. Arthur Vance (VVIP Khắt khe)",
    date: "22/10/2026 lúc 14:25",
    duration: "06:12",
    turns: 10,
    score: 88,
    status: "passed",
    managerComment: "Kỹ năng xoa dịu rất tốt, kết nối khẩn cấp với Bếp trưởng nhanh gọn trong 45 giây.",
    managerName: "Restaurant Manager",
  },
  {
    id: "3",
    scenarioCode: "SOP-UPSELL-02",
    scenarioTitle: "Nghệ thuật Upsell Tráng miệng & Rượu Digestif",
    guestName: "Madame Hélène (Visitor, Easy)",
    date: "19/10/2026 lúc 18:05",
    duration: "05:40",
    turns: 6,
    score: 92,
    status: "passed",
    managerComment: "Tuyệt vời! Gợi ý rượu vang ngọt Sauternes kết hợp bánh Soufflé rất tinh tế, tăng giá trị bàn tiệc.",
    managerName: "Head Sommelier Senior",
  },
  {
    id: "4",
    scenarioCode: "SOP-FNB-01",
    scenarioTitle: "Nghi thức Đón tiếp & Khách VVIP Trễ hẹn 30 Phút",
    guestName: "Ông Nguyễn (Khách vãng lai)",
    date: "15/10/2026 lúc 11:30",
    duration: "07:15",
    turns: 8,
    score: 78,
    status: "needs_review",
    managerComment: "Cần chú ý giữ nụ cười và ngôn ngữ hình thể khi thuyết phục khách di chuyển sang Lounge.",
    managerName: "Hostess Supervisor",
  },
];

export function HistoryPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = historyData.filter((item) =>
    item.scenarioTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.scenarioCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.guestName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4 sm:space-y-6">
      <EmployeeHeader breadcrumb="Lịch sử & Đánh giá" />

      {/* 1. Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
        <div>
          <h1 className="font-serif text-xl sm:text-2xl lg:text-[28px] font-bold text-[#0F172A] tracking-tight mb-1">
            Lịch Sử Luyện Tập &amp; Đánh Giá Năng Lực
          </h1>
          <p className="text-[13px] sm:text-[13.5px] text-[#64748B] leading-relaxed">
            Hồ sơ lưu trữ các phiên thực hành thoại AI Voice, tích hợp nhận xét 1-1 từ Quản lý chi nhánh và hội đồng chuyên môn.
          </p>
        </div>

        <Link
          href={APP_ROUTES.EMPLOYEE_ROLEPLAY}
          className="self-start sm:self-auto min-h-[44px] px-4 py-2.5 bg-[#C69214] hover:bg-[#B38210] active:scale-[0.99] text-white font-bold rounded-xl text-[13px] flex items-center gap-2 shadow-xs transition cursor-pointer"
        >
          <span>Luyện tập kịch bản mới</span>
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      {/* 2. Top 3 KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#ECE5D8] shadow-2xs flex items-center justify-between">
          <div>
            <span className="text-[10px] sm:text-[10.5px] font-bold tracking-wider uppercase text-slate-400">
              TỔNG PHIÊN THỰC HÀNH
            </span>
            <div className="text-2xl sm:text-[28px] font-serif font-bold text-[#0F172A] mt-1">
              12 <span className="text-sm font-sans font-medium text-slate-400">phiên</span>
            </div>
            <span className="text-[11px] font-semibold text-emerald-600 mt-1 inline-block">
              100% hoàn thành trọn vẹn
            </span>
          </div>
          <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-[#C69214] shrink-0">
            <Clock className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#ECE5D8] shadow-2xs flex items-center justify-between">
          <div>
            <span className="text-[10px] sm:text-[10.5px] font-bold tracking-wider uppercase text-slate-400">
              ĐIỂM TRUNG BÌNH TÍCH LŨY
            </span>
            <div className="text-2xl sm:text-[28px] font-serif font-bold text-[#0F172A] mt-1">
              84.2 <span className="text-sm font-sans font-medium text-slate-400">/ 100</span>
            </div>
            <span className="text-[11px] font-semibold text-[#8C6005] mt-1 inline-block">
              Xếp hạng: Haute Silver Distinction
            </span>
          </div>
          <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
            <Award className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#ECE5D8] shadow-2xs flex items-center justify-between">
          <div>
            <span className="text-[10px] sm:text-[10.5px] font-bold tracking-wider uppercase text-slate-400">
              NHẬN XÉT TỪ QUẢN LÝ
            </span>
            <div className="text-2xl sm:text-[28px] font-serif font-bold text-[#0F172A] mt-1">
              8 <span className="text-sm font-sans font-medium text-slate-400">phản hồi</span>
            </div>
            <span className="text-[11px] font-semibold text-emerald-600 mt-1 inline-block">
              7 khen ngợi • 1 điểm cần lưu ý
            </span>
          </div>
          <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
            <MessageSquare className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* 3. Search and Filter Bar */}
      <div className="bg-white rounded-2xl p-4 border border-[#ECE5D8] shadow-xs flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Tìm theo tên kịch bản, mã SOP, khách hàng..."
            className="w-full min-h-[44px] pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-[13px] text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#C69214] transition"
          />
        </div>

        <div className="flex items-center gap-2">
          <button className="min-h-[40px] px-3.5 py-1.5 rounded-xl border border-slate-200 bg-white text-[12.5px] font-semibold text-slate-700 flex items-center gap-1.5 hover:bg-slate-50 transition cursor-pointer">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            <span>Tất cả thời gian</span>
          </button>
        </div>
      </div>

      {/* 4. List of Session Cards */}
      <div className="space-y-4">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl p-4 sm:p-6 border border-[#ECE5D8] shadow-xs flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6 hover:shadow-md transition"
          >
            {/* Left Content */}
            <div className="space-y-2 min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md text-[10.5px] font-bold bg-[#FAF6ED] text-[#8C6005] border border-[#EEDFB6]">
                  {item.scenarioCode}
                </span>
                <span className="text-[12px] text-slate-500 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.date}
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-[12px] text-slate-500">
                  Thời lượng: <strong>{item.duration}</strong> ({item.turns} lượt thoại)
                </span>
              </div>

              <h3 className="font-serif font-bold text-[16px] sm:text-[18px] text-[#0F172A] leading-snug">
                {item.scenarioTitle}
              </h3>

              <div className="text-[12.5px] text-slate-600">
                Đối tượng khách: <strong className="text-slate-900">{item.guestName}</strong>
              </div>

              {/* Manager's Comment Box */}
              {item.managerComment && (
                <div className="mt-3 p-3 bg-slate-50 rounded-xl border border-slate-200 text-[12.5px] text-slate-700 leading-relaxed flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-slate-900 text-[#DFC88A] text-[9.5px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    MGR
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block mb-0.5">
                      Nhận xét từ {item.managerName}:
                    </span>
                    <p className="italic">“{item.managerComment}”</p>
                  </div>
                </div>
              )}
            </div>

            {/* Right Score & Actions */}
            <div className="flex sm:flex-col items-center justify-between sm:justify-center gap-3 shrink-0 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-100 min-w-[150px]">
              <div className="text-left sm:text-center">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  ĐIỂM ĐÁNH GIÁ
                </span>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-[#0F172A]">
                  {item.score}<span className="text-xs sm:text-sm font-sans text-slate-400">/100</span>
                </div>
                <span className={`inline-block mt-0.5 px-2 py-0.5 rounded-full text-[10.5px] font-bold ${
                  item.status === "passed"
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                    : "bg-amber-50 text-amber-700 border border-amber-200"
                }`}>
                  {item.status === "passed" ? "Đạt tiêu chuẩn" : "Cần ôn tập thêm"}
                </span>
              </div>

              <div className="flex sm:flex-col items-center gap-2 w-full">
                <Link
                  href={APP_ROUTES.EMPLOYEE_ROLEPLAY_RESULTS(item.id)}
                  className="min-h-[40px] px-4 py-2 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl text-[12.5px] font-semibold text-slate-800 flex items-center justify-center gap-1.5 shadow-2xs transition w-full"
                >
                  <span>Xem báo cáo</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href={APP_ROUTES.EMPLOYEE_PRACTICE(item.id)}
                  className="min-h-[40px] px-4 py-2 bg-[#C69214] hover:bg-[#B38210] active:scale-[0.99] text-white font-bold rounded-xl text-[12px] flex items-center justify-center gap-1.5 shadow-xs transition w-full"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Luyện tập lại</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HistoryPage;
