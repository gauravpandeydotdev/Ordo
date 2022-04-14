const express = require('express');
const router = express.Router();
const passport = require('passport');

const auth = require('../services/auth');
const ytdlpService = require('../services/ytdlpService');
const config = require('../services/configParser');

router.get('/', async function(req, res) {
  res.render('index', {
    title: 'YourTube',
    version: await ytdlpService.getYtdlpVersion(),
    config: config.getConfig(),
  });
});

router.get('/auth/google', passport.authenticate('google', {
  scope: [
    'profile',
  ],
  accessType: 'offline',
  prompt: 'consent',
}, null));

router.get('/auth/google/callback', passport.authenticate('google', {
  successRedirect: '/home',
  failureRedirect: '/error',
}, null));

router.get('/home', auth.isAuthorized, function(req, res) {
  res.render('home', {
    title: 'Home | YourTube',
    name: req.user.displayName,
  });
});

router.get('/error', function(req, res) {
  res.render('error', {
    title: 'Error | YourTube',
    error: 'Oops! Something broke',
  });
});

router.get('/logout', function(req, res) {
  if (req.session) {
    req.session.destroy(() => {
      res.redirect('/');
    });
  }
});

module.exports = router;
