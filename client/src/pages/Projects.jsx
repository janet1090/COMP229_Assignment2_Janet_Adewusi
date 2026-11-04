import heroImage from '../assets/hero.png'

function Projects() {
  return (
    <main className="page-section projects-page">
      <p className="section-label">FEATURED WORK</p>
      <h1 className="page-heading">Projects I am building.</h1>
      <p className="page-description">
        These projects show my growing experience in web development, interface
        design, programming, and working with data.
      </p>

      <section className="projects-grid">
        <article className="project-card">
          <img src={heroImage} alt="Movie website project preview" />

          <div className="project-card-content">
            <p className="project-number">01 / WEB DEVELOPMENT</p>
            <h2>Movie Website</h2>
            <p>
              A movie-focused website created with an engaging interface that
              helps users explore movie content in a clear and visually
              appealing way.
            </p>
            <p>
              <strong>My role:</strong> Designed the page layout, navigation,
              visual structure, and user experience.
            </p>
            <p>
              <strong>Outcome:</strong> Created a polished movie website
              interface that demonstrates front-end development skills.
            </p>
          </div>
        </article>

        <article className="project-card">
          <img src={heroImage} alt="Weather application project preview" />

          <div className="project-card-content">
            <p className="project-number">02 / IN PROGRESS</p>
            <h2>Weather App</h2>
            <p>
              An in-progress weather application with an interface designed to
              present weather information in a simple, organized format.
            </p>
            <p>
              <strong>My role:</strong> Designed and developed the front-end
              interface and planned the weather-data features.
            </p>
            <p>
              <strong>Current stage:</strong> The interface is developed, and
              future work will focus on completing the data functionality.
            </p>
          </div>
        </article>

        <article className="project-card">
          <img src={heroImage} alt="Database project preview" />

          <div className="project-card-content">
            <p className="project-number">03 / DATABASE FUNDAMENTALS</p>
            <h2>Database Project</h2>
            <p>
              A foundational database project created to practice organizing
              structured information and understanding how data is stored and
              managed.
            </p>
            <p>
              <strong>My role:</strong> Worked with database concepts, records,
              fields, tables, and basic data organization.
            </p>
            <p>
              <strong>Outcome:</strong> Built a practical introduction to data
              management and database design.
            </p>
          </div>
        </article>
      </section>
    </main>
  )
}

export default Projects