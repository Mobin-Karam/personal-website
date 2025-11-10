// src/types/shop.d.ts
export interface ProductCategory extends BaseEntity {
  name: string;
  slug: string;
  description?: string;
}

export interface Product extends BaseEntity {
  name: string;
  slug: string;
  description: string;
  price: number;
  stock: number;
  images: string[];
  categoryId?: string;
  active: boolean;
}

export interface CartItem {
  productId: string;
  quantity: number;
  price: number;
}

export interface Order extends BaseEntity {
  userId: string;
  items: CartItem[];
  totalAmount: number;
  status: "pending" | "paid" | "shipped" | "cancelled";
  paymentMethod?: string;
  paymentRef?: string;
}

export interface ShopStats {
  totalProducts: number;
  totalOrders: number;
  totalRevenue: number;
}
