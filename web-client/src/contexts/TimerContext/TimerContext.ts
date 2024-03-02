import { createContext } from 'react';
import { Timer, TimerType } from '../../services';
import { asyncNoOp } from '../../global.utils';

type TTimerContext = {
  isListTimersWaiting: boolean;
  isListTimerTypesWaiting: boolean;
  listTimers: () => Promise<void>;
  listTimerTypes: () => Promise<void>;
  timers: Timer[];
  timerTypes: TimerType[];
};

export const TimerContext = createContext<TTimerContext>({
  isListTimersWaiting: false,
  isListTimerTypesWaiting: false,
  listTimers: asyncNoOp,
  listTimerTypes: asyncNoOp,
  timers: [],
  timerTypes: [],
});
