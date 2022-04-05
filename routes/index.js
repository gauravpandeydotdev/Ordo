var express = require('express');
var router = express.Router();
var ytdlpService = require('../services/ytdlpService');

/* GET home page. */
router.get('/', async function (req, res, next) {
    res.render('index', {
        version: await ytdlpService.getYtdlpVersion()
    });
});

module.exports = router;
