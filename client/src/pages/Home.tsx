import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2, Zap, Award, Users } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const services = [
    {
      icon: "🏗️",
      title: "الأنشطة الهندسية",
      description: "نقدم باقة متكاملة من الأنشطة الهندسية التي تغطي مختلف مراحل المشروع",
    },
    {
      icon: "📐",
      title: "الأعمال المساحية",
      description: "خدمات رفع مساحي دقيقة باستخدام أحدث تقنيات GPS ونظم GIS",
    },
    {
      icon: "🎨",
      title: "التصميم المعماري الخارجي",
      description: "واجهات معمارية متميزة تعكس هوية المشروع وتتناغم مع البيئة",
    },
    {
      icon: "🛋️",
      title: "التصميم المعماري الداخلي",
      description: "تصاميم داخلية متكاملة تركز على استغلال المساحات بذكاء",
    },
    {
      icon: "👷",
      title: "الإشراف على المشاريع",
      description: "خدمات إشراف هندسي شامل لضمان الالتزام بالمخططات والمواصفات",
    },
    {
      icon: "📊",
      title: "الدراسات الهندسية",
      description: "دراسات فنية وهندسية متخصصة تدعم اتخاذ القرارات الصحيحة",
    },
  ];

  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "الاحترافية",
      description: "نلتزم بالمعايير المهنية في كل ما نقوم به",
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "الشفافية",
      description: "نعمل بنزاهة ووضوح في جميع تعاملاتنا",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "الابتكار",
      description: "نبحث باستمرار عن حلول جديدة ومبدعة",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "الالتزام",
      description: "نحترم الوقت والميزانية والتوقعات",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section - محسّن */}
        <section className="relative overflow-hidden pt-20 pb-32 sm:pt-32 sm:pb-40">
          {/* خلفية متدرجة */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5" />
          
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-block">
                    <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                      ✨ حلول هندسية متقدمة
                    </span>
                  </div>
                  <h1 className="heading-modern text-primary">
                    الهندسة تبدأ من هنا
                  </h1>
                  <p className="text-lg text-foreground/70 leading-relaxed max-w-lg">
                    نقدم حلولًا هندسية متكاملة، حديثة، ومعتمدة، تسهم في تطوير بيئة عمرانية مستدامة وحديثة
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <button className="btn-modern bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
                      احصل على استشارة
                      <ArrowRight className="inline-block ml-2 w-5 h-5" />
                    </button>
                  </Link>
                  <Link href="/services">
                    <button className="btn-modern border-2 border-primary text-primary hover:bg-primary/5 w-full sm:w-auto">
                      اعرف الخدمات
                    </button>
                  </Link>
                </div>

                {/* إحصائيات سريعة */}
                <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
                  <div>
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <p className="text-sm text-foreground/60">مشروع منفذ</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">15+</div>
                    <p className="text-sm text-foreground/60">سنة خبرة</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">100+</div>
                    <p className="text-sm text-foreground/60">عميل راضي</p>
                  </div>
                </div>
              </div>

              {/* الصورة */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl" />
                <img
                  src="/interior-design.jpg"
                  alt="تصميم داخلي عصري"
                  className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid - محسّن */}
        <section className="section-modern bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="heading-modern text-primary mb-4">خدماتنا الهندسية</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                نقدم لكم مجموعة من أهم الخدمات الهندسية المتكاملة والمتخصصة
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="card-modern p-8 group hover:border-primary/30 hover:bg-primary/5"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{service.description}</p>
                  <button className="mt-6 text-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                    اعرف أكثر
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section - محسّن */}
        <section className="section-modern bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <h2 className="heading-modern text-primary mb-4">من نحن؟</h2>
                  <p className="text-lg text-foreground/70 leading-relaxed">
                    شركة هندسية سعودية معتمدة، متخصصة في تقديم حلول تصميم واستشارات هندسية شاملة ومتطورة.
                  </p>
                </div>

                <p className="text-foreground/70 leading-relaxed">
                  نمتلك فريقًا مؤهلاً بخبرات طويلة في مختلف التخصصات الهندسية، ونلتزم بأحدث معايير التصميم والاستدامة، لنكون الشريك المثالي للعملاء الباحثين عن الجودة والدقة والموثوقية.
                </p>

                <Link href="/about">
                  <button className="btn-modern bg-primary text-primary-foreground hover:bg-primary/90">
                    اعرف أكثر عننا
                    <ArrowRight className="inline-block ml-2 w-5 h-5" />
                  </button>
                </Link>
              </div>

              {/* القيم */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="card-modern p-6 text-center">
                    <div className="flex justify-center mb-4 text-primary">
                      {value.icon}
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2">{value.title}</h3>
                    <p className="text-sm text-foreground/70">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - محسّن */}
        <section className="section-modern bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="container text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              هل تريد استشارة هندسية؟
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              تواصل معنا اليوم واحصل على استشارة مجانية من فريقنا المتخصص والمؤهل
            </p>
            <Link href="/contact">
              <button className="btn-modern bg-white text-primary hover:bg-white/90">
                تواصل معنا الآن
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

