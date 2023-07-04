// const User = require('../models/user');

// exports.createUser = async (req, res, next) => {
//   const { email, nick, password, role } = req.body;
//   try {
//     const newUser = await User.create({
//       email: "admin@gmail.com",
//       nick: "admin",
//       password: "123",
//       role: "admin",
//     });
//     // Handle successful user creation
//     res.status(200).json(newUser);
//   } catch (error) {
//     // Handle error
//     console.error(error);
//     res.status(500).json({ error: 'Failed to create user account' });
//   }
// };