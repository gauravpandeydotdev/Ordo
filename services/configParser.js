const config = require('config');

exports.getConfig = function() {
  return config.get('yt-dlp.testConfig');
};
