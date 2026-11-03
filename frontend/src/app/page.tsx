"use client";

import React, { useState } from "react";
import { 
  User, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ChevronDown, 
  Mic, 
  RefreshCw, 
  Check 
} from "lucide-react";

export default function RegisterEmployeePage() {
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
    <div className="min-h-screen flex flex-col justify-between bg-[#F8FAFC]">
      {/* 1. Header - Top Utilities Bar */}
      <header className="w-full max-w-[1280px] mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg border border-[#D4AF37] flex items-center justify-center font-serif text-[#C49A28] font-bold text-lg bg-[#FAF8F5] shadow-xs">
            R
          </div>
          <span className="font-serif font-bold text-xl text-[#0F172A] tracking-tight">
            Rolly Academy
          </span>
        </div>
      </header>

      {/* 2. Main Container: Split Screen 50 / 50 */}
      <main className="w-full max-w-[1240px] mx-auto px-4 py-2 my-auto">
        <div className="rounded-[28px] overflow-hidden border border-[#E8E2D5] shadow-[0_12px_45px_rgba(15,23,42,0.06)] bg-white grid grid-cols-1 lg:grid-cols-2">
          
          {/* SECTION - LEFT SIDE (50%): Warm Cream Luxury Showcase */}
          <section className="bg-gradient-to-b from-[#FEFCF7] via-[#FBF5E6] to-[#F7EDD6] p-8 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#EFE8DA]">
            <div>
              {/* Badge Rolly */}
              <div className="flex items-center gap-3.5 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FDF9EE] to-[#F5EACB] border border-[#DFC88A] flex items-center justify-center shadow-xs text-[#C29324] text-xl font-bold">
                  ★
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base tracking-[0.18em] text-[#0F172A] uppercase">
                    ROLLY
                  </h3>
                  <p className="text-[10px] tracking-[0.2em] font-bold text-[#A67C1E] uppercase mt-0.5">
                    HOSPITALITY EXCELLENCE SUITE
                  </p>
                </div>
              </div>

              {/* Headline */}
              <h1 className="font-serif text-[34px] sm:text-[40px] lg:text-[42px] font-bold text-[#0F172A] leading-[1.2] mb-4">
                Nâng tầm nghệ thuật<br />
                dịch vụ chuẩn mực 5<span className="text-[#C29324]">★</span>
              </h1>

              {/* Subtitle */}
              <p className="text-[#475569] text-[14px] sm:text-[15px] leading-relaxed max-w-[480px] mb-8">
                Nền tảng đào tạo nhập vai thời gian thực bằng AI Voice Persona, mô phỏng chuẩn xác từng phản xạ tương tác bàn tiệc Fine Dining
              </p>

              {/* 2 Feature Cards */}
              <div className="space-y-3.5 mb-8">
                {/* Feature 1 */}
                <div className="bg-white/95 rounded-2xl p-4 border border-[#ECE5D8] shadow-xs flex items-start gap-3.5 transition hover:shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#FEF9EC] border border-[#F0DFB6] flex items-center justify-center text-[#C29324] shrink-0 mt-0.5">
                    <Mic className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[15px] text-[#0F172A]">
                      AI Voice Role-play
                    </h4>
                    <p className="text-[#64748B] text-[13px] leading-snug mt-0.5">
                      Đối thoại trực tiếp với khách thẩm định rượu, khách khó tính & phê bình ẩm thực.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="bg-white/95 rounded-2xl p-4 border border-[#ECE5D8] shadow-xs flex items-start gap-3.5 transition hover:shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] flex items-center justify-center text-[#16A34A] shrink-0 mt-0.5">
                    <RefreshCw className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[15px] text-[#0F172A]">
                      Chuẩn hóa SOP nhà hàng của bạn
                    </h4>
                    <p className="text-[#64748B] text-[13px] leading-snug mt-0.5">
                      Hệ thống đối soát mọi quy trình thực đơn Tasting Menu và nghi thức phục vụ chuẩn.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Proof Section */}
            <div className="border-t border-[#E8DEC9] pt-6 mt-4">
              <p className="text-center text-[11px] font-bold tracking-[0.2em] text-[#A67C1E] uppercase mb-4">
                HIỆU QUẢ ĐÀO TẠO ĐƯỢC CHỨNG THỰC
              </p>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white/85 rounded-xl py-3 px-2 text-center border border-[#ECE5D8] shadow-2xs">
                  <div className="font-bold text-[20px] text-[#0F172A] tracking-tight">98.4%</div>
                  <div className="text-[11px] text-[#64748B] mt-0.5">Độ chính xác SOP</div>
                </div>
                <div className="bg-white/85 rounded-xl py-3 px-2 text-center border border-[#ECE5D8] shadow-2xs">
                  <div className="font-bold text-[20px] text-[#0F172A] tracking-tight">3.5x</div>
                  <div className="text-[11px] text-[#64748B] mt-0.5">Tốc độ thành thạo</div>
                </div>
                <div className="bg-white/85 rounded-xl py-3 px-2 text-center border border-[#ECE5D8] shadow-2xs">
                  <div className="font-bold text-[20px] text-[#0F172A] tracking-tight">45+</div>
                  <div className="text-[11px] text-[#64748B] mt-0.5">Nhà hàng Luxury</div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION - RIGHT SIDE (50%): Pure White Clean Form */}
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
              <a href="#" className="font-semibold text-[#A67C1E] hover:underline">
                Đăng nhập ngay
              </a>
            </div>
          </section>

        </div>
      </main>

      {/* 3. Bottom Light Footer */}
      <footer className="w-full max-w-[1280px] mx-auto px-6 py-4 text-[12px] text-[#64748B] flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-[#EAE6DF]/60 mt-2">
        <p>© 2025 Rolly Academy & LMS Portal • Tiêu chuẩn đào tạo F&B 5 sao quốc tế</p>
        <div className="flex items-center gap-5">
          <a href="#" className="hover:text-[#0F172A] transition">Chính sách bảo mật</a>
          <a href="#" className="hover:text-[#0F172A] transition">Quy chuẩn nghiệp vụ SOP</a>
          <a href="#" className="hover:text-[#0F172A] transition">Liên hệ quản trị</a>
        </div>
      </footer>
    </div>
  );
}
