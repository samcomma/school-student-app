import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteSchoolThunk } from '../redux/actions/school'

class AllSchools extends Component {
  render() {
    const { schools, deleteSchool } = this.props
    return (
      <div className="container">
        <hr />
        <div className="add-section">
          <Link to="/schoolform">
            <button type="submit" className="btn btn-primary btn-md edit-btn">
              Add School
            </button>
          </Link>
        </div>
        <ul className="list-unstyled list-group-flush school-list">
          {schools.map(school => (
            <li
              key={school.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <img src={school.imageUrl} className="list-image" />
              <Link to={`/schools/${school.id}`} className="flex-grow-1">
                {school.name}
              </Link>
              <Link to={`/schools/${school.id}/edit`}>
                <button
                  type="button"
                  className="btn btn-primary btn-md edit-btn"
                >
                  Edit
                </button>
              </Link>
              <button
                type="button"
                className="btn btn-primary btn-md remove-btn"
                onClick={() => deleteSchool(school.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
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
