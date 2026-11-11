"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { 
  ArrowLeft, 
  BookOpen, 
  Clock, 
  CheckCircle2, 
  FileText, 
  Play, 
  Award, 
  AlertTriangle, 
  Sparkles, 
  Share2, 
  Download, 
  CheckSquare, 
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Bot
} from "lucide-react";
import { EmployeeHeader } from "@/components/layout/employee/EmployeeHeader";
import { APP_ROUTES } from "@/constants/routes";

export default function CourseDetailPage() {
  const params = useParams();
  const router = useRouter();
  const courseId = params?.id || "1";

  const [activeTab, setActiveTab] = useState<"sop" | "video" | "checklist">("sop");
  const [completedSteps, setCompletedSteps] = useState<number[]>([1, 2]);

  const toggleStep = (stepNumber: number) => {
    setCompletedSteps(prev => 
      prev.includes(stepNumber) 
        ? prev.filter(s => s !== stepNumber) 
        : [...prev, stepNumber]
    );
  };

  return (
    <div className="min-h-screen bg-[#FEFCF7] text-[#0F172A] flex flex-col">
      <EmployeeHeader breadcrumb="Kho tài liệu SOP / SOP-FNB-04" />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-[#64748B] mb-5">
          <Link 
            href={APP_ROUTES.EMPLOYEE_COURSES} 
            className="flex items-center gap-1.5 hover:text-[#C69214] font-medium transition cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kho tài liệu SOP</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
          <span className="text-[#0F172A] font-semibold truncate max-w-[240px] sm:max-w-none">
            SOP-FNB-04: Khai mở & Chiết vang Decanter
          </span>
        </div>

        {/* Hero Header Card */}
        <div className="bg-white border border-[#ECE5D8] rounded-2xl p-5 sm:p-7 shadow-xs mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="px-3 py-1 bg-[#0F172A] text-[#E2B755] text-xs font-bold rounded-md tracking-wider">
                  SOP-FNB-04
                </span>
                <span className="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-200 text-xs font-medium rounded-full flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#C69214]" />
                  Tiêu chuẩn Fine Dining 5 sao
                </span>
                <span className="text-xs text-[#64748B] flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> 12 phút đọc & thực hành
                </span>
              </div>

              <h1 className="font-serif text-2xl sm:text-3xl lg:text-3xl font-bold text-[#0F172A] leading-tight">
                Quy trình Khai mở, Chiết vang Decanter & Kiểm soát Nhiệt độ phục vụ
              </h1>

              <p className="text-sm sm:text-base text-[#475569] max-w-3xl leading-relaxed">
                Chuẩn hóa các thao tác khai mở vang Bordeaux & Burgundy Grand Cru, kiểm tra lỗi nút bần TCA, kỹ thuật chiết vang qua ánh nến (Decanting by candlelight) và quy tắc đối thoại Sommelier với thực khách VVIP.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0">
              <Link
                href={APP_ROUTES.EMPLOYEE_QUIZ(String(courseId))}
                className="w-full sm:w-auto px-5 py-3 bg-gradient-to-r from-[#C69214] to-[#B07E0F] hover:from-[#B07E0F] hover:to-[#996D0D] text-white text-sm font-semibold rounded-xl flex items-center justify-center gap-2 shadow-xs transition cursor-pointer"
              >
                <CheckSquare className="w-4 h-4" />
                <span>Làm bài Quiz kiểm tra</span>
              </Link>
              <Link
                href={APP_ROUTES.EMPLOYEE_PRACTICE("2")}
                className="w-full sm:w-auto px-5 py-3 bg-white hover:bg-amber-50/50 border border-[#ECE5D8] text-[#A67C1E] text-sm font-semibold rounded-xl flex items-center justify-center gap-2 transition cursor-pointer"
              >
                <Bot className="w-4 h-4 text-[#C69214]" />
                <span>Luyện Role-play AI</span>
              </Link>
            </div>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="flex items-center gap-2 sm:gap-4 border-b border-[#ECE5D8] mt-6 pt-2 overflow-x-auto">
            <button
              onClick={() => setActiveTab("sop")}
              className={`pb-3 px-2 text-xs sm:text-sm font-semibold border-b-2 flex items-center gap-2 transition whitespace-nowrap cursor-pointer ${
                activeTab === "sop"
                  ? "border-[#C69214] text-[#C69214]"
                  : "border-transparent text-[#64748B] hover:text-[#0F172A]"
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Nội dung chuẩn SOP (PDF & Tài liệu)</span>
            </button>
            <button
              onClick={() => setActiveTab("video")}
              className={`pb-3 px-2 text-xs sm:text-sm font-semibold border-b-2 flex items-center gap-2 transition whitespace-nowrap cursor-pointer ${
                activeTab === "video"
                  ? "border-[#C69214] text-[#C69214]"
                  : "border-transparent text-[#64748B] hover:text-[#0F172A]"
              }`}
            >
              <Play className="w-4 h-4" />
              <span>Video minh họa Sommelier</span>
            </button>
            <button
              onClick={() => setActiveTab("checklist")}
              className={`pb-3 px-2 text-xs sm:text-sm font-semibold border-b-2 flex items-center gap-2 transition whitespace-nowrap cursor-pointer ${
                activeTab === "checklist"
                  ? "border-[#C69214] text-[#C69214]"
                  : "border-transparent text-[#64748B] hover:text-[#0F172A]"
              }`}
            >
              <CheckSquare className="w-4 h-4" />
              <span>Checklist 5 bước thực hiện</span>
            </button>
          </div>
        </div>

        {/* Tab Content Layout: Main Article + Right Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            {activeTab === "sop" && (
              <div className="bg-white border border-[#ECE5D8] rounded-2xl p-6 sm:p-8 shadow-xs space-y-8">
                {/* Section 1 */}
                <div>
                  <div className="flex items-center gap-2.5 text-[#C69214] text-xs font-bold uppercase tracking-wider mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#C69214]" />
                    Phần 1: Chuẩn bị & Dụng cụ chuyên dụng
                  </div>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0F172A] mb-3">
                    Bộ dụng cụ Sommelier đạt chuẩn quốc tế
                  </h2>
                  <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-4">
                    Tất cả dụng cụ phục vụ rượu vang phải được khử trùng bằng hơi nước nóng, lau khô bằng khăn microfiber không để lại bụi vải và kiểm tra bằng ánh sáng trắng trước khi mang ra bàn khách.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="p-3.5 rounded-xl bg-[#FEFCF7] border border-[#ECE5D8]">
                      <div className="font-semibold text-sm text-[#0F172A] mb-1">1. Decanter Riedel Crystal</div>
                      <p className="text-xs text-[#64748B]">Bình thở dáng thiên nga hoặc đáy rộng cho Bordeaux trẻ; bình cổ thon đáy hẹp cho Vintage lâu năm.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#FEFCF7] border border-[#ECE5D8]">
                      <div className="font-semibold text-sm text-[#0F172A] mb-1">2. Dao mở vang Laguiole</div>
                      <p className="text-xs text-[#64748B]">Lưỡi dao răng cưa sắc bén, xoắn thép 5 vòng phủ teflon chống vỡ nút bần cổ chai.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#FEFCF7] border border-[#ECE5D8]">
                      <div className="font-semibold text-sm text-[#0F172A] mb-1">3. Nến sáp không mùi & Giá đỡ</div>
                      <p className="text-xs text-[#64748B]">Đặt dưới cổ chai để quan sát dòng cặn lắng (sediment) khi nghiêng chai vang.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#FEFCF7] border border-[#ECE5D8]">
                      <div className="font-semibold text-sm text-[#0F172A] mb-1">4. Khăn Lito phục vụ màu trắng</div>
                      <p className="text-xs text-[#64748B]">Gấp gọn ghẽ trên cổ tay trái, dùng lau miệng chai sau mỗi lần rót.</p>
                    </div>
                  </div>
                </div>

                {/* Section 2 */}
                <div className="border-t border-[#F1EFEA] pt-6">
                  <div className="flex items-center gap-2.5 text-[#C69214] text-xs font-bold uppercase tracking-wider mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#C69214]" />
                    Phần 2: Quy trình 5 bước phục vụ tại bàn
                  </div>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0F172A] mb-4">
                    Thao tác chiết vang Bordeaux & Burgundy Grand Cru
                  </h2>

                  <ol className="space-y-4">
                    <li className="flex gap-3.5">
                      <span className="w-7 h-7 rounded-full bg-[#0F172A] text-[#E2B755] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        01
                      </span>
                      <div>
                        <h3 className="font-semibold text-sm sm:text-base text-[#0F172A]">Giới thiệu nhãn chai & Niên vụ (Vintage)</h3>
                        <p className="text-xs sm:text-sm text-[#64748B] mt-1 leading-relaxed">
                          Đứng bên phải người chủ tiệc (Host), ngửa nhãn chai 45 độ hướng về phía khách, đọc rõ: Tên nhà sản xuất (Château), Vùng trồng nho, Phân hạng Grand Cru và Niên vụ thu hoạch.
                        </p>
                      </div>
                    </li>

                    <li className="flex gap-3.5">
                      <span className="w-7 h-7 rounded-full bg-[#0F172A] text-[#E2B755] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        02
                      </span>
                      <div>
                        <h3 className="font-semibold text-sm sm:text-base text-[#0F172A]">Cắt vỏ chì dưới gờ cổ chai thứ hai</h3>
                        <p className="text-xs sm:text-sm text-[#64748B] mt-1 leading-relaxed">
                          Dùng dao xoay 2 vòng dứt khoát dưới ngấn cổ chai thứ 2 để giọt rượu khi rót không tiếp xúc với kim loại vỏ chì. Lau sạch miệng chai bằng khăn lito.
                        </p>
                      </div>
                    </li>

                    <li className="flex gap-3.5">
                      <span className="w-7 h-7 rounded-full bg-[#0F172A] text-[#E2B755] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        03
                      </span>
                      <div>
                        <h3 className="font-semibold text-sm sm:text-base text-[#0F172A]">Rút nút bần & Kiểm tra mùi TCA</h3>
                        <p className="text-xs sm:text-sm text-[#64748B] mt-1 leading-relaxed">
                          Rút êm ái, tuyệt đối không tạo ra tiếng nổ "bốp". Đặt nút bần lên đĩa sứ nhỏ bên tay phải của Host. Đưa nhẹ nút bần lên mũi để kiểm tra mùi lỗi ẩm mốc nút bần (Cork taint / TCA).
                        </p>
                      </div>
                    </li>

                    <li className="flex gap-3.5">
                      <span className="w-7 h-7 rounded-full bg-[#0F172A] text-[#E2B755] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        04
                      </span>
                      <div>
                        <h3 className="font-semibold text-sm sm:text-base text-[#0F172A]">Chiết vang qua ánh nến (Decanting)</h3>
                        <p className="text-xs sm:text-sm text-[#64748B] mt-1 leading-relaxed">
                          Thắp nến ngang tầm vai chai. Giữ decanter nghiêng 45 độ, rót chậm rãi dòng vang chảy dọc thành bình. Quan sát qua cổ chai khi thấy vệt cặn đầu tiên chạm đến vai chai thì ngừng rót ngay lập tức.
                        </p>
                      </div>
                    </li>

                    <li className="flex gap-3.5">
                      <span className="w-7 h-7 rounded-full bg-[#0F172A] text-[#E2B755] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        05
                      </span>
                      <div>
                        <h3 className="font-semibold text-sm sm:text-base text-[#0F172A]">Thử nếm & Rót phục vụ theo thứ tự ưu tiên</h3>
                        <p className="text-xs sm:text-sm text-[#64748B] mt-1 leading-relaxed">
                          Rót khoảng 30ml vào ly của Host để thử vị. Sau khi Host gật đầu đồng ý: Rót cho quý bà lớn tuổi nhất trước, theo chiều kim đồng hồ, và cuối cùng quay lại làm đầy ly của Host.
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>

                {/* Callout Warning: Don'ts */}
                <div className="bg-rose-50/70 border border-rose-200 rounded-xl p-4 sm:p-5 flex gap-3.5 items-start">
                  <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-rose-900 space-y-1.5">
                    <div className="font-bold">Lỗi cấm kỵ tối đa tại bàn tiệc Michelin:</div>
                    <ul className="list-disc list-inside space-y-1 text-rose-800">
                      <li>Tuyệt đối không xoay nhãn chai khi đang cắt chì hoặc rút nút.</li>
                      <li>Không để miệng chai hoặc cổ bình decanter chạm vào vành ly của thực khách.</li>
                      <li>Nhiệt độ phục vụ vang đỏ Bordeaux phải được giữ ở mức chuẩn 16°C – 18°C. Không dùng xô đá ướp lạnh vang đỏ sâu dưới 14°C trừ khi khách yêu cầu riêng.</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "video" && (
              <div className="bg-white border border-[#ECE5D8] rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0F172A] mb-2">
                    Video hướng dẫn Sommelier thực hành
                  </h2>
                  <p className="text-xs sm:text-sm text-[#64748B]">
                    Hướng dẫn chi tiết bởi Master Sommelier Lê Thanh Phong - Giám đốc Đào tạo Rolly Hospitality Academy.
                  </p>
                </div>

                {/* Mock Video Player */}
                <div className="relative aspect-video rounded-xl bg-slate-900 overflow-hidden flex items-center justify-center group shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1200&auto=format&fit=crop&q=80" 
                    alt="Video thumbnail"
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition duration-300"
                  />
                  <button 
                    type="button"
                    onClick={() => alert("Đang phát video hướng dẫn chuẩn 4K")}
                    className="w-16 h-16 rounded-full bg-[#C69214] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition cursor-pointer"
                    aria-label="Phát video"
                  >
                    <Play className="w-7 h-7 fill-white translate-x-0.5" />
                  </button>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs bg-black/60 px-3 py-2 rounded-lg backdrop-blur-xs">
                    <span>Thời lượng: 08:45</span>
                    <span>Độ phân giải: 4K Ultra HD</span>
                  </div>
                </div>

                <div className="bg-[#FEFCF7] border border-[#ECE5D8] p-4 rounded-xl text-xs sm:text-sm text-[#475569] space-y-2">
                  <div className="font-bold text-[#0F172A]">Các mốc thời gian đáng chú ý:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div><span className="font-semibold text-[#C69214]">01:15</span> - Kỹ thuật cắt chì giấu vết</div>
                    <div><span className="font-semibold text-[#C69214]">03:40</span> - Cách định vị ngọn nến chuẩn góc 45°</div>
                    <div><span className="font-semibold text-[#C69214]">05:20</span> - Nhận diện trầm tích cặn vang lâu năm</div>
                    <div><span className="font-semibold text-[#C69214]">07:10</span> - Lời thoại phục vụ chủ tiệc VVIP</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "checklist" && (
              <div className="bg-white border border-[#ECE5D8] rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
                <div>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0F172A] mb-2">
                    Bảng kiểm định chuẩn (Checklist thực hành)
                  </h2>
                  <p className="text-xs sm:text-sm text-[#64748B]">
                    Tự đánh giá các tiêu chuẩn trước khi tham gia thực hành với AI hoặc Giám sát viên.
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    { id: 1, title: "Kiểm tra nhiệt độ vang bằng nhiệt kế hồng ngoại trước khi mang ra bàn (16°C – 18°C)" },
                    { id: 2, title: "Trưng bày nhãn chai và xin phép Host trước khi thao tác mở chai" },
                    { id: 3, title: "Cắt chì dưới gờ thứ 2, lau khô miệng chai bằng khăn lito sạch" },
                    { id: 4, title: "Kiểm tra nút bần không mùi TCA và đặt trên đĩa sứ bên phải Host" },
                    { id: 5, title: "Chiết vang qua ánh nến chậm rãi, dừng lại ngay khi xuất hiện vệt cặn ở vai chai" },
                  ].map((item) => (
                    <label 
                      key={item.id} 
                      className={`flex items-start gap-3 p-3.5 rounded-xl border transition cursor-pointer ${
                        completedSteps.includes(item.id) 
                          ? "bg-amber-50/40 border-amber-200" 
                          : "bg-white border-[#ECE5D8] hover:bg-[#FEFCF7]"
                      }`}
                    >
                      <input 
                        type="checkbox" 
                        checked={completedSteps.includes(item.id)} 
                        onChange={() => toggleStep(item.id)}
                        className="w-4 h-4 mt-0.5 accent-[#C69214] rounded cursor-pointer"
                      />
                      <span className={`text-xs sm:text-sm ${completedSteps.includes(item.id) ? "text-[#0F172A] font-semibold" : "text-[#475569]"}`}>
                        {item.title}
                      </span>
                    </label>
                  ))}
                </div>

                <div className="pt-2 text-xs text-[#64748B]">
                  Đã hoàn thành <strong className="text-[#C69214]">{completedSteps.length}/5</strong> tiêu chí chuẩn hóa.
                </div>
              </div>
            )}
          </div>

          {/* Right Sticky Sidebar */}
          <div className="space-y-6">
            {/* Progress Card */}
            <div className="bg-white border border-[#ECE5D8] rounded-2xl p-5 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#64748B] uppercase tracking-wider">Tiến độ bài học</span>
                <span className="text-xs font-bold text-[#C69214]">100% Đạt</span>
              </div>
              <div className="w-full bg-[#F1EFEA] rounded-full h-2 overflow-hidden">
                <div className="bg-gradient-to-r from-[#C69214] to-[#E2B755] h-full w-full rounded-full" />
              </div>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Bạn đã hoàn thành thời lượng đọc lý thuyết SOP. Hãy làm bài kiểm tra trắc nghiệm 5 câu để nhận chứng chỉ kỹ năng.
              </p>

              <Link
                href={APP_ROUTES.EMPLOYEE_QUIZ(String(courseId))}
                className="w-full min-h-[46px] py-2.5 px-4 bg-[#C69214] hover:bg-[#B07E0F] text-white text-sm font-semibold rounded-xl flex items-center justify-center gap-2 shadow-xs transition cursor-pointer"
              >
                <span>Bắt đầu Bài Quiz (5 câu)</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Role-play recommendation card */}
            <div className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white rounded-2xl p-5 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-[#E2B755] text-xs font-semibold">
                <Sparkles className="w-4 h-4" />
                <span>Thực hành tình huống mô phỏng</span>
              </div>
              <div>
                <h4 className="font-serif font-bold text-base text-white">Khách VVIP Phàn nàn Chai Vang có mùi lạ</h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Luyện tập đối thoại trực tiếp với khách hàng giả lập Jean-Paul bằng giọng nói thực tế.
                </p>
              </div>
              <Link
                href={APP_ROUTES.EMPLOYEE_PRACTICE("2")}
                className="w-full min-h-[42px] py-2 px-3 bg-[#E2B755] hover:bg-[#C69214] text-[#0F172A] hover:text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition cursor-pointer"
              >
                <Bot className="w-4 h-4" />
                <span>Vào phòng Role-play AI</span>
              </Link>
            </div>

            {/* Instructor Details Card */}
            <div className="bg-white border border-[#ECE5D8] rounded-2xl p-5 shadow-xs space-y-3">
              <div className="text-xs font-bold text-[#64748B] uppercase tracking-wider">Người kiểm duyệt chuyên môn</div>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center text-[#A67C1E] font-bold text-sm">
                  LP
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0F172A]">Lê Thanh Phong, DipWSET</div>
                  <div className="text-xs text-[#64748B]">Head Sommelier & Corporate Trainer</div>
                </div>
              </div>
              <div className="pt-2 text-[11.5px] text-[#94A3B8] border-t border-[#F1EFEA]">
                Cập nhật lần cuối: 15/10/2026 • Phiên bản SOP v2.4
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
