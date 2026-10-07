import { useState } from 'react'
import { projects } from './projects'
import './App.css'

export default function App() {
  const [query, setQuery] = useState('')
  const [light, setLight] = useState(false)
  const filtered = projects.filter(project => project.name.toLowerCase().includes(query.toLowerCase()))
  return (
    <div className={`portfolio ${light ? 'light' : ''}`}>
      <a className="skip" href="#main">Skip to content</a>
      <header>
        <a className="wordmark" href="#main">MI<span>.</span></a>
        <nav aria-label="Main navigation"><a href="#projects">Projects</a><a href="#about">About</a></nav>
        <button onClick={() => setLight(!light)} aria-pressed={light}>{light ? 'Dark theme' : 'Light theme'}</button>
      </header>
      <main id="main">
        <section className="intro">
          <p className="eyebrow">SOFTWARE & AI project</p>
          <h1>Syed Muhammad<br /><span>Imad.</span></h1>
          <p className="lead">Building software, one tested idea at a time.</p>
          <a className="action" href="#projects">Explore the projects ↗</a>
          <div className="decoration" aria-hidden="true"><i /><i /><i /></div>
        </section>
        <section id="projects">
          <div className="section-head"><div><p className="eyebrow">SELECTED WORK</p><h2>Projects with working code.</h2></div>
            <label>Find a project<input type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search projects" /></label>
          </div>
          <p className="result-count" aria-live="polite">{filtered.length} projects</p>
          <div className="project-grid">
            {filtered.map((project, index) => <article key={project.url}>
              <p className="project-index">{String(index + 1).padStart(2, '0')} / project</p>
              <h3>{project.name}</h3><p>{project.description}</p>
              <a href={project.url} target="_blank" rel="noopener noreferrer">View repository ↗</a>
            </article>)}
          </div>
          {!filtered.length && <p className="empty">No matching projects. Try a different search.</p>}
        </section>
        <section id="about" className="about"><p className="eyebrow">THE APPROACH</p><h2>Learn. Build. Test.</h2>
          <p>These repositories cover programming, data analysis, and machine learning project. Each project records what was checked and the limits of those checks.</p>
          <a href="https://github.com/SyedMuhammadImad" target="_blank" rel="noopener noreferrer">Explore my GitHub ↗</a>
        </section>
      </main>
      <footer><span>Syed Muhammad Imad</span><span>Code, experiments, and learning.</span></footer>
    </div>
  )
}
