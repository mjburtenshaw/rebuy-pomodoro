import { LogContext, logUtil } from '../../../../utils';
import {
  TimerType,
  ListTimerTypesOp,
  TimerTypeUpdates,
  UpdateTimerTypeOp,
} from './dao.timerType.types';
import axios from 'axios';

class TimerTypeService {
  private _baseUrl: string | null = null;
  private _logCtx: LogContext | null = null;
  private _notReadyMessage =
    '💣 TimerTypeService is not ready: check if dao.init() is called';

  public init(clientCtx: LogContext, baseUrl: string) {
    this._logCtx = new logUtil.Context('TimerTypeService', {
      parentCtx: clientCtx,
    });

    this._baseUrl = baseUrl;
  }

  public async list(): Promise<TimerType[]> {
    if (!this._baseUrl || !this._logCtx) {
      throw new Error(this._notReadyMessage);
    }

    logUtil.Logger.verbose(this._logCtx, '⏲️ listing TimerTypes...');

    const listTimerTypesOp: ListTimerTypesOp = await axios.get(
      `${this._baseUrl}/timer-types/v1/`,
    );

    const { timerTypes } = listTimerTypesOp.data;

    logUtil.Logger.verbose(this._logCtx, '✅ listed TimerTypes', {
      timers: JSON.stringify(timerTypes),
    });

    return timerTypes;
  }

  public async updateOne(
    timerTypeId: string,
    timerTypeUpdates: TimerTypeUpdates,
  ): Promise<string | undefined> {
    if (!this._baseUrl || !this._logCtx) {
      throw new Error(this._notReadyMessage);
    }

    logUtil.Logger.verbose(this._logCtx, '⏲️ updating TimerType...');

    const updateTimerOp: UpdateTimerTypeOp = await axios.put(
      `${this._baseUrl}/timer-types/v1/${timerTypeId}`,
      { timerTypeUpdates },
    );

    const { error } = updateTimerOp.data;
    if (error) {
      return error;
    }

    logUtil.Logger.verbose(this._logCtx, '✅ updated TimerType');
  }
}

export const timerTypeService = new TimerTypeService();
