import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

function Footer() {
  const { t } = useLanguage()

  const handleBackToTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-status">
              <span className="status-dot"></span>
              {t.footer.available}
            </div>
            <h2>Shoxrux Ismatillayev</h2>
            <p>{t.footer.role}</p>
          </div>

          <div className="footer-column">
            <span className="footer-heading">{t.footer.navHeading}</span>
            <div className="footer-nav">
              <Link to="/">{t.nav.home}</Link>
              <Link to="/uzimhaqimda">{t.nav.about}</Link>
              <Link to="/portfolio">{t.nav.portfolio}</Link>
            </div>
          </div>

          <div className="footer-column">
            <span className="footer-heading">{t.footer.connectHeading}</span>
            <div className="footer-social">
              <a href="https://github.com/shohruxismatullayev097-droid" target="_blank" rel="noopener noreferrer">
                GitHub <span>↗</span>
              </a>
              <a href="https://t.me/Shokx_x" target="_blank" rel="noopener noreferrer">
                Telegram <span>↗</span>
              </a>
              <a href="https://instagram.com/shox_x30" target="_blank" rel="noopener noreferrer">
                Instagram <span>↗</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{t.footer.copyright}</p>
          <a href="#" className="back-to-top" onClick={handleBackToTop}>
            {t.footer.backToTop} <span>↑</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer