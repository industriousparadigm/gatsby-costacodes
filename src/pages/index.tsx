import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { useStaticQuery, graphql } from 'gatsby'

const IndexPage = ({ location }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          homeText
        }
      }
    }
  `)
  return (
    <Layout location={location}>
      <SEO
        title='Home'
        keywords={[`developer`, `programming`, `react`, `javascript`, `node`]}
      />
      {site.siteMetadata.homeText.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
    </Layout>
  )
}

export default IndexPage
