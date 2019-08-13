const router = require('express').Router()
const { Student, School } = require('../db/models')

module.exports = router

router.get('/', (req, res, next) => {
  Student.findAll({ include: [School] })
    .then(students => res.json(students))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  Student.findByPk(req.params.id, { include: [School] })
    .then(student => res.json(student))
    .catch(next)
})

router.post('/', (req, res, next) => {
  Student.create(req.body)
    .then(student => res.json(student))
    .catch(next)
})

router.delete('/:id', (req, res, next) => {
  Student.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(res.sendStatus(204))
    .catch(next)
})
