import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'

function Navbar() {
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()
  const { t } = useLanguage()

  const isActive = (path) => location.pathname === path

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">
          Shoxrux Ismatillayev
        </Link>

        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
                {t.nav.home}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/uzimhaqimda"
                className={`nav-link ${isActive('/uzimhaqimda') ? 'active' : ''}`}
              >
                {t.nav.about}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/portfolio"
                className={`nav-link ${isActive('/portfolio') ? 'active' : ''}`}
              >
                {t.nav.portfolio}
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <LanguageSwitcher />

          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <Link to="/portfolio#contact" className="header-contact">
            {t.nav.contact} <span>↗</span>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar