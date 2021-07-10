import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
const contact = () => {
  return (
    <Layout>
      <Seo title="Contact Page" description="Contact Page" />
      <section className="contact-page">
        <article className="contact-form">
          <h3>Get In Touch</h3>
          <form action="https://formspree.io/f/mrgrazpo" method="POST">
            <div className="form-group">
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                placeholder="name"
              />
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="Email"
              />
              <textarea
                name="message"
                id="message"
                rows="5"
                className="form-control"
                placeholder="Message"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              Submit
            </button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
