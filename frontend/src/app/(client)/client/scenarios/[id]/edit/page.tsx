"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { 
  ArrowLeft, 
  Save, 
  X, 
  Check, 
  ChevronDown, 
  Clock, 
  MessageSquare,
  CheckCircle2
} from "lucide-react";
import { ClientHeader } from "@/components/layout/client/ClientHeader";
import { APP_ROUTES } from "@/constants/routes";

export default function EditScenarioPage() {
  const params = useParams();
  const router = useRouter();
  const scenarioId = params?.id || "1";

  const [title, setTitle] = useState("Bàn VIP Dị ứng nấm & Đổi món");
  const [code, setCode] = useState("RP-09");
  const [contextDesc, setContextDesc] = useState(
    "Bối cảnh tiệc tối riêng tư tại Phòng Hoàng Gia của D'Honneur Salon 02. Thực khách VVIP là một nhà sưu tập lâu năm và có tiếng tăm rượu vang sang chảnh, vừa nếm thử chai Château Margaux 2015 và cho rằng rượu bị bảo quản quá ẩm hoặc tính 21°C thay vì 16–18°C chuẩn. Thực khách tỏ thái độ không hài lòng, nghi ngờ quy trình Cellar Master và yêu cầu Sommelier đổi ngay lập tức chai khác hoặc hoàn tiền toàn bộ thực đơn degustation. AI Persona phải duy trì thái độ kiên định, thử thách sự mềm mỏng, kiến thức định đặc và kỹ năng decanter lạnh của Sommelier."
  );
  const [passingScore, setPassingScore] = useState(80);
  const [weightMenu, setWeightMenu] = useState(35);
  const [weightEtiquette, setWeightEtiquette] = useState(30);
  const [weightCrisis, setWeightCrisis] = useState(20);
  const [weightUpsell, setWeightUpsell] = useState(15);
  const [isSaved, setIsSaved] = useState(false);

  const total = weightMenu + weightEtiquette + weightCrisis + weightUpsell;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => {
      router.push(APP_ROUTES.CLIENT_SCENARIO_DETAIL(String(scenarioId)));
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <ClientHeader breadcrumb="Kịch bản &amp; Prompt AI / Chỉnh sửa kịch bản" />

      {/* Title with yellow vertical accent bar */}
      <div className="space-y-1.5">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-7 rounded-full bg-[#C69214]" />
          <h1 className="font-serif text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#0F172A] tracking-tight">
            Chỉnh sửa: {title}
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-[#64748B] pl-4 leading-relaxed max-w-4xl">
          Thiết lập nhân vật thực khách ảo AI, liên kết vector SOP và bộ trọng số đánh giá đa chiều cho chuẩn dịch vụ nhà hàng fine dining.
        </p>
      </div>

      {isSaved && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-xs sm:text-sm text-emerald-800 flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>Cập nhật cấu hình kịch bản thành công! Đang chuyển hướng...</span>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSave} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column (Span 7) */}
          <div className="lg:col-span-7 space-y-6">
            {/* 1. Tên kịch bản */}
            <div className="bg-white border border-[#ECE5D8] rounded-2xl p-5 sm:p-6 shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">
                  1. TÊN KỊCH BẢN
                </label>
                <span className="font-mono text-xs font-bold text-[#8C6005] bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
                  MÃ: {code}
                </span>
              </div>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-[#0F172A] focus:outline-none focus:border-[#C69214]"
              />
            </div>

            {/* 2. Mô tả, bối cảnh */}
            <div className="bg-white border border-[#ECE5D8] rounded-2xl p-5 sm:p-6 shadow-2xs space-y-3">
              <label className="text-xs font-bold text-[#0F172A] uppercase tracking-wider block">
                2. MÔ TẢ, BỐI CẢNH
              </label>
              <textarea
                rows={7}
                value={contextDesc}
                onChange={(e) => setContextDesc(e.target.value)}
                required
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-[13px] text-slate-700 leading-relaxed focus:outline-none focus:border-[#C69214]"
              />
              <div className="text-right text-[11px] text-slate-400 font-mono">
                * {contextDesc.length}/1500 ký tự
              </div>
            </div>

            {/* 3. Lựa chọn persona khách hàng */}
            <div className="bg-white border border-[#ECE5D8] rounded-2xl p-5 sm:p-6 shadow-2xs space-y-3">
              <div className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">
                3. LỰA CHỌN PERSONA KHÁCH HÀNG
              </div>

              <div className="p-4 rounded-xl border-2 border-[#C69214] bg-[#FFFDF9] flex items-center justify-between gap-3 shadow-2xs">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 text-[#E2B755] flex items-center justify-center font-bold text-sm shrink-0">
                    AP
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-[#0F172A]">Ngài Arthur Pendleton</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-50 text-rose-700 border border-rose-200">
                        KHÓ TÍNH
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 font-medium mt-0.5">
                      VVIP Connoisseur • Khách quen thân niên • Anh quốc
                    </div>
                  </div>
                </div>
                <div className="w-5 h-5 rounded-full border-2 border-[#C69214] flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#C69214]" />
                </div>
              </div>
            </div>

            {/* 4. Giới hạn thời lượng */}
            <div className="bg-white border border-[#ECE5D8] rounded-2xl p-5 sm:p-6 shadow-2xs space-y-3">
              <div className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">
                4. GIỚI HẠN THỜI LƯỢNG &amp; LƯỢT TƯƠNG TÁC
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 text-[#C69214] flex items-center justify-center">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-medium">Thời lượng</div>
                    <div className="font-bold text-sm text-[#0F172A]">08:00 phút</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 text-[#C69214] flex items-center justify-center">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-medium">Lượt thoại tối đa</div>
                    <div className="font-bold text-sm text-[#0F172A]">10 lượt</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            {/* 6. Tài liệu SOP */}
            <div className="bg-white border border-[#ECE5D8] rounded-2xl p-5 sm:p-6 shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">
                  6. TÀI LIỆU SOP THAM CHIẾU
                </span>
                <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> 2 Tài liệu được chọn
                </span>
              </div>

              <div className="space-y-2.5">
                <div className="p-3.5 rounded-xl border border-amber-300 bg-[#FFFDF9] flex items-start gap-3">
                  <input type="checkbox" defaultChecked className="mt-0.5 accent-[#C69214] rounded" />
                  <div>
                    <div className="font-bold text-xs text-[#0F172A]">
                      SOP-FNB-04_Khoi-tao-chai-vang-Sommelier.pdf
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-amber-300 bg-[#FFFDF9] flex items-start gap-3">
                  <input type="checkbox" defaultChecked className="mt-0.5 accent-[#C69214] rounded" />
                  <div>
                    <div className="font-bold text-xs text-[#0F172A]">
                      SOP-FNB-07_Nghe-thuat-Giai-quyet-Vintage-Wine.pdf
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 7. Từ khóa cấm */}
            <div className="bg-white border border-[#ECE5D8] rounded-2xl p-5 sm:p-6 shadow-2xs space-y-3">
              <div className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">
                7. CHỦ ĐỀ CẤM KỴ / TỪ KHÓA VI PHẠM
              </div>

              <div className="flex flex-wrap gap-2">
                {["Tranh cãi với khách", "Đổ lỗi cho nhiệt độ phòng", "Tiết lộ giá với chai vang", "Từ chối đổi ly"].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200 text-xs font-semibold flex items-center gap-1.5">
                    <span>{tag}</span>
                    <X className="w-3.5 h-3.5 cursor-pointer" />
                  </span>
                ))}
              </div>
            </div>

            {/* 8. Bộ trọng số đánh giá */}
            <div className="bg-white border border-[#ECE5D8] rounded-2xl p-5 sm:p-6 shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">
                  8. BỘ TRỌNG SỐ ĐÁNH GIÁ
                </span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                  Tổng: {total}%
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <div className="flex justify-between font-medium mb-1">
                    <span>Kiến thức Thực đơn &amp; Menu Pairing</span>
                    <span className="font-bold text-[#C69214]">{weightMenu}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="5"
                    value={weightMenu}
                    onChange={(e) => setWeightMenu(parseInt(e.target.value))}
                    className="w-full accent-[#C69214]"
                  />
                </div>

                <div>
                  <div className="flex justify-between font-medium mb-1">
                    <span>Nghi thức Giao tiếp &amp; Tác phong (Etiquette)</span>
                    <span className="font-bold text-[#C69214]">{weightEtiquette}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="5"
                    value={weightEtiquette}
                    onChange={(e) => setWeightEtiquette(parseInt(e.target.value))}
                    className="w-full accent-[#C69214]"
                  />
                </div>

                <div>
                  <div className="flex justify-between font-medium mb-1">
                    <span>Xử lý tình huống khẩn cấp (Crisis Handling)</span>
                    <span className="font-bold text-[#C69214]">{weightCrisis}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="5"
                    value={weightCrisis}
                    onChange={(e) => setWeightCrisis(parseInt(e.target.value))}
                    className="w-full accent-[#C69214]"
                  />
                </div>

                <div>
                  <div className="flex justify-between font-medium mb-1">
                    <span>Kỹ năng Upsell &amp; Thuyết phục</span>
                    <span className="font-bold text-[#C69214]">{weightUpsell}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="5"
                    value={weightUpsell}
                    onChange={(e) => setWeightUpsell(parseInt(e.target.value))}
                    className="w-full accent-[#C69214]"
                  />
                </div>
              </div>
            </div>

            {/* 9. Điểm đạt yêu cầu */}
            <div className="bg-white border border-[#ECE5D8] rounded-2xl p-5 sm:p-6 shadow-2xs space-y-2">
              <div className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">
                9. ĐIỂM ĐẠT YÊU CẦU
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  min="50"
                  max="100"
                  value={passingScore}
                  onChange={(e) => setPassingScore(parseInt(e.target.value))}
                  className="w-24 p-3 bg-slate-50 border border-slate-200 rounded-xl font-serif text-xl font-bold text-center text-[#0F172A]"
                />
                <span className="text-xs text-slate-500 font-medium">/ 100 điểm</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#ECE5D8]">
          <Link
            href={APP_ROUTES.CLIENT_SCENARIOS}
            className="min-h-[44px] px-6 py-2.5 bg-white border border-[#CBD5E1] hover:bg-slate-50 text-[#1E293B] text-xs sm:text-sm font-semibold rounded-xl transition cursor-pointer"
          >
            Lưu bản nháp
          </Link>

          <button
            type="submit"
            className="min-h-[44px] px-6 py-2.5 bg-[#C69214] hover:bg-[#B07E0F] text-white text-xs sm:text-sm font-bold rounded-xl flex items-center gap-2 shadow-2xs transition cursor-pointer"
          >
            <Save className="w-4 h-4" />
            <span>Xuất bản kịch bản</span>
          </button>
        </div>
      </form>
    </div>
  );
}
