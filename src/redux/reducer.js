import { GET_ALL_SCHOOLS, GET_ALL_STUDENTS } from './constants'

export const schoolsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_SCHOOLS:
      return action.schools
    default:
      return state
  }
}

export const studentsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_STUDENTS:
      return action.students
    default:
      return state
  }
}
