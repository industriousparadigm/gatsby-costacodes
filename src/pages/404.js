import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = ({ location }) => (
  <Layout location={location}>
    <SEO title='404: Not found' />
    <h1>404</h1>
    <p>
      I commend you, brave explorer, but there really isn&#39;t any bonus
      content here.
    </p>
  </Layout>
)

export default NotFoundPage
