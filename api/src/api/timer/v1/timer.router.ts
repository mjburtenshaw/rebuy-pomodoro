import express from 'express';
import { controller } from './timer.ctrl';
import { apiMiddlewares } from '../../../api-middlewares';

const router = express.Router();

const indexRoute = router.route('/timers/v1/');
indexRoute.get(apiMiddlewares.logHttp('GET /timers/v1/'), controller.list);
indexRoute.post(apiMiddlewares.logHttp('POST /timers/v1/'), controller.create);

export { router };
