import React from "react"
import { FaCode, FaSketch, FaBloggerB } from "react-icons/fa"
const services = [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "web development",
    text: `Designing web pages with attention to accessibility, cross-browser compatibility, search engine optimization and responsiveness. The way it should be.`,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "web design",
    text: `From Design to Production. I'm here to help you with each step of the design.
    `,
  },
  {
    id: 3,
    icon: <FaBloggerB className="service-icon" />,
    title: "Starting a Blog?",
    text: `Everybody has a great idea that needs to be shared. Lets' get that Idea into a Reality.`,
  },
]

export default services
