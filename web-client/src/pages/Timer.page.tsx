import {
  ButtonDataProps,
  ButtonGroup,
  TextFieldGroup,
  TimerGroup,
  TypographyDataProps,
  TypographyGroup,
} from 'rebuy-pomodoro-ui';
import { TimerTemplate } from '../templates';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { AppContext, TimerContext } from '../contexts';
import { useContext, useEffect } from 'react';

export function TimerPage() {
  const { handleThemeChange, theme } = useContext(AppContext);
  const {
    changeTimerType,
    createTimer,
    isListingTimers,
    isMuted,
    listTimers,
    listTimerTypes,
    setIsMuted,
    setTimerTypeInEdit,
    stopTimer,
    timers,
    timerTypes,
    timerTypeInEdit,
    updateTimerType,
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

  const controlButtons: ButtonDataProps[] = [
    {
      children: '',
      iconOnly: 'appearance',
      onClick: () => handleThemeChange(theme === 'light' ? 'dark' : 'light'),
    },
  ];

  const mutedIndicator: ButtonDataProps = {
    children: '',
    iconOnly: 'muted',
    onClick: () => setIsMuted(false),
  };

  const unmutedIndicator: ButtonDataProps = {
    children: '',
    iconOnly: 'unmuted',
    onClick: () => {
      /* no-op */
    },
    disabled: true,
  };

  controlButtons.push(isMuted ? mutedIndicator : unmutedIndicator);

  useEffect(() => {
    const unmute = () => {
      setIsMuted(false);
    };

    if (isMuted) {
      document.addEventListener('click', unmute);
    } else {
      document.removeEventListener('click', unmute);
    }

    return () => {
      document.removeEventListener('click', unmute);
    };
  }, [isMuted, setIsMuted]);

  return (
    <TimerTemplate.Page>
      <Grid>
        <ButtonGroup buttons={controlButtons} />
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
                  children: '',
                  iconOnly: 'trash',
                  onClick: () => stopTimer(timer),
                },
                label: timerType.label.replace(/_/g, ' '),
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
                    return minutesRemaining
                      ? `${minutesRemaining}m${onlySecondsRemaining}s`
                      : `${onlySecondsRemaining}s`;
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
        <ButtonGroup
          direction="column"
          label="Edit a timer type:"
          buttons={timerTypes.map((timerType) => ({
            children: timerType.label.replace(/_/g, ' '),
            variant:
              timerTypeInEdit?.id === timerType.id
                ? 'contained'
                : ('outlined' as const),
            onClick: () =>
              setTimerTypeInEdit(
                timerTypeInEdit?.id === timerType.id ? null : timerType,
              ),
          }))}
        />
        {timerTypeInEdit ? (
          <>
            <TextFieldGroup
              textFields={[
                {
                  value: String(timerTypeInEdit.duration),
                  handleChange: (event) =>
                    changeTimerType('duration', event.target.value),
                  label: 'Duration',
                  helperText: 'How long the timer lasts in milliseconds',
                },
              ]}
            />
            <ButtonGroup
              buttons={[{ children: 'SAVE', onClick: updateTimerType }]}
            />
          </>
        ) : null}
      </Grid>
    </TimerTemplate.Page>
  );
}
