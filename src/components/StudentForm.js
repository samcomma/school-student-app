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
      gpa: null
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
        <h6 className="form-heading">Please provide details of the Student you would like to add:</h6>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name: </label>
            <input
              name="firstName"
              placeholder="Enter the student's first name"
              className="form-control"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div className="form-group">
            <label>Last Name: </label>
            <input
              name="lastName"
              placeholder="Enter the student's last name"
              className="form-control"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div className="form-group">
            <label>Email: </label>
            <input
              name="email"
              placeholder="Enter the student's email"
              className="form-control"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div className="form-group">
            <label>Image Url: </label>
            <input
              name="imageUrl"
              placeholder="Enter an image url for the student"
              className="form-control"
              value={this.state.imageUrl}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div className="form-group">
            <label>GPA: </label>
            <input
              name="gpa"
              placeholder="Enter the student's GPA"
              className="form-control"
              value={this.state.gpa}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <button type="submit" className="btn btn-primary btn-md edit-btn single-edit-btn">Submit</button>
        </form>
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
    createStudent: newStudent => dispatch(createStudentThunk(newStudent))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentForm)
