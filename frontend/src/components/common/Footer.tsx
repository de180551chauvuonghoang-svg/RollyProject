"use client";

import React from "react";

export function Footer() {
  return (
    <footer className="w-full max-w-[1280px] mx-auto px-6 py-4 text-[12px] text-[#64748B] flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-[#EAE6DF]/60 mt-2">
      <p>© 2025 Rolly Academy & LMS Portal • Tiêu chuẩn đào tạo F&B 5 sao quốc tế</p>
      <div className="flex items-center gap-5">
        <a href="#" className="hover:text-[#0F172A] transition">Chính sách bảo mật</a>
        <a href="#" className="hover:text-[#0F172A] transition">Quy chuẩn nghiệp vụ SOP</a>
        <a href="#" className="hover:text-[#0F172A] transition">Liên hệ quản trị</a>
      </div>
    </footer>
  );
}
