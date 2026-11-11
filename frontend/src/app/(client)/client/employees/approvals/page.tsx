"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  UserCheck, 
  UserX, 
  Clock, 
  ShieldCheck, 
  Building2, 
  Mail, 
  Phone, 
  Calendar, 
  Check, 
  X,
  AlertCircle
} from "lucide-react";
import { ClientHeader } from "@/components/layout/client/ClientHeader";
import { APP_ROUTES } from "@/constants/routes";

interface PendingApplicant {
  id: string;
  name: string;
  email: string;
  phone: string;
  branch: string;
  role: string;
  appliedDate: string;
  experienceYears: string;
  notes: string;
}

const initialPending: PendingApplicant[] = [
  {
    id: "app-1",
    name: "Đặng Thị Mỹ Duyên",
    email: "myduyen.applicant@gmail.com",
    phone: "0908 123 456",
    branch: "The Grand Bistro - Chi nhánh Landmark 81",
    role: "Nhân viên Phục vụ (F&B Waitress)",
    appliedDate: "11/11/2026 09:15",
    experienceYears: "2 năm tại Park Hyatt",
    notes: "Có chứng chỉ tiếng Anh giao tiếp IELTS 6.5, mong muốn học thêm Sommelier."
  },
  {
    id: "app-2",
    name: "Trịnh Gia Huy",
    email: "giahuy.bar@outlook.com",
    phone: "0933 888 999",
    branch: "The Grand Bistro - Chi nhánh Thảo Điền",
    role: "Bartender Trainee",
    appliedDate: "10/11/2026 16:40",
    experienceYears: "1 năm tại Envy Bar",
    notes: "Tốt nghiệp khóa Bartender Barista Á Âu, am hiểu các dòng Classic Cocktail."
  },
  {
    id: "app-3",
    name: "Phan Anh Tuấn",
    email: "anhtuan.sommelier@gmail.com",
    phone: "0912 345 678",
    branch: "The Grand Bistro - Chi nhánh Quận 1",
    role: "Sommelier Junior",
    appliedDate: "10/11/2026 11:20",
    experienceYears: "3 năm tại Le Corto",
    notes: "Đang sở hữu chứng chỉ WSET Level 2, xin gia nhập đội ngũ chuyên gia vang."
  }
];

export default function EmployeeApprovalsPage() {
  const [pendingList, setPendingList] = useState<PendingApplicant[]>(initialPending);
  const [selectedApp, setSelectedApp] = useState<PendingApplicant | null>(null);
  const [approvalModalOpen, setApprovalModalOpen] = useState(false);
  const [assignedTrack, setAssignedTrack] = useState("sop-fnb");
  const [actionSuccessMessage, setActionSuccessMessage] = useState<string | null>(null);

  const handleOpenApprove = (app: PendingApplicant) => {
    setSelectedApp(app);
    setApprovalModalOpen(true);
  };

  const handleConfirmApproval = () => {
    if (!selectedApp) return;
    setPendingList(prev => prev.filter(a => a.id !== selectedApp.id));
    setApprovalModalOpen(false);
    setActionSuccessMessage(`Đã phê duyệt tài khoản và cấp quyền cho ${selectedApp.name}!`);
    setTimeout(() => setActionSuccessMessage(null), 4000);
  };

  const handleReject = (app: PendingApplicant) => {
    if (confirm(`Bạn có chắc muốn từ chối yêu cầu tham gia của ${app.name}?`)) {
      setPendingList(prev => prev.filter(a => a.id !== app.id));
      setActionSuccessMessage(`Đã từ chối đơn đăng ký của ${app.name}.`);
      setTimeout(() => setActionSuccessMessage(null), 4000);
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <ClientHeader breadcrumb="Quản lý nhân sự / Phê duyệt tài khoản mới" />

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
            Phê Duyệt Tài Khoản Nhân Sự ({pendingList.length})
          </h1>
          <p className="text-xs sm:text-sm text-[#64748B]">
            Xác minh danh tính, phân quyền chi nhánh và gán lộ trình SOP đào tạo bắt buộc cho nhân viên mới.
          </p>
        </div>
      </div>

      {actionSuccessMessage && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-xs sm:text-sm text-emerald-800 flex items-center gap-2 animate-in fade-in">
          <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>{actionSuccessMessage}</span>
        </div>
      )}

      {/* Applicants List */}
      <div className="space-y-4">
        {pendingList.length === 0 ? (
          <div className="bg-white border border-[#ECE5D8] rounded-2xl p-12 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
              <UserCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#0F172A]">Không còn đơn chờ duyệt</h3>
            <p className="text-xs sm:text-sm text-[#64748B] max-w-md mx-auto">
              Tất cả các tài khoản nhân sự mới đăng ký đã được xử lý hoàn tất.
            </p>
            <Link
              href={APP_ROUTES.CLIENT_EMPLOYEES}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C69214] hover:underline pt-2"
            >
              <span>Về danh sách nhân sự chính thức</span>
            </Link>
          </div>
        ) : (
          pendingList.map((app) => (
            <div 
              key={app.id} 
              className="bg-white border border-[#ECE5D8] rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col lg:flex-row lg:items-center justify-between gap-5 hover:border-[#C69214] transition"
            >
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="w-9 h-9 rounded-xl bg-amber-100 text-[#8C6005] font-bold text-sm flex items-center justify-center">
                    {app.name.split(" ").slice(-1)[0][0]}
                  </span>
                  <div>
                    <h3 className="font-serif font-bold text-base text-[#0F172A]">{app.name}</h3>
                    <div className="text-xs text-[#8C6005] font-semibold">{app.role}</div>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-[11px] font-semibold flex items-center gap-1 ml-auto lg:ml-2">
                    <Clock className="w-3 h-3 text-[#C69214]" /> Chờ duyệt
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 text-xs text-[#64748B] pt-1">
                  <div className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-slate-400" /> {app.email}</div>
                  <div className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-slate-400" /> {app.phone}</div>
                  <div className="flex items-center gap-1.5"><Building2 className="w-3.5 h-3.5 text-slate-400" /> {app.branch}</div>
                </div>

                <div className="p-3 bg-[#FEFCF7] rounded-xl border border-[#ECE5D8] text-xs text-[#475569] space-y-1">
                  <div><strong>Kinh nghiệm:</strong> {app.experienceYears}</div>
                  <div><strong>Ghi chú ứng viên:</strong> {app.notes}</div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-row lg:flex-col gap-2.5 shrink-0 border-t lg:border-t-0 pt-3 lg:pt-0">
                <button
                  type="button"
                  onClick={() => handleOpenApprove(app)}
                  className="flex-1 lg:flex-none min-h-[42px] px-4 py-2 bg-[#C69214] hover:bg-[#B07E0F] text-white text-xs sm:text-sm font-bold rounded-xl flex items-center justify-center gap-1.5 shadow-xs transition cursor-pointer"
                >
                  <UserCheck className="w-4 h-4" />
                  <span>Phê duyệt ngay</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleReject(app)}
                  className="flex-1 lg:flex-none min-h-[42px] px-4 py-2 bg-white hover:bg-rose-50 border border-slate-200 hover:border-rose-300 text-rose-600 text-xs sm:text-sm font-semibold rounded-xl flex items-center justify-center gap-1.5 transition cursor-pointer"
                >
                  <UserX className="w-4 h-4" />
                  <span>Từ chối</span>
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Approval & Onboarding Modal (SCR-CLI-03B) */}
      {approvalModalOpen && selectedApp && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-[#ECE5D8] space-y-5 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-[#C69214]">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#0F172A]">Phê duyệt &amp; Gán lộ trình SOP</h3>
                  <div className="text-xs text-[#64748B]">Ứng viên: {selectedApp.name}</div>
                </div>
              </div>
              <button 
                type="button"
                onClick={() => setApprovalModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="space-y-1.5">
                <label className="font-bold text-[#0F172A] block">1. Chi nhánh làm việc phân bổ:</label>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium">
                  {selectedApp.branch}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-[#0F172A] block">2. Lộ trình SOP bắt buộc phải hoàn thành:</label>
                <select 
                  value={assignedTrack}
                  onChange={(e) => setAssignedTrack(e.target.value)}
                  className="w-full min-h-[44px] p-3 bg-white border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-[#C69214] transition"
                >
                  <option value="sop-fnb">Lộ trình Sommelier &amp; Rượu vang 5 sao (18 bài SOP)</option>
                  <option value="sop-service">Lộ trình Nghi thức Tiếp đón &amp; Phục vụ Bàn tiệc (12 bài SOP)</option>
                  <option value="sop-bar">Lộ trình Pha chế &amp; Quản trị Quầy Bar (15 bài SOP)</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-[#0F172A] block">3. Quản lý trực tiếp giám sát:</label>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800">
                  Lê Thanh Phong (Head Sommelier &amp; Corporate Trainer)
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                type="button"
                onClick={() => setApprovalModalOpen(false)}
                className="min-h-[44px] px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-semibold rounded-xl transition cursor-pointer"
              >
                Đóng
              </button>
              <button
                type="button"
                onClick={handleConfirmApproval}
                className="min-h-[44px] px-4 py-2 bg-[#C69214] hover:bg-[#B07E0F] text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition cursor-pointer"
              >
                Xác nhận phê duyệt
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
