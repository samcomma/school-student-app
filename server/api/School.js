const router = require('express').Router()
const { School, Student } = require('../db/models')

module.exports = router

router.get('/', (req, res, next) => {
  School.findAll({ include: [Student] })
    .then(schools => res.json(schools))
    .catch(next)
})
