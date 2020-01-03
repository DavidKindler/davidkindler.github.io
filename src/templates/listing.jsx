import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../layout'
import PostListing from '../components/PostListing'
import Wrapper from '../components/Wrapper'
import SEO from '../components/SEO'
import Pagination from '../components/Pagination'
import config from '../../data/SiteConfig'
// import './listing.css'

class Listing extends React.Component {
  // renderPaging () {
  //   const { currentPageNum, pageCount } = this.props.pageContext
  //   const prevPage = currentPageNum - 1 === 1 ? '/' : `/${currentPageNum - 1}/`
  //   const nextPage = `/${currentPageNum + 1}/`
  //   const isFirstPage = currentPageNum === 1
  //   const isLastPage = currentPageNum === pageCount

  //   return (
  //     <>
  //       {!isFirstPage && <Link to={prevPage}>Previous</Link>}
  //       {[...Array(pageCount)].map((_val, index) => {
  //         const pageNum = index + 1
  //         return (
  //           <Link
  //             key={`listing-page-${pageNum}`}
  //             to={pageNum === 1 ? '/' : `/${pageNum}/`}
  //           >
  //             {pageNum}
  //           </Link>
  //         )
  //       })}
  //       {!isLastPage && <Link to={nextPage}>Next</Link>}
  //     </>
  //   )
  // }

  render () {
    const postEdges = this.props.data.allMarkdownRemark.edges
    const { currentPageNum, pageCount } = this.props.pageContext

    return (
      <Layout>
        <Helmet title={config.siteTitle} />
        <SEO />
        <Wrapper>
          <PostListing postEdges={postEdges} />
        </Wrapper>
        {/* {this.renderPaging()} */}
        <Pagination nbPages={pageCount} currentPage={currentPageNum} />
      </Layout>
    )
  }
}

export default Listing

/* eslint no-undef: "off" */
export const listingQuery = graphql`
  query ListingQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "//content/posts//" } }
      limit: $limit
      skip: $skip
    ) {
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
