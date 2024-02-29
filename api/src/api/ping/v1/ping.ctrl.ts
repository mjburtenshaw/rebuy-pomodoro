import status from 'http-status';
import express from 'express';
import { logUtil } from '../../../utils/log';
import { HEALTH_STATUSES } from './ping.constants';

const getReadableUptime = () => {
  const uptimeInSeconds = process.uptime();
  const hours = Math.floor(uptimeInSeconds / 3600);
  const minutes = Math.floor((uptimeInSeconds % 3600) / 60);
  const seconds = Math.floor(uptimeInSeconds % 60);
  return `${hours}h ${minutes}m ${seconds}s`;
};

const get: express.Handler = (_, res) => {
  const ctx = new logUtil.Context('pingController', {
    parentCtx: res.locals.ctx,
  });
  const health = {
    status: HEALTH_STATUSES.HEALTHY,
    version: process.env.BUILD_VERSION || 'version not set',
    uptime: getReadableUptime(),
    timestamp: new Date().toISOString(),
  };
  try {
    res.status(status.OK).json(health);
  } catch (error: any) {
    health.status = HEALTH_STATUSES.SICK;
    logUtil.Logger.error(ctx, `Ping error: ${error.message}`, error);
    res.status(status.INTERNAL_SERVER_ERROR).json(health);
  }
};

export const controller = {
  get,
};
