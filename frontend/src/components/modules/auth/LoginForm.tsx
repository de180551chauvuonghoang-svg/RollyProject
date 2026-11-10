"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff, Check } from "lucide-react";
import { APP_ROUTES } from "@/constants/routes";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [email, setEmail] = useState("hoanglong.sommelier@thelandmark.com");
  const [password, setPassword] = useState("password123");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleGoogleLogin = () => {
    alert("Đang chuyển hướng sang cổng xác thực Google Workspace của doanh nghiệp...");
  };

  return (
    <section className="bg-white p-8 sm:p-10 lg:p-14 flex flex-col justify-between">
      <div>
        {/* Form Header */}
        <div className="mb-8">
          <h2 className="text-[26px] sm:text-[28px] font-bold text-[#0F172A] tracking-tight mb-2">
            Đăng nhập Tài khoản
          </h2>
          <p className="text-[13.5px] text-[#64748B] leading-relaxed">
            Nhập thông tin tài khoản Rolly Academy để bắt đầu phiên luyện tập và đánh giá năng lực.
          </p>
        </div>

        {submitted && (
          <div className="mb-5 p-3.5 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-sm flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Đăng nhập thành công! Đang chuyển hướng vào phòng thực hành...</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* 1. Email doanh nghiệp */}
          <div>
            <label className="block text-[11px] font-bold tracking-[0.08em] uppercase text-[#1E293B] mb-2">
              EMAIL DOANH NGHIỆP (WORK EMAIL) <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#94A3B8]">
                <Mail className="w-4 h-4" />
              </div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="hoanglong.sommelier@thelandmark.com"
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-[14px] text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#C69214] focus:ring-2 focus:ring-[#C69214]/15 transition"
              />
            </div>
          </div>

          {/* 2. Mật khẩu bảo mật & Quên mật khẩu */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-[11px] font-bold tracking-[0.08em] uppercase text-[#1E293B]">
                MẬT KHẨU BẢO MẬT <span className="text-red-500">*</span>
              </label>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); alert("Vui lòng liên hệ Quản trị viên chi nhánh của bạn để đặt lại mật khẩu."); }}
                className="text-[12.5px] font-medium text-[#A67C1E] hover:underline"
              >
                Quên mật khẩu?
              </a>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#94A3B8]">
                <Lock className="w-4 h-4" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

          {/* 3. Checkbox Ghi nhớ đăng nhập */}
          <div className="pt-1">
            <label className="flex items-center gap-2.5 cursor-pointer select-none">
              <div 
                onClick={() => setRememberMe(!rememberMe)}
                className={`w-4 h-4 rounded flex items-center justify-center transition border ${
                  rememberMe 
                    ? "bg-[#C69214] border-[#C69214] text-white" 
                    : "bg-white border-[#CBD5E1]"
                }`}
              >
                {rememberMe && <Check className="w-3 h-3 stroke-[3]" />}
              </div>
              <span className="text-[13px] text-[#475569]">
                Ghi nhớ đăng nhập trên thiết bị này
              </span>
            </label>
          </div>

          {/* 4. Nút Đăng nhập chính */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 px-4 bg-[#C69214] hover:bg-[#B38210] active:scale-[0.99] text-white font-bold rounded-xl text-center tracking-[0.08em] text-[13.5px] uppercase transition shadow-[0_4px_16px_rgba(198,146,20,0.28)] cursor-pointer"
            >
              ĐĂNG NHẬP
            </button>
          </div>

          {/* 5. Dòng phân cách OR */}
          <div className="relative my-5 flex items-center justify-center">
            <div className="border-t border-[#E2E8F0] w-full"></div>
            <span className="bg-white px-3 text-[10.5px] tracking-[0.16em] font-semibold text-[#94A3B8] uppercase whitespace-nowrap">
              HOẶC ĐĂNG NHẬP VỚI
            </span>
            <div className="border-t border-[#E2E8F0] w-full"></div>
          </div>

          {/* 6. Nút Đăng nhập với Google */}
          <div>
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full py-2.5 px-4 bg-white hover:bg-slate-50 border border-[#E2E8F0] rounded-xl text-[13.5px] font-semibold text-[#1E293B] flex items-center justify-center gap-3 transition cursor-pointer shadow-2xs"
            >
              {/* Google Colorful Logo SVG */}
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Đăng nhập với Google</span>
            </button>
          </div>
        </form>
      </div>

      {/* Bottom Form Footer Link */}
      <div className="pt-8 text-center text-[13.5px] text-[#64748B]">
        Chưa có tài khoản nhân sự?{" "}
        <Link href={APP_ROUTES.REGISTER} className="font-semibold text-[#A67C1E] hover:underline">
          Đăng ký ngay
        </Link>
      </div>
    </section>
  );
}
