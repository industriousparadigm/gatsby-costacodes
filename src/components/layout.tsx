import React, { FC } from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import Link from 'gatsby-link'

import './layout.scss'
import Header from './header'

const Layout: FC = ({ children }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          menuItems {
            name
            path
          }
        }
      }
    }
  `)

  const { title, author, menuItems } = site.siteMetadata
  return (
    <>
      <div id='site-container'>
        <Header siteTitle={title} menuItems={menuItems} />
        <main>{children}</main>
        <footer>
          <div id='site-footer'>{`© ${new Date().getFullYear()} ${author}`}</div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
