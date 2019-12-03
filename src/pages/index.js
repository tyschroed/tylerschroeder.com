import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo';

export default function Index() {
  return (
    <Layout>
      <SEO title="Home" />

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>I help craft great software for great organizations.</h2>
          </header>
          <p>
            I specialize in helping development teams do their best work and
            delivering software that delights. I have spent the last 12 years
            working remotely with teams across the country and around the world
            for clients large and small.
          </p>
          <p>
            When I'm not writing code, I'm either playing with my two boys or in
            my shop building things out of wood.
          </p>
        </section>
        <section>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/tyschroed"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/tyschroed" className="icon fa-github">
                <span className="label">Github</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/tylerschroeder/"
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:tyler@tylerschroeder.com"
                className="icon fa-envelope-o"
              >
                <span className="label">Email</span>
              </a>
            </li>
          </ul>
        </section>
      </div>
    </Layout>
  )
}
