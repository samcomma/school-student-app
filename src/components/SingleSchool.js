import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteSchoolThunk } from '../redux/actions/school'

class SingleSchool extends Component {
  render() {
    const { school, students, deleteSchool } = this.props
    return (
      <div>
        <img src={school.imageUrl} className="single-image" />
        <h3>{school.name}</h3>
        <h5>{school.address}</h5>
        <p>{school.description}</p>
        <ul className="list-unstyled">
          STUDENTS:
          {students.map(student => (
            <li key={student.id}>
              <Link to={`/students/${student.id}`}>
                {student.firstName} {student.lastName}
              </Link>
            </li>
          ))}
        </ul>
        <button type="button">
          <Link to={`/schools/${school.id}/edit`}>Edit</Link>
        </button>
        <button
          type="submit"
          className="standard-btn"
          onClick={() => deleteSchool(school.id)}
        >
          <Link to="/schools">Remove</Link>
        </button>
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
