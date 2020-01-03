import React, { Component, Fragment } from 'react'
import _ from 'lodash'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { colors } from '../../tokens'

const ListContainer = styled.div`
  display: inline;
  margin: 0 0.5rem 0 0;
  color: ${colors.textLight};
`

const TagListItem = styled(Link)`
  margin-left: 0.3rem;
  color: ${colors.textLight};

  &:hover {
    border-bottom: 1px dotted ${colors.textLight};
  }
  &:before {
    content: '#';
  }
`

class PostTags extends Component {
  render () {
    const { tags, icon } = this.props
    return (
      <ListContainer>
        {icon === true && <Fragment>🔗</Fragment>}
        {tags &&
          tags.map((tag, i) => (
            <Fragment key={`tag-list-${i}`}>
              <TagListItem to={`/tags/${_.kebabCase(tag)}`}>
                {tag}
                {i < tags.length - 1 ? ', ' : ''}
              </TagListItem>
            </Fragment>
          ))}
      </ListContainer>
    )
  }
}

export default PostTags
