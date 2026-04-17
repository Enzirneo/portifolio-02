"use client";

import Image from "next/image";
import { useTranslations } from "@/shared/i18n/LanguageProvider";

export function CTASection() {
  const { copy } = useTranslations();
  return (
    <section className="relative overflow-hidden px-4 py-10 sm:py-24">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-5 sm:gap-8 md:flex-row md:gap-12">
        
        {/* Left Side: Avatar + Text */}
        <div className="z-10 flex flex-col gap-1.5 sm:gap-2 md:gap-4">
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
            <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-black/8 bg-linear-to-br from-[#2f6b57]/18 via-[#3b7d66]/16 to-[#7fa08f]/18 sm:h-12 sm:w-12 md:h-16 md:w-16">
              <Image
                src="/techstacks/react.svg"
                alt="Technology Icon"
                fill
                sizes="(min-width: 768px) 64px, 48px"
                suppressHydrationWarning
                className="object-contain p-2 opacity-60 grayscale brightness-0"
              />
            </div>
            <h2 className="text-3xl font-medium leading-[0.95] tracking-tighter text-[#161616] sm:text-5xl md:text-7xl lg:text-8xl">
              {copy.cta.line1}
            </h2>
          </div>
          <h2 className="pl-2 text-3xl font-serif italic font-normal leading-[1.1] pb-1 tracking-tight text-transparent bg-clip-text bg-linear-to-r from-[#2f6b57] via-[#3b7d66] to-[#7fa08f] sm:text-5xl md:pl-24 md:text-7xl lg:text-8xl">
            {copy.cta.line2}
          </h2>
        </div>

        {/* Right Side: Photo Orb */}
        <div className="relative mt-4 flex h-36 w-36 shrink-0 items-center justify-center sm:mt-8 sm:h-48 sm:w-48 md:mt-0 md:h-64 md:w-64">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-[#2f6b57]/18 blur-[80px] rounded-full" />
            
            {/* Animated Gradients Container */}
            <div className="absolute inset-0 rounded-full overflow-hidden isolate z-0">
                {/* Rotating Color Mesh */}
                <div className="absolute -inset-full animate-[spin_3s_linear_infinite] opacity-100 blur-[30px]">
                     {/* Blue blob */}
                    <div className="absolute top-0 right-[20%] w-[70%] h-[70%] bg-[#2f6b57] rounded-full mix-blend-screen opacity-80" />
                    {/* Purple blob */}
                    <div className="absolute bottom-0 left-[20%] w-[70%] h-[70%] bg-[#5f8f78] rounded-full mix-blend-screen opacity-80" />
                    {/* Cyan blob */}
                    <div className="absolute top-[40%] left-0 w-[60%] h-[60%] bg-[#86a995] rounded-full mix-blend-screen opacity-80" />
                </div>
                
                 {/* Second Counter-Rotating Layer for Complexity */}
                 <div className="absolute -inset-full animate-[spin_4s_linear_infinite_reverse] opacity-80 blur-[20px] mix-blend-overlay">
                    <div className="absolute top-0 left-[30%] w-[60%] h-[60%] bg-[#7fa08f] rounded-full mix-blend-screen" />
                    <div className="absolute bottom-[20%] right-0 w-[60%] h-[60%] bg-[#3b7d66] rounded-full mix-blend-screen" />
                 </div>
            </div>

            {/* Inner Photo Circle */}
            <div className="absolute inset-1 bg-[#f8f4efa0a0a] rounded-full z-10 flex items-center justify-center border border-white/5 box-border overflow-hidden">
                <Image
                  src="/foto_solo.jpg"
                  alt="Enzo Villela Bispo"
                  fill
                  sizes="(min-width: 1280px) 320px, (min-width: 768px) 256px, 192px"
                  quality={100}
                  priority
                  className="object-cover object-center contrast-[1.08] saturate-[1.08]"
                  style={{ filter: "invert(0)" }}
                  suppressHydrationWarning
                />
                {/* Secondary inner reflection */}
                <div className="absolute inset-0 rounded-full bg-linear-to-tr from-white/8 to-transparent opacity-15 pointer-events-none" />
            </div>

             {/* Surface Glare */}
            <div className="absolute inset-0 rounded-full shadow-[inset_0_0_12px_rgba(255,255,255,0.10)] z-20 pointer-events-none ring-1 ring-white/8" />
        </div>
      </div>
    </section>
  );
}
