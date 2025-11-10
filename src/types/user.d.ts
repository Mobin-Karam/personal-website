// src/types/user.d.ts
export type UserRole = "admin" | "editor" | "customer";

export interface User extends BaseEntity {
  username: string;
  email: string;
  passwordHash: string;
  role: UserRole;
  avatarUrl?: string;
  isActive: boolean;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface ProfileUpdate {
  username?: string;
  email?: string;
  avatarUrl?: string;
  password?: string;
}
