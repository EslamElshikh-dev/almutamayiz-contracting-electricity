import Link from "next/link";
import { Menu, MessageCircle, Phone, X, Zap } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, SITE_NAME, WHATSAPP_URL } from "@/lib/site";

const links = [
  { href: "/", label: "الرئيسية" },
  { href: "/services", label: "الخدمات" },
  { href: "/about", label: "من نحن" },
  { href: "/contact", label: "تواصل معنا" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container-shell flex h-[74px] items-center justify-between gap-4">
        <Link href="/" className="brand" aria-label={`${SITE_NAME} - الرئيسية`}>
          <span className="brand-mark" aria-hidden="true"><Zap className="h-6 w-6" strokeWidth={2.4} /></span>
          <span><strong className="block text-base font-black leading-tight">المتميز</strong><small className="block text-[.75rem] font-semibold text-white/58">للمقاولات والكهرباء</small></span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="التنقل الرئيسي">
          {links.map((link) => <Link key={link.href} href={link.href} className="nav-link">{link.label}</Link>)}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <a href={PHONE_TEL} className="header-phone"><Phone className="h-4 w-4" /><span dir="ltr">{PHONE_DISPLAY}</span></a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="header-whatsapp"><MessageCircle className="h-4 w-4" /> واتساب</a>
        </div>

        <details className="mobile-menu lg:hidden">
          <summary aria-label="فتح قائمة التنقل"><Menu className="menu-open h-6 w-6" /><X className="menu-close h-6 w-6" /></summary>
          <div className="mobile-menu-panel">
            <nav aria-label="التنقل عبر الجوال">
              {links.map((link, index) => <Link key={link.href} href={link.href}><span>{String(index + 1).padStart(2, "0")}</span>{link.label}</Link>)}
            </nav>
            <div className="mobile-menu-actions">
              <a href={PHONE_TEL}><Phone className="h-5 w-5" /> اتصال</a>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle className="h-5 w-5" /> واتساب</a>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
