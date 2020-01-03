import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../layout'
// import UserInfo from '../components/UserInfo/UserInfo'
import Article from '../components/Article'
import Disqus from '../components/Disqus/Disqus'
import PostTags from '../components/PostTags'
import SocialLinks from '../components/SocialLinks/SocialLinks'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'
import Wrapper from '../components/Wrapper'
import Hero from '../components/Hero'

// import './b16-tomorrow-dark.css'
// import './post.css'

export default class PostTemplate extends React.Component {
  render () {
    const { data, pageContext } = this.props
    const { slug } = pageContext
    // const postNode = data.markdownRemark
    const postNode = data.post
    const post = postNode.frontmatter
    if (!post.id) {
      post.id = slug
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID
    }
    return (
      <Layout>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <Hero heroImg={post.cover && post.cover.publicURL} title={post.title} />
        <Wrapper>
          {/* <PostTags tags={post.tags} /> */}
          <Article post={postNode} />
          {/* <div dangerouslySetInnerHTML={{ __html: postNode.html }} /> */}

          {/* <UserInfo config={config} /> */}
        </Wrapper>
        <Wrapper>
          {/* <h1>{post.title}</h1> */}
          {/* <div className='post-meta'> */}
          <SocialLinks postPath={slug} postNode={postNode} />
          {/* </div> */}
          <Disqus postNode={postNode} />
        </Wrapper>
      </Layout>
    )
  }
}
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    post: mdx(fields: { slug: { eq: $slug } }) {
      excerpt
      body
      frontmatter {
        title
        category
        date(formatString: "MMMM DD, YYYY")
        slug
        tags
        cover
      }
      fields {
        slug
        date
      }
    }
  }
`

/* eslint no-undef: "off" */
// export const pageQuery = graphql`
//   query BlogPostBySlug($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       timeToRead
//       excerpt
//       frontmatter {
//         title
//         cover
//         date
//         category
//         tags
//       }
//       fields {
//         slug
//         date
//       }
//     }
//   }
// `
