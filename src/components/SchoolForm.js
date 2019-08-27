import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createSchoolThunk } from '../redux/actions/school'

class SchoolForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      imageUrl: '',
      address: '',
      description: ''
    }
  }

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  handleSubmit = evt => {
    evt.preventDefault()
    this.props.createSchool(this.state)
    this.props.history.push('/schools')
  }
  render() {
    return (
      <div>
        <h6 className="form-heading">Please provide details of the School you would like to add:</h6>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name: </label>
            <input
              name="name"
              placeholder="Enter the school's name"
              className="form-control"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div className="form-group">
            <label>Address: </label>
            <input
              name="address"
              placeholder="Enter the school's address"
              className="form-control"
              value={this.state.address}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div className="form-group">
            <label>Description: </label>
            <textarea
              name="description"
              placeholder="Enter a description of the school"
              className="form-control"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div className="form-group">
            <label>Image Url: </label>
            <input
              name="imageUrl"
              placeholder="Enter an image url for the school"
              className="form-control"
              value={this.state.imageUrl}
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
    schools: state.schools
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createSchool: newSchool => dispatch(createSchoolThunk(newSchool))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SchoolForm)
