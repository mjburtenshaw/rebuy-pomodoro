import express from 'express';
import { controller } from './timer.ctrl';
import { apiMiddlewares } from '../../../api-middlewares';

const router = express.Router();

router.get(
  '/timers/v1/',
  apiMiddlewares.logHttp('GET /timers/v1/'),
  controller.list,
);

export { router };
