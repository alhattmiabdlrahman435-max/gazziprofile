import {
  NAV_MENU,
  SERVICES,
  COMPANY_INFO,
  PHONE_CONTACTS,
  CONTACT_LANDLINE,
  CONTACT_EMAIL,
  CONTACT_EMAIL_2,
  CONTACT_EMAIL_3,
  CONTACT_HOURS,
} from "@/const";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">
              {COMPANY_INFO.name}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {COMPANY_INFO.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">الخدمات</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <a href="#" className="hover:text-primary transition">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {NAV_MENU.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <a className="hover:text-primary transition">{item.label}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">تواصل معنا</h4>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="space-y-1">
                <p className="font-semibold text-secondary-foreground">
                  أرقام الجوالات
                </p>
                {PHONE_CONTACTS.map((contact) => (
                  <a
                    key={contact.phone}
                    href={`tel:${contact.phone}`}
                    className="block break-words hover:text-primary transition"
                  >
                    {contact.name}: {contact.phone}
                  </a>
                ))}
              </div>

              <div>
                <p className="font-semibold text-secondary-foreground">
                  التلفون الثابت
                </p>
                <a
                  href={`tel:${CONTACT_LANDLINE}`}
                  className="hover:text-primary transition"
                >
                  {CONTACT_LANDLINE}
                </a>
              </div>

              <div className="space-y-1">
                <p className="font-semibold text-secondary-foreground">
                  البريد الإلكتروني
                </p>
                {[CONTACT_EMAIL, CONTACT_EMAIL_2, CONTACT_EMAIL_3].map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="block break-words hover:text-primary transition"
                  >
                    {email}
                  </a>
                ))}
              </div>

              <div>
                <p className="font-semibold text-secondary-foreground">
                  ساعات العمل
                </p>
                <p>{CONTACT_HOURS}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-border mt-8 pt-8">
          <h4 className="font-bold mb-4">اشترك في قائمتنا البريدية</h4>
          <p className="text-muted-foreground text-sm mb-4">
            اشترك الآن في قائمتنا البريدية لمعرفة كل ما هو جديد في عالم الاستشارات الهندسية
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="بريدك الإلكتروني"
              className="flex-1 rounded-lg border border-border bg-background px-4 py-2 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
            />
            <button className="rounded-lg bg-primary px-6 py-2 font-semibold text-primary-foreground transition hover:bg-primary/80">
              اشترك
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-border py-6 text-center text-sm text-muted-foreground">
        <p>© 2025 {COMPANY_INFO.name}. جميع الحقوق محفوظة</p>
      </div>
    </footer>
  );
}
