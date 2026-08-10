import { describe, expect, it } from 'vitest';
import { DEFAULT_LANG, LANGS, isLang, toLang } from '@/types/lang';

/**
 * The locale contract is what replaced ~40 unchecked `as 'en' | 'ru'` casts,
 * so its fallback behaviour is worth pinning: a bad `[lang]` segment must land
 * on the default locale, never on an `undefined` LocalizedString lookup.
 */
describe('locale contract', () => {
  it('ships exactly the two locales the app routes on', () => {
    expect([...LANGS].sort()).toEqual(['en', 'ru']);
  });

  it('lists the default locale first — the settings picker renders LANGS in order', () => {
    expect(DEFAULT_LANG).toBe('ru');
    expect(LANGS[0]).toBe(DEFAULT_LANG);
  });

  it.each(LANGS)('accepts %s', (lang) => {
    expect(isLang(lang)).toBe(true);
    expect(toLang(lang)).toBe(lang);
  });

  it.each(['', 'de', 'EN', 'ru-RU', undefined, null])('rejects %s', (value) => {
    expect(isLang(value)).toBe(false);
    expect(toLang(value)).toBe(DEFAULT_LANG);
  });
});
