export type Language = "pt-BR" | "en";

export const defaultLanguage: Language = "pt-BR";
export const LANGUAGE_COOKIE_KEY = "portfolio-language";

export function isLanguage(value: string | null | undefined): value is Language {
  return value === "pt-BR" || value === "en";
}

function parseAcceptLanguage(header: string): string[] {
  return header
    .split(",")
    .map((entry) => {
      const [tag, ...params] = entry.trim().split(";");
      const quality = params.find((param) => param.trim().startsWith("q="));
      return { tag: tag.toLowerCase(), quality: quality ? Number(quality.trim().slice(2)) : 1 };
    })
    .filter(({ tag, quality }) => tag !== "" && quality > 0)
    .sort((a, b) => b.quality - a.quality)
    .map(({ tag }) => tag);
}

function toSupportedLanguage(tag: string): Language | undefined {
  const primarySubtag = tag.split("-")[0];
  if (primarySubtag === "pt") return "pt-BR";
  if (primarySubtag === "en") return "en";
  return undefined;
}

export function getLanguageFromAcceptLanguage(
  acceptLanguage: string | null | undefined
): Language {
  if (!acceptLanguage) return defaultLanguage;

  for (const tag of parseAcceptLanguage(acceptLanguage)) {
    const language = toSupportedLanguage(tag);
    if (language) return language;
  }

  return defaultLanguage;
}
