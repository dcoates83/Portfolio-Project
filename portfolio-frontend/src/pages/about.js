import React from "react"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Seo from "../components/Seo"
import Layout from "../components/Layout"
import resume from "../assets/images/resume.png"
import SocialLinks from "../constants/social_links"
import { StaticImage } from "gatsby-plugin-image"

const About = ({
  data: {
    allStrapiAbout: { nodes },
  },
}) => {
  const { title, info, stack } = nodes[0]

  return (
    <Layout>
      <Seo title="About" description="About me as a developer" />
      <section className="about-page">
        <div className="section-center about-center">
          <div className="img-container about-img-svg">
            <StaticImage
              src="../assets/images/resume.png"
              alt="resume"
              placeholder="blurred"
              layout="constrained"
              className="about-img-svg about-resume"
            />
            <a href={resume} className="btn about-img-download" download>
              {" "}
              Download
            </a>
          </div>
          {/* <img src={resume} alt="portfolio" className="about-img-svg" /> */}
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
            <div className="about-stack">
              <h3>The Tech I'm using</h3>
              {stack.map(item => {
                return <span key={item.id}>{item.title}</span>
              })}
            </div>
            <SocialLinks />
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiAbout {
      nodes {
        title
        info
        stack {
          title
          id
        }
      }
    }
  }
`

export default About
