import { TimerType } from '.';
import axios from 'axios';

class TimerTypeService {
  private _baseUrl: string | null = null;

  public init(baseUrl: string) {
    this._baseUrl = baseUrl;
  }

  public list = async (): Promise<TimerType[]> => {
    const timerTypesOp = await axios.get(`${this._baseUrl}/timer-types/v1/`);
    return timerTypesOp.data.timerTypes;
  };
}

export const timerTypeService = new TimerTypeService();
