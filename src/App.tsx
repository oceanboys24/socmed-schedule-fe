// components/InvoiceDocument.tsx

import { PDFViewer } from "@react-pdf/renderer";
import TestPdf from "./test/test-pdf";

export default function App() {
  return (
    <PDFViewer className="min-h-screen w-full">
      <TestPdf />
    </PDFViewer>
  );
}
