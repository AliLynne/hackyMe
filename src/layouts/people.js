import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Header from '../components/header'

const PersonPage = ({ data: { mdx } }) => (
  <div>
    <Header siteTitle={mdx.frontmatter.name} />
    <h1>{mdx.frontmatter.name}</h1>
    <MDXRenderer>{mdx.body}</MDXRenderer>
  </div>
)

export default PersonPage

export const pageQuery = graphql`
  query PersonPageQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        name
      }
    }
  }
`