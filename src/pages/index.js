import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO
      title='Home'
      keywords={[`developer`, `programming`, `react`, `javascript`, `node`]}
    />
    {/* <Link to='/resume'>Go to the Resume page!</Link> */}
  </Layout>
)

export default IndexPage
