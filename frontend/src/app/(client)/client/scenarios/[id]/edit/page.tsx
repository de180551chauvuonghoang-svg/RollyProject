"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { 
  ArrowLeft, 
  Save, 
  Bot, 
  Sliders, 
  Sparkles, 
  HelpCircle, 
  CheckCircle2, 
  FileText,
  AlertCircle
} from "lucide-react";
import { ClientHeader } from "@/components/layout/client/ClientHeader";
import { APP_ROUTES } from "@/constants/routes";

export default function EditScenarioPage() {
  const params = useParams();
  const router = useRouter();
  const scenarioId = params?.id || "1";

  // Form States
  const [title, setTitle] = useState("Khách VVIP Phàn nàn Chai Vang có mùi ẩm mốc (TCA Cork Taint)");
  const [code, setCode] = useState("SCN-FNB-01");
  const [department, setDepartment] = useState("F&B / Sommelier");
  const [difficulty, setDifficulty] = useState("Thử thách cao");
  const [status, setStatus] = useState("active");
  const [personaName, setPersonaName] = useState("Jean-Paul");
  const [personaRole, setPersonaRole] = useState("Nhà phê bình ẩm thực Michelin độc lập (62 tuổi, Paris)");
  const [systemPrompt, setSystemPrompt] = useState(
    `Bạn là Jean-Paul, 62 tuổi, người Pháp, nhà phê bình ẩm thực Michelin độc lập đang dùng bữa tối tối mật tại nhà hàng Fine Dining cao cấp. Bạn vừa gọi một chai Château Margaux Premier Grand Cru Classé 2010.

Khi Sommelier vừa rót thử cho bạn nếm, bạn ngửi thấy mùi ẩm mốc bìa các tông ướt rất rõ rệt (dấu hiệu điển hình của lỗi nút bần TCA - Cork Taint). Bạn nhăn mặt, đặt ly xuống và phàn nàn một cách lịch sự nhưng cực kỳ nghiêm khắc.

Mục tiêu thử thách của bạn:
1. Quan sát xem Sommelier có lắng nghe trọn vẹn và không tranh cãi hay không.
2. Nếu Sommelier xin phép được kiểm tra nút bần và ngửi thử thành kính, hãy cho phép.
3. Nếu Sommelier nhận lỗi nhẹ nhàng và lập tức đề xuất mở ngay một chai mới cùng niên vụ từ hầm bảo quản nhiệt độ chuẩn, bạn sẽ mỉm cười gật đầu và dịu lại.
4. Nếu Sommelier bao biện hoặc tỏ thái độ nghi ngờ vị giác của bạn, hãy thể hiện sự thất vọng sâu sắc.`
  );

  // Rubric weights
  const [weightSop, setWeightSop] = useState(35);
  const [weightTone, setWeightTone] = useState(25);
  const [weightProblemSolving, setWeightProblemSolving] = useState(25);
  const [weightSpeed, setWeightSpeed] = useState(15);

  const totalWeight = weightSop + weightTone + weightProblemSolving + weightSpeed;
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (totalWeight !== 100) {
      alert("Tổng trọng số 4 tiêu chí phải bằng đúng 100%!");
      return;
    }
    setIsSaved(true);
    setTimeout(() => {
      router.push(APP_ROUTES.CLIENT_SCENARIO_DETAIL(String(scenarioId)));
    }, 1200);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <ClientHeader breadcrumb={`Kịch bản Role-play AI / Chỉnh sửa SCN-FNB-01`} />

      {/* Navigation Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <Link 
          href={APP_ROUTES.CLIENT_SCENARIO_DETAIL(String(scenarioId))}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#64748B] hover:text-[#C69214] transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Hủy &amp; Quay lại chi tiết kịch bản</span>
        </Link>
      </div>

      {isSaved && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-xs sm:text-sm text-emerald-800 flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>Cập nhật cấu hình kịch bản thành công! Đang chuyển hướng...</span>
        </div>
      )}

      {/* Edit Form */}
      <form onSubmit={handleSave} className="space-y-6">
        {/* Section 1: General Info */}
        <div className="bg-white border border-[#ECE5D8] rounded-2xl p-6 shadow-xs space-y-4">
          <h2 className="font-serif text-lg font-bold text-[#0F172A] border-b border-[#ECE5D8] pb-3">
            1. Thông Tin Cơ Bản Kịch Bản
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="sm:col-span-2 space-y-1.5">
              <label className="text-xs font-bold text-[#0F172A]">Tên kịch bản tình huống:</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full min-h-[44px] px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#C69214] transition"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#0F172A]">Mã kịch bản (Code):</label>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                required
                className="w-full min-h-[44px] px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#C69214] font-mono transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#0F172A]">Phòng ban áp dụng:</label>
              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="w-full min-h-[44px] px-3.5 py-2 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#C69214] transition"
              >
                <option value="F&B / Sommelier">F&B / Sommelier</option>
                <option value="Lễ tân & Tiền sảnh">Lễ tân & Tiền sảnh</option>
                <option value="Quầy Bar & Lounge">Quầy Bar & Lounge</option>
                <option value="Bộ phận Bếp">Bộ phận Bếp</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#0F172A]">Mức độ khó:</label>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                className="w-full min-h-[44px] px-3.5 py-2 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#C69214] transition"
              >
                <option value="Dễ">Dễ</option>
                <option value="Trung bình">Trung bình</option>
                <option value="Thử thách cao">Thử thách cao</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#0F172A]">Trạng thái triển khai:</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full min-h-[44px] px-3.5 py-2 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#C69214] transition"
              >
                <option value="active">Đang kích hoạt (Live)</option>
                <option value="draft">Bản nháp (Draft)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Section 2: AI Persona & Prompt Editor */}
        <div className="bg-white border border-[#ECE5D8] rounded-2xl p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-[#ECE5D8] pb-3">
            <h2 className="font-serif text-lg font-bold text-[#0F172A]">
              2. Thiết Lập Persona Khách Hàng AI &amp; System Prompt
            </h2>
            <span className="text-xs text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 font-semibold flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#C69214]" /> AI Voice Enabled
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#0F172A]">Tên khách hàng giả lập:</label>
              <input
                type="text"
                value={personaName}
                onChange={(e) => setPersonaName(e.target.value)}
                required
                className="w-full min-h-[44px] px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#C69214] transition"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#0F172A]">Mô tả vai trò &amp; Tính cách:</label>
              <input
                type="text"
                value={personaRole}
                onChange={(e) => setPersonaRole(e.target.value)}
                required
                className="w-full min-h-[44px] px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#C69214] transition"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-[#0F172A]">System Prompt định hình phản ứng AI:</label>
              <span className="text-[11px] text-slate-400 font-mono">{systemPrompt.length} ký tự</span>
            </div>
            <textarea
              rows={8}
              value={systemPrompt}
              onChange={(e) => setSystemPrompt(e.target.value)}
              required
              className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 font-mono leading-relaxed focus:outline-none focus:border-[#C69214] transition"
            />
          </div>
        </div>

        {/* Section 3: Evaluation Rubrics */}
        <div className="bg-white border border-[#ECE5D8] rounded-2xl p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-[#ECE5D8] pb-3">
            <h2 className="font-serif text-lg font-bold text-[#0F172A]">
              3. Cấu Hình Trọng Số Đánh Giá (%)
            </h2>
            <div className={`text-xs font-bold px-2.5 py-1 rounded-md ${
              totalWeight === 100 
                ? "bg-emerald-50 text-emerald-700 border border-emerald-200" 
                : "bg-rose-50 text-rose-700 border border-rose-200"
            }`}>
              Tổng: {totalWeight}% {totalWeight !== 100 && "(Cần bằng 100%)"}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-3.5 rounded-xl border border-slate-200 space-y-1.5">
              <div className="flex justify-between text-xs font-bold text-[#0F172A]">
                <span>1. Tuân thủ chuẩn SOP:</span>
                <span className="text-[#C69214]">{weightSop}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                step="5"
                value={weightSop}
                onChange={(e) => setWeightSop(parseInt(e.target.value))}
                className="w-full accent-[#C69214] cursor-pointer"
              />
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200 space-y-1.5">
              <div className="flex justify-between text-xs font-bold text-[#0F172A]">
                <span>2. Ngữ điệu &amp; Thái độ:</span>
                <span className="text-[#C69214]">{weightTone}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                step="5"
                value={weightTone}
                onChange={(e) => setWeightTone(parseInt(e.target.value))}
                className="w-full accent-[#C69214] cursor-pointer"
              />
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200 space-y-1.5">
              <div className="flex justify-between text-xs font-bold text-[#0F172A]">
                <span>3. Kỹ năng xử lý khiếu nại:</span>
                <span className="text-[#C69214]">{weightProblemSolving}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                step="5"
                value={weightProblemSolving}
                onChange={(e) => setWeightProblemSolving(parseInt(e.target.value))}
                className="w-full accent-[#C69214] cursor-pointer"
              />
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200 space-y-1.5">
              <div className="flex justify-between text-xs font-bold text-[#0F172A]">
                <span>4. Tốc độ &amp; Chuyên nghiệp:</span>
                <span className="text-[#C69214]">{weightSpeed}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                step="5"
                value={weightSpeed}
                onChange={(e) => setWeightSpeed(parseInt(e.target.value))}
                className="w-full accent-[#C69214] cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3 pt-2">
          <Link
            href={APP_ROUTES.CLIENT_SCENARIO_DETAIL(String(scenarioId))}
            className="min-h-[44px] px-5 py-2.5 bg-white hover:bg-slate-50 border border-[#CBD5E1] text-[#1E293B] text-xs sm:text-sm font-semibold rounded-xl transition cursor-pointer"
          >
            Hủy bỏ
          </Link>
          <button
            type="submit"
            className="min-h-[44px] px-6 py-2.5 bg-gradient-to-r from-[#C69214] to-[#B07E0F] hover:from-[#B07E0F] hover:to-[#996D0D] text-white text-xs sm:text-sm font-bold rounded-xl flex items-center gap-2 shadow-xs transition cursor-pointer"
          >
            <Save className="w-4 h-4" />
            <span>Lưu thay đổi kịch bản</span>
          </button>
        </div>
      </form>
    </div>
  );
}
