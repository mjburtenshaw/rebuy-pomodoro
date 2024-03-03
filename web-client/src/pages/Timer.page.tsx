import {
  ButtonGroup,
  TimerGroup,
  TypographyDataProps,
  TypographyGroup,
} from 'rebuy-pomodoro-ui';
import { TimerTemplate } from '../templates';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { TimerContext } from '../contexts/TimerContext';
import { useContext, useEffect } from 'react';

export function TimerPage() {
  const {
    createTimer,
    isListingTimers,
    listTimers,
    listTimerTypes,
    timers,
    timerTypes,
  } = useContext(TimerContext);

  useEffect(() => {
    (async () => {
      await listTimers();
      await listTimerTypes();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const timerTypographies: TypographyDataProps[] = [
    {
      children: 'Timers',
      variant: 'h1',
    },
  ];

  if (isListingTimers) {
    timerTypographies.push({
      children: 'Getting Timers...',
      variant: 'body1',
    });
  }

  if (!timers.length && !isListingTimers) {
    timerTypographies.push({
      children: 'No timers to display.',
      variant: 'body1',
    });
  }

  return (
    <TimerTemplate.Page>
      <Grid>
        <TypographyGroup typographies={timerTypographies} />
        {timers.length && timerTypes.length ? (
          <TimerGroup
            timers={timers.map((timer) => {
              const timerType = timerTypes.find(
                (timerType) => timerType.id === timer.timerTypeId,
              );
              if (!timerType) {
                throw new Error('💣 timerType not found');
              }

              const capSeconds = timerType.duration / 1000;
              const initialSeconds = Math.floor(
                (Date.now() - Date.parse(timer.startTime)) / 1000,
              );

              return {
                button: {
                  children: 'STOP',
                },
                label: timerType.label,
                linearProgress: {
                  hookProps: {
                    cap: capSeconds,
                    increment: 1,
                    initial: initialSeconds,
                    interval: 1000,
                  },
                  isCountdown: true,
                  progressLabelFormatter: (secondsRemaining: number) => {
                    const minutesRemaining = Math.floor(secondsRemaining / 60);
                    const onlySecondsRemaining = secondsRemaining % 60;
                    return `${minutesRemaining}m${onlySecondsRemaining}s`;
                  },
                },
              };
            })}
          />
        ) : null}
        <ButtonGroup
          direction="column"
          label="Start a new timer:"
          buttons={timerTypes.map((timerType) => ({
            children: timerType.label.replace(/_/g, ' '),
            variant: 'outlined' as const,
            onClick: () => createTimer(timerType.id),
          }))}
        />
      </Grid>
    </TimerTemplate.Page>
  );
}
