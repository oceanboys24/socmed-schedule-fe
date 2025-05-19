// interfaces/Invoice.ts
export interface CompanyInfo {
  name: string;
  address: string;
  email: string;
  phone: string;
}

export interface InvoiceItem {
  description: string;
  rate: number;
  quantity: number;
  taxPercent: number;
  discountPercent: number;
  total: number;
}

export interface BankInfo {
  bankName: string;
  accountNumber: string;
  accountName: string;
  swiftCode: string;
}

export interface InvoiceData {
  invoiceNumber: number;
  invoiceDate: string;
  dueDate: string;
  sender: CompanyInfo;
  recipient: CompanyInfo;
  shipTo: string;
  trackingNumber: string;
  items: InvoiceItem[];
  paymentInstructions: BankInfo;
  notes: string;
  summary: {
    subtotal: number;
    tax: number;
    discount: number;
    shipping: number;
    total: number;
    paid: number;
    balanceDue: number;
  };
}
