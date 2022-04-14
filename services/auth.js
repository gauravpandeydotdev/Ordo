require('dotenv').config();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use('google', new GoogleStrategy({
      clientID: process.env.YOUTUBE_CLIENT_ID,
      clientSecret: process.env.YOUTUBE_CLIENT_SECRET,
      callbackURL: process.env.YOUTUBE_REDIRECT_URIS,
    },
    function(accessToken, refreshToken, profile, next) {
      return next(null, profile);
    },
));

passport.serializeUser(function(profile, next) {
  next(null, profile);
});

passport.deserializeUser(function(profile, next) {
  next(null, profile);
});

exports.isAuthorized = function(req, res, next) {
  return req.user ? next() : res.sendStatus(401);
};