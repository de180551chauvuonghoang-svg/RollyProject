"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  FileText, 
  Bot, 
  Search, 
  ChevronDown, 
  BookOpen, 
  Check, 
  Loader2, 
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { ClientHeader } from "@/components/layout/client/ClientHeader";
import { APP_ROUTES } from "@/constants/routes";

interface SopDocument {
  id: string;
  filename: string;
  updatedAt: string;
  format: "PDF" | "DOCX";
  size: string;
  linkedScenarios: string[];
  status: "ready" | "processing";
}

const sopDocsData: SopDocument[] = [
  {
    id: "1",
    filename: "SOP-FNB-01_Nghi-thuc-tiep-don-VVIP.pdf",
    updatedAt: "Cập nhật 2 giờ trước",
    format: "PDF",
    size: "2.4 MB",
    linkedScenarios: ["RP-01"],
    status: "ready"
  },
  {
    id: "2",
    filename: "SOP-FNB-04_Khai-mo-chiet-vang-Decanter.pdf",
    updatedAt: "Cập nhật hôm qua",
    format: "PDF",
    size: "4.8 MB",
    linkedScenarios: ["RP-04"],
    status: "ready"
  },
  {
    id: "3",
    filename: "SOP-FNB-06_Tu-van-Wine-Pairing-Omakase.pdf",
    updatedAt: "Cập nhật 3 ngày trước.",
    format: "PDF",
    size: "8.1 MB",
    linkedScenarios: ["RP-06"],
    status: "processing"
  },
  {
    id: "4",
    filename: "MENU-2024_Thuc-don-Fine-Dining-Mua-Thu.docx",
    updatedAt: "Cập nhật 5 ngày trước",
    format: "DOCX",
    size: "1.6 MB",
    linkedScenarios: ["RP-02", "RP-03"],
    status: "ready"
  },
  {
    id: "5",
    filename: "SOP-FNB-02_Xu-ly-di-ung-thuc-pham.pdf",
    updatedAt: "Cập nhật 1 tuần trước • 45 chunks vector",
    format: "PDF",
    size: "3.2 MB",
    linkedScenarios: ["RP-02"],
    status: "ready"
  },
  {
    id: "6",
    filename: "SOP-FNB-07_Nghe-thuat-Upsell-Vintage-Wine.pdf",
    updatedAt: "Cập nhật 1 tuần trước",
    format: "PDF",
    size: "5.5 MB",
    linkedScenarios: ["RP-07"],
    status: "ready"
  },
  {
    id: "7",
    filename: "SOP-FNB-05_Xu-ly-khach-say-ruou-on-ao.docx",
    updatedAt: "Cập nhật 2 tuần trước",
    format: "DOCX",
    size: "1.2 MB",
    linkedScenarios: ["RP-05"],
    status: "ready"
  }
];

export default function ClientSopLibraryPage() {
  const [selectedFormat, setSelectedFormat] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-6">
      <ClientHeader breadcrumb="Kho Tri thức" />

      {/* Hero Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <h1 className="font-serif text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#0F172A] tracking-tight">
            Kho Tri thức và Tài liệu
          </h1>
          <p className="text-xs sm:text-sm text-[#64748B] max-w-3xl leading-relaxed">
            Quản lý tài liệu nghiệp vụ, thực đơn món &amp; vang, nhúng vector RAG phục vụ huấn luyện AI Role-play chuẩn xác thời gian thực.
          </p>
        </div>

        {/* Right Action: Scenario Dashboard CTA Button (Figma) */}
        <Link
          href={APP_ROUTES.CLIENT_SCENARIOS_DASHBOARD}
          className="min-h-[44px] px-5 py-2.5 bg-[#C69214] hover:bg-[#B07E0F] text-white text-xs sm:text-sm font-bold rounded-xl flex items-center gap-2 shadow-2xs transition self-start md:self-auto cursor-pointer"
        >
          <FileText className="w-4 h-4" />
          <span>Scenario Dashboard</span>
        </Link>
      </div>

      {/* 2 Top Metric Cards (Figma SCR-CLI-01) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        <div className="bg-white border-l-4 border-l-[#C69214] border border-[#ECE5D8] rounded-2xl p-5 shadow-2xs flex items-center justify-between">
          <div>
            <div className="text-xs text-[#64748B] font-medium">Tổng số tài liệu SOP</div>
            <div className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A] mt-1">
              28 <span className="text-sm font-sans font-normal text-slate-500">tài liệu</span>
            </div>
          </div>
          <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 flex items-center justify-center">
            <FileText className="w-5 h-5 text-[#8C6005]" />
          </div>
        </div>

        <div className="bg-white border-l-4 border-l-[#8C6005] border border-[#ECE5D8] rounded-2xl p-5 shadow-2xs flex items-center justify-between">
          <div>
            <div className="text-xs text-[#64748B] font-medium">Kịch bản liên kết</div>
            <div className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A] mt-1">
              12 <span className="text-sm font-sans font-normal text-slate-500">Kịch bản AI</span>
            </div>
          </div>
          <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-[#C69214] flex items-center justify-center">
            <Bot className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="bg-white rounded-2xl p-4 border border-[#ECE5D8] shadow-2xs flex flex-wrap items-center gap-3">
        <button className="w-10 h-10 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 transition cursor-pointer">
          <Search className="w-4 h-4" />
        </button>

        <select
          value={selectedFormat}
          onChange={(e) => setSelectedFormat(e.target.value)}
          className="min-h-[40px] px-3.5 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:border-[#C69214]"
        >
          <option value="all">Định dạng: Tất cả</option>
          <option value="pdf">Định dạng: PDF</option>
          <option value="docx">Định dạng: DOCX</option>
        </select>

        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
          className="min-h-[40px] px-3.5 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:border-[#C69214]"
        >
          <option value="all">Trạng thái: Tất cả</option>
          <option value="ready">Sẵn sàng</option>
          <option value="processing">Đang xử lý</option>
        </select>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="min-h-[40px] px-3.5 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:border-[#C69214]"
        >
          <option value="all">Phân loại: Tất cả</option>
          <option value="fnb">Nghiệp vụ Sommelier &amp; F&amp;B</option>
          <option value="service">Nghi thức Bàn tiệc</option>
          <option value="bar">Quầy Bar &amp; Lounge</option>
        </select>
      </div>

      {/* Table: Danh Sách Tài Liệu SOP */}
      <div className="bg-white border border-[#ECE5D8] rounded-2xl shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-50/70 border-b border-slate-200 text-[10.5px] font-bold tracking-wider uppercase text-slate-500">
                <th className="py-3 px-4 w-10 text-center">
                  <input type="checkbox" className="rounded accent-[#C69214]" />
                </th>
                <th className="py-3 px-4">Tên tài liệu &amp; Mã SOP</th>
                <th className="py-3 px-4 text-center">Định dạng</th>
                <th className="py-3 px-4 text-center">Dung lượng</th>
                <th className="py-3 px-4 text-center">Kịch bản liên kết</th>
                <th className="py-3 px-4 text-center">Trạng thái</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {sopDocsData.map((doc) => (
                <tr key={doc.id} className="hover:bg-[#FAF8F5] transition">
                  <td className="py-3.5 px-4 text-center">
                    <input type="checkbox" className="rounded accent-[#C69214]" />
                  </td>

                  {/* Tên tài liệu & icon */}
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                        doc.format === "PDF" 
                          ? "bg-rose-50 text-rose-600 border border-rose-200" 
                          : "bg-blue-50 text-blue-600 border border-blue-200"
                      }`}>
                        <FileText className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 line-clamp-1">{doc.filename}</div>
                        <div className="text-[11px] text-slate-400 font-normal">{doc.updatedAt}</div>
                      </div>
                    </div>
                  </td>

                  {/* Định dạng */}
                  <td className="py-3.5 px-4 text-center">
                    <span className={`inline-block px-2 py-0.5 rounded text-[10.5px] font-bold ${
                      doc.format === "PDF" 
                        ? "bg-rose-50 text-rose-700 border border-rose-200" 
                        : "bg-blue-50 text-blue-700 border border-blue-200"
                    }`}>
                      {doc.format}
                    </span>
                  </td>

                  {/* Dung lượng */}
                  <td className="py-3.5 px-4 text-center font-medium text-slate-600">
                    {doc.size}
                  </td>

                  {/* Kịch bản liên kết */}
                  <td className="py-3.5 px-4 text-center">
                    <div className="flex items-center justify-center gap-1.5 flex-wrap">
                      {doc.linkedScenarios.map((sc) => (
                        <span 
                          key={sc}
                          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-[10.5px] font-mono font-bold"
                        >
                          <Bot className="w-3 h-3 text-[#C69214]" />
                          <span>{sc}</span>
                        </span>
                      ))}
                    </div>
                  </td>

                  {/* Trạng thái */}
                  <td className="py-3.5 px-4 text-center">
                    {doc.status === "ready" ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-50 text-[#8C6005] border border-amber-200 text-[11px] font-bold">
                        <span className="w-2 h-2 rounded-full bg-[#C69214]" />
                        Sẵn sàng
                      </span>
                    ) : (
                      <div className="inline-flex flex-col items-center">
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-700">
                          <Loader2 className="w-3 h-3 animate-spin text-[#C69214]" />
                          Đang xử lý
                        </span>
                        <div className="w-20 bg-slate-100 h-1 rounded-full mt-1 overflow-hidden">
                          <div className="bg-[#C69214] h-full w-2/3 rounded-full animate-pulse" />
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-[#ECE5D8] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            Hiển thị <strong>1 - 7</strong> trong tổng số <strong>28</strong> tài liệu SOP
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
              4
            </button>
            <button className="px-3 py-1 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600">
              Tiếp
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Info Banner: Cơ chế nhúng Vector & RAG Fine-Dining AI (Figma SCR-CLI-01) */}
      <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-5 sm:p-6 flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 text-[#C69214] shadow-2xs">
          <BookOpen className="w-5 h-5" />
        </div>
        <div className="space-y-1">
          <h3 className="font-serif font-bold text-sm sm:text-base text-[#0F172A]">
            Cơ chế nhúng Vector &amp; RAG Fine-Dining AI
          </h3>
          <p className="text-xs text-[#64748B] leading-relaxed max-w-4xl">
            Mỗi đoạn tài liệu được chia tách thông minh theo cấu trúc tiêu chuẩn nhà hàng (Menu item, Pairing note, Kỹ thuật rót rượu, Quy trình ứng xử). Dữ liệu RAG giúp chatbot role-play phản hồi mượt mà không bị ảo giác kiến thức.
          </p>
        </div>
      </div>
    </div>
  );
}
