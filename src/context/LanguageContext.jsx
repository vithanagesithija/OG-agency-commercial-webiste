import { createContext, useContext, useState, useEffect } from 'react';
import { translations, defaultLang } from '../translations';

const LanguageContext = createContext(null);

const LANG_STORAGE_KEY = 'og_agency_lang';

// Map lang codes to html lang attribute values
const LANG_HTML_ATTR = { en: 'en', si: 'si', ja: 'ja' };

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try {
      const stored = localStorage.getItem(LANG_STORAGE_KEY);
      if (stored && translations[stored]) return stored;
    } catch (_) { /* ignore */ }
    return defaultLang;
  });

  const t = translations[lang] || translations[defaultLang];

  const setLang = (code) => {
    if (!translations[code]) return;
    setLangState(code);
    try { localStorage.setItem(LANG_STORAGE_KEY, code); } catch (_) { /* ignore */ }
  };

  // Update <html lang="..."> and <body> font class on language change
  useEffect(() => {
    document.documentElement.lang = LANG_HTML_ATTR[lang] || lang;
    document.body.classList.remove('lang-en', 'lang-si', 'lang-ja');
    document.body.classList.add(`lang-${lang}`);

    // Update page title and meta description for SEO
    const titles = {
      en: 'OG Agency | Your Pathway to Employment in Japan',
      si: 'OG Agency | ජපානයේ රැකියා සඳහා ඔබේ මාර්ගය',
      ja: 'OGエージェンシー | 日本での就労への第一歩',
    };
    const descriptions = {
      en: 'OG Agency — Supporting Sri Lankan candidates through job preparation, documentation and employment opportunities in Japan via TITP and SSW pathways.',
      si: 'OG Agency — TITP සහ SSW මාර්ගය හරහා ශ්‍රී ලාංකික අපේක්ෂකයන්ට ජපානයේ රැකියා සඳහා සූදානම, ලේඛනකරණය සහ රැකියා අවස්ථා.',
      ja: 'OGエージェンシー — TITPおよびSSWルートを通じて、スリランカ人候補者の日本就労をサポートします。',
    };
    document.title = titles[lang] || titles.en;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', descriptions[lang] || descriptions.en);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
