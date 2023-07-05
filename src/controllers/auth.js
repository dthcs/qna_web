const bcrypt = require('bcrypt');
const passport = require('passport');
const User = require('../models/user');
const Post = require('../models/post')
// const Admin = require('../models/admin')

exports.join = async (req, res, next) => {
  const { email, nick, password, role } = req.body;
  try {
    const exUser = await User.findOne({ where: { email } });
    if (exUser) {
      return res.redirect('/join?error=exist');
    }
    const hash = await bcrypt.hash(password, 12);
    await User.create({
      email,
      nick,
      password: hash,
      role: "user",
    });
    return res.redirect('/');
  } catch (error) {
    console.error(error);
    return next(error);
  }
}

exports.login = (req, res, next) => {
  passport.authenticate('local', (authError, user, info) => {
    if (authError) {
      console.error(authError);
      return next(authError);
    }
    if (!user) {
      return res.redirect(`/?error=${info.message}`);
    }
    return req.login(user, (loginError) => {
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      // return res.redirect('/');
      if (user.role === 'admin') {
        return res.redirect('/admin');
      // } else if (user.role === 'user') {
      //   return res.redirect('/');
      } else {
        return res.redirect('/'); // Default redirection if role is not defined
      }
    });
  })(req, res, next); // 미들웨어 내의 미들웨어에는 (req, res, next)를 붙입니다.
};


exports.logout = (req, res) => {
  req.logout(() => {
    res.redirect('/');
  });
};

exports.post = async (req, res, next) => {
  // const { email, nick, password, role } = req.body;
  const { content } = req.body;
  try {
    // const exUser = await User.findOne({ where: { email } });
    // if (exUser) {
    //   return res.redirect('/join?error=exist');
    // }
    // const hash = await bcrypt.hash(password, 12);
    await Post.create({
      content,
    });
    return res.redirect('/');
  } catch (error) {
    console.error(error);
    return next(error);
  }
}