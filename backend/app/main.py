from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Rolly F&B AI Training Platform API",
    description="Backend API phục vụ Hệ thống Đào tạo & Đánh giá F&B bằng AI",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health", tags=["Health"])
async def health_check():
    return {"status": "ok", "service": "Rolly Backend API", "version": "1.0.0"}

@app.get("/", tags=["Root"])
async def root():
    return {
        "message": "Chào mừng đến với Rolly F&B AI Backend Service",
        "docs": "/docs"
    }
