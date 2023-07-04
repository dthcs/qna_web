const passport = require('passport');
const local = require('./localStrategy');
const kakao = require('./kakaoStrategy');
// const adminStrategy = require('./adminStrategy');
const User = require('../models/user');
// const Admin = require('../models/admin');



module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findOne({ where: { id } })
      .then(user => done(null, user))
      .catch(err => done(err));
  });

  local();
  // kakao();
  // adminStrategy();
};