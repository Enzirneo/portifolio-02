import { cache } from "react";
import type { Metadata } from "next";
import { cookies, headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import ConsoleEasterEgg from "@/shared/components/layout/ConsoleEasterEgg";
import { SmoothScroll } from "@/shared/components/layout";
import { LanguageProvider } from "@/shared/i18n/LanguageProvider";
import { SITE_URL } from "@/shared/lib/site";
import {
  getLanguageFromAcceptLanguage,
  isLanguage,
  LANGUAGE_COOKIE_KEY,
  type Language,
} from "@/shared/lib/i18n";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lustDidone = localFont({
  src: "./fonts/LustDidone.otf",
  variable: "--font-lust",
  weight: "100 900",
});

const metadataByLanguage: Record<
  Language,
  {
    titleDefault: string;
    titleTemplate: string;
    description: string;
    keywords: string[];
    openGraphLocale: string;
    siteName: string;
    twitterTitle: string;
    jsonLdDescription: string;
  }
> = {
  "pt-BR": {
    titleDefault: "Enzo Bispo | Desenvolvedor Full Stack",
    titleTemplate: "%s | Enzo Bispo",
    description:
      "Portfólio de Enzo Bispo, desenvolvedor full stack júnior com foco em front-end e UX/UI. Conheça a Flwxo, um SaaS para clínicas, e outros projetos em React e Next.js.",
    keywords: [
      "desenvolvedor full stack",
      "desenvolvedor front-end",
      "portfólio next.js",
      "projetos typescript",
      "ux/ui design",
      "desenvolvimento web",
      "react",
      "engenheiro de software",
    ],
    openGraphLocale: "pt_BR",
    siteName: "Enzo Bispo",
    twitterTitle: "Enzo Villela Bispo | Desenvolvedor Full Stack",
    jsonLdDescription:
      "Desenvolvedor full stack júnior focado em front-end e UX, criando aplicações web rápidas, confiáveis e bem projetadas com React, Next.js e TypeScript.",
  },
  en: {
    titleDefault: "Enzo Bispo | Full-Stack Developer",
    titleTemplate: "%s | Enzo Bispo",
    description:
      "Enzo Bispo's portfolio: junior full-stack developer focused on front-end and UX/UI. See Flwxo, a SaaS for clinics, and other React and Next.js projects.",
    keywords: [
      "full-stack developer",
      "front-end developer",
      "next.js portfolio",
      "typescript projects",
      "ux/ui design",
      "web development",
      "react",
      "software engineer",
    ],
    openGraphLocale: "en_US",
    siteName: "Enzo Bispo",
    twitterTitle: "Enzo Villela Bispo | Full-Stack Developer",
    jsonLdDescription:
      "Junior full-stack developer focused on front-end and UX, building fast, reliable, well-crafted web applications with React, Next.js and TypeScript.",
  },
};

const resolveRequestLanguage = cache(async function resolveRequestLanguage(): Promise<Language> {
  const cookieStore = await cookies();
  const storedLanguage = cookieStore.get(LANGUAGE_COOKIE_KEY)?.value;

  if (isLanguage(storedLanguage)) {
    return storedLanguage;
  }

  const headerStore = await headers();
  const acceptLanguage = headerStore.get("accept-language");
  return getLanguageFromAcceptLanguage(acceptLanguage);
});

export async function generateMetadata(): Promise<Metadata> {
  const language = await resolveRequestLanguage();
  const metadataCopy = metadataByLanguage[language];

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: metadataCopy.titleDefault,
      template: metadataCopy.titleTemplate,
    },
    description: metadataCopy.description,
    keywords: metadataCopy.keywords,
    authors: [{ name: "Enzo Bispo", url: SITE_URL }],
    creator: "Enzo Bispo",
    icons: {
        icon: [{ url: "/enzo-bispo.svg", type: "image/svg+xml" }],
        shortcut: ["/enzo-bispo.svg"],
        apple: ["/enzo-bispo.svg"],
      },
    openGraph: {
      title: metadataCopy.titleDefault,
      description: metadataCopy.description,
      url: SITE_URL,
      siteName: metadataCopy.siteName,
      locale: metadataCopy.openGraphLocale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: metadataCopy.twitterTitle,
      description: metadataCopy.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const language = await resolveRequestLanguage();
  const metadataCopy = metadataByLanguage[language];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Enzo Villela Bispo",
    url: SITE_URL,
    sameAs: [
      "https://github.com/Enzirneo",
      "https://www.instagram.com/enzirneo/",
      "https://www.linkedin.com/in/enzo-bispo-68738a24b/",
    ],
    jobTitle:
      language === "pt-BR"
        ? "Desenvolvedor Full Stack Júnior"
        : "Junior Full-Stack Developer",
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "UX/UI Design",
      "Web Development",
    ],
    description: metadataCopy.jsonLdDescription,
  };

  return (
    <html lang={language} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lustDidone.variable} antialiased bg-[#f1eadb] text-[#161616]`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider initialLanguage={language}>
          <ConsoleEasterEgg />
          <SmoothScroll />
          {children}
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  );
}
