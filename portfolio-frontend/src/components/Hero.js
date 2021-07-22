import React from "react"
import { Link } from "gatsby"
import SocialLinks from "../constants/social_links"
import heroImg from "../assets/images/hero.svg"

const Hero = () => {
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <img src={heroImg} alt="portfolio" className="hero-img-svg" />
        <article className="hero-info">
          <div className="underline"></div>
          <h1>I'm Devon</h1>
          <h4>Web, Mobile and UI/UX Designer</h4>
          <Link to="/contact" className="btn">
            Contact Me
          </Link>
          <SocialLinks />
        </article>
      </div>
    </header>
  )
}

export default Hero
