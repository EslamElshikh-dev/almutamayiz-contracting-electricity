import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ServiceCard } from "@/components/service-card";
import { images, services } from "@/lib/services";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "خدمات المقاولات والكهرباء والسباكة في الرياض",
  description: "جميع خدمات المتميز للمقاولات والكهرباء في الرياض: تأسيس وصيانة كهرباء وسباكة، إنارة، ترميم واجهات ومبانٍ، بناء ملاحق، جبس بورد وديكورات داخلية.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  const schema = { "@context": "https://schema.org", "@type": "ItemList", name: "خدمات المقاولات والتأسيس والترميم في الرياض", numberOfItems: services.length, itemListElement: services.map((service,index)=>({ "@type":"ListItem", position:index+1, url:`${SITE_URL}/services/${service.slug}`, name:service.title })) };
  return (
    <main className="page-main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g,"\\u003c") }} />
      <PageHero eyebrow="عشرة تخصصات مترابطة" title="كل ما يحتاجه مشروعك تحت إدارة أوضح" description="من التأسيس الفني إلى الترميم والتشطيب، اختر الخدمة المطلوبة أو اجمع أكثر من تخصص ضمن نطاق عمل واحد منظم." image={images.renovation} imageAlt="أعمال مقاولات وترميم مبنى" trail="الخدمات" />
      <section className="section-space"><div className="container-shell">
        <div className="section-intro"><div><span className="section-kicker">دليل الخدمات</span><h2>اختر نقطة البداية.<br />ونرتب بقية الطريق.</h2></div><p>كل صفحة تشرح نطاق الخدمة وما الذي تتضمنه والنتيجة التي نعمل للوصول إليها، لتبدأ طلبك بصورة أوضح.</p></div>
        <div className="services-grid-v2 mt-12">{services.map((service,index)=><ServiceCard key={service.slug} service={service} index={index} featured={index===0||index===6} />)}</div>
      </div></section>
    </main>
  );
}
