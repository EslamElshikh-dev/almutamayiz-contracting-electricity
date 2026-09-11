import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Layers3, Ruler, ShieldCheck, Sparkles } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { images } from "@/lib/services";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = { title: "من نحن | مقاول عام في الرياض", description: "تعرف على أسلوب المتميز للمقاولات والكهرباء في تنظيم أعمال الكهرباء والسباكة والترميم والتشطيب داخل الرياض.", alternates: { canonical: "/about" } };

export default function AboutPage() {
  const schema={"@context":"https://schema.org","@type":"AboutPage",url:`${SITE_URL}/about`,name:"من نحن | المتميز للمقاولات والكهرباء",about:{"@id":`${SITE_URL}/#business`},inLanguage:"ar-SA"};
  return <main className="page-main"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,"\\u003c")}} />
    <PageHero eyebrow="من نحن" title="فريق واحد يرى المشروع كصورة كاملة" description="ننسق الأعمال الفنية والإنشائية والتشطيبات ضمن تسلسل واضح يساعد على حماية الجودة وتقليل التعارض بين المراحل." image={images.riyadh} imageAlt="أفق مدينة الرياض حيث يقدم المتميز خدماته" trail="من نحن" />
    <section className="section-space"><div className="container-shell grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
      <div className="about-image"><Image src={images.renovation} alt="تنفيذ أعمال مقاولات وترميم منظمة" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" /><div><strong>10</strong><span>خدمات تعمل<br/>ضمن منظومة واحدة</span></div></div>
      <div><span className="section-kicker">فلسفة العمل</span><h2 className="content-title">لا يكفي أن ينجح كل بند وحده</h2><p className="content-lead">التمديد الجيد يحتاج تشطيبًا يحميه، والديكور الجميل يحتاج تأسيسًا يخدمه. لذلك ننظر إلى مشروعك كوحدة واحدة، ونرتب الأعمال وفق علاقتها ببعضها لا وفق سرعة إنجاز كل بند منفصل.</p><p className="content-lead mt-5">هدفنا أن تكون الخطوة التالية محسوبة قبل تنفيذ الخطوة الحالية، وأن تبقى النتيجة عملية في الاستخدام ومتناسقة في الشكل.</p>
        <div className="about-checks">{["فهم نطاق المشروع قبل البدء","تنسيق الكهرباء والسباكة والتشطيب","متابعة التفاصيل المؤثرة في النتيجة","تواصل مباشر وواضح مع العميل"].map(item=><span key={item}><CheckCircle2 className="h-5 w-5" />{item}</span>)}</div>
      </div>
    </div></section>
    <section className="section-space dark-section"><div className="container-shell"><div className="section-intro section-intro-dark"><div><span className="section-kicker section-kicker-dark">قيم التنفيذ</span><h2>أربع مبادئ تحكم<br/>كل خطوة في العمل</h2></div><p>معايير بسيطة لكنها تصنع فارقًا واضحًا في جودة التجربة والنتيجة النهائية.</p></div><div className="values-grid">{[[Ruler,"الوضوح","نحدد ما يشمله العمل وما يحتاجه الموقع قبل التنفيذ."],[Layers3,"الترتيب","نضع كل تخصص في مرحلته المناسبة لحماية الأعمال السابقة."],[ShieldCheck,"المسؤولية","نتعامل مع التفاصيل الفنية بوصفها أساسًا لا إضافة."],[Sparkles,"التناسق","نربط الوظيفة بالشكل حتى تظهر النتيجة كوحدة واحدة."]].map(([Icon,title,desc],index)=>{const ValueIcon=Icon as typeof Ruler;return <article key={title as string}><span>{String(index+1).padStart(2,"0")}</span><ValueIcon className="h-8 w-8"/><h3>{title as string}</h3><p>{desc as string}</p></article>})}</div></div></section>
  </main>;
}
