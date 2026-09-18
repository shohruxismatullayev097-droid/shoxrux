import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

function Hero() {
  const { t } = useLanguage()

  return (
    <section id="hero" className="hero">
      <div className="hero-grid"></div>
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>
      <div className="hero-orbit hero-orbit-one"></div>
      <div className="hero-orbit hero-orbit-two"></div>
      <div className="hero-star star-one"></div>
      <div className="hero-star star-two"></div>
      <div className="hero-star star-three"></div>
      <div className="hero-star star-four"></div>

      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-subtitle">{t.hero.greeting}</span>
          <h1 className="hero-title">
            {t.hero.name1}
            <br />
            {t.hero.name2}
          </h1>
          <h2 className="hero-role">{t.hero.role}</h2>
          <p className="hero-description">{t.hero.description}</p>

          <Link to="/portfolio" className="hero-btn">
            <span>{t.hero.button}</span>
            <span className="hero-btn-arrow">↗</span>
          </Link>
        </div>

        <div className="hero-visual">
          <div className="visual-ring visual-ring-one"></div>
          <div className="visual-ring visual-ring-two"></div>
          <div className="visual-dot"></div>
          <img src="/picture/Untitled.png" alt="Shoxrux Ismatillayev" />
        </div>
      </div>

      <a href="#footer" className="hero-scroll">
        <span className="hero-scroll-line"></span>
        <span>{t.hero.scroll}</span>
        <span className="hero-scroll-arrow">↓</span>
      </a>
    </section>
  )
}

export default Hero