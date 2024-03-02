import { LogContext, logUtil } from '../../../utils';
import { timerService as timerResourceService } from './timer';

class TimerService {
  private _baseUrl: string | null = null;
  private _logCtx: LogContext | null = null;

  public timer = timerResourceService;

  public init(clientCtx: LogContext, baseUrl: string) {
    this._logCtx = new logUtil.Context('TimerService', {
      parentCtx: clientCtx,
    });

    this._baseUrl = baseUrl;

    this.timer.init(this._logCtx, this._baseUrl);
  }
}

export const timerService = new TimerService();
