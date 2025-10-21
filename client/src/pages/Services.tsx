import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  const services = [
    {
      id: 1,
      icon: "🏗️",
      title: "الأنشطة الهندسية",
      description: "نقدم باقة متكاملة من الأنشطة الهندسية التي تغطي مختلف مراحل المشروع، من الفكرة إلى التنفيذ",
    },
    {
      id: 2,
      icon: "📐",
      title: "الأعمال المساحية",
      description: "نقدّم خدمات رفع مساحي دقيقة باستخدام أحدث تقنيات GPS ونظم GIS",
    },
    {
      id: 3,
      icon: "🎨",
      title: "التصميم المعماري الخارجي",
      description: "نبتكر واجهات معمارية متميزة تعكس هوية المشروع وتتناغم مع البيئة المحيطة",
    },
    {
      id: 4,
      icon: "🛋️",
      title: "التصميم المعماري الداخلي",
      description: "نوفر تصاميم داخلية متكاملة تركز على استغلال المساحات بكفاءة عالية",
    },
    {
      id: 5,
      icon: "👷",
      title: "الإشراف على المشاريع",
      description: "نقدم خدمات إشراف هندسي شامل لضمان الالتزام بالمخططات والمواصفات",
    },
    {
      id: 6,
      icon: "📊",
      title: "الدراسات الهندسية",
      description: "نُعد دراسات فنية وهندسية متخصصة تدعم اتخاذ القرارات الصحيحة",
    },
    {
      id: 7,
      icon: "🌍",
      title: "الدراسات الجيولوجية والهيدرولوجية",
      description: "نجري تحليلات علمية للتربة والخصائص الجيولوجية والهيدرولوجية",
    },
    {
      id: 8,
      icon: "📋",
      title: "التقارير الهندسية",
      description: "نعد تقارير تفصيلية وموثقة عن الحالة الفنية للمنشآت",
    },
    {
      id: 9,
      icon: "⚡",
      title: "التصاميم الكهروميكانيكية",
      description: "نوفر حلولًا متكاملة لأنظمة الكهرباء والميكانيكا والتكييف",
    },
    {
      id: 10,
      icon: "💡",
      title: "تصاميم الكهرباء",
      description: "نصمم شبكات توزيع الطاقة والإضاءة وأنظمة الإنذار الحديثة",
    },
    {
      id: 11,
      icon: "🔒",
      title: "تصاميم السلامة",
      description: "نخطط ونصمم أنظمة السلامة والحماية من الحريق والكوارث",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "الاستشارة",
      description: "نستمع إلى احتياجاتك ومتطلبات مشروعك بعناية",
    },
    {
      number: "02",
      title: "التخطيط",
      description: "نضع خطة شاملة وتفصيلية لتنفيذ المشروع",
    },
    {
      number: "03",
      title: "التنفيذ",
      description: "نقوم بتنفيذ المشروع بأعلى معايير الجودة",
    },
    {
      number: "04",
      title: "التسليم",
      description: "نسلم المشروع مكتملاً وفقاً للمواصفات المتفق عليها",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16 sm:pt-32 sm:pb-20 bg-gradient-to-br from-primary/10 to-accent/5">
          <div className="container">
            <h1 className="heading-modern text-primary mb-4">خدماتنا الهندسية</h1>
            <p className="text-xl text-foreground/70 max-w-2xl">
              مجموعة شاملة من الخدمات الهندسية المتكاملة والمتخصصة
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-modern">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="card-modern p-8 group hover:border-primary/30 hover:bg-primary/5 transition-all"
                >
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-foreground/70 leading-relaxed mb-6">{service.description}</p>
                  <button className="text-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                    اعرف أكثر
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-modern bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="heading-modern text-primary mb-4">عملية الخدمة</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                نتبع منهجية واضحة وفعالة في تقديم خدماتنا
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="card-modern p-8 text-center">
                  <div className="text-5xl font-bold text-primary/20 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                  <p className="text-foreground/70">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-modern bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="container text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              اختر الخدمة المناسبة لك
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              تواصل معنا اليوم واحصل على عرض سعر مخصص لمشروعك
            </p>
            <Link href="/contact">
              <button className="btn-modern bg-white text-primary hover:bg-white/90">
                احصل على عرض سعر
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
