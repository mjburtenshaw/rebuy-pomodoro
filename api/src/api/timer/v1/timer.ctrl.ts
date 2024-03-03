import { logUtil } from '../../../utils/log';
import { services } from '../../../services';
import express from 'express';
import status from 'http-status';

const list: express.Handler = async (_, res) => {
  const ctx = new logUtil.Context('timerController:list', {
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

const create: express.Handler = async (req, res) => {
  const ctx = new logUtil.Context('timerController:create', {
    parentCtx: res.locals.ctx,
  });
  try {
    const timer = await services.dao.timer.timer.create(req.body.stagedTimer);
    res.status(status.CREATED).json({ timer });
  } catch (error: any) {
    logUtil.Logger.error(ctx, `timer error: ${error.message}`, error);
    res.sendStatus(status.INTERNAL_SERVER_ERROR);
  }
};

export const controller = {
  create,
  list,
};
