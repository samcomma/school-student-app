import { GET_ALL_SCHOOLS, GET_SCHOOL, UPDATE_SCHOOL } from '../constants'
import axios from 'axios'

export const getAllSchools = schools => ({
  type: GET_ALL_SCHOOLS,
  schools
})

export const getSchool = school => ({
  type: GET_SCHOOL,
  school
})

export const updateSchool = (schoolId, school) => ({
  type: UPDATE_SCHOOL,
  schoolId,
  school
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

export const updateSchoolThunk = (schoolId, school) => {
  return dispatch => {
    axios
      .put(`/api/schools/${schoolId}`, school)
      .then(({ data }) => dispatch(updateSchool(schoolId, data)))
  }
}

export const deleteSchoolThunk = id => {
  return dispatch => {
    axios
      .delete(`/api/schools/${id}`)
      .then(() => dispatch(getAllSchoolsThunk()))
  }
}
