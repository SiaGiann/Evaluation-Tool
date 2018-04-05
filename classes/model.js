const Sequelize = require('sequelize')
const sequelize = require('../models').sequelize

const Class = sequelize.define('class', {
  batch_nr: {
    type: Sequelize.INTEGER,
  },
  start_date: {
    type: Sequelize.DATEONLY,
  },
  end_date: {
    type: Sequelize.DATEONLY,
  }
}, {
  tableName: 'Classes'
})

module.exports = Class
