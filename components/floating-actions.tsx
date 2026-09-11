import { MessageCircle, Phone } from "lucide-react";
import { PHONE_TEL, WHATSAPP_URL } from "@/lib/site";

export function FloatingActions() {
  return (
    <>
      <div className="floating-actions hidden md:flex" aria-label="تواصل سريع">
        <a href={PHONE_TEL} className="float-call" aria-label="اتصل بالمتميز"><Phone className="h-5 w-5" /></a>
        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="float-whatsapp" aria-label="تواصل عبر واتساب"><MessageCircle className="h-6 w-6" /></a>
      </div>
      <div className="mobile-actions md:hidden" aria-label="تواصل سريع">
        <a href={PHONE_TEL}><Phone className="h-5 w-5" /> اتصال</a>
        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle className="h-5 w-5" /> واتساب</a>
      </div>
    </>
  );
}
