const Router = require('express').Router
const bcrypt = require('bcrypt')
const Teacher = require('./model')
const requireTeacher = require('../authentication/middleware').requireTeacher

const router = new Router()

router.post('/teachers', (req, res) => {
  const teacher = {
  	email: req.body.email,
  	password: bcrypt.hashSync(req.body.password, 10)
  }

  Teacher.create(teacher)
    .then(entity => {
      res.status(201)
      res.json({
    		id: entity.id,
    		email: entity.email
    	})
    })
    .catch(err => {
    	console.error(err)
    	res.status(500).send({
    		message: 'Something went wrong'
    	})
    })
})

// retrieving teachers with their id
router.get('/teachers/:id', (req, res) => {
  Teacher
    .findById(req.params.id)
    .then((teacher) => {
      if (teacher) {
        res.json(teacher)
      } else {
        res.status(404)
        res.json({ message: 'Teacher not found!' })
      }
    })
    .catch((err) => {
      console.error(err)
      res.status(500)
      res.json({ message: 'Oops! There was an error getting the teacher. Please try again' })
    })
})

// Edit teacher action
const patchOrPut = (req, res) => {
  Teacher
    .findById(req.params.id)
    .then(teacher => {
      return teacher.update(req.body)
    })
    .then(final => {
      res.json(final)
    })
    .catch(err => {
      res.status(500).send({ message: `something went wrong`, err })
    })
}

router.put('/teachers/:id', patchOrPut)
router.patch('/teachers/:id', patchOrPut)

module.exports = router
