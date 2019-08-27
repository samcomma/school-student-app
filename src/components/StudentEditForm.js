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
        <h6 className="form-heading">Please provide updated details for <strong>{this.props.student.firstName} {this.props.student.lastName}</strong> that you would like to edit:</h6>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name: </label>
            <input
              name="firstName"
              placeholder="Update the student's first name"
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
              placeholder="Update the student's last name"
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
              placeholder="Update the student's email"
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
              placeholder="Update the image url for the student"
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
              placeholder="Update the student's GPA"
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
