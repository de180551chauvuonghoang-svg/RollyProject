<div align="center">

<img src="./frontend/public/logo.svg" alt="Rolly Academy Logo" width="320"/>

# Rolly — Hệ Thống Đào Tạo & Đánh Giá F&B Bằng AI Voice
### *B2B SaaS Hospitality Excellence Suite & AI Role-play Simulation*

[![Next.js](https://img.shields.io/badge/Next.js-16.4.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.115+-009688?style=for-the-badge&logo=fastapi)](https://fastapi.tiangolo.com/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Google Gemini](https://img.shields.io/badge/Google_Gemini-1.5_Flash-8E75B2?style=for-the-badge&logo=google)](https://ai.google.dev/)
[![License](https://img.shields.io/badge/License-Proprietary-gold?style=for-the-badge)](#)

*Giải pháp chuyển đổi số đào tạo nhân sự F&B Fine Dining đạt chuẩn phong thái Michelin thông qua đối thoại thời gian thực cùng AI Voice đa nhân vật.*

---

</div>

## 📋 Mục Lục

- [1. Giới thiệu & Bối cảnh](#1-giới-thiệu--bối-cảnh)
- [2. Tính năng cốt lõi](#2-tính-năng-cốt-lõi)
- [3. Kiến trúc hệ thống](#3-kiến-trúc-hệ-thống)
- [4. Cấu trúc thư mục Monorepo](#4-cấu-trúc-thư-mục-monorepo)
- [5. Danh mục đường dẫn (Routes Directory)](#5-danh-mục-đường-dẫn-routes-directory)
- [6. Hướng dẫn cài đặt & Khởi chạy](#6-hướng-dẫn-cài-đặt--khởi-chạy)
- [7. Quy chuẩn phát triển (Team Conventions)](#7-quy-chuẩn-phát-triển-team-conventions)
- [8. Đội ngũ thực hiện](#8-đội-ngũ-thực-hiện)

---

## 1. Giới thiệu & Bối cảnh

### 🔴 Thực trạng ngành F&B (Hospitality Pain Points)
- **Tỷ lệ nghỉ việc cao:** Tỷ lệ biến động nhân sự F&B từ 30%–40%/năm, thời gian gắn bó trung bình chỉ 3–6 tháng.
- **Chi phí đào tạo thủ công đắt đỏ:** Quản lý và nhân sự kỳ cựu liên tục mất hàng chục giờ mỗi tuần để kèm cặp nhân sự mới.
- **Chất lượng dịch vụ không đồng nhất:** Thiếu công cụ đo lường khách quan về phản xạ ứng biến bàn tiệc, kiến thức rượu vang (Sommelier) và quy chuẩn SOP khi gặp tình huống khẩn cấp.

### 🟢 Giải pháp của Rolly
**Rolly** là nền tảng SaaS B2B cung cấp giải pháp luyện tập nhập vai AI Voice thời gian thực (Role-play Simulation):
1. **AI Voice Persona:** Nhân viên đối thoại trực tiếp bằng giọng nói với các khách hàng ảo (khách sành sỏi nếm rượu, khách VVIP khó tính, khách khiếu nại món, khách say rượu).
2. **Chấm điểm Rubric tự động:** Phân tích **Ngữ điệu giọng nói (Tone of Voice)**, **Độ chuẩn từ ngữ SOP** và **Thời gian phản xạ dưới 3 giây**.
3. **Phân quyền 2 cổng thông tin riêng biệt (Dual-Portal):** Cổng dành cho **Nhân sự/Học viên (Employee)** và Cổng dành cho **Chủ cơ sở/Quản lý (Client)**.

---

## 2. Tính năng cốt lõi

### 🧑‍💼 Cổng Học Viên / Nhân Sự (Employee Portal)
- **Kho tài liệu SOP đa phương tiện (`/courses`):** Danh mục 18 bài học chuẩn hóa (chiết vang Decanter, tiếp đón VVIP trễ hẹn, xử lý dị ứng thực phẩm, nghệ thuật Upsell menu).
- **Phòng chọn kịch bản Role-play AI (`/roleplay`):** 16 kịch bản phân cấp độ (Cơ bản đến Master/VVIP), hiển thị kỷ lục điểm số và hộp mẹo phong thái Michelin.
- **Hệ thống Gamification & Cấp bậc:** Lộ trình thăng tiến trực quan (Ví dụ: Sommelier Level 2 - Advanced Specialist, tiến độ 68%, huy hiệu Cellar Master).

### 🏢 Cổng Quản Lý / Chủ Nhà Hàng (Client Portal)
- **Bảng điều hành chi nhánh (`/client/dashboard`):** Đo lường tỷ lệ tuân thủ SOP (94.6%), tổng giờ luyện tập AI, và danh sách cảnh báo tình huống nhân sự còn yếu.
- **Quản lý danh sách nhân sự (`/client/employees`):** Quản lý hồ sơ, cấp bậc, tỷ lệ hoàn thành bài học và điểm đánh giá thực chiến của từng nhân viên.
- **Quản lý kho SOP độc quyền (`/client/sop-library`):** Upload tài liệu thực đơn Tasting Menu, Wine List và quy trình nội bộ riêng biệt của cơ sở.
- **Cấu hình Kịch bản & Prompt AI (`/client/scenarios`):** Tùy biến tính cách nhân vật ảo, độ khó và tiêu chí chấm điểm theo yêu cầu từng thương hiệu.
- **Báo cáo chuyên sâu & ROI (`/client/reports`):** Thống kê thời gian phản xạ (2.4s) và chỉ số gia tăng doanh thu bán kèm (+26.4%).
- **Cài đặt cơ sở & Bảo mật Multi-tenant (`/client/settings`):** Cách ly dữ liệu nhiều chi nhánh thông qua Row-Level Security (RLS).

---

## 3. Kiến trúc hệ thống

Dự án áp dụng mô hình **Modular Monolith** kết hợp **Clean Architecture** tối ưu hóa cho đội ngũ kỹ thuật phát triển nhanh và tin cậy:

```
┌────────────────────────────────────────────────────────┐
│                   CLIENT APPLICATION                   │
│          Next.js 16 (App Router + Turbopack)           │
│        Tailwind CSS v4 • Responsive 320px-1440px+      │
│  ┌──────────────────────┐    ┌──────────────────────┐  │
│  │   Employee Portal    │    │    Client Portal     │  │
│  │   (/courses, ...)    │    │  (/client/..., ...)  │  │
│  └──────────────────────┘    └──────────────────────┘  │
└───────────────────────────┬────────────────────────────┘
                            │ HTTPS / WSS Streaming
                            ▼
┌────────────────────────────────────────────────────────┐
│                   BACKEND API ENGINE                   │
│            FastAPI (Python 3.11+ / AsyncIO)            │
│  ┌───────────────────┬──────────────────────────────┐  │
│  │  Auth & RBAC      │  SOP Knowledge Manager       │  │
│  ├───────────────────┼──────────────────────────────┤  │
│  │  AI Voice Engine  │  Scoring & Rubric Analytics  │  │
│  └───────────────────┴──────────────────────────────┘  │
└───────────────┬────────────────────────┬───────────────┘
                │                        │
                ▼                        ▼
┌─────────────────────────────┐ ┌────────────────────────┐
│       SUPABASE / PGSQL      │ │    GOOGLE GEMINI AI    │
│  Multi-Tenant Isolation RLS │ │   Gemini 1.5 Flash     │
│  Tenant ID: Organization    │ │   Realtime Voice/Text  │
└─────────────────────────────┘ └────────────────────────┘
```

---

## 4. Cấu trúc thư mục Monorepo

```bash
RollyProject/
├── docs/                                    # Tài liệu kiến trúc & đặc tả kỹ thuật
│   └── technical.md                         # Đặc tả chi tiết 9 phần (RLS, API, Schema)
│
├── frontend/                                # Next.js 16 App Router
│   ├── public/
│   │   ├── logo.svg                         # Vector Logo Rolly đầy đủ
│   │   └── icon.svg                         # Vector Favicon mạ vàng squircle
│   ├── src/
│   │   ├── app/
│   │   │   ├── (auth)/                      # Nhóm trang Đăng nhập / Đăng ký
│   │   │   │   ├── layout.tsx               # Split-screen Auth Layout
│   │   │   │   ├── login/page.tsx           # /login (SCR-EMP-01B)
│   │   │   │   └── register/page.tsx        # /register (SCR-EMP-01)
│   │   │   │
│   │   │   ├── (employee)/                  # 🟢 Portal dành cho Học viên / Nhân viên
│   │   │   │   ├── layout.tsx               # Layout Portal cá nhân
│   │   │   │   ├── courses/page.tsx         # /courses (SCR-EMP-02)
│   │   │   │   └── roleplay/page.tsx        # /roleplay (SCR-EMP-02B)
│   │   │   │
│   │   │   └── (client)/                    # 🔴 Portal dành cho Quản trị viên
│   │   │       └── client/
│   │   │           ├── layout.tsx           # Layout Client Portal (Navy & Gold)
│   │   │           ├── dashboard/page.tsx   # /client/dashboard
│   │   │           ├── employees/page.tsx   # /client/employees
│   │   │           ├── sop-library/page.tsx # /client/sop-library
│   │   │           ├── scenarios/page.tsx   # /client/scenarios
│   │   │           ├── reports/page.tsx     # /client/reports
│   │   │           └── settings/page.tsx    # /client/settings
│   │   │
│   │   ├── components/
│   │   │   ├── common/                      # Components dùng chung (Header, Footer, RollyLogo)
│   │   │   ├── layout/                      # Sub-layouts riêng: employee/ & client/
│   │   │   └── modules/                     # Modules nghiệp vụ độc lập: auth/, employee/, client/
│   │   │
│   │   ├── constants/                       # APP_ROUTES tập trung
│   │   └── context/                         # SidebarContext (Quản lý Drawer Mobile)
│   │
│   └── package.json
│
└── backend/                                 # FastAPI Backend Service
    ├── app/
    │   ├── api/v1/endpoints/                # API Endpoints: auth, courses, scenarios, reports
    │   ├── core/                            # Cấu hình config.py, JWT, Security
    │   └── main.py                          # Entry point ứng dụng FastAPI
    └── requirements.txt
```

---

## 5. Danh mục đường dẫn (Routes Directory)

| Cổng | Vai trò | Mục đích | Đường dẫn URL |
| :--- | :--- | :--- | :--- |
| **Auth** | Khách | Đăng nhập tài khoản | `/login` |
| **Auth** | Khách | Đăng ký tài khoản nhân sự | `/register` |
| **Employee** | Học viên | Kho tài liệu SOP & Dashboard cá nhân | `/courses` |
| **Employee** | Học viên | Chọn kịch bản Role-play AI | `/roleplay` |
| **Client** | Quản lý | Bảng điều hành tổng quan chi nhánh | `/client/dashboard` |
| **Client** | Quản lý | Quản lý danh sách 24 nhân sự | `/client/employees` |
| **Client** | Quản lý | Kho tài liệu & Upload SOP nhà hàng | `/client/sop-library` |
| **Client** | Quản lý | Cấu hình kịch bản & AI Voice Persona | `/client/scenarios` |
| **Client** | Quản lý | Báo cáo phân tích hiệu suất đào tạo | `/client/reports` |
| **Client** | Quản lý | Cài đặt cơ sở & Phân quyền RLS Key | `/client/settings` |

---

## 6. Hướng dẫn cài đặt & Khởi chạy

### 📦 Yêu cầu môi trường
- **Node.js:** phiên bản `18.18+` hoặc `20+`
- **Python:** phiên bản `3.11+`
- **Git**

### 💻 1. Khởi chạy Frontend (Next.js 16)
```bash
# Di chuyển vào thư mục frontend
cd frontend

# Cài đặt dependencies
npm install

# Khởi chạy server phát triển (Port 3000)
npm run dev

# Kiểm tra build production
npm run build
```
Truy cập giao diện tại: [http://localhost:3000](http://localhost:3000)

### ⚙️ 2. Khởi chạy Backend (FastAPI)
```bash
# Di chuyển vào thư mục backend
cd backend

# Khởi tạo môi trường ảo Python
python -m venv .venv

# Kích hoạt môi trường ảo (Windows PowerShell)
.\.venv\Scripts\Activate.ps1

# Cài đặt thư viện
pip install -r requirements.txt

# Thiết lập file cấu hình môi trường
copy .env.example .env

# Chạy server FastAPI (Port 8000)
uvicorn app.main:app --reload
```
Truy cập tài liệu API tự động tại Swagger: [http://localhost:8000/docs](http://localhost:8000/docs)

---

## 7. Quy chuẩn phát triển (Team Conventions)

- **Quy tắc đặt tên nhánh (Branch Naming):**
  - Frontend: `frontend/<ten-chuc-nang>/<ten-thanh-vien>`
  - Backend: `backend/<ten-chuc-nang>/<ten-thanh-vien>`
- **Chuẩn Commit (Conventional Commits):**
  - `feat(...)`: Thêm tính năng hoặc màn hình mới
  - `fix(...)`: Sửa lỗi giao diện hoặc logic
  - `refactor(...)`: Tái cấu trúc thư mục, tối ưu hóa code
  - `docs(...)`: Cập nhật tài liệu
- **Chuẩn Responsive Mobile-First:**
  - Mọi giao diện phải hiển thị hoàn hảo từ màn hình nhỏ nhất **320px** đến Desktop **1440px+**.
  - Tuyệt đối không để xảy ra lỗi tràn chiều ngang (Horizontal Scrollbar).
  - Vùng chạm cảm ứng đạt tối thiểu **44px** (`min-h-[44px]`).

---

## 8. Đội ngũ thực hiện

| Vai trò | Thành viên | Nhiệm vụ chính |
| :--- | :--- | :--- |
| **Team Lead** | Khánh Huyền | Quản lý tiến độ, điều phối dự án |
| **Engineering IC** | Hoàng Châu | Kiến trúc hệ thống, Frontend Next.js, UI/UX, AI Integration |
| **Engineering Member** | Đạt Đinh | Backend FastAPI, Database Schema, Testing |
| **Marketing IC** | Ngọc Hân | Nghiên cứu thị trường F&B, định vị sản phẩm B2B |
| **Marketing Member** | Vân An | Truyền thông & Nội dung giáo trình SOP |
| **Finance IC** | Cát Tiên | Mô hình doanh thu SaaS, tài chính & chi phí hạ tầng |

---

<div align="center">
  <sub>© 2026 Rolly Academy &amp; LMS Portal • Tiêu chuẩn đào tạo F&amp;B 5 sao quốc tế</sub>
</div>
