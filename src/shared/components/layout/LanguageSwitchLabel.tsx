import { cn } from "@/shared/lib/utils";
import type { Language } from "@/shared/lib/i18n";

const options: Array<{ language: Language; label: string }> = [
  { language: "pt-BR", label: "PT" },
  { language: "en", label: "EN" },
];

export function LanguageSwitchLabel({ current }: { current: Language }) {
  return (
    <span className="flex items-center gap-1.5">
      {options.map(({ language, label }, index) => (
        <span key={language} className="flex items-center gap-1.5">
          {index > 0 && (
            <span aria-hidden="true" className="opacity-30">
              |
            </span>
          )}
          <span
            className={cn(language === current ? "font-bold text-[#2f6b57]" : "font-medium opacity-55")}
          >
            {label}
          </span>
        </span>
      ))}
    </span>
  );
}
