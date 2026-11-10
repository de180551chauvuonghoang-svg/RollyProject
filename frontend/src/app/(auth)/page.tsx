import { Metadata } from "next";
import { RegisterForm } from "@/components/modules/auth/RegisterForm";

export const metadata: Metadata = {
  title: "Đăng ký Học viên - Rolly Academy",
  description: "Hệ thống Đào tạo & Đánh giá Nền tảng F&B bằng AI",
};

export default function RootHomePage() {
  return <RegisterForm />;
}

