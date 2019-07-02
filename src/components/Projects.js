import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

const Projects = ({ imgData, title, desc, slug }) => {
  return (
    <div>
      <Link to={`/${slug}/`}>
        <Image fluid={imgData} alt={title} />
      </Link>
      <h2>
        <Link to={`/${slug}`}>{title}</Link>
      </h2>
      <p>{desc}</p>
      <p>
        <Link to={`/${slug}/`}>View this project &rarr; </Link>
      </p>
    </div>
  )
}

export default Projects
