export const APP_ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",

  // 1. Employee Portal (Nhân viên / Học viên)
  EMPLOYEE_COURSES: "/courses",
  EMPLOYEE_ROLEPLAY: "/roleplay",
  EMPLOYEE_HISTORY: "/history",
  EMPLOYEE_PROFILE: "/profile",
  EMPLOYEE_SETTINGS: "/settings",

  // 2. Client Portal (Quản lý / Chủ nhà hàng)
  CLIENT_DASHBOARD: "/client/dashboard",
  CLIENT_EMPLOYEES: "/client/employees",
  CLIENT_SOP: "/client/sop-library",
  CLIENT_SCENARIOS: "/client/scenarios",
  CLIENT_REPORTS: "/client/reports",
  CLIENT_SETTINGS: "/client/settings",

  // Aliases for compatibility
  COURSES: "/courses",
  ROLEPLAY: "/roleplay",
  DASHBOARD: "/courses",
} as const;
