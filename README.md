# 🍽️ Hệ thống Đào tạo & Đánh giá F&B bằng AI
> **Đồ án Tốt nghiệp** — Tư vấn Công nghệ Tổng hợp

---

## 📋 Mục lục
1. [Tổng quan dự án](#-tổng-quan-dự-án)
2. [Vấn đề & Bối cảnh](#-vấn-đề--bối-cảnh)
3. [Kiến trúc hệ thống](#-kiến-trúc-hệ-thống)
4. [Tech Stack chi tiết](#-tech-stack-chi-tiết)
5. [AI Model](#-ai-model)
6. [Phân công team](#-phân-công-team)
7. [Tính năng MVP](#-tính-năng-mvp)
8. [Database Schema](#-database-schema)
9. [Lộ trình phát triển](#-lộ-trình-phát-triển)
10. [Lộ trình thương mại hóa](#-lộ-trình-thương-mại-hóa)
11. [Chi phí ước tính](#-chi-phí-ước-tính)

---

## 🎯 Tổng quan dự án

| Thông tin | Chi tiết |
|---|---|
| **Tên dự án** | Hệ thống Đào tạo & Đánh giá Kiến thức Nền tảng F&B bằng AI |
| **Loại sản phẩm** | SaaS Web Application |
| **Mô hình doanh thu** | Monthly charge in use (Thu phí theo mức sử dụng) |
| **Đối tượng** | Doanh nghiệp F&B (nhà hàng, quán cafe, chuỗi F&B) |
| **Tính năng cốt lõi** | Module Role-play AI + Đánh giá tự động + Song ngữ VI/EN |

### Đội ngũ
| Role | Thành viên |
|---|---|
| Team Lead | Khánh Huyền |
| Engineering IC | Hoàng Châu |
| Engineering Member | Đạt Đinh |
| Marketing IC | Ngọc Hân |
| Marketing Member | Vân An |
| Finance IC | Cát Tiên |

---

## 🔥 Vấn đề & Bối cảnh

### Thực trạng ngành F&B Việt Nam & Quốc tế

| Nguồn | Số liệu |
|---|---|
| iPOS.vn + Vieclam24h | **30–40%** nhân sự F&B rời bỏ mỗi năm, thời gian gắn bó trung bình **3–6 tháng** |
| Việc Làm Tốt | **88%** doanh nghiệp F&B thiếu hụt nhân sự nghiêm trọng dù liên tục tuyển |
| National Restaurant Association (Mỹ) | Turnover rate trung bình **75%**, chuỗi fast-food vượt **100–130%/năm** |

### Pain Points
- 🔁 Quy trình training nhân viên mới **hoàn toàn thủ công**, diễn ra liên tục
- 💸 Lãng phí **thời gian & công sức** của quản lý/nhân sự cũ
- 📉 Chất lượng đào tạo **không đồng đều** giữa các ca, chi nhánh

### Giải pháp
> Hệ thống **tự động hóa** quy trình đào tạo bước đầu — dạy và kiểm tra kiến thức nền tảng thông qua AI, giảm thiểu sự phụ thuộc vào con người.

---

## 🏗️ Kiến trúc hệ thống

### Kiến trúc đề xuất cho team 3-4 người (Monolith thông minh)

```
┌──────────────────────┐         ┌─────────────────────────────┐
│     Frontend         │         │       Backend               │
│     Next.js 14       │──HTTP──▶│       FastAPI (Python)      │
│     TypeScript       │         │                             │
│     i18next (VI/EN)  │◀────────│  ┌─────────────────────┐   │
│                      │         │  │  Auth & Users        │   │
│   Deploy: Vercel     │         │  │  Courses & Modules   │   │
└──────────────────────┘         │  │  Role-play Engine    │   │
                                 │  │  Scoring & Reports   │   │
                                 │  │  AI Integration      │──▶ Gemini API
                                 │  └─────────────────────┘   │
                                 │                             │
                                 │   Deploy: Railway           │
                                 └──────────────┬──────────────┘
                                                │
                                                ▼
                                 ┌─────────────────────────────┐
                                 │       Supabase              │
                                 │  PostgreSQL + Auth + Storage│
                                 └─────────────────────────────┘
```

> **Lý do KHÔNG dùng Microservices ngay:** Team 3-4 người sẽ mất quá nhiều thời gian vào infra thay vì tính năng. Monolith đủ phức tạp để gây ấn tượng hội đồng, vẫn ship được đúng deadline.

---

## 🛠️ Tech Stack chi tiết

### Frontend
| Công nghệ | Mục đích |
|---|---|
| **Next.js 14** (App Router) | Framework chính, SSR/SSG |
| **TypeScript** | Type safety |
| **Shadcn/UI** | Component library |
| **i18next** | Đa ngôn ngữ Tiếng Việt / Tiếng Anh |
| **Zustand** | State management |
| **Vercel** | Hosting (Free → Pro) |

### Backend
| Công nghệ | Mục đích |
|---|---|
| **FastAPI** (Python) | Framework backend chính |
| **SQLAlchemy** | ORM |
| **Pydantic** | Data validation |
| **Celery + Redis** | Async tasks (chấm điểm) — thêm khi scale |
| **Railway** | Hosting (Free → Pro) |

### Database & Auth
| Công nghệ | Mục đích |
|---|---|
| **Supabase** | PostgreSQL + Auth + Storage trong 1 package |
| **Row Level Security** | Multi-tenant isolation theo `organization_id` |

### AI
| Công nghệ | Mục đích |
|---|---|
| **Gemini 1.5 Flash** | Role-play engine + Scoring (đồ án) |
| **LangChain** | AI orchestration, quản lý prompt |
| **Web Speech API** | Voice input (built-in browser, miễn phí) |

### Payment (khi thương mại)
| Công nghệ | Mục đích |
|---|---|
| **PayOS** | Thanh toán nội địa Việt Nam |
| **Stripe** | Thanh toán quốc tế |

---

## 🤖 AI Model

### Phân tích nhiệm vụ AI

```
1. 🎭 Role-play Engine   → Đóng vai khách hàng, hội thoại realtime
2. 📝 Scoring/Evaluation → Chấm điểm câu trả lời theo rubric
3. 🌐 Multilingual       → Hỗ trợ song ngữ VI/EN
```

### So sánh Model

| Model | Tiếng Việt | Chất lượng | Giá | Giai đoạn |
|---|---|---|---|---|
| **Gemini 1.5 Flash** ⭐ | ✅✅ Rất tốt | ✅ Tốt | 🟢 Rẻ nhất | **Đồ án** |
| **Gemini 1.5 Pro** | ✅✅ Rất tốt | ✅✅ Rất tốt | 🟡 Trung bình | Early Commercial |
| **GPT-4o mini** | ✅ Khá | ✅ Tốt | 🟢 Rẻ | Backup |
| **GPT-4o** | ✅ Khá | ✅✅ Rất tốt | 🔴 Đắt | Scale |
| **Claude 3.5 Sonnet** | ✅✅ Tốt | ✅✅✅ Xuất sắc | 🔴 Đắt | Enterprise |

### Khuyến nghị: Gemini 1.5 Flash

**Lý do chọn:**
- ✅ Free **1,500 requests/ngày** — đủ để demo và test cả team
- ✅ Tiếng Việt tốt nhất trong các free model (Google train nhiều dữ liệu VI)
- ✅ Response nhanh (~1-2s) — quan trọng cho role-play realtime
- ✅ Cùng hệ sinh thái Vertex AI → chỉ đổi 1 dòng config khi scale

### Chiến lược dùng model

```python
# Realtime chat → cần nhanh
ROLEPLAY_MODEL = "gemini-1.5-flash"

# Chấm điểm → cần chính xác, batch được
SCORING_MODEL = "gemini-1.5-flash"  # Đồ án

# Khi thương mại hóa → chỉ upgrade scoring
SCORING_MODEL = "gemini-1.5-pro"   # Chỉ đổi 1 dòng
```

### Ước tính chi phí AI

```
Gemini 1.5 Flash (Pay-as-you-go):
  Input:  $0.075 / 1M tokens
  Output: $0.30  / 1M tokens
  
  1 buổi role-play ≈ 2,000 tokens
  → 1,000 buổi/tháng ≈ $0.75/tháng ✅ Cực rẻ

So sánh GPT-4o:
  → 1,000 buổi/tháng ≈ $25/tháng ❌ Đắt hơn 30x
```

---

## 👥 Phân công team 3-4 người

| Người | Role | Công việc chính |
|---|---|---|
| **1 người** | Frontend Developer | Next.js, UI/UX, i18n (VI/EN), kết nối API |
| **1-2 người** | Backend + AI Engineer | FastAPI, Gemini integration, Database, Scoring logic |
| **1 người** | Full-stack Support | Connect FE-BE, Testing, Deploy, Documentation |

---

## ✨ Tính năng MVP

### Phase 1 — Core (Bắt buộc cho đồ án)
- [ ] **Auth**: Đăng ký/Đăng nhập cho Organization (doanh nghiệp) & Employee (nhân viên)
- [ ] **Admin Dashboard**: Upload kịch bản, quản lý nhân viên, xem báo cáo
- [ ] **Role-play Module**: Chat realtime với AI đóng vai khách hàng
- [ ] **AI Scoring**: Đánh giá response theo rubric (Thái độ, Ngôn ngữ, Giải pháp)
- [ ] **Employee Report**: Kết quả của nhân viên cho manager xem
- [ ] **Song ngữ VI/EN**: Toggle ngôn ngữ trong toàn bộ hệ thống

### Phase 2 — Differentiation (Nâng điểm)
- [ ] **Voice Input**: Web Speech API (miễn phí, built-in browser)
- [ ] **Leaderboard & Gamification**: Bảng xếp hạng nhân viên
- [ ] **Analytics Dashboard**: Biểu đồ tiến trình, thống kê tổng thể
- [ ] **Multi-scenario**: Nhiều kịch bản role-play (phàn nàn, đặt bàn, gọi món...)

---

## 🗄️ Database Schema

```sql
-- Multi-tenant core
organizations          -- Tenant (nhà hàng/quán cafe)
  ├── id
  ├── name
  ├── plan (starter/pro/enterprise)
  └── created_at

users                  -- Nhân viên & Admin
  ├── id
  ├── organization_id  -- Foreign key → multi-tenant
  ├── role (admin/employee)
  ├── email
  └── language_pref (vi/en)

courses                -- Khóa học (theo từng org)
  ├── id
  ├── organization_id
  ├── title
  └── modules[]

scenarios              -- Kịch bản role-play
  ├── id
  ├── course_id
  ├── title
  ├── system_prompt    -- Prompt cho AI đóng vai
  └── rubric_json      -- Tiêu chí chấm điểm

attempts               -- Lần thực hành của nhân viên
  ├── id
  ├── user_id
  ├── scenario_id
  ├── conversation_json -- Toàn bộ đoạn hội thoại
  ├── score
  └── ai_feedback
```

---

## 📅 Lộ trình phát triển (16 tuần)

| Tuần | Công việc |
|---|---|
| **1–2** | Setup infra, Auth (Supabase), DB schema, UI shell |
| **3–4** | Admin dashboard (upload kịch bản, quản lý nhân viên) |
| **5–7** | Role-play engine (Gemini 1.5 Flash integration) |
| **8–9** | AI Scoring & Feedback generation |
| **10–11** | Employee dashboard + Report cho manager |
| **12–13** | i18n (VI/EN), Voice input (Web Speech API) |
| **14** | Deploy Vercel + Railway, Docker |
| **15–16** | Testing, Demo, Viết báo cáo đồ án |

---

## 🚀 Lộ trình thương mại hóa

### Giai đoạn 1 — Đồ án / MVP
```
Chi phí: ~0đ/tháng
Phục vụ: 1-2 doanh nghiệp demo

Stack:
  Frontend  → Vercel Free
  Backend   → Railway Free
  Database  → Supabase Free
  AI        → Gemini 1.5 Flash Free tier
```

### Giai đoạn 2 — Early Commercial (5–20 khách hàng)
```
Chi phí: ~$65-100/tháng (~1.6-2.5 triệu VNĐ)
Phục vụ: 5-20 doanh nghiệp

Thay đổi:
  Frontend  → Vercel Pro ($20/tháng)
  Backend   → Railway Pro ($20/tháng)
  Database  → Supabase Pro ($25/tháng)
  AI        → Gemini Pay-as-you-go
  Payment   → Thêm PayOS / Stripe ← MỚI
```

### Giai đoạn 3 — Scale (20–100 khách hàng)
```
Chi phí: ~$200-500/tháng
Phục vụ: 20-100 doanh nghiệp

Thay đổi:
  Backend   → AWS ECS / GCP Cloud Run
  Database  → AWS RDS + Redis (ElastiCache)
  AI        → Vertex AI (kiểm soát cost tốt hơn)
  Thêm mới  → CI/CD pipeline, Sentry monitoring
```

### Giai đoạn 4 — Enterprise (100+ khách hàng)
```
Chi phí: ~$500-2000/tháng
Phục vụ: 100+ doanh nghiệp, hàng nghìn nhân viên

Thay đổi:
  Architecture → Microservices trên Kubernetes
  AI           → Vertex AI + Fine-tune model riêng
  Database     → PostgreSQL + Read Replica + Redis Cluster
```

---

## 💡 Best Practices ngay từ đồ án

> Làm đúng từ đầu → nâng cấp sau này dễ dàng, không cần viết lại

```python
# 1. Dùng biến môi trường (.env)
DATABASE_URL = os.getenv("DATABASE_URL")
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

# 2. Multi-tenant ngay từ đầu
# Mọi query đều filter theo organization_id
db.query(Course).filter(Course.org_id == current_user.org_id)

# 3. Logging đầy đủ
import logging
logger = logging.getLogger(__name__)
logger.info(f"Role-play session started: {session_id}")

# 4. Dockerfile ngay từ đầu
# → Chạy ở local, Railway, AWS đều giống nhau
```

```
# 5. RESTful API chuẩn
GET    /api/v1/scenarios          → Danh sách kịch bản
POST   /api/v1/attempts           → Bắt đầu buổi role-play
PUT    /api/v1/attempts/{id}      → Cập nhật hội thoại
GET    /api/v1/attempts/{id}/score → Lấy kết quả chấm điểm
```

---

## 📊 Tóm tắt nhanh

| Yếu tố | Lựa chọn | Lý do |
|---|---|---|
| **AI Model** | Gemini 1.5 Flash | Free 1500 req/ngày, Tiếng Việt tốt, nhanh |
| **Frontend** | Next.js 14 + TypeScript | Chuẩn industry, SSR, dễ deploy Vercel |
| **Backend** | FastAPI (Python) | Cùng ngôn ngữ với AI code, nhanh, tài liệu tốt |
| **Database** | Supabase (PostgreSQL) | Auth + DB + Storage trong 1 package, free tier |
| **Đa ngôn ngữ** | i18next | Standard, dễ mở rộng thêm ngôn ngữ |
| **Deploy (đồ án)** | Vercel + Railway | Free, CI/CD tự động |
| **Deploy (thương mại)** | GCP / AWS | Scale linh hoạt, pay-as-you-go |

---

*Tài liệu tư vấn công nghệ — Dự án Đồ án Tốt nghiệp F&B AI Training System*
