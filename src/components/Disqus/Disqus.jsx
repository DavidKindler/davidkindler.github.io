/* eslint-disable react/jsx-fragments */
import React, { Component, Fragment } from 'react'
import ReactDisqusComments from 'disqus-react'
import urljoin from 'url-join'
import config from '../../../data/siteConfig'

class Disqus extends Component {
  render () {
    if (!config.disqusShortname) {
      return null
    }
    const { postNode } = this.props
    const post = postNode.frontmatter
    const url = urljoin(config.siteUrl, config.pathPrefix, postNode.fields.slug)

    const { disqusShortname } = config

    const disqusConfig = {
      url,
      identifier: post.title,
      title: post.title
    }

    // const { postNode } = this.props
    //     if (!config.disqusShortname) {
    //       return null;
    //     }
    //     const post = postNode.frontmatter;
    //     const url = urljoin(
    //       config.siteUrl,
    //       config.pathPrefix,
    //       postNode.fields.slug
    //     );
    //     ret

    return (
      <Fragment>
        {/* // <div className="article">
      //     <h1>{this.props.article.title}</h1>
      //     <Disqus.CommentCount shortname={disqusShortname} config={disqusConfig}>
      //         Comments
      //     </Disqus.CommentCount>

      //     <p>{this.props.article.body}</p> */}

        {/* <ReactDisqusComments.CommentEmbed
          // commentId={this.props.article.featuredComment}
          showMedia
          height={160}
        /> */}
        {/* {JSON.stringify(disqusConfig, null, 2)} */}
        <ReactDisqusComments.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
        {/* // </div> */}
      </Fragment>
    )
  }
}
// class Disqus extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       toasts: []
//     };
//     this.notifyAboutComment = this.notifyAboutComment.bind(this);
//     this.onSnackbarDismiss = this.onSnackbarDismiss.bind(this);
//   }

//   onSnackbarDismiss() {
//     const [, ...toasts] = this.state.toasts;
//     this.setState({ toasts });
//   }

//   notifyAboutComment() {
//     const toasts = this.state.toasts.slice();
//     toasts.push({ text: "New comment available!" });
//     this.setState({ toasts });
//   }

//   render() {
//     const { postNode } = this.props;
//     if (!config.disqusShortname) {
//       return null;
//     }
//     const post = postNode.frontmatter;
//     const url = urljoin(
//       config.siteUrl,
//       config.pathPrefix,
//       postNode.fields.slug
//     );
//     return (
//       <ReactDisqusComments
//         shortname={config.disqusShortname}
//         identifier={post.title}
//         title={post.title}
//         url={url}
//         category_id={post.category_id}
//         onNewComment={this.notifyAboutComment}
//       />
//     );
//   }
// }

export default Disqus
