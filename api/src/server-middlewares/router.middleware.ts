import { api } from '../api';
import type { Express } from 'express';

export function useRouters(expressApp: Express) {
  expressApp.use(api.ping.v1.router);
  expressApp.use(api.timer.v1.router);
}
