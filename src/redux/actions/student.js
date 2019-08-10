import { GET_ALL_STUDENTS } from '../constants'
import axios from 'axios'

export const getAllStudents = students => ({
  type: GET_ALL_STUDENTS,
  students
})

export const getAllStudentsThunk = () => {
  return dispatch => {
    return axios
      .get('/api/students')
      .then(({ data }) => dispatch(getAllStudents(data)))
  }
}
