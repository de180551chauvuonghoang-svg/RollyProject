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
      
      <main className="w-full max-w-[1240px] mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-6 md:py-8 my-auto">
        <div className="w-full rounded-2xl sm:rounded-[28px] overflow-hidden border border-[#E8E2D5] shadow-[0_12px_45px_rgba(15,23,42,0.06)] bg-white grid grid-cols-1 lg:grid-cols-2">
          {/* Cột trái: 50% Luxury Showcase (order-2 trên mobile để form hiển thị ngay lập tức, order-1 trên desktop) */}
          <AuthShowcase />
          
          {/* Cột phải: Form thay đổi tùy trang (Login / Register) (order-1 trên mobile, order-2 trên desktop) */}
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}
