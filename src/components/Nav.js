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
    <nav className="navbar navbar-expand-md">
      <Link className="navbar-brand" to="/">
        Wizarding Schools
      </Link>
      <ul className="navbar-nav ml-auto">
        {navTabs.map(tab => {
          return (
            <Link className="nav-link" key={tab.name} to={tab.path}>
              <li className="nav-item active">{tab.name}</li>
            </Link>
          )
        })}
      </ul>
    </nav>
  )
}

export default connect()(Nav)
