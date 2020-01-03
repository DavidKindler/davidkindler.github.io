import React, { Fragment } from 'react'
import styled from 'styled-components'
import PostTags from '../PostTags'
import { colors } from '../../tokens'

const Header = styled.header`
  margin-bottom: 2rem;
  color: ${colors.textLight};
`

class ContentIntro extends React.Component {
  render () {
    const { date, tags } = this.props

    return (
      <Header>
        {date && <time>{date}</time>}
        {Array.isArray(tags) && tags.length > 0 && (
          <Fragment>
            <span> in</span>
            <PostTags tags={tags} icon />
          </Fragment>
        )}
      </Header>
    )
  }
}

export default ContentIntro
