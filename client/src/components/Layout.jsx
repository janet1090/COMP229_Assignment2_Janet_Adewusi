import { Link } from 'react-router-dom'
import janetLogo from '../assets/janet-logo.svg'
// Displays the shared navigation bar and custom logo.
function Layout() {
  return (
    <header className="site-header">
      <nav className="navigation-bar">
        <Link to="/" className="logo-link" aria-label="Go to Janet's home page">
          <img src={janetLogo} className="site-logo" alt="Janet Adewusi logo" />
        </Link>

        <div className="site-name">
          <p>Adetoun Janet Adewusi</p>
          <span>Software Engineering Technology – AI</span>
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Me</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/education">Education</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact Me</Link>
        </div>
      </nav>
    </header>
  )
}

export default Layout