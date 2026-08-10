import 'server-only'

import type { Lang } from '@/types/lang'

const dictionaries = {
  en: () => import('./en.json').then((module) => module.default),
  ru: () => import('./ru.json').then((module) => module.default),
}

export const getDictionary = async (locale: Lang) => dictionaries[locale]()
