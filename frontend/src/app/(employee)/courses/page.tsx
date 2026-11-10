"use client";

import React, { useState } from "react";
import { 
  Search, 
  ChevronDown, 
  FileText, 
  Play, 
  Award, 
  Clock, 
  CheckCircle2, 
  BookOpen,
  Filter
} from "lucide-react";
import { EmployeeHeader } from "@/components/layout/employee/EmployeeHeader";

interface CourseItem {
  id: string;
  code: string;
  title: string;
  duration: string;
  description: string;
  type: "pdf" | "video";
  status: "completed" | "in_progress" | "not_started";
  progressPercent: number;
  imageUrl: string;
}

const coursesData: CourseItem[] = [
  {
    id: "1",
    code: "SOP-FNB-04",
    title: "Quy trình Khai mở, Chiết vang Decanter & Kiểm soát Nhiệt độ phục vụ",
    duration: "12 phút",
    description: "Quy chuẩn chiết vang Bordeaux & Burgundy Grand Cru, kiểm tra lỗi nút bần...",
    type: "pdf",
    status: "completed",
    progressPercent: 100,
    imageUrl: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "2",
    code: "SOP-FNB-01",
    title: "Nghi thức Đón tiếp & Phục vụ Khách VVIP Trễ hẹn 30 Phút",
    duration: "14 phút",
    description: "Nghệ thuật xoa dịu tâm lý khách hàng cao cấp, quy chuẩn giữ bàn và phục vụ...",
    type: "video",
    status: "in_progress",
    progressPercent: 60,
    imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "3",
    code: "SOP-FNB-06",
    title: "Tư vấn Kết hợp Vang Trắng & Hải sản Sống Omakase Thượng hạng",
    duration: "18 phút",
    description: "Nguyên lý cân bằng độ chua (acidity), độ khoáng chất của Chablis Grand Cru...",
    type: "pdf",
    status: "completed",
    progressPercent: 100,
    imageUrl: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "4",
    code: "SOP-FNB-02",
    title: "Quy chuẩn Xử lý Bàn Khách Dị ứng Thực phẩm & Đổi món Đột xuất",
    duration: "10 phút",
    description: "Quy trình đối chiếu 3 bước giữa Sommelier, Quản lý sảnh và Bếp trưởng...",
    type: "pdf",
    status: "in_progress",
    progressPercent: 25,
    imageUrl: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "5",
    code: "SOP-FNB-07",
    title: "Nghệ thuật Gợi ý Menu Nâng cấp & Vintage Wine Pairing Không phô trương",
    duration: "15 phút",
    description: "Kỹ thuật storytelling về niên vụ rượu, nguồn gốc thịt bò Wagyu A5 và cách...",
    type: "video",
    status: "not_started",
    progressPercent: 0,
    imageUrl: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "6",
    code: "SOP-FNB-05",
    title: "Xử lý Khách Say Rượu Gây Phiền Toái & Giữ vững Không gian Yên tĩnh",
    duration: "12 phút",
    description: "Phương pháp hạ giọng, tách khách lịch thiệp, bảo vệ danh tiếng nhà hàng mà...",
    type: "pdf",
    status: "not_started",
    progressPercent: 0,
    imageUrl: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=600&auto=format&fit=crop&q=80",
  },
];

export function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredCourses = coursesData.filter((course) => {
    const matchSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        course.description.toLowerCase().includes(searchTerm.toLowerCase());
    if (statusFilter === "all") return matchSearch;
    return matchSearch && course.status === statusFilter;
  });

  return (
    <div className="space-y-4 sm:space-y-6">
      <EmployeeHeader breadcrumb="Học tập & Tài liệu" />

      {/* 1. Welcome & Stats Banner */}
      <section className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 border border-[#EAE5D9] shadow-xs flex flex-col lg:flex-row lg:items-center justify-between gap-5 sm:gap-6">
        <div className="max-w-xl min-w-0">
          <h1 className="font-serif text-xl sm:text-2xl lg:text-[28px] font-bold text-[#0F172A] tracking-tight mb-2">
            Xin chào, Sommelier Nguyễn Hoàng Long 👋
          </h1>
          <p className="text-[#64748B] text-[13px] sm:text-[13.5px] leading-relaxed mb-4">
            Lộ trình Chuyên gia Rượu vang &amp; Dịch vụ Bàn Cao cấp (Level 2). Đã hoàn thành 78% chỉ tiêu học tập chuyên sâu tháng 10/2026.
          </p>
          <div className="space-y-1.5">
            <div className="w-full bg-[#F1EFE9] h-2 rounded-full overflow-hidden">
              <div className="bg-[#C69214] h-full rounded-full transition-all duration-500" style={{ width: "78%" }}></div>
            </div>
            <div className="flex items-center justify-between text-[11px] sm:text-[11.5px] font-medium text-[#475569]">
              <span className="flex items-center gap-1.5 text-[#0F172A] font-semibold truncate">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
                <span className="truncate">14/18 Học phần đã đạt chuẩn kiểm định</span>
              </span>
              <span className="font-bold text-[#A67C1E] shrink-0">78%</span>
            </div>
          </div>
        </div>

        {/* 3 Stats Cards: Responsive flex on small screens */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 shrink-0 w-full lg:w-auto">
          <div className="bg-[#FAF9F5] border border-[#ECE5D8] rounded-xl p-2.5 sm:p-3.5 text-center min-w-0">
            <span className="text-[9.5px] sm:text-[10px] font-bold tracking-wider text-[#94A3B8] uppercase block truncate">ĐIỂM TB</span>
            <div className="text-base sm:text-lg lg:text-[20px] font-bold text-[#0F172A] mt-0.5 truncate">
              84.2<span className="text-[11px] sm:text-[12px] text-[#64748B]">/100</span>
            </div>
            <span className="inline-block mt-1 px-1.5 sm:px-2 py-0.5 bg-[#F4EEDB] text-[#8C6005] rounded-md text-[9.5px] sm:text-[10px] font-bold truncate max-w-full">
              Distinction
            </span>
          </div>

          <div className="bg-[#FAF9F5] border border-[#ECE5D8] rounded-xl p-2.5 sm:p-3.5 text-center min-w-0">
            <span className="text-[9.5px] sm:text-[10px] font-bold tracking-wider text-[#94A3B8] uppercase block truncate">THỰC CHIẾN</span>
            <div className="text-base sm:text-lg lg:text-[20px] font-bold text-[#0F172A] mt-0.5 truncate">
              18.5<span className="text-[11px] sm:text-[12px] text-[#64748B]"> giờ</span>
            </div>
            <span className="inline-block mt-1 px-1.5 sm:px-2 py-0.5 bg-[#DCFCE7] text-[#166534] rounded-md text-[9.5px] sm:text-[10px] font-bold truncate max-w-full">
              +3.2h tuần này
            </span>
          </div>

          <div className="bg-[#FAF9F5] border border-[#ECE5D8] rounded-xl p-2.5 sm:p-3.5 text-center min-w-0">
            <span className="text-[9.5px] sm:text-[10px] font-bold tracking-wider text-[#94A3B8] uppercase block truncate">HUY HIỆU</span>
            <div className="text-base sm:text-lg lg:text-[20px] font-bold text-[#0F172A] mt-0.5 truncate">Tier 2</div>
            <span className="inline-block mt-1 px-1.5 sm:px-2 py-0.5 bg-[#F4EEDB] text-[#8C6005] rounded-md text-[9.5px] sm:text-[10px] font-bold truncate max-w-full">
              Cellar Master
            </span>
          </div>
        </div>
      </section>

      {/* 2. Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Tìm theo tên bài học, SOP, kỹ năng..."
            className="w-full min-h-[44px] pl-10 pr-4 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-[13px] text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#C69214] focus:ring-2 focus:ring-[#C69214]/15 transition"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="relative w-full sm:w-48">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full min-h-[44px] appearance-none pl-3.5 pr-8 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-[13px] text-[#475569] font-medium focus:outline-none focus:border-[#C69214] transition cursor-pointer"
            >
              <option value="all">Trạng thái: Tất cả</option>
              <option value="completed">Đã hoàn thành 100%</option>
              <option value="in_progress">Đang học dở</option>
              <option value="not_started">Chưa học</option>
            </select>
            <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8] pointer-events-none" />
          </div>
        </div>
      </div>

      {/* 3. Grid of Course Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {filteredCourses.map((course) => (
          <div 
            key={course.id}
            className="bg-white rounded-2xl overflow-hidden border border-[#ECE5D8] shadow-xs flex flex-col justify-between hover:shadow-md transition group"
          >
            <div>
              {/* Image & Badges Header */}
              <div className="relative h-44 w-full bg-slate-100 overflow-hidden">
                <img 
                  src={course.imageUrl} 
                  alt={course.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                />
                <div className="absolute top-3 left-3 bg-[#0F172A]/85 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md tracking-wider">
                  {course.code}
                </div>

                {/* Status Pill on Bottom Right */}
                <div className="absolute bottom-3 right-3">
                  {course.status === "completed" && (
                    <span className="bg-white/95 backdrop-blur-xs border border-emerald-300 text-emerald-800 text-[10.5px] sm:text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-xs">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      Đã hoàn thành 100%
                    </span>
                  )}
                  {course.status === "in_progress" && (
                    <span className="bg-white/95 backdrop-blur-xs border border-amber-300 text-amber-800 text-[10.5px] sm:text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-xs">
                      <Clock className="w-3 h-3 text-amber-600" />
                      Đang học {course.progressPercent}%
                    </span>
                  )}
                  {course.status === "not_started" && (
                    <span className="bg-white/95 backdrop-blur-xs border border-slate-300 text-slate-600 text-[10.5px] sm:text-[11px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1 shadow-xs">
                      Chưa học 0%
                    </span>
                  )}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-4 sm:p-5">
                <h3 className="font-serif font-bold text-[15px] sm:text-[16px] text-[#0F172A] leading-snug line-clamp-2 mb-2 group-hover:text-[#A67C1E] transition">
                  {course.title}
                </h3>
                <div className="flex items-center gap-1 text-[11.5px] sm:text-[12px] text-[#94A3B8] mb-3">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{course.duration}</span>
                </div>
                <p className="text-[12.5px] sm:text-[13px] text-[#64748B] line-clamp-2 leading-relaxed">
                  {course.description}
                </p>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="p-4 sm:p-5 pt-0 grid grid-cols-2 gap-2.5">
              <button 
                type="button"
                onClick={() => alert(`Đang mở tài liệu: ${course.title}`)}
                className="min-h-[42px] py-2 px-3 bg-white hover:bg-[#F8FAFC] border border-[#CBD5E1] rounded-xl text-[12px] sm:text-[12.5px] font-semibold text-[#1E293B] flex items-center justify-center gap-1.5 transition cursor-pointer"
              >
                {course.type === "video" ? <Play className="w-3.5 h-3.5 text-[#C69214]" /> : <FileText className="w-3.5 h-3.5 text-[#C69214]" />}
                <span>{course.type === "video" ? "Xem Video" : "Đọc PDF"}</span>
              </button>

              <button 
                type="button"
                onClick={() => alert(`Bắt đầu bài kiểm tra cho: ${course.code}`)}
                className="min-h-[42px] py-2 px-3 bg-[#C69214] hover:bg-[#B38210] active:scale-[0.99] text-white rounded-xl text-[12px] sm:text-[12.5px] font-bold flex items-center justify-center gap-1.5 transition shadow-xs cursor-pointer"
              >
                <Award className="w-3.5 h-3.5" />
                <span>Kiểm tra</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 4. Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-[#EAE5D9]">
        <div className="text-[12px] sm:text-[12.5px] text-[#64748B] text-center sm:text-left">
          Hiển thị 1 - 6 trong tổng số 18 bài học tài liệu
        </div>
        <div className="flex items-center gap-1.5">
          <button className="min-h-[36px] min-w-[36px] rounded-lg border border-[#E2E8F0] bg-white flex items-center justify-center text-[13px] text-[#64748B] hover:bg-slate-50 transition cursor-pointer">
            &lt;
          </button>
          <button className="min-h-[36px] min-w-[36px] rounded-lg bg-[#C69214] text-white font-bold flex items-center justify-center text-[13px] shadow-xs">
            1
          </button>
          <button className="min-h-[36px] min-w-[36px] rounded-lg border border-[#E2E8F0] bg-white flex items-center justify-center text-[13px] text-[#64748B] hover:bg-slate-50 transition cursor-pointer">
            2
          </button>
          <button className="min-h-[36px] min-w-[36px] rounded-lg border border-[#E2E8F0] bg-white flex items-center justify-center text-[13px] text-[#64748B] hover:bg-slate-50 transition cursor-pointer">
            3
          </button>
          <button className="min-h-[36px] min-w-[36px] rounded-lg border border-[#E2E8F0] bg-white flex items-center justify-center text-[13px] text-[#64748B] hover:bg-slate-50 transition cursor-pointer">
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default CoursesPage;
