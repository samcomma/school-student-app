import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteSchoolThunk } from '../redux/actions/school'

class AllSchools extends Component {
  render() {
    const { schools, deleteSchool } = this.props
    return (
      <div>
        <ul className="list-unstyled">
          {schools.map(school => (
            <li key={school.id}>
              <img src={school.imageUrl} className="list-image" />
              <Link to={`/schools/${school.id}`}>{school.name}</Link>
              <button type="button">
                <Link to={`/schools/${school.id}/edit`}>Edit</Link>
              </button>
              <button type="button" onClick={() => deleteSchool(school.id)}>
                Remove
              </button>
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

const mapDispatchToProps = dispatch => {
  return {
    deleteSchool: id => dispatch(deleteSchoolThunk(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllSchools)
