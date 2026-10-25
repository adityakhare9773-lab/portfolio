import { useEffect } from "react";
import "./App.css";
import Chatbot from "./Chatbot";
import ThreeDScene from "./components/ThreeDScene";

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll(
      ".about, .skills, .projects, .vision-section, .contact"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    sections.forEach((section) => {
      section.classList.add("fade-in-section");
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio">
      <nav className="navbar">
        <a href="#home" className="logo">
          AK<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
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
              <span className="status-dot" />
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

          {/* ONE 3D SCENE ONLY */}
          <div className="hero-visual">
            <div className="three-d-scene-wrap" aria-hidden="true">
              <ThreeDScene />
            </div>

            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />

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
              <p className="muted-heading">
                Curious mind. Builder's mindset.
              </p>

              <div className="card-divider" />

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
        <section className="section about-section" id="about">
  <div className="about-layout">
    <div className="about-heading">
      <p className="section-label">
        <span className="about-label-dot" />
        01 / ABOUT ME
      </p>

      <h2>
        Learning today.
        <br />
        <span>Building for tomorrow.</span>
      </h2>

      <p className="about-lead">
        I’m Aditya Kumar Khare — an AI/ML engineering student
        interested in turning ideas into useful technology.
      </p>

      <div className="about-tags">
        <span>C++ & DSA</span>
        <span>Artificial Intelligence</span>
        <span>Web Development</span>
      </div>
    </div>

    <div className="about-content">
      <article className="about-feature">
        <span className="about-feature-number">01</span>
        <div>
          <h3>Engineering mindset</h3>
          <p>
            I enjoy understanding problems, exploring how things work,
            and developing practical solutions instead of just writing code.
          </p>
        </div>
        <span className="about-feature-symbol">↗</span>
      </article>

      <article className="about-feature">
        <span className="about-feature-number">02</span>
        <div>
          <h3>Exploring AI & ML</h3>
          <p>
            I’m building my fundamentals in machine learning, intelligent
            applications, and research-driven projects.
          </p>
        </div>
        <span className="about-feature-symbol">⌘</span>
      </article>

      <article className="about-feature">
        <span className="about-feature-number">03</span>
        <div>
          <h3>Building with purpose</h3>
          <p>
            From web applications to exploring drone technology, I’m
            learning by experimenting, building, and improving consistently.
          </p>
        </div>
        <span className="about-feature-symbol">✳</span>
      </article>
    </div>
  </div>

  <div className="about-stats">
    <div className="about-stat">
      <span className="about-stat-value">02<span>nd</span></span>
      <span className="about-stat-label">YEAR OF B.TECH</span>
    </div>

    <div className="about-stat">
      <span className="about-stat-value">7.39</span>
      <span className="about-stat-label">YEARLY GPA</span>
    </div>

    <div className="about-stat">
      <span className="about-stat-value">2029</span>
      <span className="about-stat-label">EXPECTED GRADUATION</span>
    </div>

    <div className="about-stat about-stat-college">
      <span className="about-stat-value">ABES</span>
      <span className="about-stat-label">ENGINEERING COLLEGE</span>
    </div>
  </div>
</section>

        <section className="section focus-section" id="focus">
  <div className="focus-heading">
    <p className="section-label">
      <span className="about-label-dot" />
      02 / CURRENT FOCUS
    </p>

    <h2>
      Learning the fundamentals.
      <br />
      <span>Building toward AI engineering.</span>
    </h2>

    <p className="focus-intro">
      I’m strengthening my core skills through consistent learning,
      practical experiments, and projects.
    </p>
  </div>

  <div className="focus-grid">
    <article className="focus-card">
      <div className="focus-card-top">
        <span className="focus-icon"><span>01</span></span>
        <span className="focus-arrow">↗</span>
      </div>
      <p className="focus-category">CORE FUNDAMENTALS</p>
      <h3>Programming & DSA</h3>
      <p className="focus-description">
        Building problem-solving skills with C++, data structures,
        algorithms, and regular practice.
      </p>
      <div className="focus-tags">
        <span>C++</span>
        <span>DSA</span>
        <span>Problem Solving</span>
      </div>
    </article>

    <article className="focus-card focus-card-cyan">
      <div className="focus-card-top">
        <span className="focus-icon"><span>02</span></span>
        <span className="focus-arrow">↗</span>
      </div>
      <p className="focus-category">INTELLIGENT SYSTEMS</p>
      <h3>AI & Machine Learning</h3>
      <p className="focus-description">
        Learning ML concepts and exploring computer vision
        through research and practical experiments.
      </p>
      <div className="focus-tags">
        <span>AI / ML</span>
        <span>Computer Vision</span>
      </div>
    </article>

    <article className="focus-card">
      <div className="focus-card-top">
        <span className="focus-icon"><span>03</span></span>
        <span className="focus-arrow">↗</span>
      </div>
      <p className="focus-category">APPLICATION DEVELOPMENT</p>
      <h3>Web Development</h3>
      <p className="focus-description">
        Developing interactive websites and learning how frontend
        interfaces connect with application logic.
      </p>
      <div className="focus-tags">
        <span>HTML & CSS</span>
        <span>JavaScript</span>
        <span>React</span>
      </div>
    </article>

    <article className="focus-card focus-card-cyan">
      <div className="focus-card-top">
        <span className="focus-icon"><span>04</span></span>
        <span className="focus-arrow">↗</span>
      </div>
      <p className="focus-category">DEVELOPER WORKFLOW</p>
      <h3>Tools & Automation</h3>
      <p className="focus-description">
        Improving my development workflow with version control,
        GitHub, and practical automation.
      </p>
      <div className="focus-tags">
        <span>Git</span>
        <span>GitHub</span>
        <span>Automation</span>
      </div>
    </article>
  </div>

  <div className="focus-feature">
    <div className="focus-feature-icon">✳</div>

    <div className="focus-feature-content">
      <p className="focus-category">EXPLORING NEXT</p>
      <h3>Agentic AI & Intelligent Systems</h3>
      <p>
        Exploring how AI agents can use tools, reason through tasks,
        and connect workflows to build useful applications.
      </p>
    </div>

    <span className="focus-feature-label">IN EXPLORATION</span>
  </div>
</section>

        
{/* PROJECTS */}
<section className="section projects" id="projects">
  <div className="projects-heading">
    <div>
      <p className="section-label">03 — PROJECTS & EXPLORATION</p>
      <h2>
        Ideas into <span>experiments.</span>
      </h2>
    </div>

    <p className="section-intro projects-intro">
      A collection of things I'm building, problems I'm exploring,
      and technologies I'm learning along the way.
    </p>
  </div>

  <div className="project-grid">

    {/* PROJECT 01 */}
    <article className="project-card project-featured">
      <div className="project-card-top">
        <span className="project-number">01 / WEB DEVELOPMENT</span>
        <span className="project-icon">↗</span>
      </div>

      <div className="project-visual attendance-visual">
        <div className="mini-dashboard">
          <div className="mini-dashboard-top">
            <span className="mini-dot"></span>
            <span className="mini-dot"></span>
            <span className="mini-dot"></span>
            <span className="mini-dashboard-title">ATTENDANCE / OVERVIEW</span>
          </div>

          <div className="mini-dashboard-content">
            <div className="mini-stat">
              <span>Students</span>
              <strong>40</strong>
            </div>
            <div className="mini-stat">
              <span>Present</span>
              <strong className="stat-cyan">✓</strong>
            </div>
            <div className="mini-stat">
              <span>Absent</span>
              <strong className="stat-purple">—</strong>
            </div>
          </div>

          <div className="mini-progress">
            <span></span>
          </div>
          <p className="mini-caption">STUDENT RECORD SYSTEM</p>
        </div>
      </div>

      <div className="project-title-row">
        <h3>Student Attendance App</h3>
        <span className="project-status-badge status-built">
          <i></i> Built locally
        </span>
      </div>

      <p>
        A React-based attendance tool with Present and Absent controls,
        automatic student navigation, attendance counts, and an end-of-session
        summary.
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
        Explore GitHub <span>↗</span>
      </a>
    </article>

    {/* PROJECT 02 */}
    <article className="project-card">
      <div className="project-card-top">
        <span className="project-number">02 / ACADEMIC EXPLORATION</span>
        <span className="project-icon">⌁</span>
      </div>

      <div className="project-visual crop-visual">
        <div className="crop-orbit crop-orbit-one"></div>
        <div className="crop-orbit crop-orbit-two"></div>
        <div className="crop-center">✳</div>
        <span className="crop-label crop-label-one">IMAGE ANALYSIS</span>
        <span className="crop-label crop-label-two">EARLY DETECTION</span>
        <span className="crop-label crop-label-three">AI RESEARCH</span>
      </div>

      <div className="project-title-row">
        <h3>Early Crop Disease Detection</h3>
        
        <span className="project-status-badge status-research">
          <i></i> Research
        </span>
      </div>

      <p>
        Exploring image processing and AI approaches that could help identify
        early signs of crop disease and support agricultural image analysis.
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
        Explore GitHub <span>↗</span>
      </a>
    </article>

    {/* PROJECT 03 */}
    <article className="project-card">
      <div className="project-card-top">
        <span className="project-number">03 / FUTURE EXPLORATION</span>
        <span className="project-icon">⌁</span>
      </div>

      <div className="project-visual drone-visual">
        <div className="drone-crosshair"></div>
        <div className="drone-target">
          <div className="drone-target-core"></div>
        </div>
        <span className="drone-coordinate coordinate-one">VISION / 01</span>
        <span className="drone-coordinate coordinate-two">OBJECT TRACKING</span>
        <span className="drone-scanline"></span>
      </div>

      <div className="project-title-row">
        <h3>AI & Drone Technology</h3>
        <span className="project-status-badge status-future">
          <i></i> Exploring
        </span>
      </div>

      <p>
        Exploring potential uses of AI with drones, including aerial image
        analysis, object detection, and intelligent monitoring systems.
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
        Explore GitHub <span>↗</span>
      </a>
    </article>

    {/* PROJECT 04 */}
    <article className="project-card">
      <div className="project-card-top">
        <span className="project-number">04 / CURRENT LEARNING</span>
        <span className="project-icon">✳</span>
      </div>

      <div className="project-visual agent-visual">
        <div className="agent-node agent-node-main">AI</div>
        <div className="agent-node agent-node-top">PLAN</div>
        <div className="agent-node agent-node-left">TOOL</div>
        <div className="agent-node agent-node-right">ACT</div>
        <div className="agent-node agent-node-bottom">RESULT</div>
        <div className="agent-connection agent-line-one"></div>
        <div className="agent-connection agent-line-two"></div>
        <div className="agent-connection agent-line-three"></div>
        <div className="agent-connection agent-line-four"></div>
      </div>

      <div className="project-title-row">
        <h3>Agentic AI</h3>
        <span className="project-status-badge status-learning">
          <i></i> Learning
        </span>
      </div>

      <p>
        Learning how AI agents can use tools, break down tasks, and automate
        workflows to build more capable, practical AI systems.
      </p>

      <div className="project-tech">
        <span>AI Agents</span>
        <span>Tools</span>
        <span>Automation</span>
      </div>
    </article>

    {/* PROJECT 05 */}
    <article className="project-card project-portfolio-card">
      <div className="project-card-top">
        <span className="project-number">05 / WEB DEVELOPMENT</span>
        <span className="project-icon">⌘</span>
      </div>

      <div className="project-visual portfolio-visual">
        <div className="portfolio-window">
          <div className="portfolio-window-bar">
            <span></span><span></span><span></span>
          </div>
          <div className="portfolio-window-body">
            <span className="portfolio-kicker">DEVELOPER PORTFOLIO</span>
            <div className="portfolio-line portfolio-line-long"></div>
            <div className="portfolio-line portfolio-line-purple"></div>
            <div className="portfolio-line portfolio-line-short"></div>
            <div className="portfolio-window-pills">
              <span></span><span></span><span></span>
            </div>
          </div>
        </div>
      </div>

      <div className="project-title-row">
        <h3>Personal Portfolio</h3>
        <span className="project-status-badge status-learning">
          <i></i> In progress
        </span>
      </div>

      <p>
        A personal website showcasing my education, skills, projects, and
        learning journey, with responsive design, interactive details,
        and a 3D visual scene.
      </p>

      <div className="project-tech">
        <span>React</span>
        <span>Three.js</span>
        <span>JavaScript</span>
        <span>CSS</span>
      </div>

      <a
        href="https://github.com/adityakhare9773-lab"
        target="_blank"
        rel="noreferrer"
        className="project-link"
      >
        Explore GitHub <span>↗</span>
      </a>
    </article>

  </div>

  <div className="project-note">
    <span className="project-note-mark">✳</span>
    <p>
      I'm documenting my progress as I learn. Some entries are active projects,
      while others represent research interests and future directions.
    </p>
  </div>
</section>


        {/* VISION */}
        <section className="section vision-section" id="vision">
          <div className="vision-layout">
            <div className="vision-heading">
              <p className="section-label">04 — THE BIGGER PICTURE</p>
              <h2>
                Beyond code.
                <br />
                <span>Built with purpose.</span>
              </h2>
              <p className="vision-intro">
                My goal isn't just to use AI. It's to understand it,
                build with it, and turn ideas into technology that
                solves real problems.
              </p>
            </div>

            <div className="vision-cards">
              <article className="vision-card">
                <span className="vision-index">01 / ENGINEERING</span>
                <div className="vision-icon">⌘</div>
                <h3>Strong Foundations</h3>
                <p>
                  Master programming, data structures, algorithms,
                  and the fundamentals behind intelligent systems.
                </p>
              </article>

              <article className="vision-card">
                <span className="vision-index">02 / INTELLIGENCE</span>
                <div className="vision-icon">✳</div>
                <h3>Explore AI</h3>
                <p>
                  Explore machine learning, computer vision,
                  and AI agents through practical experiments.
                </p>
              </article>

              <article className="vision-card">
                <span className="vision-index">03 / IMPACT</span>
                <div className="vision-icon">↗</div>
                <h3>Build What Matters</h3>
                <p>
                  Turn research, curiosity, and real-world problems
                  into useful products and meaningful solutions.
                </p>
              </article>
            </div>

            <div className="vision-bottom">
              <span>THE DIRECTION</span>
              <p>Learn deeply. Build consistently. Keep improving.</p>
              <span className="vision-line" />
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section contact" id="contact">
          <div className="contact-panel">
            <div className="contact-topline">
              <span className="contact-pulse" />
              OPEN TO LEARNING & COLLABORATION
            </div>

            <p className="section-label">05 — LET'S CONNECT</p>
            <h2>
              Have an idea?
              <br />
              <span>Let's build it.</span>
            </h2>

            <p className="contact-description">
              Interested in AI, engineering projects, or exchanging ideas?
              I'm always looking to learn, collaborate, and build something useful.
            </p>

            <div className="contact-actions">
              <a
                className="primary-button"
                href="mailto:adityakhare9773@gmail.com"
              >
                Start a Conversation ↗
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

            <div className="contact-divider" />

            <div className="contact-email-row">
              <div>
                <span className="contact-meta">PREFER EMAIL?</span>
                <p>adityakhare9773@gmail.com</p>
              </div>
              <a
                className="email-arrow"
                href="mailto:adityakhare9773@gmail.com"
                aria-label="Send email"
              >
                ↗
              </a>
            </div>

            <div className="contact-decoration" aria-hidden="true">
              AK<span>.</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="logo">
          AK<span>.</span>
        </a>
        <p>Learning. Building. Improving.</p>
        <span>© 2026 Aditya Kumar Khare</span>
      </footer>

      <Chatbot />
    </div>
  );
}

export default App;