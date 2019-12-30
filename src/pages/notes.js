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
    const pageDescription = "Some things that are on my mind..."
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

        <div className="note-index-container container">
          {posts.map(({ node: post }) => {
            const title = get(post, 'frontmatter.title') || post.fields.slug
            return (
                <Link to={post.fields.slug} className="note-card Rte" key={post.id}
                style={{
                  borderColor: (post.frontmatter.pf ? post.frontmatter.pf : 'var(--primary-faded)'),
                  backgroundColor: (post.frontmatter.tbgf ? `rgba(${post.frontmatter.tbgf},.9)` : 'rgba(var(--bg-faded),.9)')
                }}>
                  <h2 className="title h2"
                  style={{
                    color: (post.frontmatter.tp ? post.frontmatter.tp : 'var(--primary)')
                  }}
                  >
                    {post.frontmatter.title}
                  </h2>
                  <p className="h4"
                  style={{
                    color: (post.frontmatter.ttc ? post.frontmatter.ttc : 'var(--text-color)')
                  }}>
                    {post.excerpt}
                  </p>
                </Link>
              
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
          excerpt(pruneLength: 100)
          id
          fields {
            slug
          }
          frontmatter {
            publish
            date(formatString: "MMMM DD, YYYY")
            title
            theme
            ttc
            tbg
            tbgf
            tp
            tpf
            ts
            tsf
            twb
            twt
            tfbg
          }
        }
      }
    }
  }
`
