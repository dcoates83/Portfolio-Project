import React from "react"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Seo from "../components/Seo"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"

const About = ({
  data: {
    allStrapiAbout: { nodes },
  },
}) => {
  const { title, info, image, stack } = nodes[0]
  console.log(image)
  return (
    <Layout>
      <section className="about-page">
        <div className="section-center about-center">
          <StaticImage
            src="../assets/images/hero.svg"
            alt="portfolio"
            className="about-img"
            placeholder="blurred"
          />
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
