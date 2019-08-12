import React, { Component } from 'react'
import { connect } from 'react-redux'

class SingleSchool extends Component {
  render() {
    const { school } = this.props
    return (
      <div>
        <img src={school.imageUrl} className="school-list-image" />
        <h3>{school.name}</h3>
        <h6>{school.address}</h6>
        <p>{school.description}</p>
      </div>
    )
  }
}

const mapStateToProps = (state, { match: { params } }) => {
  return {
    school: state.schools.find(s => s.id === Number(params.id))
  }
}

export default connect(mapStateToProps)(SingleSchool)
