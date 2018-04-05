'use strict';
const bcrypt = require('bcrypt')

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Teachers', [{
        name: 'John Doe',
        email: 'johndoe@hotmail.com',
        password: bcrypt.hashSync('12345678', 10),
        createdAt: 'NOW()',
        updatedAt: 'NOW()'
      },
      {
        name: 'Jane Doe',
        email: 'janedoe@hotmail.com',
        password: bcrypt.hashSync('12345678', 10),
        createdAt: 'NOW()',
        updatedAt: 'NOW()'
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Teachers', null, {});
  }
};
