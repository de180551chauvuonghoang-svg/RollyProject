from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel, EmailStr

router = APIRouter()

class EmployeeRegisterRequest(BaseModel):
    full_name: str
    email: EmailStr
    branch_name: str
    specialization: str
    password: str
    sop_compliance_agreed: bool

@router.post("/register", status_code=status.HTTP_201_CREATED)
async def register_employee(payload: EmployeeRegisterRequest):
    """
    Đăng ký tài khoản nhân viên đào tạo (SCR-EMP-01)
    """
    if not payload.sop_compliance_agreed:
        raise HTTPException(
            status_code=400,
            detail="Bạn cần đồng ý với cam kết bảo mật SOP để tiếp tục"
        )
    return {
        "success": True,
        "message": "Đăng ký tài khoản học viên thành công",
        "data": {
            "full_name": payload.full_name,
            "email": payload.email,
            "branch_name": payload.branch_name,
            "specialization": payload.specialization
        }
    }
