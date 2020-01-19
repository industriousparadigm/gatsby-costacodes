import { Link, graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

type Props = {
  siteTitle: string
  menuItems: Array<Object>
}

const Header: React.FC<Props> = props => {
  console.log({ props })
  return (
    <header id='site-header'>
      <Link to='/'>
        <h1 id='site-title' data-testid='site-title'>
          {props.siteTitle}
        </h1>
      </Link>
      <nav>
        <ul id='menu'>
          {props.menuItems.map((item, i) => (
            <li
              key={i}
              className={`menu-item${
                window.location.pathname === item.path ? '-active' : ''
              }`}
            >
              <Link to={item.path}>{item.name}</Link>
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
