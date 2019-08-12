import React, { Component } from 'react'
import { connect } from 'react-redux'

class AllSchools extends Component {
  render() {
    const { schools } = this.props
    return (
      <div>
        <ul className="list-unstyled">
          {schools.map(school => (
            <li key={school.id}>
              <img src={school.imageUrl} className="school-list-image" />
              {school.name}
            </li>
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
