const { controller } = require('./timerType.ctrl');
const express = require('express');

const router = express.Router();

router.get('/timer-types/v1/', controller.list);

router.put('/timer-types/v1/:id', controller.updateOne);

module.exports = { router };
