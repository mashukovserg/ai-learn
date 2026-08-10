/**
 * The locale contract, in one place.
 *
 * Before this module the pair `'en' | 'ru'` was re-declared ad hoc in a handful
 * of files and, everywhere else, recovered from a `string` with a cast
 * (`room.title[lang as 'en' | 'ru']`). Those casts were unchecked: a bad
 * `[lang]` route segment produced `undefined` at runtime with no type error.
 *
 * The rule now: narrow **once** at the boundary where a locale enters the app
 * (a route param, a cookie, the language context) with `toLang`, and pass the
 * resulting `Lang` down. Inside the app `LocalizedString` is indexed directly —
 * no casts.
 */

/**
 * Locales the app ships. `src/app/[lang]` is generated from this list, and the
 * settings language picker renders it in order — default locale first.
 */
export const LANGS = ['ru', 'en'] as const;

export type Lang = (typeof LANGS)[number];

/** Russian is the default — see the redirect in `src/proxy.ts`. */
export const DEFAULT_LANG: Lang = 'ru';

export function isLang(value: string | undefined | null): value is Lang {
  return value === 'en' || value === 'ru';
}

/**
 * Narrows an untrusted locale string (route param, cookie, header) to `Lang`,
 * falling back to the default instead of producing `undefined` lookups.
 */
export function toLang(value: string | undefined | null): Lang {
  return isLang(value) ? value : DEFAULT_LANG;
}
