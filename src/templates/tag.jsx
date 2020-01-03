import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../layout'
import PostListing from '../components/PostListing'
import Wrapper from '../components/Wrapper'
import SEO from '../components/SEO'
import Pagination from '../components/Pagination'

import config from '../../data/SiteConfig'

export default class TagTemplate extends React.Component {
  render () {
    const postEdges = this.props.data.allMarkdownRemark.edges
    const { currentPageNum, pageCount } = this.props.pageContext

    return (
      <Layout>
        <Helmet title={config.siteTitle} />
        <SEO />
        <Wrapper>
          <h1>Posts tagged as "{this.props.pageContext.tag}"</h1>
          <PostListing postEdges={postEdges} />
        </Wrapper>
        {/* {this.renderPaging()} */}
        {/* <Pagination nbPages={pageCount} currentPage={currentPageNum} /> */}
      </Layout>
    )

    // const { tag } = this.props.pageContext
    // const postEdges = this.props.data.allMarkdownRemark.edges
    // return (
    //   <Layout>
    //     <div className='tag-container'>
    //       <Helmet title={`Posts tagged as "${tag}" | ${config.siteTitle}`} />
    //       <PostListing postEdges={postEdges} />
    //       tag page
    //     </div>
    //   </Layout>
    // )
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            date(formatString: "MMMM DD, YYYY")
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`
