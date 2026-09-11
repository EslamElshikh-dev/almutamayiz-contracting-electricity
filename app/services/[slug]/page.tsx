import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, MessageCircle, Phone, Ruler, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ServiceCard } from "@/components/service-card";
import { getService, services } from "@/lib/services";
import { PHONE_TEL, SITE_NAME, SITE_URL, WHATSAPP_URL } from "@/lib/site";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.title} في الرياض`,
    description: service.description,
    keywords: service.keywords,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { title: `${service.title} في الرياض | ${SITE_NAME}`, description: service.short, url: `/services/${service.slug}`, images: [{ url: service.image, alt: service.imageAlt }] },
    twitter: { card: "summary_large_image", title: `${service.title} في الرياض`, description: service.short, images: [service.image] },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "@id": `${SITE_URL}/services/${service.slug}#service`, name: service.title, description: service.description, provider: { "@id": `${SITE_URL}/#business` }, areaServed: { "@type": "City", name: "الرياض" }, serviceType: service.title, url: `${SITE_URL}/services/${service.slug}`, image: service.image },
      { "@type": "BreadcrumbList", itemListElement: [{ "@type":"ListItem",position:1,name:"الرئيسية",item:SITE_URL },{ "@type":"ListItem",position:2,name:"الخدمات",item:`${SITE_URL}/services` },{ "@type":"ListItem",position:3,name:service.title,item:`${SITE_URL}/services/${service.slug}` }] },
    ],
  };
  return (
    <main className="page-main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g,"\\u003c") }} />
      <PageHero eyebrow={service.eyebrow} title={`${service.title} في الرياض`} description={service.short} image={service.image} imageAlt={service.imageAlt} trail={service.title} />

      <section className="section-space"><div className="container-shell grid gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-24">
        <div><span className="section-kicker">عن الخدمة</span><h2 className="content-title">تنفيذ يبدأ بالفهم<br />وينتهي بتفاصيل مرتبة</h2><p className="content-lead">{service.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href={`${WHATSAPP_URL}%0Aالخدمة:%20${encodeURIComponent(service.title)}`} target="_blank" rel="noreferrer" className="button-primary"><MessageCircle className="h-5 w-5" /> اطلب الخدمة</a><a href={PHONE_TEL} className="button-dark"><Phone className="h-5 w-5" /> اتصل الآن</a></div>
        </div>
        <div className="service-scope"><div className="service-scope-head"><Ruler className="h-6 w-6" /><div><span>نطاق العمل</span><h2>ماذا تشمل الخدمة؟</h2></div></div><ul>{service.scope.map((item)=><li key={item}><CheckCircle2 className="h-5 w-5" />{item}</li>)}</ul></div>
      </div></section>

      <section className="section-space paper-section"><div className="container-shell grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="detail-image"><Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" /></div>
        <div><span className="section-kicker">النتيجة المطلوبة</span><h2 className="content-title">عمل يؤدي وظيفته<br />ويحافظ على شكل المكان</h2><div className="outcomes-list">{service.outcomes.map((item,index)=><article key={item}><span>{String(index+1).padStart(2,"0")}</span><div><h3>{item}</h3><p>نعتمد ترتيبًا واضحًا في المعاينة والتنفيذ والفحص للوصول إلى هذه النتيجة ضمن نطاق المشروع.</p></div></article>)}</div></div>
      </div></section>

      <section className="service-cta-section"><div className="container-shell service-cta-inner"><div><ShieldCheck className="h-8 w-8" /><span>تحتاج {service.title}؟</span><h2>أرسل تفاصيل الموقع والصور المتاحة.</h2></div><a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="button-primary">ابدأ عبر واتساب <ArrowLeft className="h-4 w-4" /></a></div></section>

      <section className="section-space"><div className="container-shell"><div className="flex items-end justify-between gap-6"><div><span className="section-kicker">قد تحتاج أيضًا</span><h2 className="related-title">خدمات تكمل مشروعك</h2></div><Link href="/services" className="text-link hidden sm:flex">كل الخدمات <ArrowLeft className="h-4 w-4" /></Link></div><div className="services-grid-v2 mt-10">{related.map((item,index)=><ServiceCard key={item.slug} service={item} index={index} />)}</div></div></section>
    </main>
  );
}
