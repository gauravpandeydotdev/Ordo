const express = require('express');
const router = express.Router();

const ytdlpService = require('../services/ytdlpService');
const config = require('../services/configParser');

/* GET home page. */
router.get('/', async function(req, res, next) {
  res.render('index', {
    title: 'PlexTube',
    version: await ytdlpService.getYtdlpVersion(),
    config: config.getConfig(),
    envConfig: config.getEnvConfig(),
  });
});

module.exports = router;
