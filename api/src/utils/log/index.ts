import { Context } from './context.log.util';
import { LoggerSingleton } from './logger.log.util';
import { winstonAdapter } from './winston.log.adapter';
import * as constants from './log.constants';
import * as types from './log.types';

const logUtil = {
  ...constants,
  ...types,
  Context,
  Logger: LoggerSingleton,
  winstonAdapter,
};

// It's necessary to export Context separately for typing.
export { logUtil, Context as LogContext };
