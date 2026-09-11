import {
  ArrowLeft,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Clock3,
  Droplets,
  HardHat,
  Lightbulb,
  MapPin,
  MessageCircle,
  PaintRoller,
  PanelsTopLeft,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
  Wrench,
  Zap,
} from "lucide-react";
import { ADDRESS, MAP_URL, PHONE_DISPLAY, PHONE_TEL, SITE_NAME, SITE_URL, WHATSAPP_URL } from "@/lib/site";

const services = [
  { title: "تأسيس كهرباء", icon: Zap, description: "تنفيذ تأسيسات كهربائية متكاملة للمنازل والفلل والملاحق في الرياض، بدءًا من توزيع الأحمال ومسارات التمديدات وحتى تجهيز اللوحات والمفاتيح والنقاط. نراعي احتياجات كل مساحة، وسهولة الصيانة مستقبلًا، وننفذ الأعمال بدقة تساعد على رفع مستوى الأمان وكفاءة التشغيل." },
  { title: "تأسيس سباكة", icon: Droplets, description: "تأسيس شبكات المياه والصرف للمباني الجديدة وأعمال التجديد، مع تخطيط المسارات واختيار المقاسات المناسبة وتجهيز نقاط المطابخ ودورات المياه والخزانات. نهتم بجودة التوصيلات والاختبارات قبل الإغلاق للحد من احتمالات التسرب وضمان شبكة عملية قابلة للصيانة." },
  { title: "صيانة كهرباء", icon: Wrench, description: "تشخيص الأعطال الكهربائية ومعالجة مشاكل القواطع والالتماسات وضعف التوصيلات والمفاتيح والإنارة داخل المنازل والمنشآت. تبدأ الخدمة بفحص واضح لمصدر العطل، ثم تنفيذ الصيانة اللازمة وترتيب التمديدات المتضررة بهدف استعادة التشغيل بصورة آمنة ومنظمة." },
  { title: "صيانة سباكة", icon: Droplets, description: "معالجة أعطال السباكة وتسربات التوصيلات وانسدادات الصرف ومشاكل الخلاطات والأدوات الصحية، مع فحص موضع المشكلة قبل البدء. ننفذ الإصلاحات بعناية ونختبر النقاط بعد الصيانة لتقليل تكرار العطل والمحافظة على التشطيبات المحيطة قدر الإمكان." },
  { title: "تأسيس إنارة", icon: Lightbulb, description: "تصميم وتنفيذ توزيع الإنارة الداخلية والخارجية بما يخدم الاستخدام ويبرز جمال المكان، من تجهيز نقاط الأسقف والإنارة المخفية إلى إنارة الواجهات والمداخل. ننسق مواقع وحدات الإضاءة والمفاتيح بما يحقق راحة بصرية واستهلاكًا عمليًا للطاقة." },
  { title: "ترميم واجهات", icon: PaintRoller, description: "تجديد واجهات الفلل والمباني ومعالجة مظاهر التلف والتشققات السطحية وتهيئة الأسطح قبل التشطيب، مع تنسيق الدهانات والكسوات والعناصر المعمارية. نهدف إلى استعادة مظهر الواجهة ورفع جاذبية العقار مع تنفيذ مرتب يناسب الطابع العمراني في الرياض." },
  { title: "ترميم وتجديد مباني", icon: Building2, description: "إدارة أعمال ترميم وتجديد المنازل والمباني من المعاينة وتحديد الأولويات إلى تنفيذ المعالجات والتشطيبات. تشمل الخدمة تنسيق أعمال الكهرباء والسباكة والجدران والأسقف والدهانات ضمن مراحل واضحة، لتحديث المساحات وتحسين وظيفتها ومظهرها دون فوضى بين التخصصات." },
  { title: "بناء وتشطيب ملاحق", icon: HardHat, description: "تنفيذ الملاحق السكنية والخدمية وأعمال تشطيبها وفق احتياج الموقع، مع تنسيق البناء واللياسة والعزل والتمديدات والتشطيبات النهائية. نعمل على استغلال المساحة بذكاء وربط الملحق بالمبنى القائم بصورة عملية ومتناسقة من الداخل والخارج." },
  { title: "جبس بورد", icon: PanelsTopLeft, description: "تركيب أسقف وقواطع جبس بورد بتصاميم هادئة وعصرية، مع تجهيز فتحات الإنارة والتكييف والتفاصيل المحيطية بدقة. نراعي استقامة المستويات وتناسق الأبعاد وجودة الإنهاءات، سواء للتجديد الكامل أو لإضافة لمسة مرتبة لغرفة أو مجلس أو مساحة تجارية." },
  { title: "ديكورات داخلية", icon: Sparkles, description: "تنفيذ أعمال ديكور داخلي تجمع بين جمال التفاصيل وسهولة الاستخدام، من معالجة الجدران والأسقف إلى تنسيق الإضاءة والخامات والتشطيبات. نساعدك على تحويل الفكرة إلى مساحة متناسقة تعكس ذوقك، مع ربط عناصر الديكور بالأعمال الفنية اللازمة في مشروع واحد منظم." },
];

const faqs = [
  { question: "ما الخدمات التي يقدمها المتميز للمقاولات والكهرباء في الرياض؟", answer: "نقدم تأسيس وصيانة الكهرباء والسباكة، وتأسيس الإنارة، وترميم الواجهات والمباني، وبناء وتشطيب الملاحق، وأعمال الجبس بورد والديكورات الداخلية داخل مدينة الرياض." },
  { question: "هل يمكن تنفيذ أكثر من تخصص ضمن مشروع ترميم واحد؟", answer: "نعم، يمكن تنسيق أعمال الكهرباء والسباكة والإنارة والجبس بورد والتشطيبات ضمن خطة تنفيذ واحدة، بما يقلل التعارض بين المراحل ويحافظ على ترتيب العمل وجودة النتيجة النهائية." },
  { question: "كيف أطلب معاينة أو عرض سعر؟", answer: `يمكنك الاتصال مباشرة على ${PHONE_DISPLAY} أو إرسال تفاصيل الموقع والخدمة والصور المتاحة عبر واتساب، وسنتواصل معك لفهم نطاق العمل وتحديد الخطوة المناسبة.` },
  { question: "هل تخدمون حي المصيف وبقية أحياء الرياض؟", answer: "مقرنا في حي المصيف بمدينة الرياض، ونستقبل طلبات أعمال المقاولات والكهرباء والسباكة والترميم من مختلف أحياء الرياض بحسب موقع المشروع ونطاق الخدمة المطلوبة." },
  { question: "هل تشمل الخدمة التأسيس للمباني الجديدة والصيانة للمباني القائمة؟", answer: "نعم، تشمل خدماتنا تأسيس الأنظمة في المشاريع الجديدة، إلى جانب فحص وصيانة وتجديد الأنظمة والتشطيبات في الفلل والمنازل والمباني القائمة." },
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
      description: "مقاول عام في الرياض متخصص في تأسيس وصيانة الكهرباء والسباكة، ترميم وتجديد المباني والواجهات، بناء وتشطيب الملاحق، الجبس بورد والديكورات الداخلية.",
      address: { "@type": "PostalAddress", streetAddress: "3667 الجنيفي، 6474، حي المصيف", addressLocality: "الرياض", postalCode: "12465", addressRegion: "منطقة الرياض", addressCountry: "SA" },
      areaServed: { "@type": "City", name: "الرياض" },
      hasMap: MAP_URL,
      contactPoint: { "@type": "ContactPoint", telephone: "+966537376838", contactType: "خدمة العملاء وطلبات المقاولات", areaServed: "SA", availableLanguage: "ar" },
      knowsAbout: services.map((service) => service.title),
    },
    { "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: SITE_URL, name: SITE_NAME, inLanguage: "ar-SA", publisher: { "@id": `${SITE_URL}/#business` } },
    { "@type": "WebPage", "@id": `${SITE_URL}/#webpage`, url: SITE_URL, name: "المتميز للمقاولات والكهرباء | مقاول عام في الرياض", isPartOf: { "@id": `${SITE_URL}/#website` }, about: { "@id": `${SITE_URL}/#business` }, inLanguage: "ar-SA", breadcrumb: { "@id": `${SITE_URL}/#breadcrumb` } },
    { "@type": "BreadcrumbList", "@id": `${SITE_URL}/#breadcrumb`, itemListElement: [{ "@type": "ListItem", position: 1, name: "الرئيسية", item: SITE_URL }] },
    { "@type": "ItemList", "@id": `${SITE_URL}/#services`, name: "خدمات المتميز للمقاولات والكهرباء", numberOfItems: services.length, itemListElement: services.map((service, index) => ({ "@type": "ListItem", position: index + 1, item: { "@type": "Service", name: service.title, description: service.description, provider: { "@id": `${SITE_URL}/#business` }, areaServed: { "@type": "City", name: "الرياض" } } })) },
    { "@type": "FAQPage", "@id": `${SITE_URL}/#faq`, mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background pb-20 text-foreground md:pb-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />

      <header className="site-header">
        <div className="container-shell flex h-[76px] items-center justify-between gap-5">
          <a href="#top" className="brand" aria-label={`${SITE_NAME} - الرئيسية`}>
            <span className="brand-mark" aria-hidden="true"><Zap className="h-6 w-6" strokeWidth={2.2} /></span>
            <span><strong className="block text-[1.03rem] font-black leading-tight">المتميز</strong><small className="block text-[0.72rem] font-semibold text-white/60">للمقاولات والكهرباء</small></span>
          </a>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="التنقل الرئيسي">
            <a href="#services" className="nav-link">الخدمات</a><a href="#why-us" className="nav-link">لماذا المتميز؟</a><a href="#work-steps" className="nav-link">خطوات العمل</a><a href="#location" className="nav-link">الموقع والتواصل</a>
          </nav>
          <a href={PHONE_TEL} className="header-call"><Phone className="h-[18px] w-[18px]" aria-hidden="true" /><span>{PHONE_DISPLAY}</span></a>
        </div>
      </header>

      <section id="top" className="hero-section">
        <div className="hero-grid" aria-hidden="true" />
        <div className="container-shell relative z-10 grid min-h-[720px] items-center gap-10 py-20 lg:grid-cols-[1.04fr_.96fr] lg:py-24">
          <div className="max-w-3xl animate-rise">
            <div className="eyebrow"><BadgeCheck className="h-4 w-4" aria-hidden="true" />مقاول عام في الرياض</div>
            <h1 className="mt-6 text-[clamp(2.55rem,6vw,5.4rem)] font-black leading-[1.08] tracking-[-0.045em] text-white">نبنيها بإتقان<span className="block text-copper">ونوصلها بأمان.</span></h1>
            <p className="mt-7 max-w-2xl text-lg font-medium leading-9 text-white/72 md:text-xl">المتميز للمقاولات والكهرباء يجمع أعمال التأسيس والصيانة والترميم والتشطيب في فريق واحد منظم؛ من أول تمديدة حتى آخر لمسة في مشروعك بالرياض.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="cta-primary"><MessageCircle className="h-5 w-5" aria-hidden="true" />اطلب معاينة عبر واتساب<ArrowLeft className="h-4 w-4" aria-hidden="true" /></a>
              <a href={PHONE_TEL} className="cta-secondary"><Phone className="h-5 w-5" aria-hidden="true" />اتصل الآن</a>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-1 gap-3 text-sm text-white/70 sm:grid-cols-3">
              {[[ShieldCheck, "تنفيذ منظم ودقيق"], [Ruler, "معاينة وفهم للنطاق"], [MapPin, "خدمة داخل الرياض"]].map(([Icon, label]) => { const ItemIcon = Icon as typeof ShieldCheck; return <div key={label as string} className="hero-trust"><ItemIcon className="h-4 w-4 text-copper" aria-hidden="true" /><span>{label as string}</span></div>; })}
            </div>
          </div>
          <div className="hero-visual animate-rise-delay">
            <img src="https://images.unsplash.com/photo-1784637729389-f24e1d2a8b22?auto=format&fit=crop&w=1800&q=85" alt="أفق مدينة الرياض ومبانيها الحديثة" width="1800" height="1200" fetchPriority="high" className="h-full w-full object-cover" />
            <div className="hero-image-overlay" /><div className="hero-visual-badge"><span className="grid h-11 w-11 place-items-center rounded-xl bg-copper text-ink"><HardHat className="h-6 w-6" aria-hidden="true" /></span><span><strong className="block text-base font-black text-white">مقاولات متكاملة</strong><small className="text-sm text-white/60">كهرباء · سباكة · ترميم · تشطيب</small></span></div>
            <div className="absolute -bottom-4 -left-4 h-28 w-28 border-b-2 border-l-2 border-copper/70" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-paper"><div className="container-shell grid grid-cols-2 divide-x-reverse divide-x divide-line md:grid-cols-4">
        {[["10", "خدمات متخصصة"], ["فريق واحد", "للمقاولات والتأسيس"], ["الرياض", "نطاق الخدمة"], ["مباشر", "اتصال وواتساب"]].map(([value, label]) => <div key={label} className="px-4 py-8 text-center md:py-10"><strong className="block text-2xl font-black text-ink md:text-3xl">{value}</strong><span className="mt-1 block text-sm font-semibold text-muted-foreground">{label}</span></div>)}
      </div></section>

      <section id="services" className="section-space bg-background"><div className="container-shell">
        <div className="section-heading"><div><span className="section-kicker">خدماتنا</span><h2>حلول فنية ومقاولات<br className="hidden sm:block" /> تحت سقف واحد</h2></div><p>خدمات مترابطة تساعدك على تنفيذ مشروعك أو تجديده دون تشتيت بين أكثر من جهة، مع وصف واضح لنطاق كل عمل قبل التنفيذ.</p></div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => { const Icon = service.icon; return <article key={service.title} className={`service-card ${index === 0 || index === 6 ? "service-card-featured" : ""}`}><div className="flex items-start justify-between gap-4"><span className="service-icon"><Icon className="h-6 w-6" aria-hidden="true" /></span><span className="service-number">{String(index + 1).padStart(2, "0")}</span></div><h3>{service.title}</h3><p>{service.description}</p><a href={`${WHATSAPP_URL}%0Aالخدمة:%20${encodeURIComponent(service.title)}`} target="_blank" rel="noreferrer" className="service-link" aria-label={`اطلب خدمة ${service.title} عبر واتساب`}>اطلب الخدمة <ArrowLeft className="h-4 w-4" aria-hidden="true" /></a></article>; })}
        </div>
      </div></section>

      <section id="why-us" className="section-space bg-ink text-white"><div className="container-shell grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative"><div className="why-image-wrap"><img src="https://images.pexels.com/photos/32391477/pexels-photo-32391477/free-photo-of-man-fixing-ceiling-light-in-empty-room.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="فني يركب إضاءة سقفية داخل منزل قيد التجديد" width="1200" height="900" loading="lazy" className="h-full w-full object-cover" /></div><div className="why-callout"><ShieldCheck className="h-8 w-8 text-copper" aria-hidden="true" /><strong>التفاصيل الصغيرة<br />تصنع مشروعًا متقنًا</strong></div></div>
        <div><span className="section-kicker section-kicker-dark">لماذا المتميز؟</span><h2 className="mt-4 text-4xl font-black leading-tight tracking-tight md:text-5xl">تنفيذ مرتب من المعاينة إلى التسليم</h2><p className="mt-6 text-lg leading-9 text-white/65">نجاح أعمال المقاولات لا يعتمد على سرعة البدء فقط، بل على فهم التفاصيل وترتيب المراحل ومنع التعارض بين التخصصات. لذلك نتعامل مع كل مشروع كمسار متكامل له أولويات واضحة.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">{[["فهم دقيق للمطلوب", "نراجع حالة الموقع ونحدد نطاق العمل قبل التنفيذ."], ["تنسيق بين التخصصات", "ترتيب أعمال الكهرباء والسباكة والتشطيب بالمسار الصحيح."], ["عناية بالتشطيبات", "الاهتمام بالاستقامة والنظافة والتفاصيل الظاهرة."], ["تواصل مباشر", "قناة اتصال وواتساب واضحة لمتابعة طلبك."]].map(([title, desc]) => <div key={title} className="why-point"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-copper" aria-hidden="true" /><div><h3>{title}</h3><p>{desc}</p></div></div>)}</div>
        </div>
      </div></section>

      <section id="work-steps" className="section-space bg-paper"><div className="container-shell">
        <div className="section-heading"><div><span className="section-kicker">آلية العمل</span><h2>أربع خطوات واضحة<br className="hidden sm:block" /> لبدء مشروعك</h2></div><p>مسار بسيط يضع احتياجك في الصورة منذ البداية ويساعد على تنظيم التنفيذ ومتابعة مراحله.</p></div>
        <ol className="mt-12 grid gap-px overflow-hidden rounded-[2rem] border border-line bg-line md:grid-cols-4">{[[MessageCircle, "أرسل التفاصيل", "شارك نوع الخدمة وموقع المشروع والصور المتاحة عبر واتساب."], [MapPin, "معاينة الموقع", "نراجع الحالة الفعلية ونفهم القياسات والمتطلبات الفنية."], [Ruler, "تحديد النطاق", "نرتب البنود والمراحل المطلوبة قبل بدء التنفيذ."], [HardHat, "التنفيذ والمتابعة", "ننفذ الأعمال بتسلسل منظم حتى اكتمال النطاق المتفق عليه."]].map(([Icon, title, desc], index) => { const StepIcon = Icon as typeof MessageCircle; return <li key={title as string} className="step-card"><div className="flex items-center justify-between"><StepIcon className="h-6 w-6 text-copper-dark" aria-hidden="true" /><span>{String(index + 1).padStart(2, "0")}</span></div><h3>{title as string}</h3><p>{desc as string}</p></li>; })}</ol>
      </div></section>

      <section id="location" className="section-space bg-background"><div className="container-shell grid overflow-hidden rounded-[2rem] border border-line bg-white shadow-soft lg:grid-cols-[.86fr_1.14fr]">
        <div className="p-7 sm:p-10 lg:p-14"><span className="section-kicker">الموقع والتواصل</span><h2 className="mt-4 text-3xl font-black leading-tight text-ink sm:text-4xl">ابدأ طلبك الآن</h2><p className="mt-4 leading-8 text-muted-foreground">أخبرنا بالخدمة المطلوبة وموقع العقار داخل الرياض. إرسال صور أو فيديو قصير يساعدنا على فهم الحالة قبل ترتيب المعاينة.</p>
          <div className="mt-8 space-y-4"><a href={PHONE_TEL} className="contact-row"><span className="contact-icon"><Phone className="h-5 w-5" aria-hidden="true" /></span><span><small>اتصال مباشر</small><strong dir="ltr">{PHONE_DISPLAY}</strong></span></a><a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="contact-row"><span className="contact-icon"><MessageCircle className="h-5 w-5" aria-hidden="true" /></span><span><small>واتساب</small><strong dir="ltr">{PHONE_DISPLAY}</strong></span></a><a href={MAP_URL} target="_blank" rel="noreferrer" className="contact-row items-start"><span className="contact-icon"><MapPin className="h-5 w-5" aria-hidden="true" /></span><span><small>العنوان</small><strong className="leading-7">{ADDRESS}</strong></span></a></div>
        </div>
        <div className="min-h-[420px] bg-stone-100 lg:min-h-full"><iframe title="موقع المتميز للمقاولات والكهرباء في حي المصيف بالرياض" src="https://www.google.com/maps?q=3667%20%D8%A7%D9%84%D8%AC%D9%86%D9%8A%D9%81%D9%8A%D8%8C%206474%D8%8C%20%D8%A7%D9%84%D9%85%D8%B5%D9%8A%D9%81%D8%8C%20%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%2012465&output=embed" className="h-full min-h-[420px] w-full border-0 grayscale-[18%]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></div>
      </div></section>

      <section className="section-space pt-0"><div className="container-shell grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
        <div><span className="section-kicker">أسئلة شائعة</span><h2 className="mt-4 text-4xl font-black leading-tight text-ink">إجابات سريعة قبل أن تبدأ</h2><p className="mt-5 leading-8 text-muted-foreground">إذا كان سؤالك مختلفًا، أرسل لنا تفاصيله عبر واتساب وسنساعدك في تحديد الخدمة المناسبة.</p></div>
        <div className="space-y-3">{faqs.map((faq, index) => <details key={faq.question} className="faq-item" open={index === 0}><summary>{faq.question}<span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div>
      </div></section>

      <section className="container-shell pb-16"><div className="final-cta"><div><span className="flex items-center gap-2 text-sm font-bold text-copper"><Clock3 className="h-4 w-4" aria-hidden="true" /> خطوة واحدة تفصلك عن البداية</span><h2>عندك مشروع بناء أو ترميم؟<br />خلّنا نرتّب تفاصيله.</h2></div><div className="flex flex-col gap-3 sm:flex-row"><a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="cta-primary"><MessageCircle className="h-5 w-5" aria-hidden="true" /> واتساب الآن</a><a href={PHONE_TEL} className="cta-secondary"><Phone className="h-5 w-5" aria-hidden="true" /> اتصل بنا</a></div></div></section>

      <footer className="border-t border-white/8 bg-[#0b0e11] py-10 text-white"><div className="container-shell flex flex-col items-start justify-between gap-7 sm:flex-row sm:items-center"><div className="brand"><span className="brand-mark" aria-hidden="true"><Zap className="h-6 w-6" /></span><span><strong className="block font-black">{SITE_NAME}</strong><small className="text-xs text-white/50">مقاول عام في الرياض</small></span></div><div className="text-sm leading-7 text-white/50 sm:text-left"><p>{ADDRESS}</p><p dir="ltr">{PHONE_DISPLAY}</p></div></div></footer>

      <div className="floating-actions hidden md:flex" aria-label="تواصل سريع"><a href={PHONE_TEL} className="float-call" aria-label="اتصل بالمتميز للمقاولات والكهرباء"><Phone className="h-5 w-5" /></a><a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="float-whatsapp" aria-label="تواصل عبر واتساب"><MessageCircle className="h-6 w-6" /></a></div>
      <div className="mobile-actions md:hidden" aria-label="تواصل سريع"><a href={PHONE_TEL}><Phone className="h-5 w-5" /> اتصال</a><a href={WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle className="h-5 w-5" /> واتساب</a></div>
    </main>
  );
}
