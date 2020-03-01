import { Link, graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header: React.FC = ({ siteTitle, menuItems }) => {
  return (
    <header id='site-header'>
      <Link to='/'>
        <h1 id='site-title' data-testid='site-title'>
          {siteTitle}
        </h1>
      </Link>
      <nav>
        <ul id='menu'>
          {menuItems.map((item, i) => (
            <li key={i}>
              <Link activeClassName='menu-item-active' to={item.path}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <hr />
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  menuItems: PropTypes.array
}

Header.defaultProps = {
  siteTitle: ``,
  menuItems: []
}

export default Header
