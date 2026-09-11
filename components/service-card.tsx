import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Service } from "@/lib/services";

export function ServiceCard({ service, index, featured = false }: { service: Service; index: number; featured?: boolean }) {
  const Icon = service.icon;
  return (
    <article className={`service-card-v2 ${featured ? "service-card-v2-featured" : ""}`}>
      <div className="service-card-image">
        <Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" className="object-cover" />
        <div className="service-card-shade" />
        <span className="service-card-index">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className="service-card-body">
        <span className="service-card-icon"><Icon className="h-5 w-5" /></span>
        <h3>{service.title}</h3>
        <p>{service.short}</p>
        <Link href={`/services/${service.slug}`} className="service-card-link">تفاصيل الخدمة <ArrowLeft className="h-4 w-4" /></Link>
      </div>
    </article>
  );
}
