import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export function PageHero({ eyebrow, title, description, image, imageAlt, trail }: { eyebrow: string; title: string; description: string; image: string; imageAlt: string; trail: string }) {
  return (
    <section className="page-hero">
      <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover" />
      <div className="page-hero-overlay" />
      <div className="blueprint-grid" aria-hidden="true" />
      <div className="container-shell relative z-10 flex min-h-[560px] items-end pb-16 pt-36 md:min-h-[640px] md:pb-20">
        <div className="max-w-4xl animate-rise">
          <nav className="breadcrumbs" aria-label="مسار التنقل"><Link href="/">الرئيسية</Link><ChevronLeft className="h-4 w-4" /><span>{trail}</span></nav>
          <span className="section-kicker section-kicker-dark mt-8">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
}
