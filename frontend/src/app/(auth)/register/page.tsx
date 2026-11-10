import { Metadata } from "next";
import { RegisterForm } from "@/components/modules/auth/RegisterForm";

export const metadata: Metadata = {
  title: "Đăng ký Học viên - Rolly Academy",
  description: "Tạo tài khoản đào tạo tại Rolly Academy",
};

export default function RegisterPage() {
  return <RegisterForm />;
}
