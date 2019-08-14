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
        <form onSubmit={this.handleSubmit}>
          <label>Name: </label>
          <input
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br />
          <label>Address: </label>
          <input
            name="address"
            value={this.state.address}
            onChange={this.handleChange}
          />
          <br />
          <label>Description: </label>
          <textarea
            name="description"
            value={this.state.description}
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
          <button type="submit">Submit</button>
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
