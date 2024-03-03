const { util } = require('./timer.util');
const db = require('../../../../models');
const httpStatus = require('http-status');

async function list(req, res) {
  try {
    const timers = await db.timer.findAll();
    const timerTypes = await db.timerType.findAll();
    const terminations = timers.map((timer) =>
      util.autoTerminate(timer, timerTypes),
    );
    await Promise.all(terminations);
    const activeTimers = timers.filter((timer) => !timer.endTime);
    res
      .status(httpStatus.OK)
      .json({ timers: req.query.active ? activeTimers : timers });
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
    await db.timerLog.create({
      eventType: 'start',
      timerId: timer.id,
      version: '1',
    });
    res.status(httpStatus.CREATED).json({ timer });
  } catch (error) {
    console.error('💣 creating timer failed', error);
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

const controller = { create, list };

module.exports = { controller };
