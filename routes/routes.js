const express = require('express');
const router = express.Router();

const datacontroller  = require('../controller/controller');

router.post('/image',datacontroller.upload)

module.exports = router         