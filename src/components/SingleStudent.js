import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class SingleStudent extends Component {
  render() {
    const { student, schools } = this.props

    const studentSchool = schools.length
      ? schools.find(s => s.id === student.schoolId)
      : 'No School'

    if (!student || !studentSchool) {
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
          <Link to={`/schools/${studentSchool.id}`}>{studentSchool.name}</Link>
        </h6>
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

export default connect(mapStateToProps)(SingleStudent)
