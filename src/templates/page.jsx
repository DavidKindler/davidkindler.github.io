/* eslint-disable react/display-name */
import React from 'react'
import { graphql } from 'gatsby'

import Helmet from 'react-helmet'
import Layout from '../layout'
// import Content from '../components/Content'
import Wrapper from '../components/Wrapper'
import Article from '../components/Article'

import Hero from '../components/Hero'
import SEO from '../components/SEO'
// import Disqus from '../components/Disqus'
import config from '../../data/siteConfig'

export default props => {
  console.log('page props', props)
  // const page = props.data.page

  return (
    // <Layout location={props.location}>
    <Layout>
      {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
      <Helmet>
        <title>{`${props.data.post.frontmatter.title} | ${config.siteTitle}`}</title>
      </Helmet>
      <SEO
        postPath={props.data.post.fields.slug}
        postNode={props.data.post}
        postSEO
      />
      <Hero
        heroImg={props.data.post.frontmatter.cover}
        title={props.data.post.frontmatter.title}
      />
      <Wrapper>
        {/* <PostTags tags={post.tags} /> */}
        <Article post={props.data.post} />
        {/* <div dangerouslySetInnerHTML={{ __html: postNode.html }} /> */}

        {/* <UserInfo config={config} /> */}
      </Wrapper>

      {/* <SEO
        title={page.frontmatter.title}
        description={page.excerpt}
        path={page.frontmatter.slug}
        cover={page.frontmatter.cover && page.frontmatter.cover.publicURL}
      />

      <Hero
        heroImg={page.frontmatter.cover && page.frontmatter.cover.publicURL}
        title={page.frontmatter.title}
      />

      <Wrapper>
        <article>
          <Content content={page.body} date={page.frontmatter.date} />
        </article>
      </Wrapper>

      {page.frontmatter.disqus && (
        <Wrapper>
          <Disqus slug={page.frontmatter.slug} title={page.frontmatter.title} />
        </Wrapper>
      )} */}
    </Layout>
  )
}

// export const pageQuery = graphql`
//   query($slug: String!) {
//     page: mdx(frontmatter: { slug: { eq: $slug } }) {
//       body
//       excerpt
//       frontmatter {
//         title
//         date
//         slug
//         cover {
//           publicURL
//         }
//       }
//     }
//   }
// `

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    post: mdx(frontmatter: { slug: { eq: $slug } }) {
      excerpt
      body
      frontmatter {
        title
        category
        date(formatString: "MMMM DD, YYYY")
        slug
        tags
        cover {
          publicURL
          childImageSharp {
            fluid {
              srcSet
            }
          }
        }
        disqus
      }
      fields {
        slug
        date
      }
    }
  }
`
