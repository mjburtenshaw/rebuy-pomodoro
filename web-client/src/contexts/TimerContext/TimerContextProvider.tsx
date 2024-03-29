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
  const [timerTypeInEdit, setTimerTypeInEdit] = useState<TimerType | null>(
    null,
  );
  const [isMuted, setIsMuted] = useState(true);

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

  function changeTimerType(key: string, value: string) {
    if (!timerTypeInEdit) {
      return;
    }

    const nextTimerTypeInEdit = Object.fromEntries(
      Object.entries(timerTypeInEdit),
    ) as TimerType;

    if (key === 'duration') {
      nextTimerTypeInEdit.duration = Number(value);
    }
    setTimerTypeInEdit(nextTimerTypeInEdit);
  }

  const { call: callUpdateTimerType, isWaiting: isUpdatingTimerType } =
    hooks.useService(services.api.timerType.updateOne, {
      success: 'Timer updated!',
      failure: `Couldn't update timer. Please contact Support at ${SUPPORT_EMAIL}.`,
    });

  async function updateTimerType() {
    if (!timerTypeInEdit) {
      return;
    }

    await callUpdateTimerType(timerTypeInEdit);
    await listTimerTypes();

    setTimerTypeInEdit(null);
  }

  hooks.useCountdowns(timers, timerTypes, setTimers, isMuted);

  return (
    <TimerContext.Provider
      value={{
        changeTimerType,
        createTimer,
        isCreatingTimer,
        isListingTimers,
        isListingTimerTypes,
        isMuted,
        isUpdatingTimer,
        isUpdatingTimerType,
        listTimers,
        listTimerTypes,
        setIsMuted,
        setTimerTypeInEdit,
        stopTimer,
        timers,
        timerTypes,
        timerTypeInEdit,
        updateTimerType,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
}
