import { Inter } from "next/font/google";
import "@/styles/globals.css";

export const metadata = {
  title: "CanIWear",
  description: "Homepage of CanIWear",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "optional",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
