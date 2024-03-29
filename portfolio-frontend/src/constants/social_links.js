import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://www.facebook.com/devon.coates.9/",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/devon-coates-3b4a601b8/",
  },
  {
    id: 3,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://github.com/dcoates83",
  },
  {
    id: 4,
    icon: <FaInstagram className="social-icon"></FaInstagram>,
    url: "https://www.instagram.com/devon.b.coates/",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

const StyleLinks = ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}

export default StyleLinks
