import { GET_ALL_SCHOOLS } from '../constants'
import axios from 'axios'

export const getAllSchools = schools => ({
  type: GET_ALL_SCHOOLS,
  schools
})

export const getAllSchoolsThunk = () => {
  return dispatch => {
    return axios
      .get('/api/schools')
      .then(({ data }) => dispatch(getAllSchools(data)))
  }
}

export const createSchoolThunk = newSchool => {
  return dispatch => {
    axios
      .post('/api/schools/', newSchool)
      .then(() => dispatch(getAllSchoolsThunk()))
  }
}

export const deleteSchoolThunk = id => {
  return dispatch => {
    axios
      .delete(`/api/schools/${id}`)
      .then(() => dispatch(getAllSchoolsThunk()))
  }
}
