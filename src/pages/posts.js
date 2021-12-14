import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { graphql } from 'gatsby'
import Posts from '../components/Posts'
const PostsPage = ({ data }) => {
  const {
    allMdx: { nodes: posts },
  } = data
  return (
    <Layout>
      <Hero />
      <Posts posts={posts} title="All Posts" />
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        frontmatter {
          title
          author
          category
          date(formatString: "MMMM, Do YYYY")
          readTime
          slug
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        body
        excerpt
      }
    }
  }
`

export default PostsPage
