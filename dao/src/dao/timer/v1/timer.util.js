const db = require('../../../../models');

async function autoTerminate(timer, timerTypes) {
  const timerType = timerTypes.find(
    (timerType) => timerType.id === timer.timerTypeId,
  );
  if (!timerType) {
    throw new Error(
      `couldn't find TimerType ${timer.timerTypeId} for timer ${timer.id}`,
    );
  }

  const start = Date.parse(timer.startTime);
  const diff = Date.now() - start;
  if (diff >= timerType.duration && !timer.endTime) {
    const end = new Date(start + timerType.duration);
    timer.endTime = end;
    await timer.save();
    await db.timerLog.create({
      eventType: 'auto_term',
      timerId: timer.id,
      version: '1',
    });
  }
}

const util = { autoTerminate };

module.exports = { util };
