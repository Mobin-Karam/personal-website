// src/types/dashboard.d.ts
export interface DashboardStats {
  totalUsers: number;
  totalPosts: number;
  totalProducts: number;
  totalRevenue: number;
}

export interface DashboardMenuItem {
  id: string;
  label: string;
  icon?: string;
  path: string;
  visible: boolean;
}

export interface DashboardModule {
  id: string;
  name: string;
  description: string;
  route: string;
  active: boolean;
}
