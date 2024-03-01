const { controller } = require('./timer.ctrl');
const express = require('express');

const router = express.Router();

router.get('/timers/v1/', controller.list);

module.exports = { router };
