import en from "../../public/locales/en/en.json";
import bn from "../../public/locales/bn/bn.json";

export const translations = {
  en,
  bn,
} as const;

export type Locale = keyof typeof translations;
export type Translation = (typeof translations)["en"];
