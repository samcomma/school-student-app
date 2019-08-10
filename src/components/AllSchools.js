import React, { Component } from 'react'
import { connect } from 'react-redux'

class AllSchools extends Component {
  render() {
    const { schools } = this.props
    console.log(schools)
    return (
      <div>
        <ul>
          {schools.map(school => (
            <li key={school.id}>{school.name}</li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    schools: state.schools
  }
}

export default connect(mapStateToProps)(AllSchools)
