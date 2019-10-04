import React from "react"
import { Link, graphql } from "gatsby"

const IndexPage = ({ data }) => {
  const { edges: people } = data.allMdx
  return (
    <>
      <h1>HackyMe</h1>
      <ul>
        {people.map(({ node: person }) => (
          <li key={person.id}>
            <Link to={person.fields.slug}>
              <h2>{person.frontmatter.name}</h2>
            </Link>
            <p>{person.excerpt}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default IndexPage


export const pageQuery = graphql`
  query personIndex {
    allMdx {
      edges {
        node {
          id
          excerpt
          frontmatter {
            name
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
