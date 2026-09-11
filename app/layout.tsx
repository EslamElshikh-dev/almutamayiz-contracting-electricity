import type { Metadata, Viewport } from "next";
import { FloatingActions } from "@/components/floating-actions";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "المتميز للمقاولات والكهرباء | مقاول عام في الرياض",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "المتميز للمقاولات والكهرباء في الرياض: تأسيس وصيانة كهرباء وسباكة، تأسيس إنارة، ترميم واجهات ومباني، بناء وتشطيب ملاحق، جبس بورد وديكورات داخلية.",
  keywords: [
    "مقاول عام في الرياض",
    "مقاول كهرباء الرياض",
    "تأسيس كهرباء الرياض",
    "تأسيس سباكة الرياض",
    "ترميم مباني الرياض",
    "ترميم واجهات الرياض",
    "بناء ملاحق الرياض",
    "جبس بورد الرياض",
    "ديكورات داخلية الرياض",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "/",
    siteName: SITE_NAME,
    title: "المتميز للمقاولات والكهرباء | مقاول عام في الرياض",
    description: "خدمات المقاولات والكهرباء والسباكة والترميم والتشطيب في الرياض. اتصل أو أرسل تفاصيل مشروعك عبر واتساب.",
  },
  twitter: {
    card: "summary",
    title: "المتميز للمقاولات والكهرباء | الرياض",
    description: "مقاولات وتأسيس وصيانة وترميم وتشطيب داخل الرياض.",
  },
  robots: { index: true, follow: true },
  category: "construction",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#101418",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <FloatingActions />
      </body>
    </html>
  );
}
