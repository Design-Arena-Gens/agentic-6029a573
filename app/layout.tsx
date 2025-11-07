import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "आनंदगढ़ की कहानी",
  description:
    "राजकुमारी आर्या और वीर की दोस्ती, साहस और आने वाले तूफान की रोमांचक कथा।"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi">
      <body>{children}</body>
    </html>
  );
}
