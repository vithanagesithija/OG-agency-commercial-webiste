import { useState, useEffect, useRef } from 'react';
import { useLang } from '../context/LanguageContext';

const LANGUAGES = [
  { code: 'en', flag: '🇬🇧', name: 'English',  native: 'English' },
  { code: 'si', flag: '🇱🇰', name: 'Sinhala',  native: 'සිංහල' },
  { code: 'ja', flag: '🇯🇵', name: 'Japanese', native: '日本語' },
];

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const current = LANGUAGES.find(l => l.code === lang);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleSelect = (code) => {
    setLang(code);
    setOpen(false);
  };

  return (
    <div className={`lang-switcher${open ? ' open' : ''}`} ref={ref}>
      <button
        className="lang-switcher-btn"
        onClick={() => setOpen(!open)}
        id="lang-switcher-btn"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="lang-flag">{current.flag}</span>
        <span>{current.name}</span>
        <span className="lang-chevron">▼</span>
      </button>

      {open && (
        <div className="lang-dropdown" role="listbox">
          {LANGUAGES.map(l => (
            <button
              key={l.code}
              className={`lang-option${lang === l.code ? ' active' : ''}`}
              onClick={() => handleSelect(l.code)}
              role="option"
              aria-selected={lang === l.code}
              id={`lang-option-${l.code}`}
            >
              <span className="lang-option-flag">{l.flag}</span>
              <span className="lang-option-info">
                <span className="lang-option-name">{l.name}</span>
                <span className="lang-option-native">{l.native}</span>
              </span>
              {lang === l.code && <span className="lang-check">✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
