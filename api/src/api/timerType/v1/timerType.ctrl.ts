import { logUtil } from '../../../utils/log';
import { services } from '../../../services';
import express from 'express';
import status from 'http-status';

const list: express.Handler = async (_, res) => {
  const ctx = new logUtil.Context('timerTypeController:list', {
    parentCtx: res.locals.ctx,
  });
  try {
    const timerTypes = await services.dao.timer.timerType.list();
    res.status(status.OK).json({ timerTypes });
  } catch (error: any) {
    logUtil.Logger.error(ctx, `timerType error: ${error.message}`, error);
    res.sendStatus(status.INTERNAL_SERVER_ERROR);
  }
};

const updateOne: express.Handler = async (req, res) => {
  const ctx = new logUtil.Context('timerTypeController:updateOne', {
    parentCtx: res.locals.ctx,
  });
  try {
    await services.dao.timer.timerType.updateOne(
      req.params.id,
      req.body.timerTypeUpdates,
    );
    res.sendStatus(status.OK);
  } catch (error: any) {
    logUtil.Logger.error(ctx, `timerType error: ${error.message}`, error);
    res.sendStatus(status.INTERNAL_SERVER_ERROR);
  }
};

export const controller = {
  list,
  updateOne,
};
