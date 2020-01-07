import React from 'react'
import { Link, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => {
  // const data = useStaticQuery(graphql(``))

  return (
    <Layout>
      <SEO
        title='Home'
        keywords={[`developer`, `programming`, `react`, `javascript`, `node`]}
      />
      <Link to='/resume'>Go to the Resume page!</Link>
    </Layout>
  )
}
export default IndexPage
