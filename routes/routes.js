const express = require('express');
const router = express.Router();

const controller  = require('../controller/controller');

router.post('/image',controller.upload)
router.post('/baseimage',controller.base64upload)

module.exports = router         