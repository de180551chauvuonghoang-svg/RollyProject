"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { 
  ArrowLeft, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  ChevronLeft, 
  ChevronRight, 
  HelpCircle,
  Award,
  Send,
  X
} from "lucide-react";
import { APP_ROUTES } from "@/constants/routes";
import { RollyLogo } from "@/components/common/RollyLogo";

interface QuizQuestion {
  id: number;
  question: string;
  category: string;
  options: {
    id: string;
    text: string;
  }[];
  correctAnswer: string;
  explanation: string;
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    category: "Chuẩn bị & Dụng cụ",
    question: "Khi chuẩn bị chiết vang đỏ Bordeaux Grand Cru niên vụ 2012, tiêu chuẩn lựa chọn bình Decanter và phương pháp soi cặn nào là CHÍNH XÁC nhất theo quy chuẩn SOP-FNB-04?",
    options: [
      { id: "A", text: "Sử dụng bình Decanter đáy hẹp cổ cao, soi cặn bằng đèn flash điện thoại di động để nhìn rõ nhất" },
      { id: "B", text: "Sử dụng bình Decanter pha lê đáy rộng, soi cặn bằng ngọn nến sáp không mùi đặt ngang tầm vai chai" },
      { id: "C", text: "Dùng ly vang Burgundy cỡ lớn để chiết tạm thời trong 5 phút trước khi rót cho khách" },
      { id: "D", text: "Không cần soi nến nếu chai rượu đã được giữ thẳng đứng trong tủ bảo quản 24 giờ" }
    ],
    correctAnswer: "B",
    explanation: "Theo SOP-FNB-04, Bordeaux trẻ cần bình Decanter đáy rộng để tăng diện tích tiếp xúc oxy, và phải soi cặn qua ngọn nến không mùi để tránh ám mùi nến vào hương rượu."
  },
  {
    id: 2,
    category: "Thao tác Sommelier",
    question: "Vị trí cắt vỏ chì bảo vệ cổ chai vang đạt chuẩn nhà hàng cao cấp Michelin là ở đâu?",
    options: [
      { id: "A", text: "Cắt ngay sát đỉnh miệng chai để lộ toàn bộ mặt trên nút bần" },
      { id: "B", text: "Cắt tại vị trí ngấn cổ chai thứ hai (dưới gờ nổi) để giọt rượu khi rót không tiếp xúc với mép kim loại" },
      { id: "C", text: "Lột toàn bộ vỏ chì từ cổ chai xuống tận vai chai bằng tay" },
      { id: "D", text: "Dùng xoắn kim loại đâm xuyên qua vỏ chì mà không cần cắt" }
    ],
    correctAnswer: "B",
    explanation: "Cắt chì dưới gờ thứ 2 ngăn chặn rượu tiếp xúc với kim loại chì bị oxy hóa gây ảnh hưởng hương vị và mất vệ sinh."
  },
  {
    id: 3,
    category: "Kiểm soát Chất lượng (TCA)",
    question: "Sau khi rút nút bần êm ái, thao tác Sommelier tiếp theo cần thực hiện trước khi rót thử cho chủ tiệc là gì?",
    options: [
      { id: "A", text: "Đưa ngay chai rượu cho từng vị khách tại bàn chuyền tay nhau ngửi cổ chai" },
      { id: "B", text: "Vứt nút bần vào thùng rác kín ngay lập tức để giữ bàn ăn sạch sẽ" },
      { id: "C", text: "Đặt nút bần lên đĩa sứ bên phải chủ tiệc (Host) và kiểm tra nhẹ mùi lỗi nút bần ẩm mốc (TCA)" },
      { id: "D", text: "Rót đầy nửa ly vang cho khách uống ngay để xác nhận độ tươi" }
    ],
    correctAnswer: "C",
    explanation: "Quy chuẩn Sommelier yêu cầu đặt nút bần lên đĩa sứ nhỏ để Host kiểm tra độ ẩm của nút và Sommelier phải thẩm định không có mùi TCA (Cork taint)."
  },
  {
    id: 4,
    category: "Nhiệt độ & Bảo quản",
    question: "Nhiệt độ phục vụ chuẩn quốc tế đối với vang đỏ Bordeaux & Cabernet Sauvignon Grand Cru là bao nhiêu?",
    options: [
      { id: "A", text: "4°C – 6°C (Ướp trong xô đá ngập nước)" },
      { id: "B", text: "10°C – 12°C (Nhiệt độ tủ mát trái cây thông thường)" },
      { id: "C", text: "16°C – 18°C (Nhiệt độ phòng hầm rượu tiêu chuẩn cellar temp)" },
      { id: "D", text: "24°C – 26°C (Nhiệt độ phòng máy lạnh Việt Nam thông thường)" }
    ],
    correctAnswer: "C",
    explanation: "Vang đỏ đậm đà phục vụ chuẩn nhất ở 16°C – 18°C. Quá lạnh sẽ làm chát đắng tannin, quá nóng sẽ làm bốc hơi cồn gắt."
  },
  {
    id: 5,
    category: "Nghi thức Bàn tiệc",
    question: "Thứ tự rót rượu phục vụ sau khi chủ tiệc (Host) đã nếm thử và gật đầu đồng ý là:",
    options: [
      { id: "A", text: "Rót theo thứ tự ngẫu nhiên bất kỳ ai ngồi gần Sommelier nhất" },
      { id: "B", text: "Rót đầy ly cho Host trước rồi mới tới các vị khách còn lại" },
      { id: "C", text: "Ưu tiên quý bà lớn tuổi nhất trước, theo chiều kim đồng hồ, và rót hoàn tất cho Host sau cùng" },
      { id: "D", text: "Rót cho toàn bộ nam giới trước, sau đó mới rót cho phụ nữ" }
    ],
    correctAnswer: "C",
    explanation: "Nghi thức Fine Dining quốc tế: Ladies first (quý bà lớn tuổi/VIP nhất), theo chiều kim đồng hồ, và chủ tiệc là người được phục vụ cuối cùng."
  }
];

export default function QuizPage() {
  const params = useParams();
  const router = useRouter();
  const courseId = params?.id || "1";

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  // Countdown timer effect
  useEffect(() => {
    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const currentQ = quizQuestions[currentIndex];
  const totalQuestions = quizQuestions.length;
  const answeredCount = Object.keys(selectedAnswers).length;

  const handleSelectOption = (optionId: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQ.id]: optionId
    }));
  };

  const handleSubmit = () => {
    // Calculate score
    let correctCount = 0;
    quizQuestions.forEach(q => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        correctCount += 1;
      }
    });

    const passed = correctCount >= 4; // >= 80%
    if (passed) {
      router.push(APP_ROUTES.EMPLOYEE_QUIZ_PASSED(String(courseId)));
    } else {
      router.push(APP_ROUTES.EMPLOYEE_QUIZ_FAILED(String(courseId)));
    }
  };

  return (
    <div className="min-h-screen bg-[#FEFCF7] text-[#0F172A] flex flex-col">
      {/* Top Bar Navigation */}
      <header className="bg-white border-b border-[#ECE5D8] px-4 sm:px-8 py-3.5 sticky top-0 z-30 shadow-xs">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link 
              href={APP_ROUTES.EMPLOYEE_COURSE_DETAIL(String(courseId))}
              className="p-2 text-slate-400 hover:text-[#0F172A] rounded-lg hover:bg-slate-100 transition cursor-pointer"
              title="Quay lại bài học"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <div className="text-[11px] font-bold text-[#C69214] uppercase tracking-wider">Bài Kiểm Tra SOP</div>
              <h1 className="text-sm sm:text-base font-bold text-[#0F172A] truncate max-w-[200px] sm:max-w-md">
                SOP-FNB-04: Khai mở & Chiết vang Decanter
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-5">
            {/* Countdown Timer */}
            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs sm:text-sm font-bold font-mono ${
              timeLeft < 120 
                ? "bg-rose-50 border-rose-200 text-rose-600 animate-pulse" 
                : "bg-amber-50/80 border-amber-200 text-amber-900"
            }`}>
              <Clock className="w-4 h-4 text-[#C69214]" />
              <span>{formatTime(timeLeft)}</span>
            </div>

            {/* Quick Submit CTA */}
            <button
              type="button"
              onClick={() => setShowSubmitModal(true)}
              className="min-h-[40px] px-3.5 sm:px-4 py-2 bg-[#0F172A] hover:bg-slate-800 text-[#E2B755] text-xs sm:text-sm font-semibold rounded-xl flex items-center gap-1.5 shadow-xs transition cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Nộp bài</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-6 sm:py-8 flex flex-col justify-between">
        <div className="space-y-6">
          {/* Progress Header */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-[#64748B]">
              <span>Câu hỏi {currentIndex + 1} / {totalQuestions}</span>
              <span>Đã chọn: <strong className="text-[#C69214]">{answeredCount}</strong> / {totalQuestions}</span>
            </div>
            <div className="w-full bg-[#ECE5D8] rounded-full h-2 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-[#C69214] to-[#E2B755] h-full transition-all duration-300 rounded-full"
                style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-white border border-[#ECE5D8] rounded-2xl p-5 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 bg-amber-50 border border-amber-200 text-[#C69214] text-[11px] font-bold rounded-md uppercase tracking-wider">
                {currentQ.category}
              </span>
              <span className="text-xs text-[#94A3B8]">• 20 Điểm</span>
            </div>

            <h2 className="text-base sm:text-lg font-bold text-[#0F172A] leading-relaxed">
              {currentQ.question}
            </h2>

            {/* Answer Options */}
            <div className="space-y-3 pt-2">
              {currentQ.options.map((opt) => {
                const isSelected = selectedAnswers[currentQ.id] === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => handleSelectOption(opt.id)}
                    className={`w-full p-4 rounded-xl border text-left transition flex items-start gap-3.5 cursor-pointer min-h-[56px] ${
                      isSelected
                        ? "bg-amber-50/60 border-[#C69214] shadow-xs"
                        : "bg-white border-[#E2E8F0] hover:bg-[#FEFCF7] hover:border-[#CBD5E1]"
                    }`}
                  >
                    <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 transition ${
                      isSelected
                        ? "bg-[#C69214] text-white"
                        : "bg-slate-100 text-slate-700"
                    }`}>
                      {opt.id}
                    </span>
                    <span className={`text-xs sm:text-sm leading-relaxed ${
                      isSelected ? "text-[#0F172A] font-semibold" : "text-[#334155]"
                    }`}>
                      {opt.text}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Pagination & Palette */}
        <div className="mt-8 pt-6 border-t border-[#ECE5D8] flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Quick Palette */}
          <div className="flex items-center gap-2">
            {quizQuestions.map((q, idx) => {
              const isAnswered = !!selectedAnswers[q.id];
              const isCurrent = idx === currentIndex;
              return (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-9 h-9 rounded-xl font-bold text-xs transition cursor-pointer flex items-center justify-center ${
                    isCurrent
                      ? "bg-[#0F172A] text-[#E2B755] ring-2 ring-[#C69214] ring-offset-2"
                      : isAnswered
                      ? "bg-amber-100 text-[#C69214] border border-amber-300"
                      : "bg-white border border-[#CBD5E1] text-[#64748B] hover:bg-slate-100"
                  }`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>

          {/* Prev / Next Buttons */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              disabled={currentIndex === 0}
              onClick={() => setCurrentIndex(prev => prev - 1)}
              className="flex-1 sm:flex-none min-h-[44px] px-4 py-2.5 bg-white border border-[#CBD5E1] hover:bg-[#F8FAFC] disabled:opacity-40 disabled:hover:bg-white text-xs sm:text-sm font-semibold text-[#1E293B] rounded-xl flex items-center justify-center gap-1.5 transition cursor-pointer disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Câu trước</span>
            </button>

            {currentIndex < totalQuestions - 1 ? (
              <button
                type="button"
                onClick={() => setCurrentIndex(prev => prev + 1)}
                className="flex-1 sm:flex-none min-h-[44px] px-5 py-2.5 bg-[#C69214] hover:bg-[#B07E0F] text-white text-xs sm:text-sm font-semibold rounded-xl flex items-center justify-center gap-1.5 transition shadow-xs cursor-pointer"
              >
                <span>Câu tiếp theo</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setShowSubmitModal(true)}
                className="flex-1 sm:flex-none min-h-[44px] px-5 py-2.5 bg-gradient-to-r from-[#C69214] to-[#B07E0F] hover:from-[#B07E0F] hover:to-[#996D0D] text-white text-xs sm:text-sm font-bold rounded-xl flex items-center justify-center gap-1.5 transition shadow-xs cursor-pointer"
              >
                <span>Nộp bài & Chấm điểm</span>
                <Award className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </main>

      {/* Confirmation Submit Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-[#ECE5D8] space-y-5 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-[#C69214]">
                <HelpCircle className="w-5 h-5" />
              </div>
              <button 
                type="button"
                onClick={() => setShowSubmitModal(false)}
                className="p-2 text-slate-400 hover:text-slate-600 rounded-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#0F172A]">Xác nhận nộp bài kiểm tra?</h3>
              <p className="text-xs sm:text-sm text-[#64748B] mt-1 leading-relaxed">
                Bạn đã trả lời <strong className="text-[#C69214]">{answeredCount} / {totalQuestions}</strong> câu hỏi. Bạn cần đạt từ <strong className="text-emerald-700">80% (4/5 câu)</strong> trở lên để nhận chứng nhận hoàn thành.
              </p>
            </div>

            {answeredCount < totalQuestions && (
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Còn {totalQuestions - answeredCount} câu hỏi bạn chưa chọn đáp án!</span>
              </div>
            )}

            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowSubmitModal(false)}
                className="min-h-[44px] px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-semibold rounded-xl transition cursor-pointer"
              >
                Tiếp tục làm bài
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="min-h-[44px] px-4 py-2 bg-[#C69214] hover:bg-[#B07E0F] text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition cursor-pointer"
              >
                Xác nhận nộp
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

