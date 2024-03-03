import Grid from '@mui/material/Unstable_Grid2/Grid2';
import {
  Button,
  ButtonDataProps,
  LinearProgress,
  LinearProgressProps,
  Typography,
} from '../elements';

type TimerGroupModuleProps = {
  timers: Array<{
    button: ButtonDataProps;
    label: string;
    linearProgress: LinearProgressProps;
  }>;
  centered?: boolean;
  label?: string;
  spacing?: number;
};

export function TimerGroup({
  timers,
  centered,
  label,
  spacing,
}: TimerGroupModuleProps) {
  return (
    <Grid
      container
      direction="column"
      sx={{ ...(centered && { justifyContent: 'center' }) }}
    >
      {label && <Typography variant="body1">{label}</Typography>}
      <Grid direction="column" spacing={spacing || 0}>
        {timers.map((timer, index) => (
          <Grid key={index} sx={{ display: 'flex', flexWrap: 'nowrap' }}>
            <Button {...timer.button} />
            <Grid direction="column" width="100%">
              <Typography>{timer.label}</Typography>
              <LinearProgress {...timer.linearProgress} />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
