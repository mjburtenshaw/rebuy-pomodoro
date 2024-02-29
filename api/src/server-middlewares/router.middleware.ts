import { ping } from '../api/ping';
import type { Express } from 'express';

export function useRouters(expressApp: Express) {
  expressApp.use(ping.v1.router);
}
