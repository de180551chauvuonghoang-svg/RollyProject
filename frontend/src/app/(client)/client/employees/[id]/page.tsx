"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { 
  ArrowLeft, 
  Award, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  ShieldCheck, 
  Sparkles, 
  Bot, 
  Play, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  ChevronRight,
  TrendingUp,
  FileText
} from "lucide-react";
import { ClientHeader } from "@/components/layout/client/ClientHeader";
import { APP_ROUTES } from "@/constants/routes";

export default function EmployeeDetailPage() {
  const params = useParams();
  const staffId = params?.id || "1";

  const [activeTab, setActiveTab] = useState<"radar" | "history" | "feedback">("feedback");
  const [attitudeScore, setAttitudeScore] = useState(9.5);
  const [sopScore, setSopScore] = useState(9.0);
  const [problemSolvingScore, setProblemSolvingScore] = useState(8.5);
  const [feedbackNote, setFeedbackNote] = useState(
    "Em xử lý tình huống khách VVIP phàn nàn rất điềm tĩnh và lịch thiệp. Cần chú ý thêm động tác xoay decanter nhẹ nhàng hơn để không làm xáo trộn cặn lắng ở đáy bình."
  );
  const [feedbackSent, setFeedbackSent] = useState(false);

  const handleSendFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    setFeedbackSent(true);
    setTimeout(() => setFeedbackSent(false), 4000);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <ClientHeader breadcrumb={`Hồ sơ nhân viên / #${staffId}`} />

      {/* Back button */}
      <div>
        <Link 
          href={APP_ROUTES.CLIENT_EMPLOYEES}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#64748B] hover:text-[#C69214] transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Quay lại danh sách nhân sự</span>
        </Link>
      </div>

      {/* Employee Profile Header Card */}
      <div className="bg-white border border-[#ECE5D8] rounded-2xl p-6 sm:p-7 shadow-xs">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="relative">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-[#E2B755] flex items-center justify-center font-serif text-2xl sm:text-3xl font-bold shadow-md">
                HL
              </div>
              <span className="absolute -bottom-2 -right-2 px-2 py-0.5 bg-[#C69214] text-white text-[10px] font-bold rounded-md shadow-xs">
                Level 2
              </span>
            </div>

            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <h1 className="font-serif text-xl sm:text-2xl font-bold text-[#0F172A]">
                  Nguyễn Hoàng Long
                </h1>
                <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold rounded-full flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Đã kiểm định 5 sao
                </span>
              </div>

              <p className="text-xs sm:text-sm font-medium text-[#8C6005]">
                Head Sommelier • Trưởng nhóm Chuyên gia Rượu vang
              </p>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#64748B] pt-1">
                <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5" /> hoanglong.sommelier@thelandmark.com</span>
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> Chi nhánh The Grand Bistro Landmark 81</span>
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> Tham gia: 15/01/2026</span>
              </div>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 gap-3 w-full md:w-auto shrink-0 border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-6">
            <div className="p-3 bg-[#FEFCF7] border border-[#ECE5D8] rounded-xl text-center">
              <div className="text-[11px] text-[#64748B]">Điểm TB AI</div>
              <div className="font-serif text-lg font-bold text-[#C69214]">84.2/100</div>
            </div>
            <div className="p-3 bg-[#FEFCF7] border border-[#ECE5D8] rounded-xl text-center">
              <div className="text-[11px] text-[#64748B]">Đánh giá QL</div>
              <div className="font-serif text-lg font-bold text-emerald-700">9.0/10</div>
            </div>
            <div className="p-3 bg-[#FEFCF7] border border-[#ECE5D8] rounded-xl text-center">
              <div className="text-[11px] text-[#64748B]">Tiến độ SOP</div>
              <div className="font-serif text-lg font-bold text-[#0F172A]">14/18</div>
            </div>
            <div className="p-3 bg-[#FEFCF7] border border-[#ECE5D8] rounded-xl text-center">
              <div className="text-[11px] text-[#64748B]">Giờ AI Voice</div>
              <div className="font-serif text-lg font-bold text-slate-800">32h</div>
            </div>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center gap-4 border-b border-[#ECE5D8] mt-6 pt-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab("feedback")}
            className={`pb-3 px-2 text-xs sm:text-sm font-semibold border-b-2 flex items-center gap-2 transition cursor-pointer whitespace-nowrap ${
              activeTab === "feedback"
                ? "border-[#C69214] text-[#C69214]"
                : "border-transparent text-[#64748B] hover:text-[#0F172A]"
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Gửi Nhận xét 1-on-1 của Quản lý</span>
          </button>
          <button
            onClick={() => setActiveTab("history")}
            className={`pb-3 px-2 text-xs sm:text-sm font-semibold border-b-2 flex items-center gap-2 transition cursor-pointer whitespace-nowrap ${
              activeTab === "history"
                ? "border-[#C69214] text-[#C69214]"
                : "border-transparent text-[#64748B] hover:text-[#0F172A]"
            }`}
          >
            <Bot className="w-4 h-4" />
            <span>Lịch sử Thực hành Role-play AI (12 buổi)</span>
          </button>
          <button
            onClick={() => setActiveTab("radar")}
            className={`pb-3 px-2 text-xs sm:text-sm font-semibold border-b-2 flex items-center gap-2 transition cursor-pointer whitespace-nowrap ${
              activeTab === "radar"
                ? "border-[#C69214] text-[#C69214]"
                : "border-transparent text-[#64748B] hover:text-[#0F172A]"
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>Biểu đồ Radar Năng lực 4 Trụ Cột</span>
          </button>
        </div>
      </div>

      {/* Tab 1: 1-on-1 Feedback Form */}
      {activeTab === "feedback" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white border border-[#ECE5D8] rounded-2xl p-6 shadow-xs space-y-6">
            <div>
              <h2 className="font-serif text-lg font-bold text-[#0F172A]">
                Đánh giá &amp; Gửi Feedback 1-on-1
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B] mt-1">
                Phản hồi này sẽ được gửi trực tiếp đến trang kết quả Role-play và hòm thư đào tạo của nhân viên.
              </p>
            </div>

            {feedbackSent && (
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-xs sm:text-sm text-emerald-800 flex items-center gap-2.5 animate-in fade-in">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Nhận xét và điểm số đã được gửi thành công đến nhân viên <strong>Nguyễn Hoàng Long</strong>!</span>
              </div>
            )}

            <form onSubmit={handleSendFeedback} className="space-y-6">
              {/* Sliders for 3 metrics */}
              <div className="space-y-4 bg-[#FEFCF7] p-5 rounded-xl border border-[#ECE5D8]">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs sm:text-sm font-semibold">
                    <span className="text-[#0F172A]">1. Thái độ &amp; Tác phong phục vụ:</span>
                    <span className="text-[#C69214] font-bold">{attitudeScore} / 10</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="0.5"
                    value={attitudeScore}
                    onChange={(e) => setAttitudeScore(parseFloat(e.target.value))}
                    className="w-full accent-[#C69214] cursor-pointer"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs sm:text-sm font-semibold">
                    <span className="text-[#0F172A]">2. Mức độ tuân thủ kiến thức chuẩn SOP:</span>
                    <span className="text-[#C69214] font-bold">{sopScore} / 10</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="0.5"
                    value={sopScore}
                    onChange={(e) => setSopScore(parseFloat(e.target.value))}
                    className="w-full accent-[#C69214] cursor-pointer"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs sm:text-sm font-semibold">
                    <span className="text-[#0F172A]">3. Kỹ năng xoa dịu &amp; Xử lý khiếu nại VVIP:</span>
                    <span className="text-[#C69214] font-bold">{problemSolvingScore} / 10</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="0.5"
                    value={problemSolvingScore}
                    onChange={(e) => setProblemSolvingScore(parseFloat(e.target.value))}
                    className="w-full accent-[#C69214] cursor-pointer"
                  />
                </div>
              </div>

              {/* Text Note */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-bold text-[#0F172A]">
                  Nội dung nhận xét chi tiết của Quản lý:
                </label>
                <textarea
                  rows={4}
                  value={feedbackNote}
                  onChange={(e) => setFeedbackNote(e.target.value)}
                  placeholder="Nhập lời khen, điểm cần cải thiện, hoặc chỉ dẫn SOP cụ thể..."
                  className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#C69214] transition leading-relaxed"
                />
              </div>

              {/* Quick AI Prompts */}
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="text-slate-400 font-medium">Gợi ý nhanh:</span>
                <button
                  type="button"
                  onClick={() => setFeedbackNote(prev => prev + " Tác phong đón tiếp rất chuẩn mực và tạo cảm giác an tâm cho khách.")}
                  className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition cursor-pointer"
                >
                  + Khen tác phong
                </button>
                <button
                  type="button"
                  onClick={() => setFeedbackNote(prev => prev + " Cần rèn luyện thêm thao tác mở nút bần không phát ra tiếng nổ.")}
                  className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition cursor-pointer"
                >
                  + Nhắc nhở nút bần
                </button>
              </div>

              {/* Submit CTA */}
              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="min-h-[46px] px-6 py-2.5 bg-gradient-to-r from-[#C69214] to-[#B07E0F] hover:from-[#B07E0F] hover:to-[#996D0D] text-white text-xs sm:text-sm font-bold rounded-xl flex items-center gap-2 shadow-xs transition cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Lưu &amp; Gửi phản hồi đến nhân viên</span>
                </button>
              </div>
            </form>
          </div>

          {/* Previous Feedback History */}
          <div className="space-y-4">
            <h3 className="font-serif text-base font-bold text-[#0F172A]">
              Lịch sử nhận xét gần đây (3)
            </h3>

            <div className="space-y-3">
              <div className="bg-white border border-[#ECE5D8] rounded-xl p-4 shadow-xs space-y-2">
                <div className="flex items-center justify-between text-xs text-[#64748B]">
                  <span className="font-semibold text-[#0F172A]">Manager: Trần Trọng Nghĩa</span>
                  <span>10/11/2026</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#C69214]">
                  <span>Điểm: 9.0/10</span>
                  <span>•</span>
                  <span>Kịch bản: Khách VVIP Trễ hẹn</span>
                </div>
                <p className="text-xs text-[#475569] leading-relaxed">
                  "Kỹ năng kiểm soát ngữ điệu rất tốt, khách ban đầu bực bội nhưng đã mỉm cười sau lời chào."
                </p>
              </div>

              <div className="bg-white border border-[#ECE5D8] rounded-xl p-4 shadow-xs space-y-2">
                <div className="flex items-center justify-between text-xs text-[#64748B]">
                  <span className="font-semibold text-[#0F172A]">Manager: Lê Thanh Phong</span>
                  <span>02/11/2026</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#C69214]">
                  <span>Điểm: 8.5/10</span>
                  <span>•</span>
                  <span>Kịch bản: Đổi món đột xuất</span>
                </div>
                <p className="text-xs text-[#475569] leading-relaxed">
                  "Cần lưu ý phối hợp nhịp nhàng với bếp trưởng nhanh hơn khi khách yêu cầu đổi món."
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Role-play practice history */}
      {activeTab === "history" && (
        <div className="bg-white border border-[#ECE5D8] rounded-2xl p-6 shadow-xs space-y-4">
          <h2 className="font-serif text-lg font-bold text-[#0F172A]">
            Lịch sử các phiên đối thoại với AI
          </h2>

          <div className="space-y-3">
            {[
              { id: "1", scenario: "Khách VVIP Phàn nàn Chai Vang có mùi lạ", date: "10/11/2026 14:30", score: 8.8, duration: "06:45", status: "Hoàn thành xuất sắc" },
              { id: "2", scenario: "Phục vụ Khách Trễ Hẹn 30 Phút & Đổi Bàn", date: "08/11/2026 10:15", score: 8.2, duration: "05:12", status: "Đạt chuẩn" },
              { id: "3", scenario: "Tư vấn Pairing Vang Trắng Cho Thực Đơn Omakase", date: "04/11/2026 16:00", score: 8.6, duration: "07:20", status: "Đạt chuẩn" },
            ].map(item => (
              <div key={item.id} className="p-4 rounded-xl border border-slate-200 hover:border-[#C69214] transition flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="font-bold text-sm text-[#0F172A]">{item.scenario}</div>
                  <div className="flex items-center gap-3 text-xs text-[#64748B]">
                    <span>{item.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {item.duration}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-base font-bold text-[#C69214]">{item.score}/10</div>
                    <div className="text-[11px] text-emerald-600 font-semibold">{item.status}</div>
                  </div>
                  <button 
                    type="button" 
                    onClick={() => alert(`Nghe lại file ghi âm buổi thực hành ${item.id}`)}
                    className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition cursor-pointer"
                    title="Nghe lại ghi âm"
                  >
                    <Play className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Radar Chart */}
      {activeTab === "radar" && (
        <div className="bg-white border border-[#ECE5D8] rounded-2xl p-6 shadow-xs space-y-6">
          <h2 className="font-serif text-lg font-bold text-[#0F172A]">
            Đánh giá năng lực theo 4 trụ cột nghiệp vụ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* SVG Radar Graphic */}
            <div className="flex justify-center">
              <svg viewBox="0 0 300 300" className="w-64 h-64 sm:w-72 sm:h-72">
                {/* Background Web Polygons */}
                <polygon points="150,30 270,150 150,270 30,150" fill="none" stroke="#E2E8F0" strokeWidth="1" />
                <polygon points="150,60 240,150 150,240 60,150" fill="none" stroke="#E2E8F0" strokeWidth="1" />
                <polygon points="150,90 210,150 150,210 90,150" fill="none" stroke="#E2E8F0" strokeWidth="1" />
                <line x1="150" y1="30" x2="150" y2="270" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="30" y1="150" x2="270" y2="150" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="3 3" />

                {/* Score Polygon (88%, 84%, 82%, 85%) */}
                <polygon 
                  points="150,45 250,150 150,250 50,150" 
                  fill="rgba(198, 146, 20, 0.25)" 
                  stroke="#C69214" 
                  strokeWidth="2.5" 
                />
                
                {/* Data point dots */}
                <circle cx="150" cy="45" r="4" fill="#C69214" />
                <circle cx="250" cy="150" r="4" fill="#C69214" />
                <circle cx="150" cy="250" r="4" fill="#C69214" />
                <circle cx="50" cy="150" r="4" fill="#C69214" />

                {/* Pillar Labels */}
                <text x="150" y="20" textAnchor="middle" fill="#0F172A" fontSize="11" fontWeight="bold">SOP Chuẩn Mực (88%)</text>
                <text x="275" y="154" textAnchor="start" fill="#0F172A" fontSize="11" fontWeight="bold">Thái Độ (85%)</text>
                <text x="150" y="290" textAnchor="middle" fill="#0F172A" fontSize="11" fontWeight="bold">Xử Lý Khủng Hoảng (82%)</text>
                <text x="25" y="154" textAnchor="end" fill="#0F172A" fontSize="11" fontWeight="bold">Kiến Thức Rượu Vang (84%)</text>
              </svg>
            </div>

            {/* Pillar Breakdown list */}
            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-[#FEFCF7] border border-[#ECE5D8]">
                <div className="flex justify-between text-xs sm:text-sm font-bold text-[#0F172A]">
                  <span>Tuân thủ quy trình SOP</span>
                  <span className="text-[#C69214]">8.8 / 10</span>
                </div>
                <p className="text-xs text-[#64748B] mt-1">Thao tác mở rượu, lau miệng chai và chiết vang qua ánh nến rất chuẩn mực.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FEFCF7] border border-[#ECE5D8]">
                <div className="flex justify-between text-xs sm:text-sm font-bold text-[#0F172A]">
                  <span>Kiến thức rượu vang (Wine Sommelier)</span>
                  <span className="text-[#C69214]">8.4 / 10</span>
                </div>
                <p className="text-xs text-[#64748B] mt-1">Nắm vững các niên vụ Bordeaux, cách giải thích hương gỗ sồi và phân hạng Grand Cru.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FEFCF7] border border-[#ECE5D8]">
                <div className="flex justify-between text-xs sm:text-sm font-bold text-[#0F172A]">
                  <span>Kỹ năng xử lý khiếu nại &amp; Xoa dịu VVIP</span>
                  <span className="text-[#C69214]">8.2 / 10</span>
                </div>
                <p className="text-xs text-[#64748B] mt-1">Bình tĩnh trước thái độ khắt khe của khách, luôn đặt sự hài lòng của khách lên trước.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
