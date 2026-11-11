"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Bot, 
  Plus, 
  BarChart3, 
  TrendingUp, 
  Clock, 
  Users, 
  Award, 
  ArrowRight, 
  Filter, 
  Search, 
  Settings2,
  ChevronRight,
  ShieldCheck,
  AlertTriangle
} from "lucide-react";
import { ClientHeader } from "@/components/layout/client/ClientHeader";
import { APP_ROUTES } from "@/constants/routes";

interface ScenarioMetric {
  id: string;
  code: string;
  title: string;
  department: string;
  difficulty: "Dễ" | "Trung bình" | "Thử thách cao";
  persona: string;
  totalSessions: number;
  avgScore: number;
  passRate: number;
  status: "active" | "draft";
}

const scenarioMetrics: ScenarioMetric[] = [
  {
    id: "1",
    code: "SCN-FNB-01",
    title: "Khách VVIP Phàn nàn Chai Vang có mùi ẩm mốc (TCA)",
    department: "F&B / Sommelier",
    difficulty: "Thử thách cao",
    persona: "Jean-Paul (Chuyên gia ẩm thực Pháp khắt khe)",
    totalSessions: 382,
    avgScore: 84.5,
    passRate: 78,
    status: "active"
  },
  {
    id: "2",
    code: "SCN-FNB-02",
    title: "Xử lý Khách VVIP Trễ hẹn 30 Phút & Đổi Bàn tiệc",
    department: "Lễ tân & Tiền sảnh",
    difficulty: "Trung bình",
    persona: "Madame Hélène (Doanh nhân bận rộn)",
    totalSessions: 420,
    avgScore: 88.0,
    passRate: 85,
    status: "active"
  },
  {
    id: "3",
    code: "SCN-FNB-03",
    title: "Tư vấn Pairing Vang Trắng Cho Thực Đơn Omakase Hải Sản",
    department: "F&B / Sommelier",
    difficulty: "Trung bình",
    persona: "Mr. Kenji (Thực khách sành sỏi từ Tokyo)",
    totalSessions: 290,
    avgScore: 86.2,
    passRate: 82,
    status: "active"
  },
  {
    id: "4",
    code: "SCN-BAR-01",
    title: "Khách Say xỉn tại Quầy Bar & Từ chối thanh toán Service Charge",
    department: "Quầy Bar & Lounge",
    difficulty: "Thử thách cao",
    persona: "David (Khách du lịch quốc tế nóng nảy)",
    totalSessions: 215,
    avgScore: 76.8,
    passRate: 68,
    status: "active"
  },
  {
    id: "5",
    code: "SCN-FNB-04",
    title: "Sự cố Bàn Khách Dị ứng Đậu phộng & Đổi món khẩn cấp",
    department: "F&B / Phục vụ",
    difficulty: "Dễ",
    persona: "Gia đình chị Minh Anh (4 khách)",
    totalSessions: 113,
    avgScore: 91.0,
    passRate: 94,
    status: "active"
  }
];

export default function ScenarioDashboardPage() {
  const [selectedDept, setSelectedDept] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = scenarioMetrics.filter(s => {
    const matchesDept = selectedDept === "all" || s.department.includes(selectedDept);
    const matchesSearch = s.title.toLowerCase().includes(searchTerm.toLowerCase()) || s.code.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <ClientHeader breadcrumb="Kịch bản Role-play AI / Dashboard phân tích" />

      {/* Hero Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-xl sm:text-2xl lg:text-[28px] font-bold text-[#0F172A] tracking-tight">
            Scenario Analytics Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-[#64748B]">
            Theo dõi hiệu quả đào tạo phản xạ của nhân sự qua từng kịch bản giả lập trí tuệ nhân tạo.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <Link
            href={APP_ROUTES.CLIENT_SCENARIOS}
            className="min-h-[44px] px-4 py-2.5 bg-white border border-[#ECE5D8] hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold rounded-xl flex items-center gap-2 transition cursor-pointer"
          >
            <Settings2 className="w-4 h-4 text-[#C69214]" />
            <span>Danh mục kịch bản</span>
          </Link>
          <button
            type="button"
            onClick={() => alert("Mở trình tạo kịch bản AI mới")}
            className="min-h-[44px] px-4 py-2.5 bg-[#C69214] hover:bg-[#B07E0F] text-white text-xs sm:text-sm font-bold rounded-xl flex items-center gap-2 shadow-xs transition cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>+ Tạo kịch bản mới</span>
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
        <div className="bg-white border border-[#ECE5D8] rounded-2xl p-5 shadow-xs">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">Tổng kịch bản</span>
            <Bot className="w-5 h-5 text-[#C69214]" />
          </div>
          <div className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A]">16</div>
          <div className="text-[11px] text-emerald-600 font-semibold mt-1">12 đang kích hoạt</div>
        </div>

        <div className="bg-white border border-[#ECE5D8] rounded-2xl p-5 shadow-xs">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">Phiên luyện tập</span>
            <Users className="w-5 h-5 text-[#C69214]" />
          </div>
          <div className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A]">1,420</div>
          <div className="text-[11px] text-emerald-600 font-semibold mt-1">+24% so với tháng trước</div>
        </div>

        <div className="bg-white border border-[#ECE5D8] rounded-2xl p-5 shadow-xs">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">Điểm AI Trung bình</span>
            <Award className="w-5 h-5 text-[#C69214]" />
          </div>
          <div className="font-serif text-2xl sm:text-3xl font-bold text-[#C69214]">83.5<span className="text-sm font-normal text-slate-400">/100</span></div>
          <div className="text-[11px] text-emerald-600 font-semibold mt-1">Đạt chuẩn 5 sao</div>
        </div>

        <div className="bg-white border border-[#ECE5D8] rounded-2xl p-5 shadow-xs">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">Tỷ lệ vượt qua</span>
            <TrendingUp className="w-5 h-5 text-[#C69214]" />
          </div>
          <div className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A]">81.4%</div>
          <div className="text-[11px] text-slate-500 mt-1">Ngưỡng đạt ≥ 80%</div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl p-4 border border-[#ECE5D8] shadow-xs flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Tìm kịch bản theo mã hoặc tên..."
            className="w-full min-h-[44px] pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#C69214] transition"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto">
          {["all", "F&B", "Lễ tân", "Bar"].map((d) => (
            <button
              key={d}
              onClick={() => setSelectedDept(d)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer whitespace-nowrap ${
                selectedDept === d
                  ? "bg-[#0F172A] text-[#E2B755]"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              {d === "all" ? "Tất cả phòng ban" : d}
            </button>
          ))}
        </div>
      </div>

      {/* Scenario Table */}
      <div className="bg-white rounded-2xl border border-[#ECE5D8] shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-[10.5px] font-bold tracking-wider uppercase text-slate-400">
                <th className="py-3 px-4">Kịch bản Role-play</th>
                <th className="py-3 px-4">Persona Khách Hàng</th>
                <th className="py-3 px-4 text-center">Độ khó</th>
                <th className="py-3 px-4 text-center">Lượt thực hành</th>
                <th className="py-3 px-4 text-center">Điểm TB AI</th>
                <th className="py-3 px-4 text-center">Tỷ lệ Đỗ</th>
                <th className="py-3 px-4 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((s) => (
                <tr key={s.id} className="hover:bg-[#FAF8F5] transition">
                  <td className="py-3.5 px-4">
                    <div className="font-bold text-[#0F172A] line-clamp-1">{s.title}</div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="font-mono text-[10.5px] font-bold text-[#8C6005] bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                        {s.code}
                      </span>
                      <span className="text-[11.5px] text-slate-500">{s.department}</span>
                    </div>
                  </td>

                  <td className="py-3.5 px-4 text-slate-700">
                    <div className="text-xs font-medium text-slate-800">{s.persona}</div>
                  </td>

                  <td className="py-3.5 px-4 text-center">
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10.5px] font-bold ${
                      s.difficulty === "Thử thách cao"
                        ? "bg-rose-50 text-rose-700 border border-rose-200"
                        : s.difficulty === "Trung bình"
                        ? "bg-amber-50 text-amber-800 border border-amber-200"
                        : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                    }`}>
                      {s.difficulty}
                    </span>
                  </td>

                  <td className="py-3.5 px-4 text-center font-semibold text-slate-800">
                    {s.totalSessions} lượt
                  </td>

                  <td className="py-3.5 px-4 text-center">
                    <span className="font-bold text-[#C69214]">{s.avgScore}</span>
                    <span className="text-[11px] text-slate-400">/100</span>
                  </td>

                  <td className="py-3.5 px-4 text-center">
                    <span className="font-semibold text-slate-900">{s.passRate}%</span>
                  </td>

                  <td className="py-3.5 px-4 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <Link
                        href={APP_ROUTES.CLIENT_SCENARIO_DETAIL(s.id)}
                        className="p-1.5 text-slate-400 hover:text-[#C69214] rounded-lg hover:bg-amber-50 transition inline-flex items-center cursor-pointer"
                        title="Xem chi tiết kịch bản"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
