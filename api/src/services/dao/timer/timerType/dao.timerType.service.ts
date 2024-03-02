import { LogContext, logUtil } from '../../../../utils';
import { TimerType, ListTimerTypesOp } from './dao.timerType.types';
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

    return timerTypes.map((timerType) => ({
      createdAt: timerType.created_at,
      deletedAt: timerType.deleted_at,
      duration: timerType.duration,
      id: timerType.id,
      label: timerType.label,
      soundTypeId: timerType.sound_type_id,
      updatedAt: timerType.updated_at,
      version: timerType.version,
    }));
  }
}

export const timerTypeService = new TimerTypeService();
