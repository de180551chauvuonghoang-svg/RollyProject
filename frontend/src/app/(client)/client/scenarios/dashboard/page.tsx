"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Bot, 
  Download, 
  Plus, 
  Search, 
  ChevronDown, 
  Sparkles, 
  Clock, 
  User, 
  Star,
  FileText
} from "lucide-react";
import { ClientHeader } from "@/components/layout/client/ClientHeader";
import { APP_ROUTES } from "@/constants/routes";

interface ScenarioRow {
  id: string;
  name: string;
  tag: string;
  code: string;
  description: string;
  duration: string;
  guestName: string;
  difficulty: "Khó" | "Trung bình" | "Dễ";
  stars: number;
  badgeStyle: string;
}

const scenariosData: ScenarioRow[] = [
  {
    id: "1",
    name: "Bàn VIP Dị ứng nấm & Đổi món",
    tag: "Fine Dining VIP",
    code: "SCN-VIP-01",
    description: "Khách VIP phàn nàn món nấm Truffle do có dị ứng. Học viên cần xử lý đổi món khéo léo...",
    duration: "8 phút",
    guestName: "Ông Hoàng Long",
    difficulty: "Khó",
    stars: 5,
    badgeStyle: "bg-rose-50 text-rose-700 border border-rose-200"
  },
  {
    id: "2",
    name: "Xử lý Khiếu nại Vang bị chua",
    tag: "Sommelier Service",
    code: "SCN-WINE-04",
    description: "Thực khách phàn nàn vang Burgundy 2015 bị oxy hóa hoặc chua. Thực hành quy trình kiểm định chuyên nghiệp...",
    duration: "6 phút",
    guestName: "Château Margaux 2015",
    difficulty: "Trung bình",
    stars: 3,
    badgeStyle: "bg-amber-50 text-amber-800 border border-amber-200"
  },
  {
    id: "3",
    name: "Nghệ thuật Upsell Tráng miệng & Digestif",
    tag: "Revenue & Upsell",
    code: "SCN-UPS-02",
    description: "Gợi ý kết hợp bánh Soufflé Chocolate với ly Sauternes hoặc Cognac cổ điển để tăng doanh thu bàn...",
    duration: "5 phút",
    guestName: "Soufflé & Cognac",
    difficulty: "Dễ",
    stars: 2,
    badgeStyle: "bg-emerald-50 text-emerald-700 border border-emerald-200"
  }
];

export default function ScenarioDashboardPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSort, setSelectedSort] = useState("newest");
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="space-y-6">
      <ClientHeader breadcrumb="Kịch bản &amp; Prompt AI > Scenario Dashboard" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <h1 className="font-serif text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#0F172A] tracking-tight">
            Scenario Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-[#64748B] max-w-3xl leading-relaxed">
            Danh sách các kịch bản nhập vai AI thực chiến do cơ sở cấu hình
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2.5 self-start md:self-auto">
          <button
            type="button"
            onClick={() => alert("Đang xuất báo cáo kịch bản")}
            className="min-h-[42px] px-4 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold rounded-xl flex items-center gap-2 transition cursor-pointer"
          >
            <Download className="w-4 h-4 text-slate-500" />
            <span>Xuất Báo cáo</span>
          </button>

          <Link
            href={APP_ROUTES.CLIENT_SCENARIOS}
            className="min-h-[42px] px-4 py-2 bg-[#C69214] hover:bg-[#B07E0F] text-white text-xs sm:text-sm font-bold rounded-xl flex items-center gap-2 shadow-2xs transition cursor-pointer"
          >
            <span>New Scenario</span>
          </Link>
        </div>
      </div>

      {/* 2 Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        <div className="bg-white border border-[#ECE5D8] rounded-2xl p-5 shadow-2xs">
          <div className="text-xs text-[#64748B] font-medium">Tổng số kịch bản</div>
          <div className="font-serif text-3xl sm:text-4xl font-bold text-[#0F172A] mt-1">12</div>
        </div>

        <div className="bg-white border border-[#ECE5D8] rounded-2xl p-5 shadow-2xs">
          <div className="text-xs text-[#64748B] font-medium">Lượt thực hành AI tuần này</div>
          <div className="font-serif text-3xl sm:text-4xl font-bold text-[#0F172A] mt-1">
            142 <span className="text-sm font-sans font-normal text-slate-500">phiên gọi</span>
          </div>
        </div>
      </div>

      {/* Filter Row */}
      <div className="bg-white rounded-2xl p-4 border border-[#ECE5D8] shadow-2xs flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2.5 flex-1">
          <div className="relative flex-1 sm:max-w-xs">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search scenarios..."
              className="w-full min-h-[38px] pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#C69214]"
            />
          </div>

          <select
            value={selectedSort}
            onChange={(e) => setSelectedSort(e.target.value)}
            className="min-h-[38px] px-3.5 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:border-[#C69214]"
          >
            <option value="newest">Sort by: Mới nhất</option>
            <option value="oldest">Sort by: Cũ nhất</option>
            <option value="popular">Sort by: Lượt thực hành</option>
          </select>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="min-h-[38px] px-3.5 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:border-[#C69214]"
          >
            <option value="all">Tất cả danh mục</option>
            <option value="vip">Fine Dining VIP</option>
            <option value="sommelier">Sommelier Service</option>
            <option value="upsell">Revenue &amp; Upsell</option>
          </select>
        </div>

        <div className="text-xs text-slate-400 text-right">
          Hiển thị <strong>3</strong> kịch bản mẫu
        </div>
      </div>

      {/* Scenario Table (Figma SCR-CLI-06) */}
      <div className="bg-white border border-[#ECE5D8] rounded-2xl shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-50/70 border-b border-slate-200 text-[10.5px] font-bold tracking-wider uppercase text-slate-400">
                <th className="py-3 px-5 w-1/4">NAME</th>
                <th className="py-3 px-5 w-1/2">DESCRIPTION</th>
                <th className="py-3 px-5 text-center">DIFFICULTY</th>
                <th className="py-3 px-5 text-right">ACTION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {scenariosData.map((s) => (
                <tr key={s.id} className="hover:bg-[#FAF8F5] transition">
                  {/* Name & Tag */}
                  <td className="py-4 px-5 align-top">
                    <Link 
                      href={APP_ROUTES.CLIENT_SCENARIO_DETAIL(s.id)}
                      className="font-bold text-[#0F172A] hover:text-[#C69214] text-sm leading-snug block transition"
                    >
                      {s.name}
                    </Link>
                    <span className="inline-block mt-1 px-2 py-0.5 rounded bg-amber-50 border border-amber-200 text-[#8C6005] font-mono text-[10.5px] font-bold">
                      {s.tag} • {s.code}
                    </span>
                  </td>

                  {/* Description */}
                  <td className="py-4 px-5 align-top">
                    <p className="text-xs text-slate-600 leading-relaxed mb-2">
                      {s.description}
                    </p>
                    <div className="flex items-center gap-3 text-[11px] text-slate-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400" /> Thời lượng: {s.duration}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3 text-slate-400" /> Khách VIP: {s.guestName}
                      </span>
                    </div>
                  </td>

                  {/* Difficulty stars pill */}
                  <td className="py-4 px-5 text-center align-top">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${s.badgeStyle}`}>
                      {"★".repeat(s.stars)}{"☆".repeat(5 - s.stars)} {s.difficulty}
                    </span>
                  </td>

                  {/* Action */}
                  <td className="py-4 px-5 text-right align-top">
                    <div className="flex items-center justify-end gap-3 text-xs font-semibold">
                      <Link 
                        href={APP_ROUTES.CLIENT_SCENARIO_EDIT(s.id)}
                        className="text-[#C69214] hover:underline cursor-pointer"
                      >
                        Edit
                      </Link>
                      <button 
                        type="button"
                        onClick={() => alert(`Xóa kịch bản: ${s.name}`)}
                        className="text-rose-600 hover:underline cursor-pointer"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 sm:p-5 border-t border-[#ECE5D8] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            Hiển thị <strong>1 - 3</strong> trên tổng số <strong>12</strong> kịch bản đào tạo
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
            <button className="px-3 py-1 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600">
              Sau
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Sync Banner (Figma SCR-CLI-06) */}
      <div className="bg-[#FFFDF7] border border-[#F1E8D2] rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-[#C69214] text-white flex items-center justify-center shrink-0 shadow-2xs">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif font-bold text-sm sm:text-base text-[#0F172A]">
              Đồng bộ tự động sang Phòng luyện tập Học viên (SCR-EMP-02B)
            </h3>
            <p className="text-xs text-[#64748B]">
              Mỗi thay đổi nội dung kịch bản sẽ được AI Voice Persona cập nhật tức thì cho Sommelier &amp; Waitstaff.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <Link
            href={APP_ROUTES.CLIENT_SOP}
            className="min-h-[40px] px-3.5 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-xl transition cursor-pointer"
          >
            Xem tài liệu SOP
          </Link>
          <button
            type="button"
            onClick={() => alert("Đang kích hoạt đồng bộ toàn bộ kịch bản AI")}
            className="min-h-[40px] px-4 py-2 bg-[#8C6005] hover:bg-[#704C03] text-white text-xs font-bold rounded-xl shadow-2xs transition cursor-pointer"
          >
            Đồng bộ ngay
          </button>
        </div>
      </div>
    </div>
  );
}
