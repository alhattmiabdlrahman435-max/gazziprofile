import ButtonLink from "@/components/ButtonLink";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Award,
  Users,
  Target,
  ShieldAlert,
  HardHat,
  DraftingCompass,
  Building2,
  Sofa,
  ClipboardList,
  Globe,
  FileCog,
  Lightbulb,
  PhoneCall,
  Sparkles,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";

const engineeringServices = [
  {
    title: "الأنشطة الهندسية",
    description:
      "باقة متكاملة من الأنشطة الهندسية تغطي مراحل المشروع من الفكرة إلى التنفيذ مع الالتزام بالكود السعودي للبناء",
    image: "/photoApp/building-construction-new-skyscrapers.jpg",
    icon: <HardHat className="h-6 w-6 text-primary" />,
  },
  {
    title: "الأعمال المساحية",
    description:
      "خدمات رفع مساحي دقيقة باستخدام تقنيات GPS ونظم GIS لإعداد الكروكيات والقرارات المساحية",
    image: "/photoApp/architectural-plan.jpg",
    icon: <DraftingCompass className="h-6 w-6 text-primary" />,
  },
  {
    title: "التصميم المعماري الخارجي",
    description:
      "واجهات مميزة تعكس هوية المشروع وتتناغم مع البيئة مع مراعاة الجمال والوظيفة والاستدامة",
    image: "/photoApp/architect-working-with-computer-front-windows-office.jpg",
    icon: <Building2 className="h-6 w-6 text-primary" />,
  },
  {
    title: "التصميم المعماري الداخلي",
    description:
      "تصاميم داخلية متكاملة تركز على استغلال المساحات وتنسيق الألوان والإضاءة والمواد",
    image: "/photoApp/interior-design.jpg",
    icon: <Sofa className="h-6 w-6 text-primary" />,
  },
  {
    title: "الإشراف على المشاريع",
    description:
      "إشراف هندسي شامل خطوة بخطوة لضمان الالتزام بالمخططات والمواصفات وتحقيق أعلى مستويات الجودة",
    image: "/photoApp/close-up-man-with-helmet-back-view.jpg",
    icon: <HardHat className="h-6 w-6 text-primary" />,
  },
  {
    title: "الدراسات الهندسية",
    description:
      "دراسات فنية وهندسية متخصصة تدعم اتخاذ القرار وتساعد على التخطيط الأمثل",
    image:
      "/photoApp/image-engineering-objects-workplace-top-view-construction-concept-engineering-tools-vintage-tone-retro-filter-effect-soft-focus-selective-focus.jpg",
    icon: <ClipboardList className="h-6 w-6 text-primary" />,
  },
  {
    title: "الدراسات الجيولوجية والهيدرولوجية",
    description:
      "تحليلات للتربة والخصائص الجيولوجية والهيدرولوجية لضمان ملاءمة المواقع للإنشاء",
    image: "/photoApp/scene-construction-site-with-equipment.jpg",
    icon: <Globe className="h-6 w-6 text-primary" />,
  },
  {
    title: "التقارير الهندسية",
    description:
      "تقارير تفصيلية وموثقة عن الحالة الفنية للمنشآت تشمل التحاليل والملاحظات والتوصيات",
    image: "/photoApp/building-new-concrete-houses.jpg",
    icon: <ClipboardList className="h-6 w-6 text-primary" />,
  },
  {
    title: "التصاميم الكهروميكانيكية",
    description:
      "حلول متكاملة لأنظمة الكهرباء والميكانيكا تشمل التكييف والتهوية وتغذية المياه والصرف",
    image: "/photoApp/construction-high-rise-building-sunset.jpg",
    icon: <FileCog className="h-6 w-6 text-primary" />,
  },
  {
    title: "تصاميم الكهرباء",
    description:
      "تصميم شبكات توزيع الطاقة والإضاءة وأنظمة الإنذار والسلامة بكفاءة عالية",
    image: "/photoApp/beautiful-view-construction-site-city-sunset.jpg",
    icon: <Lightbulb className="h-6 w-6 text-primary" />,
  },
  {
    title: "تصاميم السلامة",
    description:
      "تخطيط وتصميم أنظمة السلامة والحماية من الحريق بما يشمل مخارج الطوارئ وأنظمة الإنذار والإطفاء",
    image:
      "/photoApp/portrait-man-practicing-his-profession-celebrate-international-labour-day.jpg",
    icon: <ShieldAlert className="h-6 w-6 text-primary" />,
  },
];

const engineeringTools = [
  { title: "Autodesk 3ds Max", icon: "/iconApp/3ds-max-full.svg" },
  { title: "Autodesk", icon: "/iconApp/autodesk-4.svg" },
  { title: "Microsoft 365", icon: "/iconApp/office-365-1.svg" },
  { title: "Primavera", icon: "/iconApp/primavera-4.svg" },
];

const values = [
  {
    icon: <Award className="h-10 w-10" />,
    title: "الاحترافية",
    description: "معايير عالية في كل عمل",
  },
  {
    icon: <Target className="h-10 w-10" />,
    title: "الدقة",
    description: "اهتمام بكل التفاصيل",
  },
  {
    icon: <Zap className="h-10 w-10" />,
    title: "الابتكار",
    description: "حلول جديدة ومبدعة",
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: "الالتزام",
    description: "احترام الوقت والميزانية",
  },
];

const benefits = [
  "فريق متخصص وذو خبرة عالية",
  "تقنيات حديثة وأدوات متطورة",
  "التزام بالجودة والدقة",
  "دعم شامل بعد المشروع",
];

type HomeHeroProps = {
  scrollY: number;
};

const heroHighlights = [
  { title: "مواصفات معتمدة", description: "مطابقة للكود السعودي" },
  { title: "فريق متعدد التخصصات", description: "هندسة، تصميم، إشراف" },
  { title: "استشارات فورية", description: "دعم على مدار الساعة" },
];

function FlippingBookEmbed() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (document.getElementById("flippingbook-script")) return;
    const script = document.createElement("script");
    script.id = "flippingbook-script";
    script.async = true;
    script.defer = true;
    script.src =
      "https://online.flippingbook.com/EmbedScriptUrl.aspx?m=redir&hid=415777489";
    document.body.appendChild(script);
  }, []);

  return (
    <section className="section-modern bg-white pt-10">
      <div className="container space-y-8">
        <SectionHeading
          title="البروفايل التعريفي"
          subtitle="استعرض كتيب شركة غازي محمد عباس للاستشارات الهندسية مباشرةً"
        />
        <div ref={containerRef} className="flipping-card">
          <a
            href="https://online.flippingbook.com/view/415777489/"
            className="fbo-embed text-lg font-bold text-primary"
            data-fbo-id="abc7dfd731"
            data-fbo-ratio="16:9"
            data-fbo-lightbox="no"
            data-fbo-width="100%"
            data-fbo-height="auto"
            data-fbo-version="1"
            style={{ maxWidth: "100%" }}
          >
            البروفايل شركة غازي محمد عباس للاستشارات الهندسية
          </a>
        </div>
      </div>
    </section>
  );
}

function HomeHero({ scrollY }: HomeHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#050723] via-[#080b2c] to-background pb-32 pt-24 text-white sm:pb-48 sm:pt-40">
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute top-0 right-0 h-[420px] w-[420px] rounded-full bg-primary blur-[150px] transition-transform duration-300"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div
          className="absolute bottom-0 left-0 h-[380px] w-[380px] rounded-full bg-[#8c5dff] blur-[140px] transition-transform duration-300"
          style={{ transform: `translateY(${scrollY * -0.3}px)` }}
        />
      </div>

      <div className="container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8 animate-slide-in-up text-right order-2 lg:order-1">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-white/5 px-5 py-2 text-sm font-bold text-primary/90 shadow-inner shadow-primary/20">
                <Sparkles className="h-4 w-4" />
                حلول هندسية عصرية
              </span>
              <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
                <span className="text-primary">الهندسة</span> تبدأ من هنا
              </h1>
              <p className="max-w-lg text-lg font-medium leading-relaxed text-white/70">
                نقدم حلولًا هندسية متكاملة وحديثة تسهم في تطوير بيئة عمرانية
                مستدامة، من التخطيط وحتى التشغيل.
              </p>
              <div className="flex flex-wrap gap-3 text-sm font-semibold text-white/80">
                {heroHighlights.map(item => (
                  <div
                    key={item.title}
                    className="rounded-full border border-white/20 bg-white/5 px-4 py-2 backdrop-blur-sm"
                  >
                    <div>{item.title}</div>
                    <span className="text-xs text-white/60">
                      {item.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:justify-end">
              <ButtonLink
                href="/contact"
                className="btn-modern bg-gradient-to-r from-[#5c7cfa] via-primary to-[#8653ff] text-white hover:scale-105 hover:shadow-[0_20px_50px_rgba(92,124,250,0.5)]"
              >
                احصل على استشارة
                <ArrowRight className="inline-block h-5 w-5" />
              </ButtonLink>
              <ButtonLink
                href="/services"
                className="btn-modern border border-white/20 bg-white/5 text-white hover:bg-white/10"
              >
                اعرف الخدمات
              </ButtonLink>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-inner">
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "مشروع منفذ", value: "50+" },
                  { label: "سنة خبرة", value: "15+" },
                  { label: "عميل راضي", value: "100+" },
                ].map(stat => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-black text-primary">
                      {stat.value}
                    </div>
                    <p className="text-xs font-semibold text-white/70">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="group relative order-1 lg:order-2">
            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-primary/30 to-accent/30 blur-3xl transition-all duration-300 group-hover:blur-[110px]" />
            <img
              src="/photoApp/interior-design.jpg"
              alt="تصميم داخلي عصري"
              className="relative h-auto w-full rounded-[40px] border border-primary/20 object-cover shadow-[0_35px_90px_rgba(5,6,16,0.7)] transition-all duration-300 group-hover:scale-105"
            />
            <div className="absolute right-5 bottom-5 rounded-2xl bg-white/90 px-5 py-4 text-right text-sm text-foreground shadow-2xl">
              <div className="flex items-center gap-2 font-bold text-primary">
                <PhoneCall className="h-4 w-4" />
                تواصل مباشر
              </div>
              <p className="text-xs text-foreground/70">
                خبراؤنا مستعدون لاستقبال مشروعك فوراً
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <PageLayout hero={<HomeHero scrollY={scrollY} />}>
      <FlippingBookEmbed />
      <section className="section-modern py-12">
        <div className="container grid grid-cols-1 gap-10 items-center lg:grid-cols-[1.2fr_1fr]">
          <div className="relative rounded-[32px] overflow-hidden border border-primary/10 shadow-[0_40px_80px_rgba(47,69,255,0.12)]">
            <img
              src="/photoApp/construction-site-sunset.jpg"
              alt="أدواتنا الرقمية"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
          <div className="space-y-6 text-center lg:text-right">
            <SectionHeading
              alignment="start"
              title="أدواتنا الرقمية"
              subtitle="نستخدم أحدث البرمجيات لضمان جودة ودقة أعمالنا"
            />
            <div className="grid grid-cols-2 gap-8 text-center sm:grid-cols-4">
              {engineeringTools.map(tool => (
                <div
                  key={tool.title}
                  className="flex flex-col items-center gap-3"
                >
                  <img
                    src={tool.icon}
                    alt={tool.title}
                    className="h-16 w-16 object-contain"
                    loading="lazy"
                  />
                  <span className="text-sm font-bold text-foreground/70">
                    {tool.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section-modern bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="container space-y-12">
          <SectionHeading
            title="خدماتنا الهندسية"
            subtitle="نقدم لكم مجموعة من أهم الخدمات"
          />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {engineeringServices.map((service, index) => (
              <Link
                key={service.title}
                className="eng-card-wrapper"
                style={{
                  animation: `slideInUp 0.6s ease-out ${index * 0.08}s both`,
                }}
                href={`/engineering-services/${index}`}
              >
                <div className="eng-card-content">
                  <div className="eng-card-back">
                    <div className="eng-card-back-content">
                      <span className="eng-card-icon">{service.icon}</span>
                      <strong>{service.title}</strong>
                    </div>
                  </div>
                  <div className="eng-card-front">
                    <div
                      className="eng-card-img"
                      style={{ backgroundImage: `url(${service.image})` }}
                    >
                      <div className="eng-card-circle" />
                      <div className="eng-card-circle eng-card-circle-right" />
                      <div className="eng-card-circle eng-card-circle-bottom" />
                    </div>
                    <div className="eng-card-front-content">
                      <small className="eng-card-badge">خدمة هندسية</small>
                      <div className="eng-card-description">
                        <div className="eng-card-title">
                          <p>
                            <strong>{service.title}</strong>
                          </p>
                          <svg
                            fillRule="nonzero"
                            height="15"
                            width="15"
                            viewBox="0 0 256 256"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g transform="scale(8,8)" fill="#20c997">
                              <path d="M25,27l-9,-6.75l-9,6.75v-23h18z" />
                            </g>
                          </svg>
                        </div>
                        <p className="eng-card-footer">{service.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-modern bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <SectionHeading
                alignment="start"
                title="لماذا تختارنا؟"
                subtitle="نرافقك في كل خطوة من الاستشارة الأولية وحتى تسليم المشروع بنجاح"
                className="mb-4"
              />

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-4 rounded-xl p-4 transition-colors duration-300 hover:bg-primary/5"
                    style={{
                      animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
                    }}
                  >
                    <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                    <p className="text-lg font-medium text-foreground/70">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>

              <ButtonLink
                href="/about"
                className="btn-modern bg-gradient-to-r from-primary to-primary/80 text-white hover:shadow-2xl"
              >
                اعرف أكثر عننا
                <ArrowRight className="inline-block h-5 w-5" />
              </ButtonLink>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="card-modern group cursor-default p-6 text-center transition-all duration-300 hover:border-primary/50 hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 hover-lift"
                  style={{
                    animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div className="mb-4 flex justify-center text-primary transition-transform duration-300 group-hover:scale-125">
                    {value.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-primary">
                    {value.title}
                  </h3>
                  <p className="text-sm font-medium text-foreground/70">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-modern relative overflow-hidden bg-gradient-to-r from-primary via-primary/90 to-accent text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-white/20 blur-3xl" />
        </div>
        <div className="container relative z-10 text-center">
          <h2 className="heading-modern mb-6 text-white">
            هل تريد استشارة هندسية؟
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-2xl font-medium text-white/90">
            تواصل معنا اليوم واحصل على استشارة مجانية من فريقنا المتخصص
          </p>
          <ButtonLink
            href="/contact"
            className="btn-modern bg-white text-primary hover:scale-105 hover:bg-white/90 hover:shadow-2xl"
          >
            تواصل معنا الآن
            <ArrowRight className="inline-block h-5 w-5" />
          </ButtonLink>
        </div>
      </section>
    </PageLayout>
  );
}
