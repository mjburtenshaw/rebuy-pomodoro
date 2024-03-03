const db = require('../../../../models');
const httpStatus = require('http-status');

async function list(_, res) {
  try {
    const timers = await db.timer.findAll();
    res.status(httpStatus.OK).json({ timers });
  } catch (error) {
    console.error('💣 listing timers failed', error);
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

async function create(req, res) {
  try {
    const stagedTimer = {
      deleted_at: null,
      end_time: null,
      startTime: req.body.stagedTimer.startTime,
      taskId: req.body.stagedTimer.taskId,
      timerTypeId: req.body.stagedTimer.timerTypeId,
      version: '1',
    };
    const timer = await db.timer.create(stagedTimer);
    res.status(httpStatus.CREATED).json({ timer });
  } catch (error) {
    console.error('💣 creating timer failed', error);
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

const controller = { create, list };

module.exports = { controller };
