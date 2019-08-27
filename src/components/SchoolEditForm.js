import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateSchoolThunk } from '../redux/actions/school'

class SchoolEditForm extends Component {
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
    this.props.editSchool(this.props.school.id, this.state)
    this.props.history.push(`/schools/${this.props.school.id}`)
  }

  render() {
    return (
      <div>
        <h6 className="form-heading">Please provide updated details for <strong>{this.props.school.name}</strong> that you would like to edit:</h6>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name: </label>
            <input
              name="name"
              placeholder="Update the school's name"
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
              placeholder="Update the school's address"
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
              placeholder="Update the description of the school"
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
              placeholder="Update the image url for the school"
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

const mapStateToProps = ({ schools }, { match: { params } }) => {
  return {
    school: schools.length && schools.find(s => s.id === Number(params.id)) // this length part stops crashing on refresh
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editSchool: (id, school) => dispatch(updateSchoolThunk(id, school))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SchoolEditForm)
