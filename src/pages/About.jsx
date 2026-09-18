import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useLanguage } from '../context/LanguageContext'

function SkillCard({ number, status, name, description, percent, label, delay }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <article className="skill-card" ref={ref}>
      <div className="skill-card-top">
        <span className="skill-number">{number}</span>
        <span className="skill-status">{status}</span>
      </div>
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="skill-line">
        <span
          style={{
            width: visible ? `${percent}%` : '0%',
            transitionDelay: `${delay}ms`,
          }}
        ></span>
      </div>
      <div className="skill-bottom">
        <span>{label}</span>
        <strong>{percent}%</strong>
      </div>
    </article>
  )
}

function About() {
  const { t, lang } = useLanguage()

  // Har bir til uchun ko'nikmalar tavsiflari
  const skillDescriptions = {
    uz: {
      html: 'Semantic HTML strukturalar',
      css: 'Responsive va zamonaviy interfeyslar',
      js: 'Interaktiv va dinamik funksiyalar',
      react: 'Komponentli zamonaviy ilovalar',
      tailwind: 'Utility-first CSS framework',
      cpp: 'Algoritmlar va mantiqiy fikrlash',
      git: 'Versiya nazorati va hamkorlik',
      uiux: 'Foydalanuvchi tajribasi va dizayn',
      sql: "Ma'lumotlar bazasi va so'rovlar",
    },
    en: {
      html: 'Semantic HTML structures',
      css: 'Responsive and modern interfaces',
      js: 'Interactive and dynamic features',
      react: 'Component-based modern apps',
      tailwind: 'Utility-first CSS framework',
      cpp: 'Algorithms and logical thinking',
      git: 'Version control and collaboration',
      uiux: 'User experience and design',
      sql: 'Databases and queries',
    },
    ru: {
      html: 'Семантические HTML структуры',
      css: 'Адаптивные и современные интерфейсы',
      js: 'Интерактивные и динамичные функции',
      react: 'Компонентные современные приложения',
      tailwind: 'Utility-first CSS фреймворк',
      cpp: 'Алгоритмы и логическое мышление',
      git: 'Контроль версий и сотрудничество',
      uiux: 'Пользовательский опыт и дизайн',
      sql: 'Базы данных и запросы',
    },
    tr: {
      html: 'Semantik HTML yapıları',
      css: 'Responsive ve modern arayüzler',
      js: 'İnteraktif ve dinamik özellikler',
      react: 'Bileşen tabanlı modern uygulamalar',
      tailwind: 'Utility-first CSS framework',
      cpp: 'Algoritmalar ve mantıksal düşünme',
      git: 'Sürüm kontrolü ve işbirliği',
      uiux: 'Kullanıcı deneyimi ve tasarım',
      sql: 'Veritabanları ve sorgular',
    },
  }

  const sd = skillDescriptions[lang] || skillDescriptions.uz

  const skills = [
    { number: '01', status: 'CORE', name: 'HTML', description: sd.html, percent: 90, label: 'Structure' },
    { number: '02', status: 'CORE', name: 'CSS', description: sd.css, percent: 85, label: 'UI / Responsive' },
    { number: '03', status: 'LEARNING', name: 'JavaScript', description: sd.js, percent: 75, label: 'Interactivity' },
    { number: '04', status: 'LEARNING', name: 'React', description: sd.react, percent: 65, label: 'Frontend Library' },
    { number: '05', status: 'LEARNING', name: 'Tailwind CSS', description: sd.tailwind, percent: 70, label: 'Styling' },
    { number: '06', status: 'FOUNDATION', name: 'C++', description: sd.cpp, percent: 80, label: 'Programming Logic' },
    { number: '07', status: 'TOOL', name: 'Git & GitHub', description: sd.git, percent: 70, label: 'Version Control' },
    { number: '08', status: 'DESIGN', name: 'UI / UX', description: sd.uiux, percent: 65, label: 'Design Sense' },
    { number: '09', status: 'LEARNING', name: 'SQL', description: sd.sql, percent: 50, label: 'Database' },
  ]

  return (
    <>
      <Navbar />
      <main>
        {/* ABOUT HERO */}
        <section className="about-hero" id="about-top">
          <div className="about-hero-grid"></div>
          <div className="about-hero-glow"></div>
          <div className="container">
            <div className="about-hero-content">
              <span className="about-label">{t.about.label}</span>
              <h1>{t.about.title}</h1>
              <p>{t.about.intro}</p>
              <div className="about-hero-meta">
                <span>{t.about.meta.location}</span>
                <span className="meta-line"></span>
                <span>{t.about.meta.country}</span>
              </div>
            </div>
            <div className="about-hero-number">01</div>
          </div>
        </section>

        {/* INTRO */}
        <section className="about-intro">
          <div className="container">
            <div className="section-header about-section-header">
              <span className="section-label">{t.about.whoLabel}</span>
              <h2 className="section-title">{t.about.whoTitle}</h2>
              <p className="section-intro">{t.about.whoText}</p>
            </div>

            <div className="about-intro-grid">
              <div className="about-main-text">
                <p>{t.about.mainText1}</p>
                <p>{t.about.mainText2}</p>
                <p>{t.about.mainText3}</p>
                <Link to="/portfolio" className="about-link">
                  {t.about.projectsLink} <span>↗</span>
                </Link>
              </div>

              <div className="about-profile-card">
                <div className="profile-card-top">
                  <span>{t.about.profile.label}</span>
                  <span>{t.about.profile.year}</span>
                </div>
                <div className="profile-card-main">
                  <div className="profile-monogram">S</div>
                  <h3>
                    {t.about.profile.name1}
                    <br />
                    {t.about.profile.name2}
                  </h3>
                  <span className="profile-role">{t.about.profile.role}</span>
                </div>
                <div className="profile-card-info">
                  <div>
                    <span>{t.about.profile.locationLabel}</span>
                    <strong>{t.about.profile.locationValue}</strong>
                  </div>
                  <div>
                    <span>{t.about.profile.focusLabel}</span>
                    <strong>{t.about.profile.focusValue}</strong>
                  </div>
                </div>
                <div className="profile-card-bottom">
                  <span>{t.about.profile.available}</span>
                  <span className="profile-dot"></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="about-values">
          <div className="container">
            <div className="section-header">
              <span className="section-label">{t.about.valuesLabel}</span>
              <h2 className="section-title">{t.about.valuesTitle}</h2>
            </div>

            <div className="values-grid">
              {t.about.values.map((v, i) => (
                <article className="value-card" key={i}>
                  <span className="value-number">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* JOURNEY */}
        <section className="journey">
          <div className="container">
            <div className="section-header">
              <span className="section-label">{t.about.journeyLabel}</span>
              <h2 className="section-title">{t.about.journeyTitle}</h2>
              <p className="section-intro">{t.about.journeyIntro}</p>
            </div>

            <div className="journey-list">
              {t.about.journey.map((j, i) => (
                <div className="journey-item" key={i}>
                  <div className="journey-index">{String(i + 1).padStart(2, '0')}</div>
                  <div className="journey-content">
                    <span>{j.tag}</span>
                    <h3>{j.title}</h3>
                    <p>{j.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="about-skills">
          <div className="container">
            <div className="section-header">
              <span className="section-label">{t.about.skillsLabel}</span>
              <h2 className="section-title">{t.about.skillsTitle}</h2>
              <p className="section-intro">{t.about.skillsIntro}</p>
            </div>

            <div className="skills-grid">
              {skills.map((s, i) => (
                <SkillCard
                  key={s.number}
                  number={s.number}
                  status={s.status}
                  name={s.name}
                  description={s.description}
                  percent={s.percent}
                  label={s.label}
                  delay={i * 80}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="about-cta">
          <div className="container">
            <div className="about-cta-box">
              <div className="cta-decoration"></div>
              <div className="about-cta-content">
                <span className="section-label">{t.about.ctaLabel}</span>
                <h2>{t.about.ctaTitle}</h2>
                <p>{t.about.ctaText}</p>
                <Link to="/portfolio" className="about-cta-btn">
                  {t.about.ctaBtn} <span>↗</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default About