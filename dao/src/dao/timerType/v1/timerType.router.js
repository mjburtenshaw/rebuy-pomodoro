const { controller } = require('./timerType.ctrl');
const express = require('express');

const router = express.Router();

router.get('/timer-types/v1/', controller.list);

module.exports = { router };
