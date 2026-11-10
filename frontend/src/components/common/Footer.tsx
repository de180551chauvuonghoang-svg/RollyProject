"use client";

import React from "react";

export function Footer() {
  return (
    <footer className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 py-4 text-[11.5px] sm:text-[12px] text-[#64748B] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left border-t border-[#EAE6DF]/60 mt-2">
      <p className="break-words">© 2025 Rolly Academy &amp; LMS Portal • Tiêu chuẩn đào tạo F&amp;B 5 sao quốc tế</p>
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
        <a href="#" className="hover:text-[#0F172A] transition py-1">Chính sách bảo mật</a>
        <a href="#" className="hover:text-[#0F172A] transition py-1">Quy chuẩn nghiệp vụ SOP</a>
        <a href="#" className="hover:text-[#0F172A] transition py-1">Liên hệ quản trị</a>
      </div>
    </footer>
  );
}
