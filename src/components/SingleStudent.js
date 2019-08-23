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
      <div className="text-center">
        <img src={student.imageUrl} className="single-image" />

        <p>
          <strong>NAME:</strong> {student.firstName} {student.lastName}
        </p>
        <p>
          <strong>EMAIL:</strong> {student.email}
        </p>
        <p>
          <strong>GPA:</strong> {student.gpa}
        </p>
        <p>
          <strong>CAMPUS:</strong>{' '}
          {studentSchool ? (
            <Link to={`/schools/${studentSchool.id}`}>
              {studentSchool.name}
            </Link>
          ) : (
            'No School Assigned'
          )}
        </p>
        <hr />
        <Link to={`/students/${student.id}/edit`}>
          <button
            type="button"
            className="btn btn-primary btn-md edit-btn single-edit-btn"
          >
            Edit
          </button>
        </Link>
        <Link to="/students">
          <button
            type="submit"
            className="btn btn-primary btn-md remove-btn"
            onClick={() => deleteStudent(student.id)}
          >
            Remove
          </button>
        </Link>
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
