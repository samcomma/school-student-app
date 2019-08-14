import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateStudentThunk } from '../redux/actions/student'

class StudentEditForm extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      imageUrl: '',
      gpa: ''
    }
  }

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  handleSubmit = evt => {
    evt.preventDefault()
    this.props.editStudent(this.props.student.id, this.state)
    this.props.history.push(`/students/${this.props.student.id}`)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>First Name: </label>
          <input
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <br />
          <label>Last Name: </label>
          <input
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <br />
          <label>Email: </label>
          <input
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br />
          <label>Image Url: </label>
          <input
            name="imageUrl"
            value={this.state.imageUrl}
            onChange={this.handleChange}
          />
          <br />
          <label>GPA: </label>
          <input
            name="gpa"
            value={this.state.gpa}
            onChange={this.handleChange}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ students }, { match: { params } }) => {
  return {
    student: students.length && students.find(s => s.id === Number(params.id)) // this length part stops crashing on refresh
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editStudent: (id, student) => dispatch(updateStudentThunk(id, student))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentEditForm)
