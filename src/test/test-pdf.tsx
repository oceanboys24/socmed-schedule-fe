import { data } from "@/dummy/data-dummy";
import {
  Document,
  Font,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
// Optional: Custom font or default
Font.register({
  family: "Helvetica",
  fonts: [
    { src: "https://fonts.gstatic.com/s/helvetica/v11/7Auwp_4U.ttf" }, // fallback
  ],
});

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#111827", // Tailwind text-gray-900
  },
  section: {
    marginBottom: 12,
  },
  bold: {
    fontWeight: "bold",
  },
  heading: {
    fontSize: 16,
    fontWeight: 700,
    marginBottom: 8,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#f3f4f6", // Tailwind bg-gray-100
    padding: 6,
  },
  tableRow: {
    flexDirection: "row",
    padding: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
    borderBottomStyle: "solid",
  },
  cell: { flex: 1 },
  rightAlign: { textAlign: "right" },
  summaryLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 2,
  },
  sectionTitle: {
    marginBottom: 4,
    fontWeight: "bold",
  },
});

const TestPdf = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Title */}
        <View style={styles.section}>
          <Text style={styles.heading}>INVOICE CONSIGNMENT</Text>
          <Text>Nomor Faktur: {data.invoiceNumber}</Text>
          <Text>Tanggal Faktur: {data.invoiceDate}</Text>
          <Text>Jatuh Tempo: {data.dueDate}</Text>
        </View>

        {/* Sender & Recipient */}
        <View style={[styles.section, { flexDirection: "row", gap: 20 }]}>
          <View style={{ flex: 1 }}>
            <Text style={styles.sectionTitle}>Dari:</Text>
            <Text>{data.sender.name}</Text>
            <Text>{data.sender.address}</Text>
            <Text>{data.sender.email}</Text>
            <Text>{data.sender.phone}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.sectionTitle}>Kepada:</Text>
            <Text>{data.recipient.name}</Text>
            <Text>{data.recipient.address}</Text>
            <Text>{data.recipient.email}</Text>
            <Text>{data.recipient.phone}</Text>
            <Text style={{ marginTop: 4 }}>Kirim ke: {data.shipTo}</Text>
            <Text>Nomor Pelacakan: {data.trackingNumber}</Text>
          </View>
        </View>

        {/* Items Table */}
        <View style={styles.section}>
          <View style={styles.tableHeader}>
            <Text style={[styles.cell, styles.bold]}>Deskripsi</Text>
            <Text style={[styles.cell, styles.bold, styles.rightAlign]}>
              Tarif
            </Text>
            <Text style={[styles.cell, styles.bold, styles.rightAlign]}>
              Qty
            </Text>
            <Text style={[styles.cell, styles.bold, styles.rightAlign]}>
              Pajak
            </Text>
            <Text style={[styles.cell, styles.bold, styles.rightAlign]}>
              Diskon
            </Text>
            <Text style={[styles.cell, styles.bold, styles.rightAlign]}>
              Jumlah
            </Text>
          </View>
          {data.items.map((item, i) => (
            <View key={i} style={styles.tableRow}>
              <Text style={styles.cell}>{item.description}</Text>
              <Text style={[styles.cell, styles.rightAlign]}>
                {item.rate.toLocaleString("id-ID")}
              </Text>
              <Text style={[styles.cell, styles.rightAlign]}>
                {item.quantity}
              </Text>
              <Text style={[styles.cell, styles.rightAlign]}>
                {item.taxPercent}%
              </Text>
              <Text style={[styles.cell, styles.rightAlign]}>
                {item.discountPercent}%
              </Text>
              <Text style={[styles.cell, styles.rightAlign]}>
                {item.total.toLocaleString("id-ID")}
              </Text>
            </View>
          ))}
        </View>

        {/* Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ringkasan Pembayaran:</Text>
          <View style={styles.summaryLine}>
            <Text>Subtotal:</Text>
            <Text>IDR {data.summary.subtotal.toLocaleString("id-ID")}</Text>
          </View>
          <View style={styles.summaryLine}>
            <Text>Pajak Penjualan:</Text>
            <Text>IDR {data.summary.tax.toLocaleString("id-ID")}</Text>
          </View>
          <View style={styles.summaryLine}>
            <Text>Diskon:</Text>
            <Text>IDR {data.summary.discount.toLocaleString("id-ID")}</Text>
          </View>
          <View style={styles.summaryLine}>
            <Text>Biaya Pengiriman:</Text>
            <Text>IDR {data.summary.shipping.toLocaleString("id-ID")}</Text>
          </View>
          <View style={[styles.summaryLine, styles.bold]}>
            <Text>Total:</Text>
            <Text>IDR {data.summary.total.toLocaleString("id-ID")}</Text>
          </View>
          <View style={styles.summaryLine}>
            <Text>Jumlah yang Dibayar:</Text>
            <Text>IDR {data.summary.paid.toLocaleString("id-ID")}</Text>
          </View>
          <View style={[styles.summaryLine, styles.bold]}>
            <Text>Sisa Tagihan:</Text>
            <Text style={{ color: "#1d4ed8" }}>
              IDR {data.summary.balanceDue.toLocaleString("id-ID")}
            </Text>
          </View>
        </View>

        {/* Payment Instructions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Instruksi Pembayaran:</Text>
          <Text>Transfer Bank: {data.paymentInstructions.bankName}</Text>
          <Text>No. Rekening: {data.paymentInstructions.accountNumber}</Text>
          <Text>Atas Nama: {data.paymentInstructions.accountName}</Text>
          <Text>SWIFT Code: {data.paymentInstructions.swiftCode}</Text>
        </View>

        {/* Notes */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Catatan:</Text>
          <Text>{data.notes}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default TestPdf;
