import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'
import 'prismjs/themes/prism-tomorrow.css'
import { GlobalStyle } from '../components/Commons'
import { media } from '../tokens'
import config from '../../data/siteConfig'
// import './index.css'

const SiteContent = styled.div`
  margin: 0 0;

  @media ${media.medium} {
    margin: 60px 0;
  }
`

export default class MainLayout extends React.Component {
  render () {
    const { children } = this.props
    return (
      // <div className='layout-container'>
      <>
        <Helmet>
          <meta name='description' content={config.siteDescription} />
          <link
            href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,700&display=swap'
            rel='stylesheet'
          />
          <html lang='en' />
        </Helmet>
        <GlobalStyle />
        <Header />
        <SiteContent>{children}</SiteContent>

        <Footer />
        {/* // </div> */}
      </>
    )
  }
}
