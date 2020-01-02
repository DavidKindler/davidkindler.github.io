import React from 'react'
import { StyledLink } from '../Commons'

const RelatedPosts = props => {
  const { posts } = props

  return (
    <ul>
      {posts.map(post => {
        const title = post.node.frontmatter.title
        const slug = post.node.frontmatter.slug
        return (
          <li key={slug}>
            <StyledLink to={`/${slug}`}>{title}</StyledLink>
          </li>
        )
      })}
    </ul>
  )
}
export default RelatedPosts
