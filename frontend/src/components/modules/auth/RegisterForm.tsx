"use client";

import React, { useState } from "react";
import Link from "next/link";
import { User, Mail, Lock, Eye, EyeOff, ChevronDown, Check } from "lucide-react";
import { APP_ROUTES } from "@/constants/routes";

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "Nguyễn Hoàng Long",
    email: "hoanglong.sommelier@thelandmark.com",
    branch: "The Landmark Dining Lounge",
    position: "Head Sommelier (Chuyên gia Rượu)",
    password: "••••••••••••",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      alert("Vui lòng đồng ý với cam kết bảo mật SOP để tiếp tục!");
      return;
    }
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="bg-white p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
      <div>
        {/* Form Header */}
        <div className="mb-6">
          <h2 className="text-[26px] sm:text-[28px] font-bold text-[#0F172A] tracking-tight mb-1.5">
            Tạo tài khoản Đào tạo
          </h2>
          <p className="text-[13.5px] text-[#64748B] leading-relaxed">
            Đăng ký tài khoản để truy cập phòng luyện tập AI và giáo trình SOP độc quyền của cơ sở.
          </p>
        </div>

        {submitted && (
          <div className="mb-5 p-3.5 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-sm flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Đăng ký thành công! Đang chuyển hướng vào phòng đào tạo...</span>
          </div>
        )}

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* 1. Họ và tên */}
          <div>
            <label className="block text-[13px] font-medium text-[#1E293B] mb-1.5">
              Họ và tên nhân viên <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#94A3B8]">
                <User className="w-4 h-4" />
              </div>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="Nguyễn Hoàng Long"
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-[14px] text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#C69214] focus:ring-2 focus:ring-[#C69214]/15 transition"
              />
            </div>
          </div>

          {/* 2. Email doanh nghiệp */}
          <div>
            <label className="block text-[13px] font-medium text-[#1E293B] mb-1.5">
              Email doanh nghiệp (Work Email) <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#94A3B8]">
                <Mail className="w-4 h-4" />
              </div>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="hoanglong.sommelier@thelandmark.com"
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-[14px] text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#C69214] focus:ring-2 focus:ring-[#C69214]/15 transition"
              />
            </div>
          </div>

          {/* 3. Chi nhánh & Vị trí chuyên môn (2 Cột) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-[13px] font-medium text-[#1E293B] mb-1.5">
                Chi nhánh hoạt động <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  value={formData.branch}
                  onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                  className="w-full appearance-none pl-3.5 pr-8 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-[13px] text-[#0F172A] focus:outline-none focus:border-[#C69214] focus:ring-2 focus:ring-[#C69214]/15 transition truncate cursor-pointer"
                >
                  <option>The Landmark Dining Lounge</option>
                  <option>Michelin Star Bistro</option>
                  <option>Grand Heritage Palace</option>
                  <option>Le Jardin Saigon</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-[#64748B]">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[13px] font-medium text-[#1E293B] mb-1.5">
                Vị trí chuyên môn <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  value={formData.position}
                  onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                  className="w-full appearance-none pl-3.5 pr-8 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-[13px] text-[#0F172A] focus:outline-none focus:border-[#C69214] focus:ring-2 focus:ring-[#C69214]/15 transition truncate cursor-pointer"
                >
                  <option>Head Sommelier (Chuyên gia Rượu)</option>
                  <option>Captain (Trưởng ca Phục vụ)</option>
                  <option>Bartender / Mixologist</option>
                  <option>Hostess (Tiếp tân Trưởng)</option>
                  <option>Food Runner / Phụ bàn</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-[#64748B]">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* 4. Mật khẩu bảo mật */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-[13px] font-medium text-[#1E293B]">
                Mật khẩu bảo mật <span className="text-red-500">*</span>
              </label>
              <span className="text-[11px] text-[#94A3B8]">
                Tối thiểu 8 ký tự
              </span>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#94A3B8]">
                <Lock className="w-4 h-4" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="••••••••••••"
                className="w-full pl-10 pr-10 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-[14px] text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#C69214] focus:ring-2 focus:ring-[#C69214]/15 transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#94A3B8] hover:text-[#475569] transition cursor-pointer"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* 5. Checkbox cam kết SOP */}
          <div className="pt-1">
            <label className="flex items-start gap-2.5 cursor-pointer select-none">
              <div 
                onClick={() => setAgreed(!agreed)}
                className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center transition border ${
                  agreed 
                    ? "bg-[#C69214] border-[#C69214] text-white" 
                    : "bg-white border-[#CBD5E1]"
                }`}
              >
                {agreed && <Check className="w-3 h-3 stroke-[3]" />}
              </div>
              <span className="text-[12.5px] text-[#64748B] leading-snug">
                Tôi đồng ý tuân thủ cam kết bảo mật tiêu chuẩn SOP và quy định bảo mật dữ liệu khách hàng VIP của nhà hàng.
              </span>
            </label>
          </div>

          {/* 6. Nút Submit */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 px-4 bg-[#C69214] hover:bg-[#B38210] active:scale-[0.99] text-white font-bold rounded-xl text-center tracking-[0.06em] text-[13.5px] uppercase transition shadow-[0_4px_16px_rgba(198,146,20,0.28)] cursor-pointer"
            >
              HOÀN TẤT ĐĂNG KÝ HỌC VIÊN
            </button>
          </div>
        </form>
      </div>

      {/* Bottom Form Footer Link */}
      <div className="pt-6 text-center text-[13.5px] text-[#64748B]">
        Đã có tài khoản nhân sự?{" "}
        <Link href={APP_ROUTES.LOGIN} className="font-semibold text-[#A67C1E] hover:underline">
          Đăng nhập ngay
        </Link>
      </div>
    </section>
  );
}
