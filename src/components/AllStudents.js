import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class AllStudents extends Component {
  render() {
    const { students } = this.props
    return (
      <div>
        <ul className="list-unstyled">
          {students.map(student => (
            <li key={student.id}>
              <Link to={`/students/${student.id}`}>
                {student.firstName} {student.lastName}
              </Link>
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

export default connect(mapStateToProps)(AllStudents)
