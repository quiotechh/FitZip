import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import AnnouncementBar from "@/components/announcement-bar";
import Navbar from "@/components/navbar";
import CartSidebar from "@/components/cart-sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  title: "FitZip — Get Fit. Stay Strong.",
  description:
    "FitZip offers science-backed workout and nutrition ebooks to help you build strength and transform your body — no gym required.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#CC0000] text-black">
        <AnnouncementBar />
        <Navbar />
        <CartSidebar />
        <GoogleAnalytics gaId="G-WXNJRNL1FL" />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
