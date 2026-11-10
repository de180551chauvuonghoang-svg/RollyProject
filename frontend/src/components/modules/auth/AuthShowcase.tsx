"use client";

import React from "react";
import { Mic, RefreshCw } from "lucide-react";
import { RollyLogo } from "@/components/common/RollyLogo";

export function AuthShowcase() {
  return (
    <section className="bg-gradient-to-b from-[#FEFCF7] via-[#FBF5E6] to-[#F7EDD6] p-5 sm:p-8 lg:p-12 flex flex-col justify-between border-t lg:border-t-0 lg:border-r border-[#EFE8DA] order-2 lg:order-1">
      <div>
        {/* Brand Logo Rolly */}
        <div className="mb-5 sm:mb-8">
          <RollyLogo size="lg" subtitle="HOSPITALITY EXCELLENCE SUITE" />
        </div>

        {/* Headline */}
        <h1 className="font-serif text-2xl sm:text-3xl lg:text-[40px] xl:text-[42px] font-bold text-[#0F172A] leading-[1.25] sm:leading-[1.2] mb-3 sm:mb-4">
          Nâng tầm nghệ thuật<br className="hidden sm:inline" />
          dịch vụ chuẩn mực 5<span className="text-[#C29324]">★</span>
        </h1>

        {/* Subtitle */}
        <p className="text-[#475569] text-[13px] sm:text-[14px] lg:text-[15px] leading-relaxed max-w-[480px] mb-6 sm:mb-8">
          Nền tảng đào tạo nhập vai thời gian thực bằng AI Voice Persona, mô phỏng chuẩn xác từng phản xạ tương tác bàn tiệc Fine Dining.
        </p>

        {/* 2 Feature Cards */}
        <div className="space-y-3 sm:space-y-3.5 mb-6 sm:mb-8">
          {/* Feature 1 */}
          <div className="bg-white/95 rounded-xl sm:rounded-2xl p-3.5 sm:p-4 border border-[#ECE5D8] shadow-xs flex items-start gap-3 sm:gap-3.5 transition hover:shadow-sm">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FEF9EC] border border-[#F0DFB6] flex items-center justify-center text-[#C29324] shrink-0 mt-0.5">
              <Mic className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <h4 className="font-bold text-[14px] sm:text-[15px] text-[#0F172A]">
                AI Voice Role-play
              </h4>
              <p className="text-[#64748B] text-[12px] sm:text-[13px] leading-snug mt-0.5">
                Đối thoại trực tiếp với khách thẩm định rượu, khách khó tính &amp; phê bình ẩm thực.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-white/95 rounded-xl sm:rounded-2xl p-3.5 sm:p-4 border border-[#ECE5D8] shadow-xs flex items-start gap-3 sm:gap-3.5 transition hover:shadow-sm">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] flex items-center justify-center text-[#16A34A] shrink-0 mt-0.5">
              <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <h4 className="font-bold text-[14px] sm:text-[15px] text-[#0F172A]">
                Chuẩn hóa SOP nhà hàng của bạn
              </h4>
              <p className="text-[#64748B] text-[12px] sm:text-[13px] leading-snug mt-0.5">
                Hệ thống đối soát mọi quy trình thực đơn Tasting Menu và nghi thức phục vụ chuẩn.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Proof Section */}
      <div className="border-t border-[#E8DEC9] pt-4 sm:pt-6 mt-2 sm:mt-4">
        <p className="text-center text-[10px] sm:text-[11px] font-bold tracking-[0.16em] sm:tracking-[0.2em] text-[#A67C1E] uppercase mb-3 sm:mb-4">
          HIỆU QUẢ ĐÀO TẠO ĐƯỢC CHỨNG THỰC
        </p>
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          <div className="bg-white/85 rounded-xl py-2.5 sm:py-3 px-1.5 sm:px-2 text-center border border-[#ECE5D8] shadow-2xs">
            <div className="font-bold text-base sm:text-lg lg:text-[20px] text-[#0F172A] tracking-tight">98.4%</div>
            <div className="text-[10px] sm:text-[11px] text-[#64748B] mt-0.5 leading-tight">Độ chính xác SOP</div>
          </div>
          <div className="bg-white/85 rounded-xl py-2.5 sm:py-3 px-1.5 sm:px-2 text-center border border-[#ECE5D8] shadow-2xs">
            <div className="font-bold text-base sm:text-lg lg:text-[20px] text-[#0F172A] tracking-tight">3.5x</div>
            <div className="text-[10px] sm:text-[11px] text-[#64748B] mt-0.5 leading-tight">Tốc độ thành thạo</div>
          </div>
          <div className="bg-white/85 rounded-xl py-2.5 sm:py-3 px-1.5 sm:px-2 text-center border border-[#ECE5D8] shadow-2xs">
            <div className="font-bold text-base sm:text-lg lg:text-[20px] text-[#0F172A] tracking-tight">45+</div>
            <div className="text-[10px] sm:text-[11px] text-[#64748B] mt-0.5 leading-tight">Nhà hàng Luxury</div>
          </div>
        </div>
      </div>
    </section>
  );
}
