import { createContext } from 'react';
import { Timer, TimerType } from '../../services';
import { asyncNoOp, noOp } from '../../global.utils';

type TTimerContext = {
  changeTimerType: (key: string, value: string) => void;
  createTimer: (timerTypeId: string) => Promise<void>;
  isCreatingTimer: boolean;
  isListingTimers: boolean;
  isListingTimerTypes: boolean;
  isUpdatingTimer: boolean;
  isUpdatingTimerType: boolean;
  listTimers: () => Promise<void>;
  listTimerTypes: () => Promise<void>;
  setTimerTypeInEdit: (timerType: TimerType | null) => void;
  stopTimer: (timer: Timer) => Promise<void>;
  timers: Timer[];
  timerTypes: TimerType[];
  timerTypeInEdit: TimerType | null;
  updateTimerType: () => Promise<void>;
};

export const TimerContext = createContext<TTimerContext>({
  changeTimerType: noOp,
  createTimer: asyncNoOp,
  isCreatingTimer: false,
  isListingTimers: false,
  isListingTimerTypes: false,
  isUpdatingTimer: false,
  isUpdatingTimerType: false,
  listTimers: asyncNoOp,
  listTimerTypes: asyncNoOp,
  setTimerTypeInEdit: noOp,
  stopTimer: asyncNoOp,
  timers: [],
  timerTypes: [],
  timerTypeInEdit: null,
  updateTimerType: asyncNoOp,
});
