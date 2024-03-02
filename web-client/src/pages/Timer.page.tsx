import {
  ButtonGroup,
  TypographyDataProps,
  TypographyGroup,
} from 'rebuy-pomodoro-ui';
import { HomeTemplate } from '../templates';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { TimerContext } from '../contexts/TimerContext';
import { useContext, useEffect } from 'react';

export function TimerPage() {
  const {
    isListTimersWaiting,
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

  if (isListTimersWaiting) {
    timerTypographies.push({
      children: 'Getting Timers...',
      variant: 'body1',
    });
  }

  if (!timers.length && !isListTimersWaiting) {
    timerTypographies.push({
      children: 'No timers to display.',
      variant: 'body1',
    });
  }

  return (
    <HomeTemplate.Page>
      <Grid>
        <TypographyGroup typographies={timerTypographies} />
        <ButtonGroup
          direction="column"
          label="Start a new timer:"
          buttons={timerTypes.map((timerType) => ({
            children: timerType.label.replace(/_/g, ' '),
            variant: 'outlined',
          }))}
        />
      </Grid>
    </HomeTemplate.Page>
  );
}
