"use client";

import React from "react";
import { FileUp, FileText, CheckCircle2, Clock, ShieldCheck, Download, Search } from "lucide-react";
import { ClientHeader } from "@/components/layout/client/ClientHeader";

export function ClientSopLibraryPage() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <ClientHeader breadcrumb="Kho SOP nhà hàng" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
        <div>
          <h1 className="font-serif text-xl sm:text-2xl lg:text-[28px] font-bold text-[#0F172A] tracking-tight mb-1">
            Kho Tài Liệu &amp; Tiêu Chuẩn SOP (18)
          </h1>
          <p className="text-[13px] sm:text-[13.5px] text-[#64748B]">
            Quản lý tài liệu nghiệp vụ, thực đơn Tasting Menu, danh mục rượu vang và quy trình xử lý sự cố đặc thù của nhà hàng.
          </p>
        </div>

        <button
          type="button"
          onClick={() => alert("Mở modal tải lên file SOP PDF/Word")}
          className="min-h-[44px] px-4 py-2.5 bg-[#C69214] hover:bg-[#B38210] active:scale-[0.99] text-white font-bold rounded-xl text-[13px] flex items-center gap-2 shadow-xs transition self-start sm:self-auto cursor-pointer"
        >
          <FileUp className="w-4 h-4" />
          <span>+ Tải lên tài liệu SOP</span>
        </button>
      </div>

      {/* SOP Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-[#ECE5D8] shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#FAF6ED] text-[#8C6005] border border-[#EEDFB6]">
                SOP-FNB-04
              </span>
              <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Đang áp dụng
              </span>
            </div>
            <h3 className="font-serif font-bold text-[16px] text-[#0F172A] mb-2">
              Quy trình Khai mở &amp; Chiết vang Decanter
            </h3>
            <p className="text-[12.5px] text-[#64748B] line-clamp-2 mb-4">
              Tiêu chuẩn phục vụ vang đỏ Grand Cru, nhiệt độ decanting và thao tác kiểm tra nút bần tại bàn.
            </p>
          </div>
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[12px] text-slate-500">
            <span>Cập nhật: 12/10/2026</span>
            <button className="text-[#C69214] font-semibold hover:underline">Chỉnh sửa</button>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-[#ECE5D8] shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#FAF6ED] text-[#8C6005] border border-[#EEDFB6]">
                SOP-FNB-07
              </span>
              <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Đang áp dụng
              </span>
            </div>
            <h3 className="font-serif font-bold text-[16px] text-[#0F172A] mb-2">
              Quy chuẩn Dị ứng Thực phẩm &amp; Đổi món Đột xuất
            </h3>
            <p className="text-[12.5px] text-[#64748B] line-clamp-2 mb-4">
              Quy trình 3 bước khẩn cấp giữa nhân viên phục vụ bàn tiệc và Bếp trưởng khi phát hiện dị ứng.
            </p>
          </div>
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[12px] text-slate-500">
            <span>Cập nhật: 05/10/2026</span>
            <button className="text-[#C69214] font-semibold hover:underline">Chỉnh sửa</button>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-[#ECE5D8] shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#FAF6ED] text-[#8C6005] border border-[#EEDFB6]">
                SOP-UPSELL-02
              </span>
              <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Đang áp dụng
              </span>
            </div>
            <h3 className="font-serif font-bold text-[16px] text-[#0F172A] mb-2">
              Nghệ thuật Upsell Tráng miệng &amp; Rượu Digestif
            </h3>
            <p className="text-[12.5px] text-[#64748B] line-clamp-2 mb-4">
              Kỹ thuật gợi ý tinh tế rượu tráng miệng Sauternes và Cognac sau bữa chính không tạo cảm giác ép buộc.
            </p>
          </div>
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[12px] text-slate-500">
            <span>Cập nhật: 01/10/2026</span>
            <button className="text-[#C69214] font-semibold hover:underline">Chỉnh sửa</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientSopLibraryPage;

