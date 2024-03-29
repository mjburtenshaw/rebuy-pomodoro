import { LogContext, logUtil } from '../../../../utils';
import {
  CreateTimerOp,
  ListTimersOp,
  StagedTimer,
  Timer,
  TimerUpdates,
  UpdateTimerOp,
} from './dao.timer.types';
import axios from 'axios';

class TimerService {
  private _baseUrl: string | null = null;
  private _logCtx: LogContext | null = null;
  private _notReadyMessage =
    '💣 TimerService is not ready: check if dao.init() is called';

  public init(clientCtx: LogContext, baseUrl: string) {
    this._logCtx = new logUtil.Context('TimerService', {
      parentCtx: clientCtx,
    });

    this._baseUrl = baseUrl;
  }

  public async list(): Promise<Timer[]> {
    if (!this._baseUrl || !this._logCtx) {
      throw new Error(this._notReadyMessage);
    }

    logUtil.Logger.verbose(this._logCtx, '⏲️ listing Timers...');

    const listTimersOp: ListTimersOp = await axios.get(
      `${this._baseUrl}/timers/v1?active=true`,
    );

    const { timers } = listTimersOp.data;

    logUtil.Logger.verbose(this._logCtx, '✅ listed Timers', {
      timers: JSON.stringify(timers),
    });

    return timers;
  }

  public async create(stagedTimer: StagedTimer): Promise<Timer> {
    if (!this._baseUrl || !this._logCtx) {
      throw new Error(this._notReadyMessage);
    }

    logUtil.Logger.verbose(this._logCtx, '⏲️ creating Timer...');

    const createTimerOp: CreateTimerOp = await axios.post(
      `${this._baseUrl}/timers/v1/`,
      { stagedTimer },
    );

    const { timer } = createTimerOp.data;

    logUtil.Logger.verbose(this._logCtx, '✅ created Timer', {
      timers: JSON.stringify(timer),
    });

    return timer;
  }

  public async updateOne(
    timerId: string,
    timerUpdates: TimerUpdates,
    eventType: string,
  ): Promise<string | undefined> {
    if (!this._baseUrl || !this._logCtx) {
      throw new Error(this._notReadyMessage);
    }

    logUtil.Logger.verbose(this._logCtx, '⏲️ updating Timer...');

    const updateTimerOp: UpdateTimerOp = await axios.put(
      `${this._baseUrl}/timers/v1/${timerId}`,
      { eventType, timerUpdates },
    );

    const { error } = updateTimerOp.data;
    if (error) {
      return error;
    }

    logUtil.Logger.verbose(this._logCtx, '✅ updated Timer');
  }
}

export const timerService = new TimerService();
