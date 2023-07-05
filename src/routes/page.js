const express = require('express');
const { isLoggedIn, isNotLoggedIn } = require('../middlewares');
const { renderProfile, renderJoin, renderLogin, renderContact, renderMain } = require('../controllers/page');

const router = express.Router();

router.use((req, res, next) => {
  res.locals.user = req.user;
  res.locals.followerCount = 0;
  res.locals.followingCount = 0;
  res.locals.followingIdList = [];
  next();
});

router.get('/profile', isLoggedIn, renderProfile);

router.get('/join', isNotLoggedIn, renderJoin);

router.get('/login', isNotLoggedIn, renderLogin);

// router.get('/admin', isNotLoggedIn,  renderAdmin);

router.get('/contact', renderContact);

router.get('/', renderMain);

// router.get('/post', renderPost);

module.exports = router;