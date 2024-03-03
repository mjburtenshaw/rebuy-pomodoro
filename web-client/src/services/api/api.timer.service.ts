import { StagedTimer, Timer, TimerUpdates } from '.';
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

  public updateOne = async (
    timerId: string,
    timerUpdates: TimerUpdates,
    eventType: string,
  ): Promise<string | null> => {
    const updateTimerOp = await axios.put(
      `${this._baseUrl}/timers/v1/${timerId}`,
      {
        eventType,
        timerUpdates,
      },
    );

    return updateTimerOp.data.error || null;
  };
}

export const timerService = new TimerService();
