// src/types/payment.d.ts
export interface PaymentAccount extends BaseEntity {
  bankName: string;
  accountNumber: string;
  iban: string;
  ownerName: string;
  active: boolean;
}

export interface Transaction extends BaseEntity {
  userId: string;
  orderId: string;
  amount: number;
  currency: string;
  status: "pending" | "completed" | "failed" | "refunded";
  method: string;
  bankRef?: string;
}

export interface PaymentStats {
  totalTransactions: number;
  totalRevenue: number;
  failedPayments: number;
}
