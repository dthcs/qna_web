const bcrypt = require('bcrypt');
const Sequelize = require('sequelize');
const User = require('../models/user.js');

const { username, password, database, host } = require('./config.json').development;
const sequelize = new Sequelize(database, username, password, {
  host,
  dialect: 'mysql',
});

async function createAdmin() {
  try {
    User.initiate(sequelize);

    const email = 'admin1@example.com';
    const nick = 'admin1';
    const plainPassword = '123';
    const role = 'admin';

    const exAdmin = await User.findOne({ where: { email } });
    if (exAdmin) {
      console.log('Admin account already exists.');
      return;
    }

    const hash = await bcrypt.hash(plainPassword, 12);
    const admin = await User.create({
      email,
      nick,
      password: hash,
      provider: 'local',
      role,
    });

    if (admin) {
      console.log('Admin account created successfully.');
    } else {
      console.log('Failed to create admin account.');
    }
  } catch (error) {
    console.error('Error creating admin account:', error);
  }
}

createAdmin();
