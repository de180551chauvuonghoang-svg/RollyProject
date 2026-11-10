export interface UserProfile {
  id: string;
  fullName: string;
  email: string;
  branchName: string;
  specialization: string;
  role: "employee" | "manager" | "admin";
}

export interface RegisterFormValues {
  fullName: string;
  email: string;
  branch: string;
  position: string;
  password: string;
  sopComplianceAgreed: boolean;
}

export interface LoginFormValues {
  email: string;
  password: string;
  rememberMe: boolean;
}
