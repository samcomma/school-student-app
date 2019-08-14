import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStudentThunk } from '../redux/actions/student'

class StudentForm extends Component {
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
    this.props.createStudent(this.state)
    this.props.history.push('/students')
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

const mapDispatchToProps = dispatch => {
  return {
    createStudent: newStudent => dispatch(createStudentThunk(newStudent))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(StudentForm)
