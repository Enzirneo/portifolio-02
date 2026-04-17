"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { useTranslations } from "@/shared/i18n/LanguageProvider";

const githubPalette = ["#e7ddd1", "#cfe0d3", "#9fc3ac", "#69967b", "#3f7f5f"];

export function GithubSection() {
  const [isMounted, setIsMounted] = useState(false);
  const { copy } = useTranslations();

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setIsMounted(true);
    }, 0);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <section className="relative px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto flex max-w-304 flex-col gap-8 sm:gap-12">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#3f7f5f]/18 bg-[#3f7f5f]/8 px-4 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-[#3f7f5f] shadow-[0_0_0_1px_rgba(63,127,95,0.05)] sm:px-5 sm:py-2">
            {copy.github.label}
          </span>
          <h2 className="mt-4 text-4xl font-semibold tracking-tighter text-[#161616] sm:mt-6 sm:text-6xl md:text-7xl">
            {copy.github.title}{" "}
            <span className="bg-linear-to-r from-[#2f6b57] via-[#3b7d66] to-[#7fa08f] bg-clip-text font-serif italic text-transparent">
              {copy.github.titleAccent}
            </span>
          </h2>
        </div>

        <div className="relative overflow-hidden rounded-4xl border border-black/8 bg-[linear-gradient(135deg,#f5efe8_0%,#f1ebe3_52%,#ebe6de_100%)] p-4 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-6 lg:p-7">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,170,138,0.12),transparent_30%),radial-gradient(circle_at_12%_20%,rgba(111,183,202,0.12),transparent_30%)]" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.2] bg-[linear-gradient(to_right,rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-size-[28px_28px]" />

          <div className="relative z-10 rounded-[1.6rem] border border-black/7 bg-[#fcfaf7]/96 p-4 shadow-[0_12px_36px_rgba(15,23,42,0.05)] sm:p-6 lg:p-7">
            <div className="flex flex-col gap-4 border-b border-black/8 pb-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-black/8 bg-white text-[#161616] shadow-[0_8px_24px_rgba(15,23,42,0.08)]">
                  <SiGithub className="h-5 w-5" />
                </div>

                <div className="min-w-0">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-black/45">
                    GitHub
                  </p>
                  <a
                    href="https://github.com/Enzirneo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-black/78 transition-colors hover:text-black"
                  >
                    github.com/Enzirneo
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-center">
                {githubPalette.map((color, index) => (
                  <span
                    key={color}
                    className={`h-2.5 rounded-full ${index === 0 ? "w-8" : "w-6"}`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            <div className="relative mt-5 overflow-hidden rounded-[1.4rem] border border-black/8 bg-[linear-gradient(180deg,#ffffff_0%,#f7f3ee_100%)] p-4 sm:p-6 lg:p-7">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(111,183,202,0.08),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(63,127,95,0.08),transparent_26%)]" />
              <div className="pointer-events-none absolute inset-0 opacity-[0.16] bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-size-[24px_24px]" />

              <div
                className="relative z-10 overflow-x-auto no-scrollbar"
                aria-busy={!isMounted}
              >
                <div className="flex min-w-190 justify-center">
                  {isMounted ? (
                    <GitHubCalendar
                      username="Enzirneo"
                      colorScheme="light"
                      fontSize={13}
                      blockSize={13}
                      blockMargin={5}
                      theme={{
                        light: githubPalette,
                      }}
                    />
                  ) : (
                    <div className="h-40 w-full rounded-2xl border border-black/8 bg-white" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
