import Link from "next/link";
import { ArrowUpLeft, MapPin, MessageCircle, Phone, Zap } from "lucide-react";
import { ADDRESS, MAP_URL, PHONE_DISPLAY, PHONE_TEL, SITE_NAME, WHATSAPP_URL } from "@/lib/site";
import { services } from "@/lib/services";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container-shell">
        <div className="footer-cta">
          <div><span>فكرة مشروعك تستحق بداية مرتبة</span><h2>خلّنا نراجع احتياجك<br />ونحدد الخطوة التالية.</h2></div>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="button-primary"><MessageCircle className="h-5 w-5" /> ابدأ عبر واتساب <ArrowUpLeft className="h-4 w-4" /></a>
        </div>
        <div className="footer-grid">
          <div className="max-w-sm">
            <Link href="/" className="brand"><span className="brand-mark"><Zap className="h-6 w-6" /></span><span><strong className="block text-lg font-black">{SITE_NAME}</strong><small className="text-white/50">مقاول عام في الرياض</small></span></Link>
            <p className="mt-5 leading-8 text-white/52">مقاولات وتأسيس وصيانة وترميم وتشطيب ضمن مسار عمل واضح يخدم المنازل والفلل والمباني في الرياض.</p>
          </div>
          <div><h3>روابط الموقع</h3><nav>{[{href:"/",label:"الرئيسية"},{href:"/services",label:"جميع الخدمات"},{href:"/about",label:"من نحن"},{href:"/contact",label:"تواصل معنا"}].map((item)=><Link key={item.href} href={item.href}>{item.label}</Link>)}</nav></div>
          <div><h3>خدمات رئيسية</h3><nav>{services.slice(0,5).map((service)=><Link key={service.slug} href={`/services/${service.slug}`}>{service.title}</Link>)}</nav></div>
          <div><h3>بيانات التواصل</h3><div className="footer-contact"><a href={PHONE_TEL}><Phone className="h-4 w-4" /><span dir="ltr">{PHONE_DISPLAY}</span></a><a href={WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle className="h-4 w-4" /> واتساب مباشر</a><a href={MAP_URL} target="_blank" rel="noreferrer"><MapPin className="mt-1 h-4 w-4 shrink-0" />{ADDRESS}</a></div></div>
        </div>
        <div className="footer-bottom"><p>© {new Date().getFullYear()} {SITE_NAME}</p><p>المصيف · الرياض</p></div>
      </div>
    </footer>
  );
}
