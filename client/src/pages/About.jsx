import heroImage from '../assets/profile.jpeg'

function About() {
  return (
    <main className="page-section about-page">
      <p className="section-label">ABOUT ME</p>
      <h1 className="page-heading">Meet Adetoun Janet Adewusi.</h1>

      <div className="about-grid">
        <img
          src={heroImage}
          className="about-image"
          alt="Adetoun Janet Adewusi"
        />

        <div className="about-content">
          <p className="page-description">
            I am Adetoun Janet Adewusi, a Software Engineering Technology -
            Artificial Intelligence student at Centennial College. I am building
            my skills in programming, web development, artificial intelligence,
            and software design while working toward a career where I can create
            useful technology for real people.
          </p>

          <p className="page-description">
            I value curiosity, creativity, continuous learning, and clear
            communication. I enjoy taking an idea from its first stage and
            developing it into an organized, user-friendly solution.
          </p>

          <div className="skill-tags">
            <span>React</span>
            <span>Java</span>
            <span>Python</span>
            <span>HTML & CSS</span>
            <span>Git & GitHub</span>
            <span>Artificial Intelligence</span>
          </div>

          {/* We will add your actual resume PDF into the public folder later. */}
          <a
            className="primary-button resume-button"
            href="/Adetoun-Janet-Adewusi-Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View My Résumé (PDF)
          </a>
        </div>
      </div>
    </main>
  )
}

export default About