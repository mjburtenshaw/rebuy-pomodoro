import { TimerType } from '.';
import axios from 'axios';

class TimerTypeService {
  private _baseUrl: string | null = null;

  public init(baseUrl: string) {
    this._baseUrl = baseUrl;
  }

  public list: () => Promise<TimerType[]> = async () => {
    const listTimerTypesOp = await axios.get(
      `${this._baseUrl}/timer-types/v1/`,
    );
    return listTimerTypesOp.data.timerTypes;
  };

  public updateOne: (timerType: TimerType) => Promise<void> = async (
    timerType,
  ) => {
    await axios.put(`${this._baseUrl}/timer-types/v1/${timerType.id}`, {
      timerTypeUpdates: { duration: timerType.duration },
    });
  };
}

export const timerTypeService = new TimerTypeService();
