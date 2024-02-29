import { createLogger, format, transports } from 'winston';
import { isEnvLevelKey } from './log.types';
import { envLevels, LOG_LEVELS } from './log.constants';

const { NODE_ENV, SHOULD_LOG_CONTEXT } = process.env;

const level = isEnvLevelKey(NODE_ENV) ? envLevels[NODE_ENV] : LOG_LEVELS.DEBUG; // Log everything non-trivial as a fallback.

const appFormat = [
  format.errors({ stack: true }),
  format.splat(),
  format.json(),
];

const shouldLogContext = SHOULD_LOG_CONTEXT === 'true';

const defaultMeta: Record<string, any> = {};

if (shouldLogContext) {
  appFormat.unshift(format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }));
  defaultMeta.service = 'api';
}

const loggerConfig = {
  level,
  format: format.combine(...appFormat),
  defaultMeta,
  transports: [
    new transports.File({
      dirname: 'logs',
      filename: 'error.log',
      level: 'error',
    }),
    new transports.File({
      dirname: 'logs',
      filename: `${NODE_ENV}.log`,
    }),
  ],
};

const winstonAdapter = createLogger(loggerConfig);

if (NODE_ENV === 'local') {
  winstonAdapter.add(
    new transports.Console({
      format: format.combine(format.colorize(), format.simple()),
    }),
  );
}

export { winstonAdapter };
