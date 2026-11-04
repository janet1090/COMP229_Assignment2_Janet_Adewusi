import { Link } from 'react-router-dom'
import profileImage from '../assets/profile.jpeg'

function Home() {
  return (
    <main className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <p className="eyebrow">SOFTWARE ENGINEERING TECHNOLOGY - AI STUDENT</p>

          <h1>
            Building thoughtful digital experiences with
            <span> purpose and creativity.</span>
          </h1>

          <p className="hero-introduction">
            Hi, I am Adetoun Janet Adewusi, a Software Engineering Technology -
            Artificial Intelligence student at Centennial College. I enjoy turning
            ideas into useful, accessible, and visually engaging applications.
          </p>

          <div className="hero-buttons">
            <Link className="primary-button" to="/projects">
              Explore My Projects
            </Link>

            <Link className="secondary-button" to="/contact">
              Contact Me
            </Link>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <img
            src={profileImage}
            className="profile-image"
            alt="Adetoun Janet Adewusi"
          />
          <div className="image-accent-card">
            <span>Based in Toronto, Canada</span>
            <strong>Learning. Building. Growing.</strong>
          </div>
        </div>
      </section>

      <section className="mission-section">
        <p className="section-label">MY MISSION</p>
        <h2>Technology should be useful, human, and made with care.</h2>
        <p>
          My mission is to keep developing strong technical and problem-solving
          skills while creating reliable software that makes everyday experiences
          simpler. I am especially interested in web development, artificial
          intelligence, and building solutions that create meaningful impact.
        </p>
      </section>

      <section className="quick-links-section">
        <article className="quick-link-card">
          <span>01</span>
          <h3>Projects</h3>
          <p>See the programming, AI, and software projects I have developed.</p>
          <Link to="/projects">View projects →</Link>
        </article>

        <article className="quick-link-card">
          <span>02</span>
          <h3>Education</h3>
          <p>Explore my program, technical focus, and certifications.</p>
          <Link to="/education">View education →</Link>
        </article>

        <article className="quick-link-card">
          <span>03</span>
          <h3>Let’s Connect</h3>
          <p>Have a question, opportunity, or collaboration in mind?</p>
          <Link to="/contact">Contact me →</Link>
        </article>
      </section>
    </main>
  )
}

export default Home