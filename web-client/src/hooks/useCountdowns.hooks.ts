import { SUPPORT_EMAIL } from '../global.constants';
import { Timer, TimerType, services } from '../services';
import { useService } from './useService.hooks';
import { useCallback, useEffect, useState } from 'react';

type Timeouts = Record<string, NodeJS.Timeout>;

export function useCountdowns(
  timers: Timer[],
  timerTypes: TimerType[],
  setTimers: (callback: (timers: Timer[]) => Timer[]) => void,
  isMuted: boolean,
) {
  const [countdowns, setCountdowns] = useState<Timeouts>({});

  const { call: callUpdateTimer } = useService(services.api.timer.updateOne, {
    success: 'Timer updated!',
    failure: `Couldn't update timer. Please contact Support at ${SUPPORT_EMAIL}.`,
  });

  const removeCountdown = useCallback(
    (timerId: string) => {
      const countdown = countdowns[timerId];
      clearTimeout(countdown);

      setCountdowns((prevCountdowns) => {
        const nextCountdowns = Object.fromEntries(
          Object.entries(prevCountdowns).filter(([key]) => key !== timerId),
        );
        return nextCountdowns;
      });

      setTimers((prevTimers: Timer[]) => {
        const nextTimers = prevTimers
          .slice()
          .filter((prevTimer) => prevTimer.id !== timerId);
        return nextTimers;
      });
    },
    [countdowns, setTimers],
  );

  const fulfillTimer = useCallback(
    (timer: Timer) => {
      const sound = new Audio(
        '../../public/sound-types/dd1d6231-7587-4f67-aa7c-1f0df1b8182f.mp3',
      );
      if (!isMuted) {
        sound.play();
      }
      callUpdateTimer(timer.id, { endTime: new Date() }, 'auto_term');
      removeCountdown(timer.id);
    },
    [callUpdateTimer, isMuted, removeCountdown],
  );

  const createCountdown = useCallback(
    (timer: Timer) => {
      const timerType = timerTypes.find(
        (timerType) => timerType.id === timer.timerTypeId,
      );
      if (!timerType) {
        return; // timerTypes might not be ready yet.
      }
      if (countdowns[timer.id]) {
        return; // There is already a timer.
      }

      const capSeconds = timerType.duration / 1000;
      const initialSeconds = Math.floor(
        (Date.now() - Date.parse(timer.startTime)) / 1000,
      );
      const autoTerminateMs = (capSeconds - initialSeconds) * 1000;

      const countdown = setTimeout(() => {
        fulfillTimer(timer);
      }, autoTerminateMs);

      const nextCountdowns = Object.fromEntries(Object.entries(countdowns));
      nextCountdowns[timer.id] = countdown;

      setCountdowns((prevCountdowns) => {
        const nextCountdowns = Object.fromEntries(
          Object.entries(prevCountdowns),
        );
        nextCountdowns[timer.id] = countdown;
        return nextCountdowns;
      });
    },
    [timerTypes, countdowns, fulfillTimer],
  );

  useEffect(() => {
    const timerIds = timers.map((timer) => timer.id);

    // cancel stale countdowns
    Object.keys(countdowns).forEach((timerId) => {
      if (!timerIds.includes(timerId)) {
        removeCountdown(timerId);
      }
    });

    timers.forEach(createCountdown);
  }, [countdowns, createCountdown, removeCountdown, timers]);
}
