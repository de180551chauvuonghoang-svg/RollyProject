"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Mail, 
  Download, 
  Search, 
  Store, 
  Utensils, 
  RotateCw, 
  Check, 
  X, 
  ChevronRight, 
  Clock, 
  Award,
  Users
} from "lucide-react";
import { ClientHeader } from "@/components/layout/client/ClientHeader";
import { APP_ROUTES } from "@/constants/routes";

export default function ClientEmployeesPage() {
  const [activeTab, setActiveTab] = useState<"pending" | "active" | "disabled">("pending");
  const [approvedIds, setApprovedIds] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleApprove = (id: string) => {
    setApprovedIds(prev => [...prev, id]);
  };

  const pendingList = [
    {
      id: "1",
      name: "Lê Bảo Trâm",
      email: "tram.le@landmarkdining.vn",
      code: "Mã NV: LMD-2024-089",
      branch: "The Landmark Dining Lounge",
      department: "Dining Room & Banquet Service",
      requestedTime: "10 phút",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
    },
    {
      id: "2",
      name: "Nguyễn Minh Quân",
      email: "quan.nguyen@landmarkdining.vn",
      code: "Mã NV: LMD-2024-090",
      branch: "The Landmark Dining Lounge",
      department: "Beverage & Grand Wine Cellar",
      requestedTime: "45 phút",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
    }
  ];

  const activeEmployees = [
    {
      id: "1",
      name: "Trần Đình Khang",
      roleBadge: "Manager",
      email: "khang.tran@landmarkdining.vn",
      code: "Mã NV: LMD-2024-001",
      branch: "The Landmark Dining Lounge",
      department: "Beverage & Wine Cellar",
      tier: "Tier IV Master",
      tierColor: "bg-[#FEF9C3] text-[#A16207] border border-[#FDE047]",
      score: 98,
      cert: "Grand Table Etiquette",
      hours: "210 Giờ",
      sessionsCount: "45 kịch bản hoàn thành",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
    },
    {
      id: "2",
      name: "Phạm Thảo My",
      roleBadge: "Head Bartender",
      email: "my.pham@landmarkdining.vn",
      code: "Mã NV: LMD-2024-004",
      branch: "The Landmark Dining Lounge",
      department: "Beverage & Wine Cellar",
      tier: "Tier IV Master",
      tierColor: "bg-[#FEF9C3] text-[#A16207] border border-[#FDE047]",
      score: 95,
      cert: "Mixology & Hospitality",
      hours: "142 Giờ",
      sessionsCount: "28 kịch bản hoàn thành",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80"
    },
    {
      id: "3",
      name: "Lê Bảo Trâm",
      roleBadge: "Captain Banquet",
      email: "tram.le@landmarkdining.vn",
      code: "Mã NV: LMD-2024-009",
      branch: "The Landmark Dining Lounge",
      department: "Dining Room & Banquet Service",
      tier: "Tier III Specialist",
      tierColor: "bg-slate-100 text-slate-700 border border-slate-200",
      score: 92,
      cert: "VIP Table Protocol",
      hours: "118 Giờ",
      sessionsCount: "24 kịch bản hoàn thành",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
    },
    {
      id: "4",
      name: "Nguyễn Minh Quân",
      roleBadge: "Wine Specialist",
      email: "quan.nguyen@landmarkdining.vn",
      code: "Mã NV: LMD-2024-090",
      branch: "The Landmark Dining Lounge",
      department: "Beverage & Grand Wine Cellar",
      tier: "Tier II Senior",
      tierColor: "bg-slate-100 text-slate-700 border border-slate-200",
      score: 89,
      cert: "Champagne Service",
      hours: "96 Giờ",
      sessionsCount: "18 kịch bản hoàn thành",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
    },
    {
      id: "5",
      name: "Đỗ Hoàng Yến",
      roleBadge: "Guest Relations",
      email: "yen.do@landmarkdining.vn",
      code: "Mã NV: LMD-2024-112",
      branch: "The Landmark Dining Lounge",
      department: "Front of House & Concierge",
      tier: "Tier III Specialist",
      tierColor: "bg-slate-100 text-slate-700 border border-slate-200",
      score: 94,
      cert: "VIP Host Protocol",
      hours: "155 Giờ",
      sessionsCount: "31 kịch bản hoàn thành",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80"
    },
    {
      id: "6",
      name: "Vũ Đức Nam",
      roleBadge: "Lounge Captain",
      email: "nam.vu@landmarkdining.vn",
      code: "Mã NV: LMD-2024-054",
      branch: "The Landmark Dining Lounge",
      department: "Dining Room & Banquet",
      tier: "Tier III Specialist",
      tierColor: "bg-slate-100 text-slate-700 border border-slate-200",
      score: 91,
      cert: "Caviar & Fine Pairing",
      hours: "126 Giờ",
      sessionsCount: "26 kịch bản hoàn thành",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="space-y-6">
      <ClientHeader breadcrumb="Quản trị nhân sự" />

      {/* Hero Header (Figma SCR-CLI-03) */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <h1 className="font-serif text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#0F172A] tracking-tight">
            Quản trị Nhân sự Nhà hàng
          </h1>
          <p className="text-xs sm:text-sm text-[#64748B] max-w-3xl leading-relaxed">
            Quản lý danh sách nhân sự F&amp;B, xét duyệt tài khoản đăng ký mới và theo dõi chuẩn mực năng lực phục vụ thực hành.
          </p>
        </div>

        {/* Top Right Action Buttons */}
        <div className="flex items-center gap-2.5 self-start md:self-auto">
          <button
            type="button"
            onClick={() => alert("Mở form mời nhân sự qua Email")}
            className="min-h-[42px] px-4 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold rounded-xl flex items-center gap-2 transition cursor-pointer"
          >
            <Mail className="w-4 h-4 text-slate-500" />
            <span>Mời nhân sự qua Email</span>
          </button>

          <button
            type="button"
            onClick={() => alert("Đang xuất báo cáo nhân sự Excel/CSV")}
            className="min-h-[42px] px-4 py-2 bg-[#C69214] hover:bg-[#B07E0F] text-white text-xs sm:text-sm font-bold rounded-xl flex items-center gap-2 shadow-2xs transition cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Xuất báo cáo</span>
          </button>
        </div>
      </div>

      {/* 3 Metric Cards (Figma SCR-CLI-03) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
        {/* Card 1: HỒ SƠ CHỜ PHÊ DUYỆT */}
        <div className="bg-white border border-[#ECE5D8] rounded-2xl p-5 sm:p-6 shadow-2xs">
          <div className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">
            HỒ SƠ CHỜ PHÊ DUYỆT
          </div>
          <div className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-[#8C6005]">
            02 <span className="text-sm font-sans font-normal text-slate-500">yêu cầu mới</span>
          </div>
          <div className="text-xs text-amber-700 font-semibold mt-2 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>Cần phản hồi trong 24h</span>
          </div>
        </div>

        {/* Card 2: ĐANG HOẠT ĐỘNG TRÊN SÀN */}
        <div className="bg-white border border-[#ECE5D8] rounded-2xl p-5 sm:p-6 shadow-2xs">
          <div className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">
            ĐANG HOẠT ĐỘNG TRÊN SÀN
          </div>
          <div className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-[#0F172A]">
            45 <span className="text-sm font-sans font-normal text-slate-500">chuyên viên</span>
          </div>
          <div className="text-xs text-emerald-700 font-semibold mt-2 flex items-center gap-1">
            <Check className="w-3.5 h-3.5" />
            <span>100% hồ sơ định danh chuẩn</span>
          </div>
        </div>

        {/* Card 3: KHẢO SÁT & HUẤN LUYỆN SOP */}
        <div className="bg-white border border-[#ECE5D8] rounded-2xl p-5 sm:p-6 shadow-2xs">
          <div className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">
            KHẢO SÁT &amp; HUẤN LUYỆN SOP
          </div>
          <div className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-[#0F172A]">
            89% <span className="text-sm font-sans font-normal text-slate-500">đạt chuẩn</span>
          </div>
          <div className="text-xs text-slate-500 mt-2">
            ↗ Tỷ lệ hoàn thành Role-play tốt
          </div>
        </div>
      </div>

      {/* Tab Selector Buttons */}
      <div className="flex items-center gap-2 p-1.5 bg-[#F1F4FA] rounded-2xl w-fit">
        <button
          onClick={() => setActiveTab("pending")}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer flex items-center gap-1.5 ${
            activeTab === "pending"
              ? "bg-white text-[#0F172A] shadow-xs"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          <span>Đang chờ duyệt</span>
          <span className="w-5 h-5 rounded-full bg-[#E11D48] text-white text-[11px] font-bold flex items-center justify-center">
            2
          </span>
        </button>

        <button
          onClick={() => setActiveTab("active")}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer flex items-center gap-1.5 ${
            activeTab === "active"
              ? "bg-[#C69214] text-white shadow-xs"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          <span>Đang hoạt động</span>
          <span className="px-1.5 py-0.2 rounded text-[11px]">45</span>
        </button>

        <button
          onClick={() => setActiveTab("disabled")}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer flex items-center gap-1.5 ${
            activeTab === "disabled"
              ? "bg-white text-[#0F172A] shadow-xs"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          <span>Vô hiệu hóa</span>
          <span className="px-1.5 py-0.2 rounded text-[11px]">3</span>
        </button>
      </div>

      {/* Search & Branch Filters Row */}
      <div className="bg-white rounded-2xl p-4 border border-[#ECE5D8] shadow-2xs flex flex-wrap items-center justify-between gap-3">
        <div className="relative flex-1 min-w-[280px]">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Tìm theo tên ứng viên, email nội bộ hoặc mã thẻ nv..."
            className="w-full min-h-[40px] pl-10 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#C69214]"
          />
        </div>

        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700">
            <Store className="w-3.5 h-3.5 text-slate-500" />
            <span>The Landmark Q.1</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700">
            <Utensils className="w-3.5 h-3.5 text-slate-500" />
            <span>Tất cả chức danh (Role)</span>
          </div>

          <button 
            type="button"
            className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-100 transition cursor-pointer"
            title="Làm mới"
          >
            <RotateCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* VIEW 1: ĐANG CHỜ DUYỆT (Figma SCR-CLI-03 & 03B) */}
      {activeTab === "pending" && (
        <div className="space-y-6">
          <div className="bg-white border border-[#ECE5D8] rounded-2xl shadow-2xs overflow-hidden">
            <div className="p-5 border-b border-[#ECE5D8] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#8C6005]" />
                <h2 className="font-serif text-lg font-bold text-[#0F172A]">
                  Danh sách yêu cầu phê duyệt
                </h2>
              </div>
              <span className="text-xs text-slate-400">
                Hiển thị 2 / 2 yêu cầu mới nhất
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-50/70 border-b border-slate-200 text-[10.5px] font-bold tracking-wider uppercase text-slate-400">
                    <th className="py-3 px-5">NHÂN VIÊN</th>
                    <th className="py-3 px-5">CHI NHÁNH &amp; BỘ PHẬN</th>
                    <th className="py-3 px-5 text-center">THỜI GIAN YÊU CẦU</th>
                    <th className="py-3 px-5 text-right">HÀNH ĐỘNG QUYẾT ĐỊNH</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {pendingList.map((p) => {
                    const isApproved = approvedIds.includes(p.id);

                    return (
                      <tr key={p.id} className="hover:bg-[#FAF8F5] transition">
                        {/* Nhân viên */}
                        <td className="py-4 px-5">
                          <div className="flex items-center gap-3">
                            <img 
                              src={p.avatar} 
                              alt={p.name}
                              className="w-10 h-10 rounded-full object-cover shrink-0 border border-slate-200"
                            />
                            <div>
                              <div className="font-bold text-sm text-[#0F172A]">{p.name}</div>
                              <div className="text-[11px] text-slate-400 font-normal">{p.email}</div>
                              <div className="text-[10.5px] text-[#8C6005] font-mono mt-0.5">{p.code}</div>
                            </div>
                          </div>
                        </td>

                        {/* Chi nhánh & bộ phận */}
                        <td className="py-4 px-5">
                          <div className="font-semibold text-slate-800">{p.branch}</div>
                          <div className="text-xs text-slate-500 flex items-center gap-1.5 mt-0.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C69214]" />
                            <span>{p.department}</span>
                          </div>
                        </td>

                        {/* Thời gian */}
                        <td className="py-4 px-5 text-center text-xs font-semibold text-slate-700">
                          <span className="inline-flex items-center gap-1 text-slate-600">
                            <Clock className="w-3.5 h-3.5 text-slate-400" /> {p.requestedTime}
                          </span>
                        </td>

                        {/* Hành động */}
                        <td className="py-4 px-5 text-right">
                          <div className="flex flex-col items-end gap-1.5">
                            <div className="flex items-center gap-2">
                              {isApproved ? (
                                <span className="min-h-[36px] px-4 py-1.5 bg-[#16A34A] text-white text-xs font-bold rounded-xl inline-flex items-center gap-1.5 shadow-2xs">
                                  <Check className="w-4 h-4" />
                                  <span>Đã phê duyệt</span>
                                </span>
                              ) : (
                                <>
                                  <button
                                    type="button"
                                    onClick={() => handleApprove(p.id)}
                                    className="min-h-[36px] px-3.5 py-1.5 bg-[#C69214] hover:bg-[#B07E0F] text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shadow-2xs transition cursor-pointer"
                                  >
                                    <Check className="w-3.5 h-3.5" />
                                    <span>Phê duyệt</span>
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => alert(`Từ chối yêu cầu của ${p.name}`)}
                                    className="min-h-[36px] px-3 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold rounded-xl flex items-center gap-1 transition cursor-pointer"
                                  >
                                    <X className="w-3.5 h-3.5" />
                                    <span>Từ chối</span>
                                  </button>
                                </>
                              )}
                            </div>

                            <Link 
                              href={APP_ROUTES.CLIENT_EMPLOYEE_DETAIL(p.id)}
                              className="text-[11.5px] font-semibold text-[#8C6005] hover:underline flex items-center gap-1 pt-1"
                            >
                              <span>Xem Hồ sơ</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Thành viên đang hoạt động gần đây (Figma SCR-CLI-03) */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-lg font-bold text-[#0F172A]">
                Thành viên đang hoạt động gần đây
              </h3>
              <div className="flex items-center gap-4 text-xs font-semibold">
                <button 
                  type="button" 
                  onClick={() => alert("Xuất file Excel / CSV")}
                  className="text-slate-600 hover:text-slate-900 flex items-center gap-1"
                >
                  <Download className="w-3.5 h-3.5 text-slate-500" />
                  <span>Xuất file Excel /CSV</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("active")}
                  className="text-[#C69214] hover:underline flex items-center gap-1"
                >
                  <span>Xem toàn bộ 45 nhân viên</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Card 1 */}
              <div className="bg-white border border-[#ECE5D8] rounded-2xl p-5 shadow-2xs space-y-4">
                <div className="flex items-center gap-3.5">
                  <img 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80" 
                    alt="Trần Đình Khang" 
                    className="w-12 h-12 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-serif font-bold text-base text-[#0F172A]">Trần Đình Khang</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200">
                        Manager
                      </span>
                    </div>
                    <div className="text-xs text-slate-500">khang.tran@landmarkdining.vn</div>
                    <div className="text-[11px] text-[#8C6005] font-medium">The Landmark Dining Lounge</div>
                  </div>
                </div>

                <div className="p-3 bg-[#F1F4FA] rounded-xl grid grid-cols-3 gap-2 text-center text-xs">
                  <div>
                    <div className="text-[10.5px] text-slate-500">Điểm SOP</div>
                    <div className="font-serif text-base font-bold text-[#0F172A]">98/100</div>
                  </div>
                  <div>
                    <div className="text-[10.5px] text-slate-500">Thời gian thực tế</div>
                    <div className="font-serif text-base font-bold text-[#0F172A]">142 Giờ</div>
                  </div>
                  <div>
                    <div className="text-[10.5px] text-slate-500">Cấp bậc</div>
                    <div className="font-serif text-base font-bold text-[#C69214]">Tier III</div>
                  </div>
                </div>

                <div className="text-xs text-slate-500">
                  Chứng chỉ mới nhất: <strong className="text-slate-800">Grand Table Etiquette Master</strong>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white border border-[#ECE5D8] rounded-2xl p-5 shadow-2xs space-y-4">
                <div className="flex items-center gap-3.5">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80" 
                    alt="Phạm Thảo My" 
                    className="w-12 h-12 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-serif font-bold text-base text-[#0F172A]">Phạm Thảo My</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#FEF9C3] text-[#A16207] border border-[#FDE047]">
                        Head Bartender
                      </span>
                    </div>
                    <div className="text-xs text-slate-500">my.pham@landmarkdining.vn</div>
                    <div className="text-[11px] text-[#8C6005] font-medium">The Landmark Dining Lounge</div>
                  </div>
                </div>

                <div className="p-3 bg-[#F1F4FA] rounded-xl grid grid-cols-3 gap-2 text-center text-xs">
                  <div>
                    <div className="text-[10.5px] text-slate-500">Điểm SOP</div>
                    <div className="font-serif text-base font-bold text-[#0F172A]">95/100</div>
                  </div>
                  <div>
                    <div className="text-[10.5px] text-slate-500">Thời gian thực tế</div>
                    <div className="font-serif text-base font-bold text-[#0F172A]">210 Giờ</div>
                  </div>
                  <div>
                    <div className="text-[10.5px] text-slate-500">Cấp bậc</div>
                    <div className="font-serif text-base font-bold text-[#C69214]">Tier IV</div>
                  </div>
                </div>

                <div className="text-xs text-slate-500">
                  Chứng chỉ mới nhất: <strong className="text-slate-800">Mixology &amp; Hospitality Psychology</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: ĐANG HOẠT ĐỘNG (Figma SCR-CLI-09) */}
      {activeTab === "active" && (
        <div className="bg-white border border-[#ECE5D8] rounded-2xl shadow-2xs overflow-hidden">
          <div className="p-5 border-b border-[#ECE5D8] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
              <h2 className="font-serif text-lg font-bold text-[#0F172A]">
                Danh sách Nhân sự Đang hoạt động <span className="text-xs font-normal text-slate-500 font-sans">(45 nhân viên)</span>
              </h2>
            </div>
            <button 
              type="button" 
              onClick={() => alert("Đang xuất file Excel / CSV")}
              className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center gap-1.5 transition cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-slate-500" />
              <span>Xuất file Excel / CSV</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-50/70 border-b border-slate-200 text-[10.5px] font-bold tracking-wider uppercase text-slate-400">
                  <th className="py-3 px-5">NHÂN VIÊN</th>
                  <th className="py-3 px-5">CHI NHÁNH &amp; BỘ PHẬN</th>
                  <th className="py-3 px-5 text-center">CẤP BẬC (TIER)</th>
                  <th className="py-3 px-5 text-center">ĐIỂM SOP</th>
                  <th className="py-3 px-5 text-center">ROLE-PLAY AI</th>
                  <th className="py-3 px-5 text-right">HÀNH ĐỘNG</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {activeEmployees.map((emp) => (
                  <tr key={emp.id} className="hover:bg-[#FAF8F5] transition">
                    {/* Nhân viên */}
                    <td className="py-4 px-5">
                      <div className="flex items-center gap-3">
                        <img 
                          src={emp.avatar} 
                          alt={emp.name} 
                          className="w-10 h-10 rounded-full object-cover shrink-0 border border-slate-200"
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm text-[#0F172A]">{emp.name}</span>
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200">
                              {emp.roleBadge}
                            </span>
                          </div>
                          <div className="text-[11px] text-slate-400 font-normal">{emp.email}</div>
                          <div className="text-[10.5px] text-[#8C6005] font-mono mt-0.5">{emp.code}</div>
                        </div>
                      </div>
                    </td>

                    {/* Chi nhánh & Bộ phận */}
                    <td className="py-4 px-5">
                      <div className="font-semibold text-slate-800">{emp.branch}</div>
                      <div className="text-xs text-slate-500 flex items-center gap-1.5 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C69214]" />
                        <span>{emp.department}</span>
                      </div>
                    </td>

                    {/* Cấp bậc */}
                    <td className="py-4 px-5 text-center">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${emp.tierColor}`}>
                        {emp.tier}
                      </span>
                    </td>

                    {/* Điểm SOP */}
                    <td className="py-4 px-5 text-center">
                      <div className="font-serif text-base font-bold text-[#0F172A]">
                        {emp.score} <span className="text-xs font-normal text-slate-400">/ 100</span>
                      </div>
                      <div className="text-[10.5px] text-slate-400 mt-0.5">{emp.cert}</div>
                    </td>

                    {/* Role-play AI */}
                    <td className="py-4 px-5 text-center">
                      <div className="font-serif text-sm font-bold text-[#0F172A]">{emp.hours}</div>
                      <div className="text-[10.5px] text-slate-400 mt-0.5">{emp.sessionsCount}</div>
                    </td>

                    {/* Hành động */}
                    <td className="py-4 px-5 text-right">
                      <Link
                        href={APP_ROUTES.CLIENT_EMPLOYEE_DETAIL(emp.id)}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#C69214] hover:underline"
                      >
                        <span>Xem hồ sơ</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="p-4 sm:p-5 border-t border-[#ECE5D8] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <div>
              Hiển thị <strong>1 - 10</strong> trong tổng số <strong>45</strong> nhân viên
            </div>

            <div className="flex items-center gap-1">
              <button className="px-3 py-1 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 disabled:opacity-40">
                &lt;
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
                5
              </button>
              <button className="px-3 py-1 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600">
                &gt;
              </button>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 3: VÔ HIỆU HÓA */}
      {activeTab === "disabled" && (
        <div className="bg-white border border-[#ECE5D8] rounded-2xl p-12 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
            <Users className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-lg font-bold text-[#0F172A]">3 Hồ sơ nhân sự đã tạm dừng</h3>
          <p className="text-xs sm:text-sm text-[#64748B] max-w-md mx-auto">
            Các tài khoản nhân viên đã rời chi nhánh hoặc tạm ngưng đào tạo chuyên sâu.
          </p>
        </div>
      )}
    </div>
  );
}
