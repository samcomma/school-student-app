import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const navTabs = [
  { name: 'Home', path: '/' },
  { name: 'Schools', path: '/schools' },
  { name: 'Students', path: '/students' }
]

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <ul className="navbar-nav">
        {navTabs.map(tab => {
          return (
            <Link className="nav-link" key={tab.name} to={tab.path}>
              <li className="nav-item">{tab.name}</li>
            </Link>
          )
        })}
      </ul>
    </nav>
  )
}

export default connect()(Nav)
