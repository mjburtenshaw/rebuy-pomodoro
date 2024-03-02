import express from 'express';
import { controller } from './timerType.ctrl';
import { apiMiddlewares } from '../../../api-middlewares';

const router = express.Router();

router.get(
  '/timer-types/v1/',
  apiMiddlewares.logHttp('GET /timer-types/v1/'),
  controller.list,
);

export { router };
