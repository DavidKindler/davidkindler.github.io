import React, { Component } from 'react'
// import Layout from '../../templates/page'
import Wrapper from '../Wrapper'
// import './about.css'

class About extends Component {
  render () {
    return (
      <Wrapper>
        <h2>Hello and thanks for reading this blog.</h2>
        <p>
          {' '}
          I am a web developer/designer working for NXP Semiconductors in
          Austin, Texas. This is the second iteration of my blog. The first one
          was done in Wordpress and was not well maintained. This one has been
          designed using{' '}
          <a href='https://gatsbyjs.org' attr='GatsbyJS.org'>
            Gatsby
          </a>
          .
          <p>
            I hope to maintain this one more frequently. If you have suggestions
            or recommendations for blog posts please let me know.
          </p>
        </p>
        <p> </p>
        <h3>Contact</h3>
        <p>
          If you would like to contact me the best way is via{' '}
          <a href='mailto:davidkindler-gatsby@kindler.email'>email here</a>.
        </p>
      </Wrapper>
    )
  }
}

export default About
