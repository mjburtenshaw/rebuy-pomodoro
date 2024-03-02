import { LogContext, logUtil } from '../../utils';
import { timerService } from './timer';

const baseUrls: Record<string, string> = {
  local: 'http://dao:8081',
};

class DaoService {
  private _baseUrl: string | null = null;
  private _logCtx: LogContext | null = null;
  public timer = timerService;

  public init(serverCtx: LogContext) {
    this._logCtx = new logUtil.Context('DaoService', {
      parentCtx: serverCtx,
    });

    const { NODE_ENV } = process.env;
    if (!NODE_ENV) {
      throw new Error('💣 NODE_ENV is falsy: Check environment variables');
    }

    this._baseUrl = baseUrls[NODE_ENV as string];
    if (!this._baseUrl) {
      throw new Error(
        '💣 failed to locate DAO base URL: Check baseUrls in the DAO service',
      );
    }

    this.timer.init(this._logCtx, this._baseUrl);

    logUtil.Logger.verbose(this._logCtx, '🛂 DAO service is ready');
  }
}

export const service = new DaoService();
