const Sequelize = require('sequelize')
const sequelize = require('../models').sequelize

const Teacher = sequelize.define('teacher', {
  name: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
}, {
  tableName: 'Teachers'
})

module.exports = Teacher
