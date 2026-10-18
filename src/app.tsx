import { useEffect, useRef, useState } from 'react'

const skills = [
  ['HTML5', 92],
  ['CSS3', 88],
  ['Bootstrap', 85],
  ['JavaScript', 75],
  ['PHP', 70],
  ['MySQL', 72],
  ['Git & GitHub', 80],
  ['UI/UX Design', 78],
]

const projects = [
  {
    number: '01',
    name: 'PUP Dash',
    copy: 'A fast-paced campus service game where Pio P. collects keys and equipment, fulfills classroom requests, and races against the clock.',
    tags: ['Python', 'Pygame', 'Game Design', 'Pixel Art'],
  },
  {
    number: '02',
    name: 'Pickled',
    copy: 'An indoor pickleball venue platform for court bookings, social play, lessons, private sessions, events, checkout, and payments.',
    tags: ['PHP', 'MySQL', 'JavaScript', 'Booking System'],
  },
  {
    number: '03',
    name: 'PRETTY BY JEXI',
    copy: 'A playful online showcase for handmade hair clips, featuring product collections and a charming shopping experience.',
    tags: ['E-commerce', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    number: '04',
    name: 'LakbayLokal',
    copy: 'A premium Philippine travel platform for discovering destinations, customizing hotel stays, building itineraries, and managing bookings.',
    tags: ['PHP', 'MySQL', 'JavaScript', 'Travel Booking'],
  },
]

const activities = [
  {
    number: '01',
    title: 'Bento Layout',
    description: 'A modular layout exercise focused on responsive composition.',
    href: 'https://jexiestanol.github.io/webdev/WEBDEV-A1/',
    status: 'Published',
  },
  {
    number: '02',
    title: 'Upcoming Activity',
    description: 'A new web development experiment will be filed here.',
    status: 'Coming soon',
  },
  {
    number: '03',
    title: 'Upcoming Activity',
    description: 'Reserved for the next responsive design activity.',
    status: 'Coming soon',
  },
  {
    number: '04',
    title: 'Upcoming Activity',
    description: 'Reserved for a future JavaScript interaction exercise.',
    status: 'Coming soon',
  },
  {
    number: '05',
    title: 'Upcoming Activity',
    description: 'Reserved for another interface and layout study.',
    status: 'Coming soon',
  },
  {
    number: '06',
    title: 'Upcoming Activity',
    description: 'More coursework and experiments will be added here.',
    status: 'Coming soon',
  },
]

function ArrowIcon({ up = false }: { up?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={up ? 'M5 19 19 5M9 5h10v10' : 'M5 12h14M13 6l6 6-6 6'} />
    </svg>
  )
}

function SocialIcon({ name }: { name: 'github' | 'facebook' | 'instagram' }) {
  if (name === 'github') {
    return (
      <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path className="social-icon-solid" d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.51-1.29-1.24-1.64-1.24-1.64-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1.61 2.3 4.15 1.61.1-.73.39-1.23.7-1.52-2.48-.28-5.08-1.24-5.08-5.52 0-1.22.44-2.22 1.16-3-.12-.29-.5-1.42.11-2.96 0 0 .95-.3 3.05 1.15a10.6 10.6 0 0 1 5.56 0c2.11-1.43 3.05-1.15 3.05-1.15.61 1.54.23 2.67.11 2.96.72.78 1.16 1.78 1.16 3 0 4.29-2.6 5.23-5.09 5.5.4.35.75 1.02.75 2.06v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
      </svg>
    )
  }

  if (name === 'facebook') {
    return (
      <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path className="social-icon-solid" d="M24 12a12 12 0 1 0-13.88 11.86v-8.39H7.08V12h3.04V9.35c0-3 1.79-4.66 4.52-4.66 1.31 0 2.68.23 2.68.23v2.95h-1.51c-1.49 0-1.96.93-1.96 1.88V12h3.34l-.53 3.47h-2.81v8.39A12 12 0 0 0 24 12Z" />
      </svg>
    )
  }

  return (
    <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle className="social-icon-solid" cx="17.5" cy="6.8" r="1.1" />
    </svg>
  )
}

function IntroScreen() {
  return (
    <div className="intro-screen" aria-hidden="true">
      <div className="intro-loading">
        <p>Welcome to Jexi&apos;s Portfolio</p>
        <div className="intro-progress"><span /></div>
        <small>Loading portfolio...</small>
      </div>
    </div>
  )
}

function NavDoodle({ type }: { type: 'about' | 'work' | 'skills' | 'contact' }) {
  const drawings = {
    about: (
      <>
        <circle cx="30" cy="27" r="13" />
        <path d="M24 25h1M35 25h1M25 32c4 4 7 4 11 0M30 11V5M15 18l-5-4M45 18l5-4" />
      </>
    ),
    work: (
      <>
        <path d="M13 17h34v31H13zM23 17v-7h14v7M20 27h20M20 35h15" />
        <path d="M9 22 5 18M51 22l4-4" />
      </>
    ),
    skills: (
      <>
        <path d="m30 8 5 12 13 2-10 9 3 13-11-7-11 7 3-13-10-9 13-2z" />
        <path d="M9 45h13M38 45h13" />
      </>
    ),
    contact: (
      <>
        <circle cx="30" cy="28" r="12" />
        <path d="M25 26h1M35 26h1M25 33c4 3 7 3 11 0M18 44l-8 7M42 44l8 7" />
        <text x="5" y="15">in</text>
        <text x="45" y="15">x</text>
      </>
    ),
  }

  return (
    <svg className={`nav-doodle nav-doodle-${type}`} viewBox="0 0 60 58" aria-hidden="true">
      {drawings[type]}
    </svg>
  )
}

function Star({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" aria-hidden="true">
      <path d="m20 1 4.2 14.8L39 20l-14.8 4.2L20 39l-4.2-14.8L1 20l14.8-4.2L20 1Z" />
    </svg>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label">{children}</p>
}

function HeroIllustration() {
  return (
    <div className="hero-illustration creative-scene" role="img" aria-label="Animated creative developer workspace">
      <div className="scene-particles" aria-hidden="true">
        {Array.from({ length: 7 }, (_, index) => <i key={index} />)}
      </div>
      <div className="scene-orbit" aria-hidden="true"><span>DESIGN · CODE · CREATE · </span></div>
      <div className="scene-sticker scene-sticker-code">&lt;/&gt;</div>
      <div className="scene-sticker scene-sticker-star"><Star /></div>

      <div className="scene-window">
        <div className="scene-window-bar">
          <div><i /><i /><i /></div>
          <span>jexi-portfolio.dev</span>
        </div>
        <div className="scene-window-body">
          <aside>
            <span className="scene-avatar"><i className="brand-logo" /></span>
            <i />
            <i />
            <i />
          </aside>
          <div className="scene-editor">
            <p>creative developer · selected works</p>
            <strong id="hero-title"><span>JEXI&apos;S</span><em>PORTFOLIO</em></strong>
            <div className="scene-code-lines"><i /><i /><i /><i /></div>
            <div className="scene-preview-card">
              <span>CREATIVE</span>
              <b>Developer</b>
              <small>design · code · create</small>
            </div>
          </div>
        </div>
      </div>

      <div className="scene-card scene-card-skills">
        <small>MY TOOLKIT</small>
        <div><span>HTML</span><span>CSS</span><span>JS</span></div>
      </div>
      <div className="scene-card scene-card-status">
        <i />
        <div><small>CURRENTLY</small><b>Open to work</b></div>
      </div>
      <div className="scene-folder">
        <span>PROJECTS</span>
        <b>04</b>
      </div>
      <svg className="scene-cursor" viewBox="0 0 34 40" aria-hidden="true">
        <path d="M3 2v28l8-7 6 14 6-3-6-13h11z" />
      </svg>
    </div>
  )
}

function MarqueeBand({ text }: { text: string }) {
  const repeated = Array.from({ length: 6 }, () => text)
  return (
    <div className="marquee-band" aria-hidden="true">
      <div className="marquee-track">
        {repeated.map((item, index) => (
          <span key={index}>{item}<i>—</i></span>
        ))}
      </div>
    </div>
  )
}

function ProjectArtwork({ number, name }: { number: string; name: string }) {
  if (number === '01') {
    return (
      <div className="actual-project-cover pup-dash-project-cover" aria-hidden="true">
        <img src="/assets/pup-dash-gameplay.png" alt="" />
        <div className="actual-cover-label">
          <span>Campus service game · PUP Sto. Tomas</span>
          <strong>{name}</strong>
        </div>
      </div>
    )
  }

  if (number === '02') {
    return (
      <div className="actual-project-cover pickled-project-cover" aria-hidden="true">
        <img src="/assets/pickled-hero.png" alt="" />
        <div className="actual-cover-label">
          <span>Indoor pickleball · Makati</span>
          <strong>{name}</strong>
        </div>
      </div>
    )
  }

  if (number === '04') {
    return (
      <div className="actual-project-cover lakbaylokal-project-cover" aria-hidden="true">
        <img src="/assets/lakbaylokal-hero.jpg" alt="" />
        <div className="actual-cover-label">
          <span>Discover the beauty of the Philippines</span>
          <strong>{name}</strong>
        </div>
      </div>
    )
  }

  if (number === '03') {
    return (
      <div className="pretty-project-cover" aria-hidden="true">
        <header className="pretty-shop-nav">
          <strong>PRETTY <span>BY JEXI</span></strong>
          <nav><span>SHOP</span><span>OUR STORY</span></nav>
          <i>♡</i>
        </header>
        <div className="pretty-shop-hero">
          <div className="pretty-shop-copy">
            <span className="pretty-shop-kicker">A LITTLE PRETTY GOES A LONG WAY</span>
            <h4>Made to make<br />you feel <em>pretty.</em></h4>
            <span className="pretty-shop-button">SHOP THE COLLECTION <b>↗</b></span>
            <small>Handmade with love · Est. by Jexi</small>
          </div>
          <div className="pretty-product-stage">
            <i className="pretty-sparkle pretty-sparkle-one">✳</i>
            <i className="pretty-sparkle pretty-sparkle-two">✦</i>
            <div className="pretty-product-card">
              <span className="pretty-product-label">THE EVERYDAY BOW</span>
              <div className="pretty-bow"><i /><i /><b /></div>
              <span className="pretty-product-price">YOUR NEW FAVORITE ♡</span>
            </div>
            <span className="pretty-sticker">MADE<br />WITH LOVE</span>
          </div>
        </div>
        <div className="pretty-shop-footer"><span>PRETTY THINGS, MADE BY HAND</span><i /><span>HAIR CLIPS · ACCESSORIES · JOY</span></div>
      </div>
    )
  }

  return (
    <div className={`project-title-poster project-title-poster-${number}`} aria-hidden="true">
      <div className="title-poster-meta">
        <span>Selected website</span>
        <i />
        <span>{number} / 04</span>
      </div>
      <p>{number === '02' ? 'Game on. Vibe on.' : 'Jexi presents'}</p>
      <h4>{name}</h4>
    </div>
  )
}

export default function App() {
  const [showTop, setShowTop] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 700)
      document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`)
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      document.documentElement.style.setProperty(
        '--scroll-progress',
        `${scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0}%`,
      )
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const revealTargets = document.querySelectorAll(
      '.about-grid > article, .section-heading, .project-card, .skills-section > article, .skill-row, .activity-archive-heading, .activity-folder, .contact-section > article',
    )

    if (reducedMotion) {
      revealTargets.forEach((target) => target.classList.add('is-visible'))
      return
    }

    revealTargets.forEach((target) => target.classList.add('reveal-motion'))
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -7% 0px' },
    )
    revealTargets.forEach((target) => revealObserver.observe(target))

    return () => revealObserver.disconnect()
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('main > section[id], main > section [id]')
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveSection(visible.target.id)
      },
      { threshold: [0.25, 0.55], rootMargin: '-15% 0px -45% 0px' },
    )
    sections.forEach((section) => sectionObserver.observe(section))
    return () => sectionObserver.disconnect()
  }, [])

  useEffect(() => {
    const onPointerMove = (event: PointerEvent) => {
      const x = event.clientX / window.innerWidth - 0.5
      const y = event.clientY / window.innerHeight - 0.5
      document.documentElement.style.setProperty('--pointer-x', String(x))
      document.documentElement.style.setProperty('--pointer-y', String(y))
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`
      }
    }
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    return () => window.removeEventListener('pointermove', onPointerMove)
  }, [])

  const handleCardPointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width - 0.5
    const y = (event.clientY - bounds.top) / bounds.height - 0.5
    event.currentTarget.style.setProperty('--card-rx', `${y * -5}deg`)
    event.currentTarget.style.setProperty('--card-ry', `${x * 7}deg`)
    event.currentTarget.style.setProperty('--card-glow-x', `${(x + 0.5) * 100}%`)
    event.currentTarget.style.setProperty('--card-glow-y', `${(y + 0.5) * 100}%`)
  }

  const resetCardPointer = (event: React.PointerEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty('--card-rx', '0deg')
    event.currentTarget.style.setProperty('--card-ry', '0deg')
  }

  return (
    <div className="site-shell">
      <IntroScreen />
      <div className="scroll-progress" aria-hidden="true" />
      <div className="cursor-orbit" ref={cursorRef} aria-hidden="true" />
      <div className="ambient-glow" aria-hidden="true" />

      <aside className="side-rail" aria-label="Portfolio navigation">
        <a className="brand-mark" href="#home" aria-label="Jexi portfolio home">
          <span className="brand-symbol"><span className="brand-logo" /></span>
        </a>
        <nav>
          <a className={activeSection === 'about' ? 'active' : ''} href="#about">
            <NavDoodle type="about" /><span>About</span><i className="nav-hand-ring" />
          </a>
          <a className={activeSection === 'projects' ? 'active' : ''} href="#projects">
            <NavDoodle type="work" /><span>Work</span><i className="nav-hand-ring" />
          </a>
          <a className={activeSection === 'skills' ? 'active' : ''} href="#skills">
            <NavDoodle type="skills" /><span>Skills</span><i className="nav-hand-ring" />
          </a>
          <a className={activeSection === 'contact' ? 'active' : ''} href="#contact">
            <NavDoodle type="contact" /><span>Contact</span><i className="nav-hand-ring" />
          </a>
        </nav>
        <a className="nav-cta" href="mailto:jexequielestanol18@email.com">
          <i className="availability-dot" /><span>Let&apos;s talk</span><ArrowIcon up />
        </a>
      </aside>

      <main id="home">
        <section className="hero page-panel" aria-labelledby="hero-title">
          <div className="hero-topline">
            <span>Website Development</span>
            <span>Portfolio · 2025</span>
          </div>

          <div className="hero-notebook">
            <HeroIllustration />
            <div className="hero-scene-actions">
              <a href="#projects">Explore my work <ArrowIcon /></a>
              <a href="#about">About Jexi</a>
              <a href="#contact">Let&apos;s connect <ArrowIcon up /></a>
            </div>
          </div>

          <div className="belief-board">
            <p>Three things I strongly believe in</p>
            <div className="belief-notes">
              <span>tirelessly<br />pursue clarity.</span>
              <span>software should<br />empower.</span>
              <span>design for<br />moments.</span>
            </div>
          </div>
          <a className="scroll-cue" href="#about">Scroll to explore <ArrowIcon /></a>
        </section>

        <section className="about-grid section-grid" id="about" aria-labelledby="about-title">
          <article className="about-card brown-card">
            <SectionLabel>Meet the creator</SectionLabel>
            <h2 id="about-title">Hey, I&apos;m <em>Jexi</em></h2>
            <p>
              I&apos;m a passionate Information Technology student with a strong interest in web development,
              UI/UX design, and creating digital solutions that are both functional and beautiful.
            </p>
            <p>
              Now in my third year, I&apos;m building a strong foundation in programming, database management,
              and interface design—with the goal of becoming a full-stack developer.
            </p>
          </article>

          <article className="profile-sheet paper-card">
            <div className="binder-clip" aria-hidden="true" />
            <figure className="formal-photo-frame">
              <div className="formal-photo-placeholder">
                <img src="/assets/profile.jpg" alt="Portrait of Jexi" />
              </div>
              <figcaption>hey! it's jexi</figcaption>
            </figure>
            <SectionLabel>Quick profile</SectionLabel>
            <h3>The person behind the pixels</h3>
            <dl className="profile-list">
              <div><dt>Degree</dt><dd>BS Information Technology</dd></div>
              <div><dt>School</dt><dd>Polytechnic University of the Philippines</dd></div>
              <div><dt>Location</dt><dd>Tanauan City, Batangas</dd></div>
              <div><dt>Status</dt><dd>Open to internships &amp; opportunities</dd></div>
              <div><dt>Interests</dt><dd>Web dev, UI/UX, photography, design</dd></div>
            </dl>
            <div className="profile-stats">
              <span><b>3rd</b> year</span>
            </div>
          </article>
        </section>

        <MarqueeBand text="Design with intention · Develop with curiosity" />

        <section className="work-section page-panel" id="projects" aria-labelledby="projects-title">
          <header className="section-heading">
            <div>
              <SectionLabel>Selected works · 2024—2026</SectionLabel>
              <h2 id="projects-title">Project <em>archive</em></h2>
            </div>
            <p>Four projects exploring systems, storytelling, visual design, and community.</p>
          </header>

          <div className="project-grid">
            {projects.map((project) => (
              <article
                className="project-card"
                key={project.name}
                onPointerMove={handleCardPointerMove}
                onPointerLeave={resetCardPointer}
              >
                <div className={`project-image project-visual project-visual-${project.number}`}>
                  <ProjectArtwork number={project.number} name={project.name} />
                </div>
                <div className="project-content">
                  <p className="project-type">Featured project</p>
                  <h3>{project.name}</h3>
                  <p>{project.copy}</p>
                  <div className="tag-row">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <a href="#contact" aria-label={`Ask about ${project.name}`}>
                    Ask about this project <ArrowIcon up />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="skills-section section-grid" id="skills" aria-labelledby="skills-title">
          <article className="skills-intro brown-card">
            <SectionLabel>What I know</SectionLabel>
            <h2 id="skills-title">Tools of<br />the <em>trade</em></h2>
            <p>
              A growing toolkit shaped by coursework, personal projects, and plenty of curiosity.
            </p>
            <Star className="skills-star" />
          </article>

          <article className="skills-list paper-card">
            {skills.map(([name, level], index) => (
              <div className="skill-row" key={name}>
                <span className="skill-index">{String(index + 1).padStart(2, '0')}</span>
                <span className="skill-name">{name}</span>
                <div className="skill-track" aria-label={`${name}: ${level}%`}>
                  <span style={{ width: `${level}%` }} />
                </div>
                <b>{level}%</b>
              </div>
            ))}
          </article>
        </section>

        <section className="activity-archive page-panel" aria-labelledby="activities-title">
          <header className="activity-archive-heading">
            <div>
              <SectionLabel>Practice &amp; progress</SectionLabel>
              <h2 id="activities-title">Webdev <em>activities</em></h2>
            </div>
            <p>A growing file cabinet of coursework, layout studies, and interactive experiments.</p>
          </header>

          <div className="folder-grid">
            {activities.map((activity) => (
              <article className={`activity-folder ${activity.href ? 'is-published' : 'is-upcoming'}`} key={activity.number}>
                <div className="folder-tab">WEBDEV–A{activity.number}</div>
                <div className="folder-paper">
                  <div className="folder-meta">
                    <span>File {activity.number}</span>
                    <span>{activity.status}</span>
                  </div>
                  <div className="folder-icon" aria-hidden="true">
                    <span />
                    <i />
                  </div>
                  <h3>{activity.title}</h3>
                  <p>{activity.description}</p>
                  {activity.href ? (
                    <a href={activity.href} target="_blank" rel="noreferrer">
                      Open activity <ArrowIcon up />
                    </a>
                  ) : (
                    <span className="folder-placeholder">Empty folder · Ready for new work</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <MarqueeBand text="Open to internships · collaborations · creative projects" />

        <section className="contact-section section-grid" id="contact" aria-labelledby="contact-title">
          <article className="contact-main brown-card">
            <SectionLabel>Get in touch</SectionLabel>
            <h2 id="contact-title">Let&apos;s create<br />something <em>good.</em></h2>
            <p>
              I&apos;m open to internship opportunities, freelance projects, and collaborations.
              If you have an idea, I&apos;d love to hear about it.
            </p>
            <a className="big-email" href="mailto:jexequielestanol18@email.com">
              jexequielestanol18@email.com <ArrowIcon up />
            </a>
          </article>

          <article className="contact-details paper-card">
            <SectionLabel>Contact card</SectionLabel>
            <dl>
              <div><dt>Phone</dt><dd><a href="tel:+639550452896">+63 955 045 2896</a></dd></div>
              <div><dt>Location</dt><dd>Tanauan City, Batangas</dd></div>
              <div><dt>Availability</dt><dd>Open for opportunities</dd></div>
            </dl>
            <div className="social-row">
              <a href="https://github.com/jexiestanol" target="_blank" rel="noreferrer" aria-label="GitHub"><SocialIcon name="github" /></a>
              <a href="https://www.facebook.com/jexequiel.estanol.5" target="_blank" rel="noreferrer" aria-label="Facebook"><SocialIcon name="facebook" /></a>
              <a href="https://www.instagram.com/_jexii.e/" target="_blank" rel="noreferrer" aria-label="Instagram"><SocialIcon name="instagram" /></a>
            </div>
            <div className="contact-checklist" aria-label="What I look for">
              <p>What I look for</p>
              <label><input type="checkbox" defaultChecked /> Impactful work</label>
              <label><input type="checkbox" defaultChecked /> Meaningful collaboration</label>
              <label><input type="checkbox" /> A team that loves to learn</label>
            </div>
            <p className="small-print">Information Technology student &amp; aspiring developer.</p>
          </article>
        </section>

        <footer>
          <p>© 2026 Jexequiel M. Estanol</p>
          <p>Designed with curiosity · Built with intention</p>
        </footer>
      </main>

      <button
        className={`back-top ${showTop ? 'visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <ArrowIcon up />
      </button>
    </div>
  )
}
