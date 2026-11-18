"use client";

import type { ComponentType } from "react";
import { GithubIcon, LinkedinIcon } from "@/shared/components/icons";
import { ArrowUpRight, Mail, MessageCircleMore } from "lucide-react";
import { useTranslations } from "@/shared/i18n/LanguageProvider";

const EMAIL = "enzo.bispo22@gmail.com";
const WHATSAPP_NUMBER = "5521999491122";

interface DirectChannel {
  name: string;
  value: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
  isExternal: boolean;
}

const directChannels: DirectChannel[] = [
  { name: "E-mail", value: EMAIL, href: `mailto:${EMAIL}`, icon: Mail, isExternal: false },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/enzo-bispo-68738a24b",
    href: "https://www.linkedin.com/in/enzo-bispo-68738a24b/",
    icon: LinkedinIcon,
    isExternal: true,
  },
  {
    name: "GitHub",
    value: "github.com/Enzirneo",
    href: "https://github.com/Enzirneo",
    icon: GithubIcon,
    isExternal: true,
  },
];

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2f6b57]";

export function ContactSection() {
  const { copy, language } = useTranslations();
  const isPortuguese = language === "pt-BR";

  const emailLabel = isPortuguese ? "Enviar e-mail" : "Send email";
  const whatsappLabel = isPortuguese ? "Falar no WhatsApp" : "Chat on WhatsApp";

  const emailHref =
    `mailto:${EMAIL}?subject=` +
    encodeURIComponent(isPortuguese ? "Contato pelo portfólio" : "Portfolio contact");

  const whatsappMessage = isPortuguese
    ? "Olá, Enzo! Vi seu portfólio e gostaria de conversar."
    : "Hi Enzo! I saw your portfolio and would like to talk.";

  const whatsappHref =
    `https://wa.me/${WHATSAPP_NUMBER}?text=` + encodeURIComponent(whatsappMessage);

  return (
    <section id="contact" className="relative px-4 py-16 sm:px-6 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.25fr_1fr] lg:items-center lg:gap-20">
        <div>
          <span className="mb-5 inline-block rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-xs font-bold tracking-wider text-[#2f6b57] uppercase sm:mb-6 sm:text-sm">
            {copy.contact.badge}
          </span>
          <h2 className="mb-6 text-4xl font-semibold tracking-tight text-[#161616] sm:mb-8 sm:text-5xl md:text-6xl">
            {copy.contact.title}{" "}
            <span className="bg-linear-to-r from-[#2f6b57] via-[#3b7d66] to-[#7fa08f] bg-clip-text font-serif text-transparent italic">
              {copy.contact.titleEmphasis}
            </span>
          </h2>

          <div className="space-y-6 sm:space-y-8">
            <p className="text-base leading-relaxed font-medium text-[#555] sm:text-lg">
              {copy.contact.intro}
            </p>

            <ul className="space-y-3 sm:space-y-4">
              {copy.contact.list.map((item, index) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2f6b57]/10 text-sm text-[#2f6b57]">
                    {index + 1}
                  </span>
                  <span className="text-[#444]">
                    <strong>{item.title}</strong> {item.desc}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-bold text-black transition-transform hover:-translate-y-0.5 sm:text-base ${focusRing}`}
              >
                <MessageCircleMore className="h-4 w-4" aria-hidden="true" />
                {whatsappLabel}
              </a>
              <a
                href={emailHref}
                className={`inline-flex items-center justify-center gap-2 rounded-xl border border-black/10 bg-[#fcfaf7] px-5 py-3 text-sm font-bold text-[#161616] transition-all hover:-translate-y-0.5 hover:border-[#2f6b57]/30 sm:text-base ${focusRing}`}
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {emailLabel}
              </a>
            </div>
          </div>
        </div>

        <aside
          aria-label={copy.contact.directTitle}
          className="rounded-3xl border border-black/8 bg-white/70 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-8"
        >
          <h3 className="mb-5 text-xs font-bold tracking-[0.18em] text-[#2f6b57] uppercase">
            {copy.contact.directTitle}
          </h3>

          <ul className="divide-y divide-black/8">
            {directChannels.map(({ name, value, href, icon: Icon, isExternal }) => (
              <li key={name}>
                <a
                  href={href}
                  {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`group flex items-center gap-4 rounded-lg py-4 ${focusRing}`}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/8 bg-[#fcfaf7] text-[#161616] transition-colors group-hover:border-[#2f6b57]/30 group-hover:bg-[#f4faf6]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-bold text-[#161616]">{name}</span>
                    <span className="block truncate text-sm text-[#555]">{value}</span>
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 text-black/40 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#2f6b57]"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-5 border-t border-black/8 pt-5 text-sm text-[#555]">
            <span className="font-bold text-[#161616]">{copy.contact.responseTimeLabel}:</span>{" "}
            {copy.contact.responseTimeValue}
          </p>
        </aside>
      </div>
    </section>
  );
}
