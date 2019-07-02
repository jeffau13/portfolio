import React from "react"
import Layout from "../components/Layout"
import { graphql, useStaticQuery } from "gatsby"
import Projects from "../components/Projects"

export default () => {
  const query = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            title
            slug
            desc
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)
  const projects = query.allProjectsJson.edges

  return (
    <Layout>
      {projects.map(({ node }) => {
        const title = node.title
        const desc = node.desc
        const slug = node.slug
        const imgData = node.image.childImageSharp.fluid

        return (
          <Projects
            title={title}
            desc={desc}
            slug={slug}
            imgData={imgData}
          ></Projects>
        )
      })}
    </Layout>
  )
}
