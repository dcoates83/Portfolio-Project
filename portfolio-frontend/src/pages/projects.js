import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
import { Link } from "gatsby"
const ProjectsPage = ({
  data: {
    allStrapiProjects: { nodes: projects },
  },
}) => {
  return (
    <Layout>
      <Seo title="Projects" description="Projects Page" />
      <section className="projects-page">
        <Projects projects={projects} title="All Projects" />
        <div className="projects-github">
          <h3>Want to see my whole github repo?</h3>
          <Link to="https://github.com/dcoates83" className="btn">
            Click Me
          </Link>
        </div>
      </section>
    </Layout>
  )
}
export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        description
        id
        title
        url
        github
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`

export default ProjectsPage
