import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteStudentThunk } from '../redux/actions/student'

class AllStudents extends Component {
  render() {
    const { students, deleteStudent } = this.props
    return (
      <div>
        <ul className="list-unstyled">
          {students.map(student => (
            <li key={student.id}>
              <Link to={`/students/${student.id}`}>
                {student.firstName} {student.lastName}
              </Link>
              <button type="button">
                <Link to={`/students/${student.id}/edit`}>Edit</Link>
              </button>
              <button type="button" onClick={() => deleteStudent(student.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
        <button type="submit" className="standard-btn">
          <Link to="/studentform">Add Student</Link>
        </button>
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
