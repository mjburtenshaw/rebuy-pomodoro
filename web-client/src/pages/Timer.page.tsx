import { TypographyDataProps, TypographyGroup } from 'rebuy-pomodoro-ui';
import { HomeTemplate } from '../templates';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { TimerContext } from '../contexts/TimerContext';
import { useContext, useEffect } from 'react';

export function TimerPage() {
  const { isListTimersWaiting, listTimers, timers } = useContext(TimerContext);

  useEffect(() => {
    (async () => {
      await listTimers();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const typographies: TypographyDataProps[] = [
    {
      children: 'Timers',
      variant: 'h1',
    },
  ];

  if (isListTimersWaiting) {
    typographies.push({
      children: 'Getting Timers...',
      variant: 'body1',
    });
  }

  if (!timers.length && !isListTimersWaiting) {
    typographies.push({
      children: 'No timers to display.',
      variant: 'body1',
    });
  }

  return (
    <HomeTemplate.Page>
      <Grid>
        <TypographyGroup typographies={typographies} />
      </Grid>
    </HomeTemplate.Page>
  );
}
