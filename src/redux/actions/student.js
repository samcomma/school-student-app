import { GET_ALL_STUDENTS, UPDATE_STUDENT } from '../constants'
import axios from 'axios'

export const getAllStudents = students => ({
  type: GET_ALL_STUDENTS,
  students
})

export const updateStudent = (studentId, student) => ({
  type: UPDATE_STUDENT,
  studentId,
  student
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

export const updateStudentThunk = (studentId, student) => {
  return dispatch => {
    axios
      .put(`/api/students/${studentId}`, student)
      .then(({ data }) => dispatch(updateStudent(studentId, data)))
  }
}

export const deleteStudentThunk = id => {
  return dispatch => {
    axios
      .delete(`/api/students/${id}`)
      .then(() => dispatch(getAllStudentsThunk()))
  }
}
