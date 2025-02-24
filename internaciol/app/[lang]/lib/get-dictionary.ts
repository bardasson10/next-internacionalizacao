import 'server-only';
import type { Locale } from '@/i18n-config';

const dictionaries = {
  en: () => import('@/app/[lang]/languages/en.json').then((module) => module.default),
  es: () => import('@/app/[lang]/languages/es.json').then((module) => module.default),
  pt: () => import('@/app/[lang]/languages/pt.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]();