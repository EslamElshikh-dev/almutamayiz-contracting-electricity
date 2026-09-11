import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  BadgeCheck,
  CheckCircle2,
  HardHat,
  MapPin,
  MessageCircle,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
  TimerReset,
} from "lucide-react";
import { ServiceCard } from "@/components/service-card";
import { ADDRESS, MAP_URL, PHONE_DISPLAY, PHONE_TEL, SITE_NAME, SITE_URL, WHATSAPP_URL } from "@/lib/site";
import { images, services } from "@/lib/services";

const faqs = [
  ["ما الخدمات التي يقدمها المتميز للمقاولات والكهرباء؟", "نقدم تأسيس وصيانة الكهرباء والسباكة، وتأسيس الإنارة، وترميم الواجهات والمباني، وبناء وتشطيب الملاحق، وأعمال الجبس بورد والديكورات الداخلية في الرياض."],
  ["هل يمكن جمع أكثر من تخصص في مشروع واحد؟", "نعم، يمكن تنسيق الكهرباء والسباكة والإنارة والجبس بورد والتشطيبات ضمن تسلسل واحد يقلل التعارض بين المراحل ويحافظ على تنظيم التنفيذ."],
  ["كيف أطلب معاينة أو عرض سعر؟", `اتصل على ${PHONE_DISPLAY} أو أرسل نوع الخدمة وموقع العقار والصور المتاحة عبر واتساب. نراجع التفاصيل معك ونحدد الخطوة المناسبة للمعاينة.`],
  ["ما نطاق الخدمة داخل الرياض؟", "مقرنا في حي المصيف ونستقبل طلبات المقاولات والتأسيس والصيانة والترميم من مختلف أحياء مدينة الرياض بحسب نطاق المشروع وموقعه."],
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["GeneralContractor", "Electrician", "Plumber"],
      "@id": `${SITE_URL}/#business`,
      name: SITE_NAME,
      url: SITE_URL,
      telephone: "+966537376838",
      description: "مقاول عام في الرياض لخدمات الكهرباء والسباكة والترميم والتشطيب وبناء الملاحق والديكورات الداخلية.",
      image: images.riyadh,
      address: { "@type": "PostalAddress", streetAddress: "3667 الجنيفي، 6474، حي المصيف", addressLocality: "الرياض", postalCode: "12465", addressRegion: "الرياض", addressCountry: "SA" },
      areaServed: { "@type": "City", name: "الرياض" },
      hasMap: MAP_URL,
      contactPoint: { "@type": "ContactPoint", telephone: "+966537376838", contactType: "خدمة العملاء", areaServed: "SA", availableLanguage: "ar" },
    },
    { "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: SITE_URL, name: SITE_NAME, inLanguage: "ar-SA", publisher: { "@id": `${SITE_URL}/#business` } },
    { "@type": "ItemList", "@id": `${SITE_URL}/#services`, name: "خدمات المتميز للمقاولات والكهرباء", numberOfItems: services.length, itemListElement: services.map((service, index) => ({ "@type": "ListItem", position: index + 1, url: `${SITE_URL}/services/${service.slug}`, name: service.title })) },
    { "@type": "FAQPage", "@id": `${SITE_URL}/#faq`, mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
  ],
};

export default function Home() {
  return (
    <main className="page-main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />

      <section className="home-hero">
        <Image src={images.riyadh} alt="أفق مدينة الرياض ومبانيها الحديثة" fill priority sizes="100vw" className="object-cover" />
        <div className="home-hero-overlay" />
        <div className="blueprint-grid" aria-hidden="true" />
        <div className="container-shell relative z-10 grid min-h-[780px] items-end gap-12 pb-16 pt-36 lg:grid-cols-[1fr_360px] lg:pb-20">
          <div className="max-w-4xl animate-rise">
            <div className="eyebrow"><BadgeCheck className="h-4 w-4" /> مقاول عام في الرياض</div>
            <h1>نبني الأساس بإتقان.<br /><span>ونُكمل التفاصيل بذكاء.</span></h1>
            <p>المتميز للمقاولات والكهرباء يجمع التأسيس والصيانة والترميم والتشطيب في مسار واحد منظم؛ من أول تمديدة حتى آخر لمسة في مشروعك.</p>
            <div className="hero-actions">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="button-primary"><MessageCircle className="h-5 w-5" /> اطلب معاينة <ArrowLeft className="h-4 w-4" /></a>
              <a href={PHONE_TEL} className="button-secondary"><Phone className="h-5 w-5" /> اتصل الآن</a>
            </div>
          </div>
          <div className="hero-proof animate-rise-delay">
            <div><span>01</span><strong>تنسيق التخصصات</strong><p>كهرباء وسباكة وترميم وتشطيب ضمن خطة مترابطة.</p></div>
            <div><span>02</span><strong>تنفيذ واضح</strong><p>معاينة ثم نطاق عمل مرتب ومراحل قابلة للمتابعة.</p></div>
          </div>
        </div>
      </section>

      <section className="metrics-band"><div className="container-shell metrics-grid">
        {[["10", "خدمات متخصصة"], ["4", "مراحل عمل واضحة"], ["الرياض", "نطاق الخدمة"], ["مباشر", "اتصال وواتساب"]].map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
      </div></section>

      <section className="section-space"><div className="container-shell">
        <div className="section-intro"><div><span className="section-kicker">من التخطيط إلى التشطيب</span><h2>خدمات تنفّذ معًا<br />وتعمل معًا.</h2></div><div><p>كل خدمة جزء من صورة أكبر. لهذا نرتب التأسيس والصيانة والترميم وفق تسلسل يحافظ على جودة التنفيذ ويقلل إعادة العمل.</p><Link href="/services" className="text-link">استعرض جميع الخدمات <ArrowLeft className="h-4 w-4" /></Link></div></div>
        <div className="services-grid-v2 mt-12">{services.slice(0,6).map((service,index)=><ServiceCard key={service.slug} service={service} index={index} featured={index===0||index===5} />)}</div>
      </div></section>

      <section className="section-space dark-section"><div className="container-shell grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
        <div className="image-collage">
          <div className="image-collage-main"><Image src={images.electrical} alt="فني ينفذ أعمال كهرباء وإنارة داخلية" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" /></div>
          <div className="image-collage-small"><Image src={images.plumbing} alt="تنفيذ وصيانة تمديدات السباكة" fill sizes="220px" className="object-cover" /></div>
          <span className="image-collage-note"><ShieldCheck className="h-6 w-6" /> التفاصيل الصغيرة<br />تحمي النتيجة الكبيرة</span>
        </div>
        <div><span className="section-kicker section-kicker-dark">طريقة عمل المتميز</span><h2>مشروع مرتب يبدأ بقرار صحيح</h2><p className="dark-lead">قبل التنفيذ نراجع الموقع والاحتياج والتداخل بين التخصصات. ثم نرتب العمل بحيث يأتي كل بند في توقيته الصحيح، ويحافظ الفريق التالي على جودة ما سبقه.</p>
          <div className="principles-grid">{[[Ruler,"معاينة دقيقة","فهم الحالة والقياسات قبل تحديد النطاق."],[TimerReset,"تسلسل عملي","ترتيب المراحل للحد من التعارض وإعادة العمل."],[CheckCircle2,"تشطيب محسوب","عناية بالمستويات والزوايا والعناصر الظاهرة."],[Sparkles,"نتيجة متناسقة","ربط الجانب الفني بالشكل النهائي للمكان."]].map(([Icon,title,desc])=>{const ItemIcon=Icon as typeof Ruler;return <article key={title as string}><ItemIcon className="h-5 w-5" /><div><h3>{title as string}</h3><p>{desc as string}</p></div></article>})}</div>
          <Link href="/about" className="button-outline mt-8">تعرّف على أسلوبنا <ArrowLeft className="h-4 w-4" /></Link>
        </div>
      </div></section>

      <section className="section-space process-section"><div className="container-shell">
        <div className="section-intro"><div><span className="section-kicker">مسار التنفيذ</span><h2>أربع خطوات.<br />صورة واحدة واضحة.</h2></div><p>من الرسالة الأولى حتى اكتمال نطاق العمل، تعرف دائمًا ما الخطوة الحالية وما الذي يأتي بعدها.</p></div>
        <ol className="process-grid">{[[MessageCircle,"أرسل التفاصيل","نوع الخدمة والموقع والصور المتاحة."],[MapPin,"معاينة الموقع","فهم الحالة والقياسات والأولويات."],[Ruler,"تحديد النطاق","ترتيب البنود ومراحل العمل المطلوبة."],[HardHat,"التنفيذ والمتابعة","تنفيذ متسلسل حتى اكتمال النطاق."]].map(([Icon,title,desc],index)=>{const StepIcon=Icon as typeof MessageCircle;return <li key={title as string}><span className="process-index">{String(index+1).padStart(2,"0")}</span><StepIcon className="h-7 w-7" /><h3>{title as string}</h3><p>{desc as string}</p></li>})}</ol>
      </div></section>

      <section className="location-band"><div className="container-shell grid items-center gap-8 lg:grid-cols-[1fr_auto]">
        <div className="flex items-start gap-4"><span className="location-icon"><MapPin className="h-6 w-6" /></span><div><span className="section-kicker">موقعنا في حي المصيف</span><h2>{ADDRESS}</h2><p>نستقبل طلبات المقاولات والكهرباء والسباكة والترميم من مختلف أحياء مدينة الرياض.</p></div></div>
        <div className="flex flex-col gap-3 sm:flex-row"><a href={MAP_URL} target="_blank" rel="noreferrer" className="button-dark">افتح الموقع على الخريطة</a><Link href="/contact" className="button-light">بيانات التواصل</Link></div>
      </div></section>

      <section className="section-space"><div className="container-shell grid gap-12 lg:grid-cols-[.65fr_1.35fr]">
        <div><span className="section-kicker">قبل أن تبدأ</span><h2 className="faq-title">إجابات واضحة لأسئلة متكررة</h2><p className="section-copy">لم تجد سؤالك؟ أرسل تفاصيله عبر واتساب وسنساعدك في تحديد الخدمة الأنسب.</p></div>
        <div className="faq-list">{faqs.map(([question,answer],index)=><details key={question} open={index===0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
      </div></section>
    </main>
  );
}
