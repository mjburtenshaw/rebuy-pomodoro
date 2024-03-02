import { logUtil } from '../../../utils/log';
import { services } from '../../../services';
import express from 'express';
import status from 'http-status';

const list: express.Handler = async (_, res) => {
  const ctx = new logUtil.Context('timerController', {
    parentCtx: res.locals.ctx,
  });
  try {
    const timers = await services.dao.timer.timer.list();
    res.status(status.OK).json({ timers });
  } catch (error: any) {
    logUtil.Logger.error(ctx, `timer error: ${error.message}`, error);
    res.sendStatus(status.INTERNAL_SERVER_ERROR);
  }
};

export const controller = {
  list,
};
