"use client";

import React from "react";
import { Mic, RefreshCw } from "lucide-react";

export function AuthShowcase() {
  return (
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
  );
}

