import { SUPPORT_EMAIL } from '../global.constants';
import { Timer, TimerType, services } from '../services';
import { useService } from './useService.hooks';
import { useCallback, useEffect, useState } from 'react';

type Timeouts = Record<string, NodeJS.Timeout>;

export function useCountdowns(timers: Timer[], timerTypes: TimerType[]) {
  const [countdowns, setCountdowns] = useState<Timeouts>({});

  const { call: callUpdateTimer } = useService(services.api.timer.updateOne, {
    success: 'Timer updated!',
    failure: `Couldn't update timer. Please contact Support at ${SUPPORT_EMAIL}.`,
  });

  const removeCountdown = useCallback((timerId: string) => {
    const countdown = countdowns[timerId];
    clearTimeout(countdown);

    const nextCountdowns = Object.fromEntries(
      Object.entries(countdowns).filter(([key]) => key !== timerId),
    );

    setCountdowns(nextCountdowns);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const removeAllCountdowns = useCallback(() => {
    Object.values(countdowns).forEach((countdown) => {
      clearTimeout(countdown);
    });

    setCountdowns({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createCountdown = useCallback(
    (timer: Timer) => {
      const timerType = timerTypes.find(
        (timerType) => timerType.id === timer.timerTypeId,
      );
      if (!timerType) {
        return; // timerTypes might not be ready yet.
      }

      const capSeconds = timerType.duration / 1000;
      const initialSeconds = Math.floor(
        (Date.now() - Date.parse(timer.startTime)) / 1000,
      );

      const autoTerminateMs = (capSeconds - initialSeconds) * 1000;
      const countdown = setTimeout(() => {
        const sound = new Audio(
          '../../public/sound-types/dd1d6231-7587-4f67-aa7c-1f0df1b8182f.mp3',
        );
        sound.play();
        callUpdateTimer(timer.id, { endTime: new Date() }, 'auto_term');
        removeCountdown(timer.id);
      }, autoTerminateMs);

      return countdown;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [timerTypes],
  );

  useEffect(() => {
    const initialCountdowns = timers.reduce<Timeouts>(
      (initialCountdowns, timer) => {
        const countdown = createCountdown(timer);
        if (countdown) {
          initialCountdowns[timer.id] = countdown;
        }
        return initialCountdowns;
      },
      {},
    );

    setCountdowns(initialCountdowns);

    return removeAllCountdowns;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timers, timerTypes]);
}
