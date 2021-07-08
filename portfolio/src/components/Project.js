import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { Link } from "gatsby"

const Project = ({ description, title, github, stack, url, image, index }) => {
  console.log(image.localFile)
  const ImageData = getImage(image.localFile)
  console.log(ImageData)
  return (
    <article className="project">
      <GatsbyImage image={ImageData} className="project-img" alt={title} />
      <div className="project-info">
        <span className="project-number">{index + 1}.</span>
        <h3>{title}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {stack.map(item => {
            return <span key={item.id}>{item.title}</span>
          })}
        </div>
        <div className="project-links">
          <a href={github}>
            <FaGithubSquare className="project-icon" />{" "}
          </a>
          <a href={url}>
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  )
}

export default Project
