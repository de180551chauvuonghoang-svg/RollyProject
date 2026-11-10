import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin", "vietnamese"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Rolly Academy - Hệ thống Đào tạo & Đánh giá F&B bằng AI",
  description: "Nền tảng đào tạo nhập vai thời gian thực bằng AI Voice Persona tiêu chuẩn 5 sao quốc tế",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" }
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={`${plusJakartaSans.variable} ${playfairDisplay.variable} h-full antialiased`}>
      <body className="min-h-full font-sans bg-[#F8FAFC] text-[#0F172A] flex flex-col justify-between">
        {children}
      </body>
    </html>
  );
}
