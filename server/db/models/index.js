const School = require('./School')
const Student = require('./Student')

School.hasMany(Student)
Student.belongsTo(School)

module.exports = {
  School,
  Student
}
