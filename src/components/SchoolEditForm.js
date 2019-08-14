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
        <h5>Edit School:</h5>
        <h6>{this.props.school.name}</h6>
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
