import React from 'react'
import Title from './Title'
import Project from './Project'
import { Link } from 'gatsby'

export default function Projects({ projects, title, showLink }) {
  return (
    <div>
      <section>
        <Title title={title} name="title" />
        <div className="section-center">
          {projects.map((project, index) => (
            <Project key={project.id} index={index} {...project} />
          ))}
        </div>
        {showLink && (
          <Link to="/projects" className="btn center-btn">
            Projects
          </Link>
        )}
      </section>
    </div>
  )
}
