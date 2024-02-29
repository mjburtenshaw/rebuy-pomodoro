import { Adapter, LogLevel, isLogOptions } from './log.types';
import { Context } from './context.log.util';

class Logger {
  static notReadyMessage =
    "Logger isn't ready. Call the init() method before use.";
  private _adapter: Adapter | null = null;

  init(adapter: Adapter) {
    this._adapter = adapter;
  }

  /**
   * Modify IGNORED_LOG_LEVELS in your .env file to ignore certain log levels.
   *
   * In local, some logs can be very noisy, such as http logs.
   * This helps to calibrate log volume so you can focus on what matters to you.
   * IGNORED_LOG_LEVELS has no effect in non-local environments.
   */
  private _isIgnored(level: LogLevel) {
    const { IGNORED_LOG_LEVELS, NODE_ENV } = process.env;
    if (!IGNORED_LOG_LEVELS || NODE_ENV !== 'local') {
      return false;
    }

    const ignoredLogLevels = IGNORED_LOG_LEVELS.split(',');
    return ignoredLogLevels.includes(level);
  }

  /**
   * Modify SHOULD_LOG_CONTEXT in your .env file to include the context for every log.
   *
   * In local, some logs can be very noisy because of their nested context.
   * This helps to calibrate log verbosity so you can focus on what matters to you.
   * SHOULD_LOG_CONTEXT has no effect in non-local environments.
   */
  private _shouldLogContext(logCtxForCall: boolean) {
    const { SHOULD_LOG_CONTEXT, NODE_ENV } = process.env;
    return (
      logCtxForCall || SHOULD_LOG_CONTEXT === 'true' || NODE_ENV !== 'local'
    );
  }

  private _log(
    level: LogLevel,
    ctx: Context,
    message: string | object,
    ...rest: any[]
  ) {
    if (!this._adapter) {
      throw new Error(Logger.notReadyMessage);
    }

    const hasOptions = rest[0] && isLogOptions(rest[0]);

    const options = hasOptions ? rest[0] : {};

    if (options.logCtxForCall === undefined) {
      options.logCtxForCall = false;
    }

    if (!this._isIgnored(level)) {
      const logFn = this._adapter[level];

      // Don't include options in the log
      const effectiveRest = hasOptions ? rest.slice(1) : rest;

      if (this._shouldLogContext(options.logCtxForCall)) {
        logFn(message, ...effectiveRest, { ctx: ctx.get() });
      } else {
        logFn(message, ...effectiveRest);
      }
    }
  }

  public error(ctx: Context, message: string | object, ...rest: any[]) {
    this._log('error', ctx, message, ...rest);
  }

  public warn(ctx: Context, message: string | object, ...rest: any[]) {
    this._log('warn', ctx, message, ...rest);
  }

  public info(ctx: Context, message: string | object, ...rest: any[]) {
    this._log('info', ctx, message, ...rest);
  }

  public http(ctx: Context, message: string | object, ...rest: any[]) {
    this._log('http', ctx, message, ...rest);
  }

  public verbose(ctx: Context, message: string | object, ...rest: any[]) {
    this._log('verbose', ctx, message, ...rest);
  }

  public debug(ctx: Context, message: string | object, ...rest: any[]) {
    this._log('debug', ctx, message, ...rest);
  }

  public silly(ctx: Context, message: string | object, ...rest: any[]) {
    this._log('silly', ctx, message, ...rest);
  }
}

export const LoggerSingleton = new Logger();
