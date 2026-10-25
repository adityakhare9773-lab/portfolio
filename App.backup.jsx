
import { useEffect } from 'react'
import './App.css'
import Chatbot from './Chatbot'

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll(
      '.about, .skills, .projects, .contact, .vision-section'
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    sections.forEach((section) => {
      section.classList.add('fade-in-section')
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="portfolio">
      <nav className="navbar">
        <a href="#home" className="logo">AK<span>.</span></a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Focus</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">
          Let's Connect ↗
        </a>
      </nav>

      <main>
        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot"></span>
              SECOND-YEAR B.TECH STUDENT
            </div>

            <p className="eyebrow">
              HELLO, I'M ADITYA KUMAR KHARE
            </p>

            <h1>
              Building ideas
              <br />
              into <span>reality.</span>
            </h1>

            <p className="hero-description">
              AI/ML Engineering Student · Aspiring AI Engineer · Builder.
              I'm learning to build practical technology that solves
              real-world problems.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                Explore My Projects ↗
              </a>

              <a href="#contact" className="secondary-button">
                Contact Me
              </a>
            </div>

            <div className="hero-footer">
              <span>AI / MACHINE LEARNING</span>
              <span>C++ & DSA</span>
              <span>AGENTIC AI</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>

            <div className="visual-card profile-card">
              <img
                src="/profile.jpeg.jpeg"
                alt="Aditya Kumar Khare"
                className="profile-photo"
              />

              <span className="card-label">
                AI/ML ENGINEERING STUDENT
              </span>

              <h2>Aditya Kumar Khare</h2>
              <h2 className="muted-heading">
                Curious mind. Builder's mindset.
              </h2>

              <div className="card-divider"></div>

              <div className="focus-row">
                <span>01 / AI & MACHINE LEARNING</span>
                <span>↗</span>
              </div>

              <div className="focus-row">
                <span>02 / COMPUTER VISION</span>
                <span>↗</span>
              </div>

              <div className="focus-row">
                <span>03 / AGENTIC AI</span>
                <span>↗</span>
              </div>
            </div>

            <div className="floating-tag tag-top">AI / ML</div>
            <div className="floating-tag tag-bottom">C++ · REACT</div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section about" id="about">
          <p className="section-label">01 — ABOUT ME</p>

          <h2>
            Learning today.
            <br />
            <span>Building for tomorrow.</span>
          </h2>

          <p>
            I'm a second-year B.Tech student specializing in Artificial
            Intelligence and Machine Learning at ABES Engineering College,
            Ghaziabad. I'm building my foundations in programming,
            data structures, AI/ML, and software development.
          </p>

          <p style={{ marginTop: '18px' }}>
            I believe engineering is more than writing code. It's about
            identifying problems, understanding the people affected by
            them, and building practical solutions.
          </p>

          <p style={{ marginTop: '18px' }}>
            I'm exploring AI-powered applications, drone technology,
            and research-driven projects. My focus is on developing
            strong fundamentals, building consistently, and turning
            ideas into working products.
          </p>

          <div className="skill-list">
            <span>B.Tech — AI & ML</span>
            <span>ABES Engineering College</span>
            <span>YGPA: 7.39</span>
            <span>Second Year</span>
          </div>
        </section>

        {/* CURRENT FOCUS */}
        <section className="section skills" id="skills">
          <p className="section-label">02 — CURRENT FOCUS</p>

          <h2>What I'm learning</h2>

          <p style={{ color: '#a1a1aa', lineHeight: 1.8 }}>
            Building strong fundamentals before moving on to more
            advanced engineering and AI projects.
          </p>

          <div className="skill-list">
            <span>C++</span>
            <span>Data Structures & Algorithms</span>
            <span>AI / ML Fundamentals</span>
            <span>Computer Vision</span>
            <span>HTML & CSS</span>
            <span>JavaScript</span>
            <span>Git & GitHub</span>
            <span>Agentic AI</span>
            <span>Practical Automation</span>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section projects" id="projects">
          <p className="section-label">
            03 — PROJECTS & EXPLORATION
          </p>

          <h2>Things I'm building.</h2>

          <p
            style={{
              color: '#a1a1aa',
              lineHeight: 1.8,
              marginBottom: '30px',
            }}
          >
            Practical projects, technical experiments, and ideas
            I'm exploring as I grow my engineering skills.
          </p>

          <div className="project-grid">
            <article className="project-card">
              <span className="project-number">
                01 / WEB DEVELOPMENT
              </span>

              <h3>Student Attendance App</h3>

              <p>
                A React-based attendance application designed to
                record student attendance with Present and Absent
                controls, automatic student navigation, attendance
                counts, and a summary at the end.
              </p>

              <p className="project-status">
                Status: Built and tested locally
              </p>

              <div className="project-tech">
                <span>React</span>
                <span>JavaScript</span>
                <span>Express</span>
                <span>SQLite</span>
              </div>

              <a
                href="https://github.com/adityakhare9773-lab"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                Explore GitHub ↗
              </a>
            </article>

            <article className="project-card">
              <span className="project-number">
                02 / ACADEMIC EXPLORATION
              </span>

              <h3>Early Crop Disease Detection</h3>

              <p>
                Exploring how image processing and AI could help
                identify early signs of crop diseases from images.
                The goal is to investigate possible approaches
                to agricultural image analysis.
              </p>

              <p className="project-status">
                Status: Research & Exploration
              </p>

              <div className="project-tech">
                <span>Image Processing</span>
                <span>Agricultural AI</span>
              </div>

              <a
                href="https://github.com/adityakhare9773-lab"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                Explore GitHub ↗
              </a>
            </article>

            <article className="project-card">
              <span className="project-number">
                03 / FUTURE EXPLORATION
              </span>

              <h3>AI & Drone Technology</h3>

              <p>
                Exploring potential applications of AI with drones,
                including aerial image analysis, object detection,
                and intelligent monitoring systems.
              </p>

              <p className="project-status">
                Status: Future Exploration
              </p>

              <div className="project-tech">
                <span>Computer Vision</span>
                <span>AI</span>
                <span>Drones</span>
              </div>

              <a
                href="https://github.com/adityakhare9773-lab"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                Explore GitHub ↗
              </a>
            </article>

            <article className="project-card">
              <span className="project-number">
                04 / CURRENT LEARNING
              </span>

              <h3>Agentic AI</h3>

              <p>
                Learning how AI agents can use tools, work through
                tasks, and automate workflows. Exploring the
                fundamentals needed to develop practical AI systems.
              </p>

              <p className="project-status">
                Status: Currently Learning
              </p>

              <div className="project-tech">
                <span>AI Agents</span>
                <span>Tools</span>
                <span>Automation</span>
              </div>
            </article>

            <article className="project-card">
              <span className="project-number">
                05 / WEB DEVELOPMENT
              </span>

              <h3>Personal Portfolio</h3>

              <p>
                A personal website built to showcase my education,
                technical interests, projects, and learning journey.
                It includes responsive layouts, hover effects,
                and scroll-triggered animations.
              </p>

              <p className="project-status">
                Status: In Progress
              </p>

              <div className="project-tech">
                <span>React</span>
                <span>JavaScript</span>
                <span>CSS</span>
              </div>

              <a
                href="https://github.com/adityakhare9773-lab"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                Explore GitHub ↗
              </a>
            </article>
          </div>

          <p className="project-note">
            Project descriptions reflect their current development
            or exploration stage. Links currently lead to my GitHub
            profile; individual repositories can be linked as they
            become available.
          </p>
        </section>

        {/* VISION */}
        <section className="section vision-section">
          <p className="section-label">04 — LONG-TERM VISION</p>

          <h2>
            Engineering with
            <br />
            <span>purpose.</span>
          </h2>

          <p
            style={{
              maxWidth: '700px',
              color: '#a1a1aa',
              lineHeight: 1.9,
              fontSize: '16px',
            }}
          >
            My long-term goal is to become a strong AI engineer,
            pursue advanced technical learning and research, and
            eventually build products that solve meaningful real-world
            problems.
          </p>
        </section>

        {/* CONTACT */}
        <section className="section contact" id="contact">
          <p className="section-label">05 — GET IN TOUCH</p>

          <h2>
            Let's build
            <br />
            <span>something meaningful.</span>
          </h2>

          <p>
            I'm interested in learning, collaborating, exploring
            technical ideas, and building useful things.
          </p>

          <div className="hero-buttons">
            <a
              className="primary-button"
              href="mailto:adityakhare9773@gmail.com"
            >
              Send Me an Email ↗
            </a>

            <a
              className="secondary-button"
              href="https://github.com/adityakhare9773-lab"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              className="secondary-button"
              href="https://www.linkedin.com/in/aditya-kumar-khare-17425b392"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>

          <div className="card-divider"></div>

          <p style={{ overflowWrap: 'anywhere' }}>
            Email: adityakhare9773@gmail.com
          </p>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="logo">AK<span>.</span></a>

        <p>Learning. Building. Improving.</p>

        <span>© 2026 Aditya Kumar Khare</span>
      </footer>

      {/* AI CHATBOT */}
      <Chatbot />
    </div>
  )
}

export default App
