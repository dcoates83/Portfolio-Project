import React from "react"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Seo from "../components/Seo"
import Layout from "../components/Layout"
import heroImg from "../assets/images/hero.svg"

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
          <img src={heroImg} alt="portfolio" className="about-img-svg" />
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
            <div className="about-stack">
              <h3>The Tech I'm using</h3>
              {stack.map(item => {
                return <span key={item.id}>{item.title}</span>
              })}
            </div>
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
