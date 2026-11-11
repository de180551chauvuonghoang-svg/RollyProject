"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Search, 
  Filter, 
  ArrowLeft, 
  Download, 
  UserCheck, 
  ShieldCheck, 
  ChevronRight, 
  Building2, 
  Award, 
  Mail, 
  Phone
} from "lucide-react";
import { ClientHeader } from "@/components/layout/client/ClientHeader";
import { APP_ROUTES } from "@/constants/routes";

interface FullEmployee {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  department: string;
  branch: string;
  completedLessons: number;
  totalLessons: number;
  avgAiScore: number;
  status: "verified" | "training" | "pending";
}

const allEmployeesData: FullEmployee[] = [
  { id: "1", name: "Nguyễn Hoàng Long", email: "hoanglong.sommelier@thelandmark.com", phone: "0901 111 222", role: "Head Sommelier", department: "F&B / Sommelier", branch: "Landmark 81", completedLessons: 14, totalLessons: 18, avgAiScore: 84.2, status: "verified" },
  { id: "2", name: "Trần Mai Anh", email: "maianh.captain@thelandmark.com", phone: "0902 333 444", role: "Captain (Trưởng ca)", department: "F&B / Phục vụ", branch: "Landmark 81", completedLessons: 15, totalLessons: 18, avgAiScore: 82.0, status: "verified" },
  { id: "3", name: "Lê Quốc Bảo", email: "quocbao.bar@thelandmark.com", phone: "0903 555 666", role: "Bartender Specialist", department: "Quầy Bar & Lounge", branch: "Thảo Điền", completedLessons: 11, totalLessons: 18, avgAiScore: 76.5, status: "training" },
  { id: "4", name: "Phạm Thùy Linh", email: "thuylinh.host@thelandmark.com", phone: "0904 777 888", role: "Hostess Trưởng", department: "Lễ tân & Tiền sảnh", branch: "Quận 1", completedLessons: 12, totalLessons: 18, avgAiScore: 88.0, status: "verified" },
  { id: "5", name: "Võ Minh Đức", email: "minhduc.runner@thelandmark.com", phone: "0905 999 000", role: "Food Runner / Phụ bàn", department: "F&B / Phục vụ", branch: "Landmark 81", completedLessons: 6, totalLessons: 18, avgAiScore: 71.0, status: "training" },
  { id: "6", name: "Đặng Mỹ Duyên", email: "myduyen.service@thelandmark.com", phone: "0908 123 456", role: "F&B Waitress", department: "F&B / Phục vụ", branch: "Thảo Điền", completedLessons: 3, totalLessons: 18, avgAiScore: 65.0, status: "training" },
  { id: "7", name: "Ngô Quang Hải", email: "quanghai.chef@thelandmark.com", phone: "0918 222 333", role: "Sous Chef", department: "Bếp Nóng", branch: "Quận 1", completedLessons: 16, totalLessons: 18, avgAiScore: 92.5, status: "verified" },
  { id: "8", name: "Vũ Khánh Linh", email: "khanhlinh.bar@thelandmark.com", phone: "0977 444 555", role: "Mixologist", department: "Quầy Bar & Lounge", branch: "Thảo Điền", completedLessons: 9, totalLessons: 18, avgAiScore: 79.0, status: "training" }
];

export default function AllEmployeesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("all");
  const [selectedDept, setSelectedDept] = useState("all");

  const filtered = allEmployeesData.filter(e => {
    const matchesSearch = e.name.toLowerCase().includes(searchTerm.toLowerCase()) || e.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBranch = selectedBranch === "all" || e.branch === selectedBranch;
    const matchesDept = selectedDept === "all" || e.department.includes(selectedDept);
    return matchesSearch && matchesBranch && matchesDept;
  });

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <ClientHeader breadcrumb="Quản lý nhân sự / Toàn bộ nhân sự" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Link 
              href={APP_ROUTES.CLIENT_EMPLOYEES} 
              className="text-xs font-semibold text-[#64748B] hover:text-[#C69214] flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Quản lý nhân sự
            </Link>
          </div>
          <h1 className="font-serif text-xl sm:text-2xl lg:text-[28px] font-bold text-[#0F172A] tracking-tight">
            Danh Mục Toàn Bộ Nhân Sự Chuỗi ({filtered.length} / {allEmployeesData.length})
          </h1>
          <p className="text-xs sm:text-sm text-[#64748B]">
            Bảng theo dõi tổng thể toàn bộ nhân viên các chi nhánh Landmark 81, Thảo Điền và Quận 1.
          </p>
        </div>

        <button
          type="button"
          onClick={() => alert("Đang xuất danh sách nhân sự định dạng Excel (.xlsx)")}
          className="min-h-[44px] px-4 py-2.5 bg-white border border-[#CBD5E1] hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold rounded-xl flex items-center gap-2 transition cursor-pointer self-start sm:self-auto"
        >
          <Download className="w-4 h-4 text-[#C69214]" />
          <span>Xuất báo cáo Excel</span>
        </button>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-2xl p-4 border border-[#ECE5D8] shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Tìm theo tên, chức vụ, email..."
            className="w-full min-h-[44px] pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#C69214] transition"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Branch filter */}
          <select
            value={selectedBranch}
            onChange={(e) => setSelectedBranch(e.target.value)}
            className="min-h-[40px] px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:border-[#C69214]"
          >
            <option value="all">Tất cả chi nhánh</option>
            <option value="Landmark 81">Chi nhánh Landmark 81</option>
            <option value="Thảo Điền">Chi nhánh Thảo Điền</option>
            <option value="Quận 1">Chi nhánh Quận 1</option>
          </select>

          {/* Department filter */}
          <select
            value={selectedDept}
            onChange={(e) => setSelectedDept(e.target.value)}
            className="min-h-[40px] px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:border-[#C69214]"
          >
            <option value="all">Tất cả bộ phận</option>
            <option value="F&B">F&B / Sommelier</option>
            <option value="Bar">Quầy Bar & Lounge</option>
            <option value="Lễ tân">Lễ tân & Tiền sảnh</option>
            <option value="Bếp">Bộ phận Bếp</option>
          </select>
        </div>
      </div>

      {/* Employees Table */}
      <div className="bg-white rounded-2xl border border-[#ECE5D8] shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-[10.5px] font-bold tracking-wider uppercase text-slate-400">
                <th className="py-3 px-4">Nhân viên</th>
                <th className="py-3 px-4">Vị trí &amp; Chi nhánh</th>
                <th className="py-3 px-4 text-center">Tiến độ SOP</th>
                <th className="py-3 px-4 text-center">Điểm TB AI</th>
                <th className="py-3 px-4 text-center">Kiểm định</th>
                <th className="py-3 px-4 text-right">Chi tiết</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((emp) => (
                <tr key={emp.id} className="hover:bg-[#FAF8F5] transition">
                  <td className="py-3.5 px-4 font-semibold text-slate-900">
                    <div className="font-bold text-[#0F172A]">{emp.name}</div>
                    <div className="text-[11.5px] text-slate-400 font-normal">{emp.email}</div>
                  </td>

                  <td className="py-3.5 px-4">
                    <div className="font-medium text-[#0F172A]">{emp.role}</div>
                    <div className="text-[11.5px] text-[#8C6005] flex items-center gap-1 font-semibold">
                      <Building2 className="w-3 h-3" /> {emp.branch}
                    </div>
                  </td>

                  <td className="py-3.5 px-4 text-center">
                    <span className="font-semibold text-slate-800">{emp.completedLessons}/{emp.totalLessons} bài</span>
                    <div className="w-24 bg-slate-100 h-1.5 rounded-full mx-auto mt-1 overflow-hidden">
                      <div 
                        className="bg-[#C69214] h-full rounded-full" 
                        style={{ width: `${(emp.completedLessons / emp.totalLessons) * 100}%` }}
                      />
                    </div>
                  </td>

                  <td className="py-3.5 px-4 text-center">
                    <span className="font-bold text-[#C69214]">{emp.avgAiScore}</span>
                    <span className="text-[11px] text-slate-400">/100</span>
                  </td>

                  <td className="py-3.5 px-4 text-center">
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10.5px] font-bold ${
                      emp.status === "verified"
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        : "bg-blue-50 text-blue-700 border border-blue-200"
                    }`}>
                      {emp.status === "verified" ? "Đã kiểm định 5★" : "Đang đào tạo"}
                    </span>
                  </td>

                  <td className="py-3.5 px-4 text-right">
                    <Link
                      href={APP_ROUTES.CLIENT_EMPLOYEE_DETAIL(emp.id)}
                      className="p-1.5 text-slate-400 hover:text-[#C69214] rounded-lg hover:bg-amber-50 transition inline-flex items-center cursor-pointer"
                      title="Xem hồ sơ năng lực & gửi nhận xét"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Link>
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
