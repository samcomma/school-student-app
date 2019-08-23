import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteSchoolThunk } from '../redux/actions/school'

class SingleSchool extends Component {
  render() {
    const { school, students, deleteSchool } = this.props
    return (
      <div className="text-center">
        <img src={school.imageUrl} className="single-image" />
        <h3>{school.name}</h3>
        <h5>{school.address}</h5>
        <p className="text-justify">{school.description}</p>
        <hr />
        <h6>
          <strong>FEATURED STUDENTS:</strong>
        </h6>
        <ul className="list-unstyled">
          {students.map(student => (
            <li key={student.id}>
              <Link to={`/students/${student.id}`}>
                {student.firstName} {student.lastName}
              </Link>
            </li>
          ))}
        </ul>
        <Link to={`/schools/${school.id}/edit`}>
          <button
            type="button"
            className="btn btn-primary btn-md edit-btn single-edit-btn"
          >
            Edit
          </button>
        </Link>
        <Link to="/schools">
          <button
            type="submit"
            className="btn btn-primary btn-md remove-btn"
            onClick={() => deleteSchool(school.id)}
          >
            Remove
          </button>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = ({ schools, students }, { match: { params } }) => {
  return {
    school: schools.length && schools.find(s => s.id === Number(params.id)), // this length part stops crashing on refresh
    students: students.filter(student => student.schoolId === Number(params.id))
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
)(SingleSchool)
