import type { Language } from "@/shared/lib/i18n";
import { en } from "./en";
import { ptBR } from "./pt-BR";
import type { Translation } from "./types";

export type { Translation };

export const translations: Record<Language, Translation> = {
  "pt-BR": ptBR,
  en,
};
