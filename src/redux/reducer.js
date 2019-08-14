import {
  GET_ALL_SCHOOLS,
  GET_ALL_STUDENTS,
  UPDATE_SCHOOL,
  UPDATE_STUDENT
} from './constants'

export const schoolsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_SCHOOLS:
      return action.schools
    case UPDATE_SCHOOL:
      return state.map(school =>
        school.id === action.schoolId ? action.school : school
      )
    default:
      return state
  }
}

export const studentsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_STUDENTS:
      return action.students
    case UPDATE_STUDENT:
      return state.map(student =>
        student.id === action.studentId ? action.student : student
      )
    default:
      return state
  }
}
