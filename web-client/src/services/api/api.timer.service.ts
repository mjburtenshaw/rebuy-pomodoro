import { Timer } from '.';
import axios from 'axios';

class TimerService {
  private _baseUrl: string | null = null;

  public init(baseUrl: string) {
    this._baseUrl = baseUrl;
  }

  public list = async (): Promise<Timer[]> => {
    const timersOp = await axios.get(`${this._baseUrl}/timers/v1/`);
    return timersOp.data.timers;
  };
}

export const timerService = new TimerService();
