import { createStore, combineReducers, applyMiddleware } from 'redux'
import { schoolsReducer, studentsReducer } from './reducer'
import thunk from 'redux-thunk'
import loggerMiddleware from 'redux-logger'

const reducer = combineReducers({
  schools: schoolsReducer,
  students: studentsReducer
})

const store = createStore(reducer, applyMiddleware(thunk, loggerMiddleware))

export default store
