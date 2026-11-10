import { Metadata } from "next";
import { LoginForm } from "@/components/modules/auth/LoginForm";

export const metadata: Metadata = {
  title: "Đăng nhập Tài khoản - Rolly Academy",
  description: "Đăng nhập hệ thống Đào tạo & Đánh giá Nền tảng F&B bằng AI",
};

export default function LoginPage() {
  return <LoginForm />;
}

