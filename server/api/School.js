const router = require('express').Router()
const { School, Student } = require('../db/models')

module.exports = router

router.get('/', (req, res, next) => {
  School.findAll({ include: [Student] })
    .then(schools => res.json(schools))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  School.findByPk(req.params.id, { include: [Student] })
    .then(school => res.json(school))
    .catch(next)
})

router.post('/', (req, res, next) => {
  School.create(req.body)
    .then(school => res.json(school))
    .catch(next)
})

router.put('/:id', (req, res, next) => {
  School.findByPk(req.params.id)
    .then(school => school.update(req.body))
    .then(school => res.json(school))
    .catch(next)
})

router.delete('/:id', (req, res, next) => {
  School.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(res.sendStatus(204))
    .catch(next)
})
