"use client";

import React from "react";
import { RollyLogo } from "@/components/common/RollyLogo";
import { APP_ROUTES } from "@/constants/routes";

export function Header() {
  return (
    <header className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between">
      <RollyLogo href={APP_ROUTES.HOME} size="md" subtitle="Hospitality Excellence" />
    </header>
  );
}
