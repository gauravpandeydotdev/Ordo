var express = require('express');
var router = express.Router();
var ytdlpService = require('../services/ytdlpService');
var config = require('../services/configParser');

/* GET home page. */
router.get('/', async function (req, res, next) {
    res.render('index', {
        version: await ytdlpService.getYtdlpVersion(),
        config: config.getConfig(),
        envConfig: config.getEnvConfig()
    });
});

module.exports = router;
