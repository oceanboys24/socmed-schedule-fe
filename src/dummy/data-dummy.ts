import type { InvoiceData } from "./types/data-types";

// data/dummyInvoiceData.ts
export const data: InvoiceData = {
  invoiceNumber: 1,
  invoiceDate: "2025-01-03",
  dueDate: "2025-04-03",
  sender: {
    name: "PT HashMicro Solusi Indonesia",
    address:
      "Jalan Balikpapan Raya No. 9 A - C, Daerah Khusus Ibukota Jakarta 10160",
    email: "hello@hashmicro.co.id",
    phone: "021-5099 6750",
  },
  recipient: {
    name: "PT Maju Terus",
    address: "Jl. Pembangunan No. 8, Jakarta, 12950",
    email: "info@majuterus.com",
    phone: "021-678900",
  },
  shipTo: "Jl. Pembangunan No. 8, Jakarta, 12950",
  trackingNumber: "HM1298001",
  items: [
    {
      description: "Prototype",
      rate: 200_000_000,
      quantity: 2,
      taxPercent: 20,
      discountPercent: 20,
      total: 320_000_000,
    },
    {
      description: "Desain",
      rate: 150_000_000,
      quantity: 2,
      taxPercent: 20,
      discountPercent: 20,
      total: 240_000_000,
    },
  ],
  paymentInstructions: {
    bankName: "Bank Central Asia (BCA)",
    accountNumber: "1234567890",
    accountName: "PT HashMicro Solusi Indonesia",
    swiftCode: "CENAIDJA",
  },
  notes:
    "Prototype berbasis pemrograman adalah gaya pemrograman berorientasi objek di mana perilaku objek dapat ditiru dan digunakan kembali.",
  summary: {
    subtotal: 560_000_000,
    tax: 112_000_000,
    discount: 0,
    shipping: 0,
    total: 672_000_000,
    paid: 0,
    balanceDue: 672_000_000,
  },
};
