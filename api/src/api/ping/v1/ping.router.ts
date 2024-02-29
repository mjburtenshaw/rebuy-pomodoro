import express from 'express';
import { controller } from './ping.ctrl';
import { apiMiddlewares } from '../../../api-middlewares';

const router = express.Router();

router.get('/', apiMiddlewares.logHttp('GET /'), controller.get);

export { router };
