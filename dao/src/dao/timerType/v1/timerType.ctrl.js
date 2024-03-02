const db = require('../../../../models');
const httpStatus = require('http-status');

async function list(_, res) {
  try {
    const timerTypes = await db.timerType.findAll();
    res.status(httpStatus.OK).json({ timerTypes });
  } catch (error) {
    console.error('💣 listing timerTypes failed', error);
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

const controller = { list };

module.exports = { controller };
