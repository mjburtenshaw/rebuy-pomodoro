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

const controller = { list };

module.exports = { controller };
