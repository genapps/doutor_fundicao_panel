'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    
  await queryInterface.bulkInsert(
    "users",
    [
      {
        name: "Admin User",
        email: "admin@exemple.app",
        password_hash: "$2a$08$joFtEV7WIyeu4iIPaHcfxecBl0yvGa2a/Uk9QvYi7/Y37vv/vStZW",
        role: "admin",
        status: "active",
        created_at: new Date(),
        updated_at: new Date(),

      },
      {
        name: "Dev User",
        email: "dev@example.app",
        password_hash: "$2a$08$joFtEV7WIyeu4iIPaHcfxecBl0yvGa2a/Uk9QvYi7/Y37vv/vStZW",
        role: "developer",
        status: "active",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Manager User",
        email: "manager@exemple.app",
        password_hash: "$2a$08$joFtEV7WIyeu4iIPaHcfxecBl0yvGa2a/Uk9QvYi7/Y37vv/vStZW",
        role: "manager",
        status: "active",
        created_at: new Date(),
        updated_at: new Date(),
      },
      
    ]
  )
  }
}
 