import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import frontpage from '../img/SnowSun.jpg'
import quote from '../img/quote1.svg'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section className="section"  
        style={{ backgroundImage: `url(${quote})`, backgroundRepeat: 'repeat', backgroundAttachment: 'scroll'
        ,backgroundPosition: "center center" }}>
        <div className="container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-4">Welcome to Claudine Del Rosario's Blog!</h1>
          </div>
          <div className="columns">

            <div className="column is-3">
              <img src={frontpage} alt="Instagram" />
            </div>
            <p className="column subtitle is-9">
            Scroll down for blog posts!
            </p>
          </div>
          {posts
            .filter(post => post.node.frontmatter.templateKey === 'blog-post')
            .map(({ node: post }) => (
              <div
                className="content"
                style={{  padding: '2em 4em', backgroundColor: 'rgb(255, 245, 245)' }}
                key={post.id}
              >
                <p>
                  <Link className="has-text-primary" to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                  <span> &bull; </span>
                  <small>{post.frontmatter.date}</small>
                </p>
                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="button is-small" to={post.fields.slug}>
                    Keep Reading →
                  </Link>
                </p>
              </div>
            ))}
        </div>
      </section>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`