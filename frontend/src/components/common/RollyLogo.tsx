"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface RollyLogoProps {
  variant?: "full" | "icon" | "mark";
  theme?: "gold" | "dark" | "light";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  href?: string;
  title?: string;
  suffix?: string;
  subtitle?: string;
  verified?: boolean;
}

export function RollyLogo({
  variant = "full",
  theme = "gold",
  size = "md",
  className,
  href,
  title = "Rolly",
  suffix = "Academy",
  subtitle,
  verified = false,
}: RollyLogoProps) {
  // Dimension mappings
  const iconSizes = {
    sm: "w-7 h-7 text-xs",
    md: "w-9 h-9 text-sm",
    lg: "w-11 h-11 text-base",
    xl: "w-14 h-14 text-xl",
  };

  const textSizes = {
    sm: "text-base",
    md: "text-lg",
    lg: "text-xl",
    xl: "text-2xl",
  };

  const isDark = theme === "dark";
  const textColor = isDark ? "text-white" : "text-[#0F172A]";
  const subColor = isDark ? "text-[#C69214]" : "text-[#A67C1E]";

  const LogoIcon = (
    <div
      className={cn(
        "relative rounded-xl flex items-center justify-center shrink-0 shadow-xs transition-transform duration-300 group-hover:scale-105",
        iconSizes[size],
        theme === "dark"
          ? "bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#020617] border border-[#C69214]/40 text-[#DFC88A]"
          : "bg-gradient-to-br from-[#FFFBF2] via-[#F8ECCB] to-[#E9CE8B] border border-[#DFC88A] text-[#936806]"
      )}
    >
      {/* Bespoke Luxury Vector Icon */}
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[68%] h-[68%]"
      >
        <defs>
          <linearGradient id="rollyGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DFB75A" />
            <stop offset="50%" stopColor="#C69214" />
            <stop offset="100%" stopColor="#8C6005" />
          </linearGradient>
          <linearGradient id="rollyStarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2CC" />
            <stop offset="100%" stopColor="#DFC88A" />
          </linearGradient>
        </defs>

        {/* Stem of R with Wine Glass Curve */}
        <path
          d="M12 9C12 8.44772 12.4477 8 13 8H21C24.866 8 28 11.134 28 15C28 18.2323 25.808 20.9525 22.8122 21.7458L28.6 31.026C28.878 31.4708 28.5584 32 28.0366 32H24.2678C23.8643 32 23.4913 31.7826 23.2952 31.4334L17.75 22H15.5V31C15.5 31.5523 15.0523 32 14.5 32H13C12.4477 32 12 31.5523 12 31V9Z"
          fill="url(#rollyGoldGrad)"
        />

        {/* Inner Counter Hole */}
        <path
          d="M15.5 11.5V18.5H21C22.933 18.5 24.5 16.933 24.5 15C24.5 13.067 22.933 11.5 21 11.5H15.5Z"
          fill={theme === "dark" ? "#0F172A" : "#FEFCF7"}
        />

        {/* Michelin Sparkle Star at Top Right */}
        <path
          d="M30 6L30.8 7.8L32.6 8.6L30.8 9.4L30 11.2L29.2 9.4L27.4 8.6L29.2 7.8L30 6Z"
          fill="url(#rollyStarGrad)"
        />
      </svg>
    </div>
  );

  const LogoText = (
    <div className="flex flex-col min-w-0">
      <div className="flex items-center gap-1.5">
        <span
          className={cn(
            "font-serif font-bold tracking-tight leading-tight",
            textSizes[size],
            textColor
          )}
        >
          {title}
        </span>
        {suffix && (
          <span
            className={cn(
              "font-serif font-light tracking-wide text-xs sm:text-sm",
              subColor
            )}
          >
            {suffix}
          </span>
        )}
        {verified && (
          <ShieldCheck className="w-4 h-4 text-[#C69214] shrink-0 ml-0.5" />
        )}
      </div>
      {subtitle && (
        <span className={cn("text-[9.5px] font-bold tracking-[0.18em] uppercase mt-0.5 truncate", subColor)}>
          {subtitle}
        </span>
      )}
    </div>
  );

  if (variant === "icon" || variant === "mark") {
    if (href) {
      return (
        <Link href={href} className={cn("inline-flex group", className)}>
          {LogoIcon}
        </Link>
      );
    }
    return <div className={cn("inline-flex", className)}>{LogoIcon}</div>;
  }

  const content = (
    <div className={cn("flex items-center gap-2.5 sm:gap-3 group select-none", className)}>
      {LogoIcon}
      {LogoText}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex transition">
        {content}
      </Link>
    );
  }

  return content;
}

