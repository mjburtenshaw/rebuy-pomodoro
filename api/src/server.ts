import 'dotenv/config';
import { logUtil } from './utils/log';
import { serverMiddlewares } from './server-middlewares';
import cors from 'cors';
import express from 'express';
import { services } from './services';

function startApi() {
  const { PORT } = process.env;
  const REQUEST_SIZE_LIMIT = '10mb';

  logUtil.Logger.init(logUtil.winstonAdapter);
  const ctx = new logUtil.Context('server', {
    data: {
      app: 'api',
      env: process.env.NODE_ENV || 'not set',
    },
  });

  const api = express();

  api.locals.ctx = ctx; // Expose log context to express handlers.

  api.use(express.json({ limit: REQUEST_SIZE_LIMIT }));
  api.use(express.urlencoded({ limit: REQUEST_SIZE_LIMIT, extended: false }));
  api.use(cors());

  services.dao.init(ctx);

  serverMiddlewares.useRouters(api);

  const httpServer = api.listen(PORT, () => {
    const url = `http://localhost:${PORT}`;
    logUtil.Logger.info(ctx, `✅ API is ready to accept connections at ${url}`);
  });

  // Prevents local servers from hanging up when changes are detected.
  // See Also: [ts-node-dev fails to restarts after change](https://github.com/wclr/ts-node-dev/issues/318)
  process.on('SIGTERM', () => {
    logUtil.Logger.verbose(ctx, 'SIGTERM received, exiting.');
    process.exit(0);
  });

  return { api, httpServer };
}

export const server = {
  startApi,
};
