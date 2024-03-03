import { StagedTimer, Timer } from '.';
import axios from 'axios';

class TimerService {
  private _baseUrl: string | null = null;

  public init(baseUrl: string) {
    this._baseUrl = baseUrl;
  }

  public list = async (): Promise<Timer[]> => {
    const listTimersOp = await axios.get(`${this._baseUrl}/timers/v1/`);
    return listTimersOp.data.timers;
  };

  public create = async (stagedTimer: StagedTimer): Promise<Timer> => {
    const createTimersOp = await axios.post(`${this._baseUrl}/timers/v1/`, {
      stagedTimer,
    });
    return createTimersOp.data.timer;
  };
}

export const timerService = new TimerService();
