import type { ReactNode } from "react";

import BackgroundAura from "@/components/BackgroundAura";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";

type PageLayoutProps = {
  children: ReactNode;
  hero?: ReactNode;
  className?: string;
  mainClassName?: string;
};

export default function PageLayout({
  hero,
  children,
  className,
  mainClassName,
}: PageLayoutProps) {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col bg-background text-foreground overflow-hidden",
        className
      )}
    >
      <a className="skip-link" href="#main-content">
        تخط إلى المحتوى الرئيسي
      </a>
      <BackgroundAura />
      <Header />
      <main
        id="main-content"
        className={cn("relative z-10 flex-1 focus:outline-none", mainClassName)}
        tabIndex={-1}
      >
        {hero}
        {children}
      </main>
      <Footer />
    </div>
  );
}
