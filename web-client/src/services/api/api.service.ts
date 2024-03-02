import { timerService } from './api.timer.service';

const baseUrls: Record<string, string> = {
  local: 'http://localhost:8080',
};

class ApiService {
  private _baseUrl: string | null = null;
  public timer = timerService;

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

    console.log('⭐️ API service is ready');
  }
}

export const service = new ApiService();
