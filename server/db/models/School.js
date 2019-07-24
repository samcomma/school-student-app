const Sequelize = require('sequelize')
const db = require('../db')

const School = db.define('school', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://pixel.nymag.com/imgs/daily/vindicated/2016/11/23/23-harvard-business-school-winter-1.w700.h700.jpg'
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT
  }
})

module.exports = School
