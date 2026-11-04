function Education() {
  return (
    <main className="page-section education-page">
      <p className="section-label">EDUCATION & DEVELOPMENT</p>
      <h1 className="page-heading">Learning with intention.</h1>

      <section className="education-highlight">
        <p className="project-number">2025 - PRESENT</p>
        <h2>Software Engineering Technology - Artificial Intelligence</h2>
        <h3>Centennial College, Toronto, Ontario</h3>
        <p>
          Advanced Diploma program focused on programming, web application
          development, software engineering practices, artificial intelligence,
          databases, and systems development.
        </p>
      </section>

      <section className="education-columns">
        <div>
          <h2>Relevant Coursework</h2>

          <div className="course-list">
            <span>Web Application Development</span>
            <span>Programming Using Java</span>
            <span>Introduction to Artificial Intelligence</span>
            <span>Software Engineering Principles</span>
            <span>Linux, Unix & Virtualization</span>
            <span>Statistics and Data Analysis</span>
            <span>Object-Oriented Programming</span>
            <span>Software Architecture</span>
          </div>
        </div>

        <div>
          <h2>Professional Certifications</h2>

          <div className="certificate-list">
            <article>
              <strong>Smart Serve Ontario</strong>
              <span>Completed June 2026 · Valid until June 2031</span>
              <a
                className="certificate-button"
                href="/SmartServeOntario_eCertificate_2031_06_11.pdf"
                target="_blank"
                rel="noreferrer"
              >
                View Certificate
              </a>
            </article>

            <article>
              <strong>Food Handler Certificate</strong>
              <span>Completed September 2026</span>
              <a
                className="certificate-button"
                href="/Food Handler wall english certificate (1).pdf"
                target="_blank"
                rel="noreferrer"
              >
                View Certificate
              </a>
            </article>

            <article>
              <strong>WHMIS 2025 - GHS</strong>
              <span>Completed June 2026 · Valid until June 2029</span>
              <a
                className="certificate-button"
                href="/5713252(1).pdf"
                target="_blank"
                rel="noreferrer"
              >
                View Certificate
              </a>
            </article>

            <article>
              <strong>AODA Workplace Wellbeing</strong>
              <span>Completed September 2026</span>
              <a
                className="certificate-button"
                href="/certificate.pdf"
                target="_blank"
                rel="noreferrer"
              >
                View Certificate
              </a>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Education