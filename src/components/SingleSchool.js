import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class SingleSchool extends Component {
  render() {
    const { school, students } = this.props
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

export default connect(mapStateToProps)(SingleSchool)
