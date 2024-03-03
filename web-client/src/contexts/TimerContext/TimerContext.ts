import { createContext } from 'react';
import { Timer, TimerType } from '../../services';
import { asyncNoOp } from '../../global.utils';

type TTimerContext = {
  createTimer: (timerTypeId: string) => Promise<void>;
  isCreatingTimer: boolean;
  isListingTimers: boolean;
  isListingTimerTypes: boolean;
  isUpdatingTimer: boolean;
  listTimers: () => Promise<void>;
  listTimerTypes: () => Promise<void>;
  stopTimer: (timer: Timer) => Promise<void>;
  timers: Timer[];
  timerTypes: TimerType[];
};

export const TimerContext = createContext<TTimerContext>({
  createTimer: asyncNoOp,
  isCreatingTimer: false,
  isListingTimers: false,
  isListingTimerTypes: false,
  isUpdatingTimer: false,
  listTimers: asyncNoOp,
  listTimerTypes: asyncNoOp,
  stopTimer: asyncNoOp,
  timers: [],
  timerTypes: [],
});
