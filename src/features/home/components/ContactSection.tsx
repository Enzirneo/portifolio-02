"use client";

import { GithubIcon, InstagramIcon, LinkedinIcon } from "@/shared/components/icons";
import { Mail, MessageCircleMore } from "lucide-react";
import { useTranslations } from "@/shared/i18n/LanguageProvider";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Enzirneo",
    icon: GithubIcon,
  },
  {
    name: "Portfolio",
    href: "https://portifolio-enzo-bispo.vercel.app/",
    icon: InstagramIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/enzo-bispo-68738a24b/",
    icon: LinkedinIcon,
  },
];

export function ContactSection() {
  const { copy, language } = useTranslations();

  const emailLabel = language === "pt-BR" ? "Enviar e-mail" : "Send email";
  const whatsappLabel = language === "pt-BR" ? "Falar no WhatsApp" : "Chat on WhatsApp";

  const emailHref =
    "mailto:enzo.bispo22@gmail.com?subject=" +
    encodeURIComponent(language === "pt-BR" ? "Contato pelo portfólio" : "Portfolio contact");

  const whatsappMessage =
    language === "pt-BR"
      ? "Olá, Enzo! Vi seu portfólio e gostaria de conversar."
      : "Hi Enzo! I saw your portfolio and would like to talk.";

  const whatsappHref =
    "https://wa.me/5521999491122?text=" + encodeURIComponent(whatsappMessage);

  return (
    <section id="contact" className="relative px-4 py-16 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <div>
          <span className="mb-5 inline-block rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#3f7f5f] sm:mb-6 sm:text-sm">
            {copy.contact.badge}
          </span>
          <h2 className="mb-6 text-4xl font-semibold tracking-tight text-[#161616] sm:mb-8 sm:text-5xl md:text-6xl">
            {copy.contact.title} <span className="font-serif italic text-transparent bg-clip-text bg-linear-to-r from-[#2f6b57] via-[#3b7d66] to-[#7fa08f]">{copy.contact.titleEmphasis}</span>
          </h2>

          <div className="mb-8 space-y-6 sm:mb-12 sm:space-y-8">
            <p className="text-base font-medium leading-relaxed text-[#555] sm:text-lg">
              {copy.contact.intro}
            </p>

            <ul className="space-y-3 sm:space-y-4">
              {copy.contact.list.map((item, index) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-sm text-[#3f7f5f]">
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
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-bold text-black transition-transform hover:-translate-y-0.5 sm:text-base"
              >
                <MessageCircleMore className="h-4 w-4" />
                {whatsappLabel}
              </a>
              <a
                href={emailHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-black/10 bg-[#fcfaf7] px-5 py-3 text-sm font-bold text-[#161616] transition-all hover:-translate-y-0.5 hover:border-black/20 hover:bg-white sm:text-base"
              >
                <Mail className="h-4 w-4" />
                {emailLabel}
              </a>
            </div>

            <div className="inline-flex items-center gap-3 rounded-xl border border-[#3f7f5f]/20 bg-[linear-gradient(120deg,rgba(47,107,87,0.12)_0%,rgba(255,255,255,0.96)_48%,rgba(127,160,143,0.10)_100%)] px-3 py-2.5 shadow-[0_8px_22px_rgba(15,23,42,0.08)] sm:px-3.5 sm:py-3"
            >
              <div className="h-7 w-7 rounded-full border border-black bg-[linear-gradient(135deg,#2f6b57_0%,#7fa08f_100%)] shadow-[0_0_12px_rgba(47,107,87,0.22)]" />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#444]/80 sm:text-[11px]">
                  {copy.contact.responseTimeLabel}
                </p>
                <p className="text-sm font-bold text-[#161616] sm:text-[15px]">
                  {copy.contact.responseTimeValue}
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-black/8 bg-[#fcfaf7] text-[#161616] transition-all hover:border-[#2f6b57]/24 hover:bg-[#f4faf6] hover:text-[#2f6b57] sm:h-12 sm:w-12"
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
