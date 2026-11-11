"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { 
  ArrowLeft, 
  Mic, 
  MicOff, 
  Volume2, 
  Send, 
  Clock, 
  Sparkles, 
  AlertCircle, 
  CheckCircle2, 
  Radio, 
  HelpCircle,
  Lightbulb,
  ShieldCheck,
  ChevronRight,
  RotateCcw
} from "lucide-react";
import { APP_ROUTES } from "@/constants/routes";

interface Message {
  id: string;
  sender: "guest" | "user";
  name: string;
  role: string;
  timestamp: string;
  avatar: string;
  content: string;
}

const initialMessages: Message[] = [
  {
    id: "1",
    sender: "guest",
    name: "Jean-Paul",
    role: "Khách VVIP (Master Sommelier)",
    timestamp: "01:15",
    avatar: "JP",
    content: "“Nhân viên, chai Burgundy này hình như nhiệt độ phục vụ quá ấm, vị chua lại gắt bất thường. Em có chắc là đã bảo quản đúng chuẩn 16°C không?”",
  },
  {
    id: "2",
    sender: "user",
    name: "Sommelier (Bạn)",
    role: "Head Sommelier L2",
    timestamp: "02:04",
    avatar: "HL",
    content: "“Dạ kính thưa quý khách, em rất lấy làm tiếc về trải nghiệm chưa trọn vẹn này. Em xin phép được kiểm tra lại nhiệt độ tại bàn bằng nhiệt kế hồng ngoại và lập tức chuẩn bị một chai mới được bảo quản lạnh chuẩn xác từ hầm rượu để phục vụ quý khách ngay ạ.”",
  },
  {
    id: "3",
    sender: "guest",
    name: "Jean-Paul",
    role: "Khách VVIP (Master Sommelier)",
    timestamp: "03:10",
    avatar: "JP",
    content: "“Được rồi, tôi đánh giá cao thái độ nhận lỗi nhanh. Nhưng em hãy giải thích cụ thể quy trình kiểm tra thử nút bần của nhà hàng trước khi rót cho tôi.”",
  },
];

export function PracticeRoomPage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id ? String(params.id) : "2";

  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputText, setInputText] = useState("");
  const [isRecording, setIsRecording] = useState(true);
  const [seconds, setSeconds] = useState(272); // 04:32

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMsg: Message = {
      id: String(Date.now()),
      sender: "user",
      name: "Sommelier (Bạn)",
      role: "Head Sommelier L2",
      timestamp: formatTime(seconds),
      avatar: "HL",
      content: `“${inputText}”`,
    };

    setMessages([...messages, newMsg]);
    setInputText("");

    // Simulate AI response after 1.5s
    setTimeout(() => {
      const aiReply: Message = {
        id: String(Date.now() + 1),
        sender: "guest",
        name: "Jean-Paul",
        role: "Khách VVIP (Master Sommelier)",
        timestamp: formatTime(seconds + 2),
        avatar: "JP",
        content: "“Giải thích chuẩn chỉ lắm! Tôi cảm nhận được sự tỉ mỉ của bạn theo đúng tinh thần Grand Dining. Hãy rót cho tôi nếm thử chai mới nhé.”",
      };
      setMessages((prev) => [...prev, aiReply]);
    }, 1500);
  };

  const handleFinish = () => {
    router.push(APP_ROUTES.EMPLOYEE_ROLEPLAY_RESULTS(id));
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col justify-between">
      {/* 1. Top Global Navigation Header */}
      <header className="h-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#EFEBE3] flex items-center justify-between shrink-0 sticky top-0 z-30 shadow-2xs">
        <div className="flex items-center gap-3 min-w-0">
          <Link
            href={APP_ROUTES.EMPLOYEE_ROLEPLAY}
            className="p-2 -ml-1 text-slate-500 hover:text-slate-900 rounded-xl hover:bg-slate-100 transition min-h-[44px] min-w-[44px] flex items-center justify-center shrink-0 cursor-pointer"
            aria-label="Quay lại kịch bản"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10.5px] font-bold bg-[#FAF6ED] text-[#8C6005] border border-[#EEDFB6] shrink-0">
                SOP-FNB-04
              </span>
              <h1 className="font-serif font-bold text-[14.5px] sm:text-[16px] text-[#0F172A] truncate">
                Xử lý Khiếu nại Vang bị chua &amp; Nhiệt độ sai
              </h1>
            </div>
            <div className="flex items-center gap-2 text-[12px] text-slate-500 mt-0.5 truncate">
              <span>Khách VVIP: <strong className="text-slate-800">Jean-Paul (Master Sommelier)</strong></span>
            </div>
          </div>
        </div>

        {/* Telemetry Status Right */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-slate-50 border border-slate-200 rounded-xl text-[12px] font-medium text-slate-600">
            <Radio className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
            <span>Voice • 120ms • Ổn định</span>
          </div>

          <button
            type="button"
            onClick={handleFinish}
            className="min-h-[40px] px-3.5 sm:px-4 py-2 bg-[#C69214] hover:bg-[#B38210] active:scale-[0.99] text-white font-bold rounded-xl text-[12.5px] sm:text-[13px] flex items-center gap-1.5 shadow-xs transition cursor-pointer"
          >
            <span>Kết thúc</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* 2. Telemetry Ribbon */}
      <div className="bg-white border-b border-[#EFEBE3] px-4 sm:px-8 py-2.5 flex flex-wrap items-center justify-between gap-3 text-[12px] sm:text-[12.5px]">
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-1.5 text-slate-600">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>Thời gian: <strong className="text-[#0F172A] font-mono">{formatTime(seconds)} / 10:00</strong></span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-600">
            <span>Lượt thoại: <strong className="text-[#0F172A]">{messages.length} / 8</strong></span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-slate-500">Tâm lý khách:</span>
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-50 text-amber-800 border border-amber-200 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping"></span>
            Nghi ngại &amp; Khắt khe
          </span>
        </div>
      </div>

      {/* 3. Main Stage Container */}
      <main className="flex-1 w-full max-w-[1240px] mx-auto p-3.5 sm:p-6 lg:p-8 flex flex-col gap-4 min-w-0">
        {/* Smart SOP In-Context Assistant Tip Box */}
        <div className="bg-[#FFFDF7] border border-[#F3E3B8] rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 shadow-2xs">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#FFF9EB] to-[#F5E6BF] border border-[#DFC88A] flex items-center justify-center text-[#C69214] shrink-0 mt-0.5 shadow-2xs">
            <Lightbulb className="w-5 h-5" />
          </div>
          <div className="min-w-0 text-[12.5px] sm:text-[13px] leading-relaxed">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-bold text-[#8C6005] uppercase tracking-wider text-[11px]">
                GỢI Ý SOP PHỤC VỤ VANG CAO CẤP (SOP-FNB-04)
              </span>
              <span className="px-2 py-0.2 rounded text-[10px] font-bold bg-red-100 text-red-700">
                Độ ưu tiên cao
              </span>
            </div>
            <p className="text-slate-700">
              Giải thích quy trình mở rượu chuẩn xác tại bàn, chủ động đề xuất đo lại nhiệt độ bằng nhiệt kế laser không tiếp xúc hoặc mở chai dự phòng ở nhiệt độ lý tưởng (16°C).
            </p>
          </div>
        </div>

        {/* Conversation Feed */}
        <div className="flex-1 bg-white rounded-2xl p-4 sm:p-6 border border-[#ECE5D8] shadow-xs space-y-4 overflow-y-auto max-h-[500px]">
          {messages.map((msg) => {
            const isGuest = msg.sender === "guest";
            return (
              <div
                key={msg.id}
                className={`flex gap-3 sm:gap-3.5 ${isGuest ? "items-start" : "items-start flex-row-reverse"}`}
              >
                {/* Avatar */}
                <div
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs border ${
                    isGuest
                      ? "bg-slate-900 border-slate-700 text-[#DFC88A]"
                      : "bg-[#FFF9EB] border-[#DFC88A] text-[#8C6005]"
                  }`}
                >
                  {msg.avatar}
                </div>

                {/* Bubble */}
                <div className={`max-w-[85%] sm:max-w-2xl ${isGuest ? "text-left" : "text-right"}`}>
                  <div className={`flex items-center gap-2 mb-1 text-[11.5px] ${isGuest ? "justify-start" : "justify-end"}`}>
                    <span className="font-bold text-slate-800">{msg.name}</span>
                    <span className="text-slate-400">• {msg.timestamp}</span>
                  </div>
                  <div
                    className={`p-3.5 sm:p-4 rounded-2xl text-[13.5px] leading-relaxed shadow-2xs ${
                      isGuest
                        ? "bg-slate-50 border border-slate-200 text-slate-800 rounded-tl-sm"
                        : "bg-[#FAF6ED] border border-[#EEDFB6] text-slate-900 rounded-tr-sm"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4. Live Audio Interaction Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 border border-[#ECE5D8] shadow-xs flex flex-col gap-4">
          {/* Waveform Visualization & Mic Status */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsRecording(!isRecording)}
                className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md transition transform active:scale-95 cursor-pointer ${
                  isRecording
                    ? "bg-[#C69214] ring-4 ring-[#C69214]/25 hover:bg-[#B38210]"
                    : "bg-slate-400 hover:bg-slate-500"
                }`}
                aria-label={isRecording ? "Dừng ghi âm" : "Bắt đầu ghi âm"}
              >
                {isRecording ? <Mic className="w-6 h-6 animate-pulse" /> : <MicOff className="w-6 h-6" />}
              </button>

              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[14px] text-slate-900">
                    {isRecording ? "Đang ghi âm giọng nói..." : "Mic tạm dừng"}
                  </span>
                  {isRecording && (
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  )}
                </div>
                <p className="text-[12px] text-slate-500">
                  AI Voice v3.4 đang phân tích ngữ điệu giọng nói &amp; từ khóa SOP thời gian thực
                </p>
              </div>
            </div>

            {/* Simulated Audio Waveform */}
            <div className="flex items-center gap-1 h-8 px-4 bg-slate-50 border border-slate-200 rounded-xl">
              {[40, 70, 90, 50, 30, 80, 100, 60, 45, 90, 75, 40, 85, 95, 30].map((h, i) => (
                <div
                  key={i}
                  className={`w-1 rounded-full transition-all duration-300 ${isRecording ? "bg-[#C69214]" : "bg-slate-300"}`}
                  style={{ height: isRecording ? `${h}%` : "20%" }}
                ></div>
              ))}
            </div>
          </div>

          {/* Backup Text Input Form */}
          <form onSubmit={handleSendMessage} className="flex items-center gap-2 pt-2 border-t border-slate-100">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Nhập câu trả lời bằng văn bản (nếu mic gặp sự cố)..."
              className="flex-1 min-h-[44px] px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-[13px] text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#C69214] transition"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="min-h-[44px] px-4 py-2.5 bg-slate-900 hover:bg-slate-800 disabled:opacity-40 text-white font-bold rounded-xl text-[13px] flex items-center gap-1.5 transition cursor-pointer shrink-0"
            >
              <Send className="w-4 h-4" />
              <span className="hidden sm:inline">Gửi</span>
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default PracticeRoomPage;
