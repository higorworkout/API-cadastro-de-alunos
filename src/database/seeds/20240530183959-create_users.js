'use strict';
const bcryptjs = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {

     await queryInterface.bulkInsert(
      'users', [{
          nome: 'John Doe',
          email: 'john@example.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
      },
      {
          nome: 'Johnatan',
          email: 'johnatan@example.com',
          password_hash: await bcryptjs.hash('1412512', 8),
          created_at: new Date(),
          updated_at: new Date(),
      },
       {
          nome: 'Jonny',
          email: 'jonny@example.com',
          password_hash: await bcryptjs.hash('12354566', 8),
          created_at: new Date(),
          updated_at: new Date(),
      }

    ], {});

  }

};
