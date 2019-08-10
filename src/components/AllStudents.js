import React, { Component } from 'react'
import { connect } from 'react-redux'

class AllStudents extends Component {
  render() {
    const { students } = this.props
    console.log(students)
    return (
      <div>
        <ul>
          {students.map(student => (
            <li key={student.id}>
              {student.firstName} {student.lastName}
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

export default connect(mapStateToProps)(AllStudents)
