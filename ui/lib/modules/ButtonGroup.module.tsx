import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Button, Typography } from '../elements';
import type { ButtonDataProps } from '../elements';

type ButtonGroupModuleProps = {
  buttons: ButtonDataProps[];
  centered?: boolean;
  direction?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
  label?: string;
  spacing?: number;
};

export function ButtonGroup({
  buttons,
  centered,
  direction,
  label,
  spacing,
}: ButtonGroupModuleProps) {
  return (
    <Grid
      container
      direction="column"
      sx={{ ...(centered && { justifyContent: 'center' }) }}
    >
      {label && <Typography variant="body1">{label}</Typography>}
      <Grid direction={direction || 'row'} spacing={spacing || 0}>
        {buttons.map((button, index) => (
          <Button {...button} key={index} />
        ))}
      </Grid>
    </Grid>
  );
}
