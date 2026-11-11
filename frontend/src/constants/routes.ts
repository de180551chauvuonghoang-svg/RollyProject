export const APP_ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",

  // 1. Employee Portal (Nhân viên / Học viên)
  EMPLOYEE_COURSES: "/courses",
  EMPLOYEE_COURSE_DETAIL: (id: string = "1") => `/courses/${id}`,
  EMPLOYEE_ROLEPLAY: "/roleplay",
  EMPLOYEE_PRACTICE: (id: string = "2") => `/practice/${id}`,
  EMPLOYEE_ROLEPLAY_RESULTS: (id: string = "2") => `/roleplay/results/${id}`,
  EMPLOYEE_HISTORY: "/history",
  EMPLOYEE_QUIZ: (id: string = "1") => `/quiz/${id}`,
  EMPLOYEE_QUIZ_PASSED: (id: string = "1") => `/quiz/${id}/passed`,
  EMPLOYEE_QUIZ_FAILED: (id: string = "1") => `/quiz/${id}/failed`,
  EMPLOYEE_PROFILE: "/profile",
  EMPLOYEE_SETTINGS: "/settings",

  // 2. Client Portal (Quản lý / Chủ nhà hàng)
  CLIENT_DASHBOARD: "/client/dashboard",
  CLIENT_EMPLOYEES: "/client/employees",
  CLIENT_EMPLOYEE_DETAIL: (id: string = "1") => `/client/employees/${id}`,
  CLIENT_EMPLOYEES_ALL: "/client/employees/all",
  CLIENT_EMPLOYEES_APPROVALS: "/client/employees/approvals",
  CLIENT_SOP: "/client/sop-library",
  CLIENT_SCENARIOS: "/client/scenarios",
  CLIENT_SCENARIOS_DASHBOARD: "/client/scenarios/dashboard",
  CLIENT_SCENARIO_DETAIL: (id: string = "1") => `/client/scenarios/${id}`,
  CLIENT_SCENARIO_EDIT: (id: string = "1") => `/client/scenarios/${id}/edit`,
  CLIENT_REPORTS: "/client/reports",
  CLIENT_SETTINGS: "/client/settings",

  // Aliases for compatibility
  COURSES: "/courses",
  ROLEPLAY: "/roleplay",
  DASHBOARD: "/courses",
} as const;
