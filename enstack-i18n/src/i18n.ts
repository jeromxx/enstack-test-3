import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { en, vi } from "make-plural/plurals"; // Plural rules for supported languages
import enMessages from "./locales/en.json";
import viMessages from "./locales/vi.json";

export const locales = {
  en: "English",
  vi: "Tiếng Việt"
};

i18n.loadLocaleData("en", { plurals: en });
i18n.loadLocaleData("vi", { plurals: vi });

export function dynamicActivate(locale: string) {
  if (locale === "vi") {
    i18n.load("vi", viMessages);
  } else {
    i18n.load("en", enMessages);
  }
  i18n.activate(locale);
}
