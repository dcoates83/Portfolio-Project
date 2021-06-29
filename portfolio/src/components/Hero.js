import React from "react"
import { Link, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/social_links"
// import heroImg from "../assets/images/hero.svg"
import { StaticImage } from "gatsby-plugin-image"

const query = graphql`
  {
    file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const data = useStaticQuery(query)
  const image = data.file.childImageSharp.fluid
  console.log(image)
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div className="underline"></div>
          <h1>I'm Devon</h1>
          <h4>Web, Mobile and UI/UX Designer</h4>
          <Link to="/contact" className="btn">
            Contact Me
          </Link>
          <SocialLinks />
        </article>
        <StaticImage fluid={image} className="hero-img" />
      </div>
    </header>
  )
}

export default Hero
