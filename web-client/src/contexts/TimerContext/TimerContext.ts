import { createContext } from 'react';
import { Timer } from '../../services';
import { asyncNoOp } from '../../global.utils';

type TTimerContext = {
  isListTimersWaiting: boolean;
  listTimers: () => Promise<void>;
  timers: Timer[];
};

export const TimerContext = createContext<TTimerContext>({
  isListTimersWaiting: false,
  listTimers: asyncNoOp,
  timers: [],
});
