const Router = require('express').Router
const bcrypt = require('bcrypt')
const Teacher = require('../teachers/model')
const sign = require('../jwt').sign

const router = new Router()

router.post('/logins', (req, res) => {
  Teacher
  	.findOne({
  		where: {
  			email: req.body.email
  		}
  	})
  	.then(entity => {
      console.log(entity)
  		if (bcrypt.compareSync(req.body.password, entity.password)) {
  			res.send({
  				jwt: sign(entity.id)
  			})
  		}
  		else {
  			res.status(400).send({
  				message: 'Password was incorrect'
  			})
  		}
  	})
  	.catch(err => {
  		console.error(err)
  		res.status(500).send({
  			message: 'Something went wrong'
  		})
  	})
})

module.exports = router
