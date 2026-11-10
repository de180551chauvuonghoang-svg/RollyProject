from pydantic_settings import BaseSettings
from typing import List

class Settings(BaseSettings):
    PROJECT_NAME: str = "Rolly F&B AI Training Platform"
    API_V1_STR: str = "/api/v1"
    SECRET_KEY: str = "temporary-secret-key-change-in-production"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 1440
    
    DATABASE_URL: str = "postgresql+asyncpg://postgres:postgres@localhost:5432/rolly"
    REDIS_URL: str = "redis://localhost:6379/0"
    
    GEMINI_API_KEY: str = ""
    GEMINI_ROLEPLAY_MODEL: str = "gemini-1.5-flash"
    GEMINI_SCORING_MODEL: str = "gemini-1.5-flash"
    
    BACKEND_CORS_ORIGINS: List[str] = ["http://localhost:3000"]

    class Config:
        env_file = ".env"
        case_sensitive = True

settings = Settings()
