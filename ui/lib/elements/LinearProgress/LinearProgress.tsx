import { hooks } from './LinearProgress.hooks';
import LinearProgress, {
  LinearProgressProps as MuiLinearProgressProps,
} from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export type LinearProgressProps = {
  hookProps: {
    initial: number;
    cap: number;
    increment: number;
    interval: number;
  };
  isCountdown: boolean;
  muiProps?: MuiLinearProgressProps;
  progressLabelFormatter?: (progress: number) => string;
};

export function LinearProgressUnstyled({
  hookProps,
  isCountdown,
  muiProps,
  progressLabelFormatter,
}: LinearProgressProps) {
  const { progress } = hooks.useLinearProgress(
    hookProps.initial,
    hookProps.cap,
    hookProps.increment,
    hookProps.interval,
  );

  const normalize = (value: number) => (value * 100) / hookProps.cap;

  let progressLabel = progressLabelFormatter
    ? progressLabelFormatter(progress)
    : progress;
  if (isCountdown) {
    const progressRemaining = hookProps.cap - progress;
    progressLabel = progressLabelFormatter
      ? progressLabelFormatter(progressRemaining)
      : progressRemaining;
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress
            variant="determinate"
            color="secondary"
            value={normalize(progress)}
            {...muiProps}
          />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">
            {progressLabel}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
