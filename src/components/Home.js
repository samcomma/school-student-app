import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Home = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <div className="jumbotron-content">
          <h1 className="display-4">Welcome to Wizarding Schools</h1>
          <p className="lead">
            Feel free to browse our schools to see what magical opportunities
            are out ther for you... <br />
            You can also feel free to contact any of our featured students to
            ask them anything
            <br /> about themselves or about the school they attend. They'll be
            excited to help!
          </p>
          <p className="lead">
            <Link
              className="btn btn-primary btn-md"
              role="button"
              to="/schools"
            >
              View Schools
            </Link>
            <Link
              className="btn btn-primary btn-md"
              role="button"
              to="/students"
            >
              View Students
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default connect()(Home)
