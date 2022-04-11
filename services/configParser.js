const config = require('config');
require('dotenv').config();

exports.getConfig = function() {
  return config.get('yt-dlp.testConfig');
};

exports.getEnvConfig = function() {
  return process.env.GOOGLE_YOUTUBE_PROJECT_ID;
};