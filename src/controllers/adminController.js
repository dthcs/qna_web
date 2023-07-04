// const Admin = require('../models/admin.js'); // Replace './admin.js' with the correct path to the admin.js file

// // Assuming you have a Sequelize instance named 'sequelize' connected to your database
// // You may need to adjust this code according to your setup

// async function createAdmin() {
//   try {
//     await Admin.initiate(sequelize); // Initialize the Admin model with the Sequelize instance

//     // Create a new admin account
//     const newAdmin = await Admin.create({
//       email: 'admin@example.com',
//       nick: 'Admin',
//       password: '123',
//       provider: 'local',
//       role: 'admin',
//     });

//     console.log('Admin account created:', newAdmin);
//   } catch (error) {
//     console.error('Error creating admin account:', error);
//   } finally {
//     // Close the Sequelize connection if needed
//     await sequelize.close();
//   }
// }

// createAdmin();
