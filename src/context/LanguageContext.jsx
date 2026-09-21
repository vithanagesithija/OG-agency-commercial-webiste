import { createContext, useContext, useState } from 'react';
import { translations, defaultLang } from '../translations';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(defaultLang);
  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      <div lang={lang} className={`lang-${lang}`}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
