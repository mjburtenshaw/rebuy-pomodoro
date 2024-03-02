import { hooks } from '../../hooks';
import { services, TimerType, type Timer } from '../../services';
import { SUPPORT_EMAIL } from '../../global.constants';
import { TimerContext } from '.';
import { useState } from 'react';

type TimerContextProviderProps = {
  children: JSX.Element;
};

export function TimerContextProvider({ children }: TimerContextProviderProps) {
  const [timers, setTimers] = useState<Timer[]>([]);
  const [timerTypes, setTimerTypes] = useState<TimerType[]>([]);

  const { call: callListTimers, isWaiting: isListTimersWaiting } =
    hooks.useService(services.api.timer.list, {
      failure: `Couldn't list timers. Please contact Support at ${SUPPORT_EMAIL}.`,
    });

  async function listTimers() {
    const nextTimers = await callListTimers();
    if (nextTimers) {
      setTimers(nextTimers);
    }
  }

  const { call: callListTimerTypes, isWaiting: isListTimerTypesWaiting } =
    hooks.useService(services.api.timerType.list, {
      failure: `Couldn't list timer types. Please contact Support at ${SUPPORT_EMAIL}.`,
    });

  async function listTimerTypes() {
    const nextTimerTypes = await callListTimerTypes();
    if (nextTimerTypes) {
      setTimerTypes(nextTimerTypes);
    }
  }

  return (
    <TimerContext.Provider
      value={{
        isListTimersWaiting,
        isListTimerTypesWaiting,
        listTimers,
        listTimerTypes,
        timers,
        timerTypes,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
}
