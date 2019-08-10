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
