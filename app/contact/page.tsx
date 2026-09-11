import type { Metadata } from "next";
import { ArrowUpLeft, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ADDRESS, MAP_URL, PHONE_DISPLAY, PHONE_TEL, SITE_URL, WHATSAPP_URL } from "@/lib/site";
import { images } from "@/lib/services";

export const metadata: Metadata = { title: "تواصل معنا | المتميز للمقاولات والكهرباء", description: "اتصل أو تواصل عبر واتساب مع المتميز للمقاولات والكهرباء في حي المصيف بالرياض واطلب معاينة لخدمات المقاولات والكهرباء والسباكة والترميم.", alternates: { canonical: "/contact" } };

export default function ContactPage(){
  const schema={"@context":"https://schema.org","@type":"ContactPage",url:`${SITE_URL}/contact`,name:"التواصل مع المتميز للمقاولات والكهرباء",about:{"@id":`${SITE_URL}/#business`},inLanguage:"ar-SA"};
  return <main className="page-main"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,"\\u003c")}} />
    <PageHero eyebrow="تواصل مباشر" title="أرسل تفاصيل مشروعك ولنبدأ من الصورة الصحيحة" description="اذكر الخدمة المطلوبة وموقع العقار، وأرفق صورًا أو فيديو قصيرًا عبر واتساب لنفهم الحالة قبل ترتيب المعاينة." image={images.interior} imageAlt="تشطيبات وديكورات داخلية متناسقة" trail="تواصل معنا" />
    <section className="section-space"><div className="container-shell contact-layout">
      <div><span className="section-kicker">قنوات التواصل</span><h2 className="content-title">اختر الطريقة الأنسب لك</h2><p className="content-lead">التواصل المباشر هو أسرع طريق لفهم الطلب. أرسل نوع الخدمة والحي وصور الموقع إن توفرت، وسنراجع معك الخطوة التالية.</p>
        <div className="contact-cards"><a href={PHONE_TEL}><span><Phone className="h-6 w-6"/></span><div><small>اتصال مباشر</small><strong dir="ltr">{PHONE_DISPLAY}</strong><p>للاستفسار وطلب المعاينة</p></div><ArrowUpLeft className="h-5 w-5"/></a><a href={WHATSAPP_URL} target="_blank" rel="noreferrer"><span><MessageCircle className="h-6 w-6"/></span><div><small>واتساب</small><strong dir="ltr">{PHONE_DISPLAY}</strong><p>أرسل الصور وتفاصيل الخدمة</p></div><ArrowUpLeft className="h-5 w-5"/></a><a href={MAP_URL} target="_blank" rel="noreferrer"><span><MapPin className="h-6 w-6"/></span><div><small>العنوان</small><strong>{ADDRESS}</strong><p>حي المصيف · مدينة الرياض</p></div><ArrowUpLeft className="h-5 w-5"/></a></div>
      </div>
      <div className="contact-map"><iframe title="موقع المتميز للمقاولات والكهرباء في حي المصيف بالرياض" src="https://www.google.com/maps?q=3667%20%D8%A7%D9%84%D8%AC%D9%86%D9%8A%D9%81%D9%8A%D8%8C%206474%D8%8C%20%D8%A7%D9%84%D9%85%D8%B5%D9%8A%D9%81%D8%8C%20%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%2012465&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></div>
    </div></section>
  </main>;
}
