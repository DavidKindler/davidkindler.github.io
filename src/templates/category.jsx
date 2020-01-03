import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../layout'
import Wrapper from '../components/Wrapper'
import PostListing from '../components/PostListing'
import config from '../../data/siteConfig'

export default class CategoryTemplate extends React.Component {
  render () {
    const { category } = this.props.pageContext
    const postEdges = this.props.data.allMarkdownRemark.edges
    return (
      <Layout>
        <div className='category-container'>
          <Helmet
            title={`Posts in category "${category}" | ${config.siteTitle}`}
          />
          <Wrapper>
            <h1>Posts in category "{this.props.pageContext.category}"</h1>
            <PostListing postEdges={postEdges} />
          </Wrapper>

          {/* <PostListing postEdges={postEdges} /> */}
        </div>
      </Layout>
    )
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
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
