import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useLanguage } from '../context/LanguageContext'

function Portfolio() {
  const location = useLocation()
  const { t } = useLanguage()

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [location])

  return (
    <>
      <Navbar />
      <main>
        {/* PORTFOLIO HERO */}
        <section className="portfolio-hero" id="portfolio-top">
          <div className="portfolio-grid-bg"></div>
          <div className="portfolio-glow portfolio-glow-one"></div>
          <div className="portfolio-glow portfolio-glow-two"></div>

          <div className="container portfolio-hero-container">
            <div className="portfolio-hero-content">
              <span className="portfolio-label">{t.portfolio.label}</span>
              <h1>
                {t.portfolio.title1}
                <br />
                {t.portfolio.title2}
              </h1>
              <p>{t.portfolio.intro}</p>
              <div className="portfolio-meta">
                <span>{t.portfolio.meta.type}</span>
                <span className="portfolio-meta-line"></span>
                <span>{t.portfolio.meta.year}</span>
              </div>
            </div>
            <div className="portfolio-hero-number">03</div>
          </div>
        </section>

        {/* INTRO / STATS */}
        <section className="portfolio-overview">
          <div className="container">
            <div className="portfolio-overview-grid">
              <div className="portfolio-overview-text">
                <span className="section-label">{t.portfolio.overviewLabel}</span>
                <h2>
                  {t.portfolio.overviewTitle1}
                  <br />
                  {t.portfolio.overviewTitle2}
                  <br />
                  {t.portfolio.overviewTitle3}
                </h2>
                <p>{t.portfolio.overviewText}</p>
              </div>

              <div className="portfolio-stats">
                <div className="portfolio-stat">
                  <strong>03</strong>
                  <span>{t.portfolio.stats.projects}</span>
                </div>
                <div className="portfolio-stat">
                  <strong>04+</strong>
                  <span>{t.portfolio.stats.skills}</span>
                </div>
                <div className="portfolio-stat">
                  <strong>01</strong>
                  <span>{t.portfolio.stats.direction}</span>
                </div>
                <div className="portfolio-stat">
                  <strong>∞</strong>
                  <span>{t.portfolio.stats.learning}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="portfolio-projects" id="portfolio">
          <div className="container">
            <div className="section-header portfolio-heading">
              <div>
                <span className="section-label">{t.portfolio.projectsLabel}</span>
                <h2 className="section-title">{t.portfolio.projectsTitle}</h2>
              </div>
              <p className="section-intro">{t.portfolio.projectsIntro}</p>
            </div>

            <div className="portfolio-grid">
              {/* PROJECT 01 */}
              <article className="project-card">
                <div className="project-visual project-one">
                  <span className="project-number">01</span>
                  <div className="project-orbit"></div>
                  <div className="project-orbit project-orbit-small"></div>
                  <span className="project-symbol">SH.</span>
                  <span className="project-visual-label">{t.portfolio.projects[0].tag}</span>
                </div>
                <div className="project-content">
                  <div className="project-meta">
                    <span>{t.portfolio.projects[0].tag}</span>
                    <span>{t.portfolio.projects[0].year}</span>
                  </div>
                  <h3>{t.portfolio.projects[0].title}</h3>
                  <p>{t.portfolio.projects[0].text}</p>
                  <div className="project-tags">
                    {t.portfolio.projects[0].tags.map((tag, i) => (
                      <span key={i}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-actions">
                    <a href="#" className="project-link">
                      {t.portfolio.viewProject} <span>↗</span>
                    </a>
                    <span className="project-type">{t.portfolio.projects[0].type}</span>
                  </div>
                </div>
              </article>

              {/* PROJECT 02 */}
              <article className="project-card">
                <div className="project-visual project-two">
                  <span className="project-number">02</span>
                  <div className="dashboard-shape">
                    <div className="dashboard-topbar"></div>
                    <div className="dashboard-item dashboard-item-one">01</div>
                    <div className="dashboard-item dashboard-item-two">04</div>
                    <div className="dashboard-item dashboard-item-three">02</div>
                    <div className="dashboard-item dashboard-item-four">03</div>
                  </div>
                  <span className="project-visual-label">{t.portfolio.projects[1].tag}</span>
                </div>
                <div className="project-content">
                  <div className="project-meta">
                    <span>{t.portfolio.projects[1].tag}</span>
                    <span>{t.portfolio.projects[1].year}</span>
                  </div>
                  <h3>{t.portfolio.projects[1].title}</h3>
                  <p>{t.portfolio.projects[1].text}</p>
                  <div className="project-tags">
                    {t.portfolio.projects[1].tags.map((tag, i) => (
                      <span key={i}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-actions">
                    <a href="#" className="project-link">
                      {t.portfolio.viewProject} <span>↗</span>
                    </a>
                    <span className="project-type">{t.portfolio.projects[1].type}</span>
                  </div>
                </div>
              </article>

              {/* PROJECT 03 */}
              <article className="project-card">
                <div className="project-visual project-three">
                  <span className="project-number">03</span>
                  <div className="planet"></div>
                  <div className="planet-ring"></div>
                  <div className="planet-glow"></div>
                  <span className="project-visual-label">{t.portfolio.projects[2].tag}</span>
                </div>
                <div className="project-content">
                  <div className="project-meta">
                    <span>{t.portfolio.projects[2].tag}</span>
                    <span>{t.portfolio.projects[2].year}</span>
                  </div>
                  <h3>{t.portfolio.projects[2].title}</h3>
                  <p>{t.portfolio.projects[2].text}</p>
                  <div className="project-tags">
                    {t.portfolio.projects[2].tags.map((tag, i) => (
                      <span key={i}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-actions">
                    <a href="#" className="project-link">
                      {t.portfolio.viewProject} <span>↗</span>
                    </a>
                    <span className="project-type">{t.portfolio.projects[2].type}</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* UPCOMING */}
        <section className="upcoming-projects">
          <div className="container">
            <div className="section-header">
              <span className="section-label">{t.portfolio.upcomingLabel}</span>
              <h2 className="section-title">{t.portfolio.upcomingTitle}</h2>
              <p className="section-intro">{t.portfolio.upcomingIntro}</p>
            </div>

            <div className="upcoming-grid">
              {t.portfolio.upcoming.map((u, i) => (
                <div className="upcoming-card" key={i}>
                  <span>{String(i + 4).padStart(2, '0')}</span>
                  <h3>{u.title}</h3>
                  <p>{u.text}</p>
                  <small>{u.tag}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact" id="contact">
          <div className="container">
            <div className="contact-box">
              <div className="contact-decoration"></div>

              <div className="contact-left">
                <span className="section-label">{t.portfolio.contactLabel}</span>
                <h2>
                  {t.portfolio.contactTitle1}
                  <br />
                  {t.portfolio.contactTitle2}
                </h2>
                <p>{t.portfolio.contactText}</p>
              </div>

              <div className="contact-right">
                <div className="contact-method">
                  <span>{t.portfolio.contact.emailLabel}</span>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=shohruxismatullayev097@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    shohruxismatullayev097@gmail.com
                  </a>
                </div>
                <div className="contact-method">
                  <span>{t.portfolio.contact.telegramLabel}</span>
                  <a
                    href="https://t.me/Shokx_x"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @Shokx_x
                  </a>
                </div>
                <div className="contact-method">
                  <span>{t.portfolio.contact.locationLabel}</span>
                  <strong>{t.portfolio.contact.locationValue}</strong>
                </div>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=shohruxismatullayev097@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-btn"
                >
                  {t.portfolio.contact.btn} <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Portfolio