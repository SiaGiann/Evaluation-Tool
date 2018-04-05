const Router = require('express').Router
const Class = require('./model')
const requireTeacher = require('../authentication/middleware').requireTeacher
const db = require('../models')
// const { Op } = require('sequelize')

const router = new Router()

router.get('/classes', (req, res) => {
  Class
    .findAll({
      attributes: ['batch_nr', 'start_date', 'end_date']
    })
    .then(classes => {
      res.json(classes)
    })
    .catch(err => {
      console.error(err)
      res.status(500)
      res.json({ message: err.message })
    })
})

router.post('/classes', (req, res) => {
  Class
    .create(req.body)
    .then(entity => {
      res.status(201)
      res.json(entity)
    })
    .catch(err => {
      res.status(422)
      res.json({ message: err.message })
    })
})

module.exports = router
