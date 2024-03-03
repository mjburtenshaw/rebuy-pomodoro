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

  const { call: callListTimers, isWaiting: isListingTimers } = hooks.useService(
    services.api.timer.list,
    {
      failure: `Couldn't list timers. Please contact Support at ${SUPPORT_EMAIL}.`,
    },
  );

  async function listTimers() {
    const nextTimers = await callListTimers();
    if (nextTimers) {
      setTimers(nextTimers);
    }
  }

  const { call: callListTimerTypes, isWaiting: isListingTimerTypes } =
    hooks.useService(services.api.timerType.list, {
      failure: `Couldn't list timer types. Please contact Support at ${SUPPORT_EMAIL}.`,
    });

  async function listTimerTypes() {
    const nextTimerTypes = await callListTimerTypes();
    if (nextTimerTypes) {
      setTimerTypes(nextTimerTypes);
    }
  }

  const { call: callCreateTimer, isWaiting: isCreatingTimer } =
    hooks.useService(services.api.timer.create, {
      success: 'Timer created!',
      failure: `Couldn't create timer. Please contact Support at ${SUPPORT_EMAIL}.`,
    });

  async function createTimer(timerTypeId: string) {
    const timer = await callCreateTimer({
      startTime: new Date(),
      taskId: null,
      timerTypeId,
    });
    if (timer) {
      const nextTimers = timers.slice();
      nextTimers.push(timer);
      setTimers(nextTimers);
    }
  }

  const { call: callUpdateTimer, isWaiting: isUpdatingTimer } =
    hooks.useService(services.api.timer.updateOne, {
      success: 'Timer updated!',
      failure: `Couldn't update timer. Please contact Support at ${SUPPORT_EMAIL}.`,
    });

  async function stopTimer(timer: Timer) {
    await callUpdateTimer(timer.id, { endTime: new Date() }, 'user_term');
    await listTimers();
  }

  hooks.useCountdowns(timers, timerTypes);

  return (
    <TimerContext.Provider
      value={{
        createTimer,
        isCreatingTimer,
        isListingTimers,
        isListingTimerTypes,
        isUpdatingTimer,
        listTimers,
        listTimerTypes,
        stopTimer,
        timers,
        timerTypes,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
}
