import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteStudentThunk } from '../redux/actions/student'

class SingleStudent extends Component {
  render() {
    const { student, schools, deleteStudent } = this.props

    const studentSchool = schools.length
      ? schools.find(s => s.id === student.schoolId)
      : 'No School'

    if (!student) {
      return <div />
    }

    return (
      <div>
        <img src={student.imageUrl} className="single-image" />
        <h6>
          NAME: {student.firstName} {student.lastName}
        </h6>
        <h6>EMAIL: {student.email}</h6>
        <h6>GPA: {student.gpa}</h6>
        <h6>
          CAMPUS:{' '}
          {studentSchool ? (
            <Link to={`/schools/${studentSchool.id}`}>
              {studentSchool.name}
            </Link>
          ) : (
            'No School Assigned'
          )}
        </h6>
        <button type="button">
          <Link to={`/students/${student.id}/edit`}>Edit</Link>
        </button>
        <button
          type="submit"
          className="standard-btn"
          onClick={() => deleteStudent(student.id)}
        >
          <Link to="/students">Remove</Link>
        </button>
      </div>
    )
  }
}

const mapStateToProps = ({ students, schools }, { match: { params } }) => {
  return {
    student: students.length && students.find(s => s.id === Number(params.id)), // this length part stops crashing on refresh
    schools: schools
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteStudent: id => dispatch(deleteStudentThunk(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleStudent)
