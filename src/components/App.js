import React, { Component } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Nav from './Nav'
import AllSchools from './AllSchools'
import AllStudents from './AllStudents'
import SingleSchool from './SingleSchool'
import SingleStudent from './SingleStudent'
import { getAllSchoolsThunk } from '../redux/actions/school'
import { getAllStudentsThunk } from '../redux/actions/student'

class App extends Component {
  componentDidMount() {
    const { getAllSchools, getAllStudents } = this.props
    return Promise.all([getAllSchools(), getAllStudents()])
  }
  render() {
    return (
      <Router>
        <Route component={Nav} />
        <Switch>
          <Route exact path="/schools" component={AllSchools} />
          <Route exact path="/schools/:id" component={SingleSchool} />
          <Route exact path="/students" component={AllStudents} />
          <Route exact path="/students/:id" component={SingleStudent} />
        </Switch>
      </Router>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllSchools: () => dispatch(getAllSchoolsThunk()),
    getAllStudents: () => dispatch(getAllStudentsThunk())
  }
}

export default connect(
  null,
  mapDispatchToProps
)(App)
