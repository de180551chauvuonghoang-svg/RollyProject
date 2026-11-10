import React from "react";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { AuthShowcase } from "@/components/modules/auth/AuthShowcase";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#F8FAFC]">
      <Header />
      
      <main className="w-full max-w-[1240px] mx-auto px-4 py-2 my-auto">
        <div className="rounded-[28px] overflow-hidden border border-[#E8E2D5] shadow-[0_12px_45px_rgba(15,23,42,0.06)] bg-white grid grid-cols-1 lg:grid-cols-2">
          {/* Cột trái 50% Luxury Showcase dùng chung */}
          <AuthShowcase />
          
          {/* Cột phải: Form thay đổi tùy trang (Login / Register) */}
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}

