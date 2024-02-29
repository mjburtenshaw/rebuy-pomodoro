import { Typography, type TypographyDataProps } from '../elements';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

type TypographyGroupProps = {
  centered?: boolean;
  columns?: 1 | 2 | 3 | 4 | 6 | 12;
  typographies: TypographyDataProps[];
};

export function TypographyGroup({
  centered,
  columns,
  typographies,
}: TypographyGroupProps) {
  return (
    <Grid
      container
      direction={columns ? 'column' : 'row'}
      sx={{
        ...(centered && columns && { alignContent: 'center' }),
        ...(centered && !columns && { justifyContent: 'center' }),
      }}
    >
      {typographies.map((typographyProps, index) => (
        <Grid
          key={index}
          sx={{ ...(typographyProps.centerText && { display: 'contents' }) }}
          xs={columns ? 12 / columns : 12}
        >
          <Typography {...typographyProps} />
        </Grid>
      ))}
    </Grid>
  );
}
