import React from 'react'
import { Link } from 'gatsby'
import PostTags from '../PostTags'
// import useSiteMetadata from '../../hooks/use-site-config'
// import Article from '../Article'
import styled from 'styled-components'
import { colors } from '../../tokens'

const Post = styled.article`
  border-bottom: 1px solid rgba(214, 209, 230, 0.5);
  padding-bottom: 1.25rem;
`

const ReadPost = styled(Link)`
  display: block;
  font-size: 0.75rem;
  margin-top: 1rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: 2;
  color: ${colors.primary};

  &:hover {
    background-color: ${colors.primaryAlpha};
    border-radius: 0.25rem;
    color: ${colors.textLightest};
  }
`

const PostDate = styled.time`
  color: ${colors.textLight};
  &:before {
    content: '🗓';
    margin-right: 0.2rem;
  }
`

const PostHeader = styled.header`
  padding: 1em 0;
`

const Excerpt = styled(Link)`
  display: block;
  line-height: 1.45;
  margin-bottom: 0.5em;
  &:hover {
    background-color: ${colors.primary};
    color: ${colors.textLightest};
    opacity: 0.7;
  }
`

const PostTitleLink = styled(Link)`
  color: ${colors.primary};
  &:hover {
    border-bottom: 1px dotted ${colors.primary};
  }
`

const PostsListItem = props => {
  const { title, excerpt, slug, date, tags } = props
  // const { multilangPosts } = useSiteMetadata()

  return (
    <Post>
      <PostHeader>
        <h2>
          <PostTitleLink to={slug}>{title}</PostTitleLink>
        </h2>
      </PostHeader>
      <section>
        <Excerpt to={slug} dangerouslySetInnerHTML={{ __html: excerpt }} />
      </section>
      {/* <Article post={props} /> */}
      <footer>
        <PostTags tags={tags} icon={true} />
        <PostDate>{date}</PostDate>
        <ReadPost to={slug} aria-label={`View ${title} article`}>
          Read post ›
        </ReadPost>
      </footer>
    </Post>
  )
}
export default PostsListItem
