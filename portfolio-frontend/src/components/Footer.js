import React from "react"
import SocialLinks from "../constants/social_links"
const Footer = () => {
  return (
    <footer className="footer">
      <SocialLinks className="footer-links" />
      <div>
        <h4>copyright&copy; {new Date().getFullYear()}</h4>
        <h4>
          <span>CTS DESIGN</span> All rights Reserved.
        </h4>
      </div>
    </footer>
  )
}

export default Footer
