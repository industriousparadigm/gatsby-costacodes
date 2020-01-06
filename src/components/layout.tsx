import React, { FC } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, useStaticQuery } from 'gatsby'
import Link from 'gatsby-link'

import './layout.scss'

const Layout: FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  const { title, author } = data.site.siteMetadata
  return (
    <>
      <div className='container'>
        <main>
          <Link to='/'>
            <h1 className='site-title'>{title}</h1>
          </Link>
          <hr />
          {children}
        </main>
        <footer>
          <div>{`© ${new Date().getFullYear()} ${author}`}</div>
        </footer>
      </div>
    </>
  )

  // (
  //   <StaticQuery
  //     query={graphql`
  //       query SiteTitleQuery {
  //         site {
  //           siteMetadata {
  //             title
  //             author
  //           }
  //         }
  //       }
  //     `}
  //     render={data => {
  //       const { title, author } = data.site.siteMetadata
  //       return (
  //         <>
  //           <div className='container'>
  //             <main>
  //               <Link to='/'>
  //                 <h1 className='site-title'>{title}</h1>
  //               </Link>
  //               <hr />
  //               {children}
  //             </main>
  //             <footer>
  //               <div>{`© ${new Date().getFullYear()} ${author}`}</div>
  //             </footer>
  //           </div>
  //         </>
  //       )
  //     }}
  //   />
  // )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
