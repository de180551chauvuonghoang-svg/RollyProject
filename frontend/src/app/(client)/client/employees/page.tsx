"use client";

import React, { useState } from "react";
import { Search, UserPlus, Filter, Award, Mail, Phone, ChevronRight } from "lucide-react";
import { ClientHeader } from "@/components/layout/client/ClientHeader";

interface StaffMember {
  id: string;
  name: string;
  role: string;
  level: string;
  email: string;
  completedLessons: number;
  totalLessons: number;
  avgScore: number;
  status: "active" | "training";
}

const sampleStaff: StaffMember[] = [
  { id: "1", name: "Nguyễn Hoàng Long", role: "Head Sommelier", level: "Sommelier Level 2", email: "hoanglong.sommelier@thelandmark.com", completedLessons: 14, totalLessons: 18, avgScore: 84.2, status: "active" },
  { id: "2", name: "Trần Mai Anh", role: "Captain (Trưởng ca)", level: "Senior Service", email: "maianh.captain@thelandmark.com", completedLessons: 15, totalLessons: 18, avgScore: 82.0, status: "active" },
  { id: "3", name: "Lê Quốc Bảo", role: "Bartender Specialist", level: "Mixology Lead", email: "quocbao.bar@thelandmark.com", completedLessons: 11, totalLessons: 18, avgScore: 76.5, status: "training" },
  { id: "4", name: "Phạm Thùy Linh", role: "Hostess Trưởng", level: "Front of House", email: "thuylinh.host@thelandmark.com", completedLessons: 12, totalLessons: 18, avgScore: 88.0, status: "active" },
  { id: "5", name: "Võ Minh Đức", role: "Food Runner / Phụ bàn", level: "Junior Staff", email: "minhduc.runner@thelandmark.com", completedLessons: 6, totalLessons: 18, avgScore: 71.0, status: "training" },
];

export function ClientEmployeesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = sampleStaff.filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase()) || s.role.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="space-y-4 sm:space-y-6">
      <ClientHeader breadcrumb="Quản lý nhân sự" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
        <div>
          <h1 className="font-serif text-xl sm:text-2xl lg:text-[28px] font-bold text-[#0F172A] tracking-tight mb-1">
            Danh Sách Nhân Sự &amp; Cấp Bậc (24)
          </h1>
          <p className="text-[13px] sm:text-[13.5px] text-[#64748B]">
            Theo dõi tiến trình đào tạo, bảng điểm kiểm tra thực hành AI Voice và chứng chỉ chuyên môn của từng nhân sự.
          </p>
        </div>

        <button
          type="button"
          onClick={() => alert("Mở form thêm nhân sự mới")}
          className="min-h-[44px] px-4 py-2.5 bg-[#C69214] hover:bg-[#B38210] active:scale-[0.99] text-white font-bold rounded-xl text-[13px] flex items-center gap-2 shadow-xs transition self-start sm:self-auto cursor-pointer"
        >
          <UserPlus className="w-4 h-4" />
          <span>+ Thêm nhân sự</span>
        </button>
      </div>

      {/* Filter and Search */}
      <div className="bg-white rounded-2xl p-4 border border-[#ECE5D8] shadow-xs flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Tìm theo tên nhân viên, vị trí chuyên môn..."
            className="w-full min-h-[44px] pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-[13px] text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#C69214] transition"
          />
        </div>

        <div className="flex items-center gap-2">
          <button className="min-h-[40px] px-3.5 py-1.5 rounded-xl border border-slate-200 bg-white text-[12.5px] font-semibold text-slate-700 flex items-center gap-1.5 hover:bg-slate-50 transition cursor-pointer">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            <span>Tất cả vị trí</span>
          </button>
        </div>
      </div>

      {/* Staff Table */}
      <div className="bg-white rounded-2xl border border-[#ECE5D8] shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-[13.5px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-[10.5px] font-bold tracking-wider uppercase text-slate-400">
                <th className="py-3 px-4">Nhân viên</th>
                <th className="py-3 px-4">Vị trí &amp; Cấp bậc</th>
                <th className="py-3 px-4 text-center">Tiến độ bài học</th>
                <th className="py-3 px-4 text-center">Điểm TB AI</th>
                <th className="py-3 px-4 text-center">Trạng thái</th>
                <th className="py-3 px-4 text-right">Chi tiết</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((staff) => (
                <tr key={staff.id} className="hover:bg-[#FAF8F5] transition">
                  <td className="py-3.5 px-4 font-semibold text-slate-900">
                    <div>{staff.name}</div>
                    <div className="text-[12px] text-slate-400 font-normal">{staff.email}</div>
                  </td>
                  <td className="py-3.5 px-4 text-slate-700">
                    <div className="font-medium">{staff.role}</div>
                    <div className="text-[11.5px] text-[#8C6005] font-semibold">{staff.level}</div>
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    <span className="font-semibold text-slate-800">{staff.completedLessons}/{staff.totalLessons}</span>
                    <div className="w-24 bg-slate-100 h-1.5 rounded-full mx-auto mt-1 overflow-hidden">
                      <div className="bg-[#C69214] h-full rounded-full" style={{ width: `${(staff.completedLessons / staff.totalLessons) * 100}%` }}></div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    <span className="font-bold text-slate-900">{staff.avgScore}</span>
                    <span className="text-[11px] text-slate-400">/100</span>
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                      staff.status === "active" ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-blue-50 text-blue-700 border border-blue-200"
                    }`}>
                      {staff.status === "active" ? "Đã kiểm định" : "Đang đào tạo"}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <button
                      type="button"
                      onClick={() => alert(`Xem chi tiết hồ sơ nhân sự: ${staff.name}`)}
                      className="p-1.5 text-slate-400 hover:text-slate-800 rounded-lg hover:bg-slate-100 transition inline-flex items-center cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
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

export default ClientEmployeesPage;
