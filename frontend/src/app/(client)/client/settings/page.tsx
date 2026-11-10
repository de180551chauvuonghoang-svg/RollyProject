"use client";

import React from "react";
import { Settings, Shield, Store, Users, Key, Save } from "lucide-react";
import { ClientHeader } from "@/components/layout/client/ClientHeader";

export function ClientSettingsPage() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <ClientHeader breadcrumb="Cài đặt & Phân quyền" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
        <div>
          <h1 className="font-serif text-xl sm:text-2xl lg:text-[28px] font-bold text-[#0F172A] tracking-tight mb-1">
            Cài Đặt Chi Nhánh &amp; Phân Quyền
          </h1>
          <p className="text-[13px] sm:text-[13.5px] text-[#64748B]">
            Thiết lập thông tin thương hiệu, phân quyền Quản lý cơ sở và cấu hình bảo mật cách ly dữ liệu nhiều chi nhánh.
          </p>
        </div>

        <button
          type="button"
          onClick={() => alert("Đã lưu thiết lập chi nhánh thành công!")}
          className="min-h-[44px] px-4 py-2.5 bg-[#C69214] hover:bg-[#B38210] active:scale-[0.99] text-white font-bold rounded-xl text-[13px] flex items-center gap-2 shadow-xs transition self-start sm:self-auto cursor-pointer"
        >
          <Save className="w-4 h-4" />
          <span>Lưu cài đặt</span>
        </button>
      </div>

      {/* Settings Form Card */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#ECE5D8] shadow-xs max-w-3xl space-y-5">
        <div>
          <label className="block text-[12.5px] font-bold uppercase tracking-wider text-slate-700 mb-2">
            TÊN CƠ SỞ / CHI NHÁNH NHÀ HÀNG
          </label>
          <input
            type="text"
            defaultValue="The Landmark Dining Lounge"
            className="w-full min-h-[44px] px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-[14px] text-slate-900 focus:outline-none focus:border-[#C69214]"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[12.5px] font-bold uppercase tracking-wider text-slate-700 mb-2">
              MÃ ĐỊNH DANH TENANT (RLS KEY)
            </label>
            <input
              type="text"
              readOnly
              value="tenant_landmark_001"
              className="w-full min-h-[44px] px-4 py-2.5 bg-slate-100 border border-slate-200 rounded-xl text-[13px] text-slate-500 cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-[12.5px] font-bold uppercase tracking-wider text-slate-700 mb-2">
              TIÊU CHUẨN ĐÁNH GIÁ AI
            </label>
            <select className="w-full min-h-[44px] px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-[13.5px] text-slate-800 focus:outline-none focus:border-[#C69214]">
              <option>Michelin Star Dining Standard (Nghiêm ngặt)</option>
              <option>Boutique Luxury Bistro (Tiêu chuẩn)</option>
              <option>Premium Casual Dining (Cơ bản)</option>
            </select>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex items-center gap-3 text-slate-600 text-[13px]">
          <Shield className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Bảo mật Row-Level Security (RLS) đã kích hoạt trên toàn bộ bảng dữ liệu nhân sự và kịch bản.</span>
        </div>
      </div>
    </div>
  );
}

export default ClientSettingsPage;
