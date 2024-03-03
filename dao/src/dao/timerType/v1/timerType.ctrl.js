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

async function updateOne(req, res) {
  try {
    await db.timerType.update(req.body.timerTypeUpdates, {
      where: {
        id: req.params.id,
      },
    });

    res.sendStatus(httpStatus.OK);
  } catch (error) {
    console.error('💣 updating TimerType failed', error);
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

const controller = { list, updateOne };

module.exports = { controller };
