function Services() {
  return (
    <main className="page-section services-page">
      <p className="section-label">WHAT I CAN HELP WITH</p>
      <h1 className="page-heading">Practical skills for thoughtful solutions.</h1>
      <p className="page-description">
        I am continuing to grow as a developer and enjoy contributing to projects
        where I can combine technical skills, organization, and user-focused
        thinking.
      </p>

      <section className="services-grid">
        <article className="service-card">
          <span className="service-icon">01</span>
          <h2>Front-End Web Development</h2>
          <p>
            Creating responsive, clean, and user-friendly web pages with React,
            HTML, CSS, and JavaScript.
          </p>
          <ul>
            <li>React component development</li>
            <li>Responsive page layouts</li>
            <li>Navigation and interactive forms</li>
          </ul>
        </article>

        <article className="service-card">
          <span className="service-icon">02</span>
          <h2>Java Application Development</h2>
          <p>
            Building beginner-to-intermediate Java applications that use
            object-oriented programming, methods, classes, and logical game flow.
          </p>
          <ul>
            <li>Console applications</li>
            <li>Classes and methods</li>
            <li>Problem-solving logic</li>
          </ul>
        </article>

        <article className="service-card">
          <span className="service-icon">03</span>
          <h2>AI and Python Project Support</h2>
          <p>
            Supporting early-stage AI and Python projects through research,
            testing, data exploration, and clear documentation.
          </p>
          <ul>
            <li>Python programming</li>
            <li>Agent-based project concepts</li>
            <li>Testing and documentation</li>
          </ul>
        </article>

        <article className="service-card">
          <span className="service-icon">04</span>
          <h2>Project Documentation</h2>
          <p>
            Organizing project explanations, testing notes, technical reports,
            and presentations so work is easy to understand and maintain.
          </p>
          <ul>
            <li>Project reports</li>
            <li>Testing summaries</li>
            <li>Clear technical communication</li>
          </ul>
        </article>
      </section>
    </main>
  )
}

export default Services