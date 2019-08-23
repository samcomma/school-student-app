import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteStudentThunk } from '../redux/actions/student'

class AllStudents extends Component {
  render() {
    const { students, deleteStudent } = this.props
    return (
      <div className="container">
        <hr />
        <div className="add-section row justify-content-between align-items-center">
          <h6>Below is a list of our Current Students:</h6>
          <Link to="/studentform">
            <button
              type="submit"
              className="btn btn-primary btn-md edit-btn add-btn"
            >
              Add Student
            </button>
          </Link>
        </div>
        <ul className="list-unstyled list-group-flush student-list">
          {students.map(student => (
            <li
              key={student.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <Link to={`/students/${student.id}`} className="flex-grow-1">
                {student.firstName} {student.lastName}
              </Link>
              <Link to={`/students/${student.id}/edit`}>
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
                onClick={() => deleteStudent(student.id)}
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
    students: state.students
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
)(AllStudents)
