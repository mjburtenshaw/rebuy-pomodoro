import { hooks } from '../../hooks';
import { services, type Timer } from '../../services';
import { SUPPORT_EMAIL } from '../../global.constants';
import { TimerContext } from '.';
import { useState } from 'react';

type TimerContextProviderProps = {
  children: JSX.Element;
};

export function TimerContextProvider({ children }: TimerContextProviderProps) {
  const [timers, setTimers] = useState<Timer[]>([]);

  const messages = {
    failure: `Couldn't list timers. Please contact Support at ${SUPPORT_EMAIL}.`,
  };

  const { call: callListTimers, isWaiting: isListTimersWaiting } =
    hooks.useService(services.api.timer.list, messages);

  async function listTimers() {
    const nextTimers = await callListTimers();
    if (nextTimers) {
      setTimers(nextTimers);
    }
  }

  return (
    <TimerContext.Provider
      value={{
        isListTimersWaiting,
        listTimers,
        timers,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
}
