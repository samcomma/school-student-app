import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class AllSchools extends Component {
  render() {
    const { schools } = this.props
    return (
      <div>
        <ul className="list-unstyled">
          {schools.map(school => (
            <li key={school.id}>
              <img src={school.imageUrl} className="list-image" />
              <Link to={`/schools/${school.id}`}>{school.name}</Link>
            </li>
          ))}
        </ul>
        <button type="submit" className="standard-btn">
          <Link to="/schoolform">Add School</Link>
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    schools: state.schools
  }
}

export default connect(mapStateToProps)(AllSchools)
