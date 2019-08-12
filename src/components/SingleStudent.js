import React, { Component } from 'react'
import { connect } from 'react-redux'

class SingleStudent extends Component {
  render() {
    const { student } = this.props
    return (
      <div>
        <img src={student.imageUrl} className="school-list-image" />
        <h6>
          NAME: {student.firstName} {student.lastName}
        </h6>
        <h6>EMAIL: {student.email}</h6>
        <h6>GPA: {student.gpa}</h6>
      </div>
    )
  }
}

const mapStateToProps = (state, { match: { params } }) => {
  return {
    student: state.students.find(s => s.id === Number(params.id))
  }
}

export default connect(mapStateToProps)(SingleStudent)
