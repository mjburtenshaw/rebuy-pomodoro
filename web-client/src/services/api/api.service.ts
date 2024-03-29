import { timerService } from './api.timer.service';
import { timerTypeService } from './api.timerType.service';

const baseUrls: Record<string, string> = {
  local: 'http://localhost:8080',
};

class ApiService {
  private _baseUrl: string | null = null;
  public timer = timerService;
  public timerType = timerTypeService;

  constructor() {
    const { VITE_ENV } = import.meta.env;
    if (!VITE_ENV) {
      throw new Error('💣 VITE_ENV is falsy: Check environment variables');
    }

    this._baseUrl = baseUrls[VITE_ENV as string];
    if (!this._baseUrl) {
      throw new Error(
        '💣 failed to locate API base URL: Check baseUrls in the API service',
      );
    }

    this.timer.init(this._baseUrl);
    this.timerType.init(this._baseUrl);
  }
}

export const service = new ApiService();
