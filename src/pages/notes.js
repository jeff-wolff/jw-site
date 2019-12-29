import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Theme from '../components/Theme/theme.js'
import './notes.css';

import Typist from 'react-typist';
import Button from '../components/Button/button.js'

class NotesIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const pageDescription = "Some things that are on my mind."
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    return (
      <Layout location={this.props.location}>
        <Theme />
        <Helmet
          title={`Notes - ${siteTitle}`}
          >
          <meta name="description" content={pageDescription} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@jeffwolff" />
          <meta property="og:url" content={`${this.props.data.site.siteMetadata.siteUrl}${this.props.location.pathname}`} />
          <meta property="og:title" content={`Notes - ${siteTitle}`} />
          <meta property="og:description" content={pageDescription} />
        </Helmet>

        <div className="index-title centered-title preload container">
          <h1 className="title">
            <Typist 
            startDelay={750}
            avgTypingDelay={130}
            cursor={{
                blink: false,
                element: '_',
                hideWhenDone: true,
                hideWhenDoneDelay: 150
            }}>Notes</Typist>
          </h1>
        </div>

        <div className="note-index-container">
          {posts.map(({ node: post }) => {
            const title = get(post, 'frontmatter.title') || post.fields.slug
            return (
              <div className="note-card" key={post.id}>
                <h2 className="title h2"><Link to={post.fields.slug}>{post.frontmatter.title}</Link></h2>
                <p>{post.frontmatter.date}</p>
                <Button size="tiny" to={post.fields.slug} inlineicon="right">View Note <span>&rarr;</span></Button>
              </div>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default NotesIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
      filter: {
        fileAbsolutePath: {regex: "\/notes/"}
        frontmatter: { publish: { eq:true }}
      }
      ){
      edges {
        node {
          excerpt(pruneLength: 50)
          id
          fields {
            slug
          }
          frontmatter {
            publish
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
