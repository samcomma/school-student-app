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

export const createStudentThunk = newStudent => {
  return dispatch => {
    axios
      .post('/api/students/', newStudent)
      .then(() => dispatch(getAllStudentsThunk()))
  }
}

export const deleteStudentThunk = id => {
  return dispatch => {
    axios
      .delete(`/api/students/${id}`)
      .then(() => dispatch(getAllStudentsThunk()))
  }
}
