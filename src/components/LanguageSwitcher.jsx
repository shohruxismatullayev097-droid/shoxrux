import React, { useState, useRef, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

// SVG bayroqlar
const FlagUZ = () => (
  <svg width="20" height="14" viewBox="0 0 30 20" className="lang-flag-svg">
    <rect width="30" height="6.67" fill="#1eb53a" />
    <rect y="6.67" width="30" height="6.66" fill="#ffffff" />
    <rect y="13.33" width="30" height="6.67" fill="#0099b5" />
    <circle cx="6" cy="3.33" r="2.2" fill="#ffffff" />
    <circle cx="6.8" cy="3.33" r="2.2" fill="#1eb53a" />
    <g fill="#ffffff">
      <circle cx="10" cy="2" r="0.5" />
      <circle cx="12" cy="2" r="0.5" />
      <circle cx="14" cy="2" r="0.5" />
      <circle cx="11" cy="3.7" r="0.5" />
      <circle cx="13" cy="3.7" r="0.5" />
      <circle cx="12" cy="1.2" r="0.5" />
    </g>
  </svg>
)

const FlagGB = () => (
  <svg width="20" height="14" viewBox="0 0 60 30" className="lang-flag-svg">
    <rect width="60" height="30" fill="#012169" />
    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" />
    <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10" />
    <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6" />
  </svg>
)

const FlagRU = () => (
  <svg width="20" height="14" viewBox="0 0 30 20" className="lang-flag-svg">
    <rect width="30" height="6.67" fill="#ffffff" />
    <rect y="6.67" width="30" height="6.66" fill="#0039a6" />
    <rect y="13.33" width="30" height="6.67" fill="#d52b1e" />
  </svg>
)

const FlagTR = () => (
  <svg width="20" height="14" viewBox="0 0 30 20" className="lang-flag-svg">
    <rect width="30" height="20" fill="#e30a17" />
    <circle cx="11" cy="10" r="4" fill="#ffffff" />
    <circle cx="12.5" cy="10" r="3.2" fill="#e30a17" />
    <polygon
      fill="#ffffff"
      points="17.5,10 14.2,11.1 16.2,8.3 16.2,11.7 14.2,8.9"
    />
  </svg>
)

const LANGS = [
  { code: 'uz', Flag: FlagUZ, short: 'UZ', name: "O'zbekcha" },
  { code: 'en', Flag: FlagGB, short: 'EN', name: 'English' },
  { code: 'ru', Flag: FlagRU, short: 'RU', name: 'Русский' },
  { code: 'tr', Flag: FlagTR, short: 'TR', name: 'Türkçe' },
]

function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  const current = LANGS.find((l) => l.code === lang)
  const CurrentFlag = current.Flag

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const changeLang = (code) => {
    if (code === lang) {
      setOpen(false)
      return
    }
    setOpen(false)
    document.body.classList.add('lang-transition')
    setTimeout(() => {
      setLang(code)
      setTimeout(() => {
        document.body.classList.remove('lang-transition')
      }, 100)
    }, 220)
  }

  return (
    <div className="lang-switcher" ref={ref}>
      <button
        className="lang-current"
        onClick={() => setOpen((o) => !o)}
        aria-label="Change language"
      >
        <CurrentFlag />
        <span className="lang-short">{current.short}</span>
        <span className={`lang-chevron ${open ? 'open' : ''}`}>⌄</span>
      </button>

      {open && (
        <div className="lang-menu">
          {LANGS.map((l) => {
            const LFlag = l.Flag
            return (
              <button
                key={l.code}
                className={`lang-option ${l.code === lang ? 'active' : ''}`}
                onClick={() => changeLang(l.code)}
              >
                <LFlag />
                <span className="lang-short">{l.short}</span>
                <span className="lang-fullname">{l.name}</span>
                {l.code === lang && <span className="lang-dot"></span>}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher