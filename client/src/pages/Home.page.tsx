import { TypographyGroup } from 'rebuy-pomodoro-ui';
import { HomeTemplate } from '../templates';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

export function HomePage() {
  return (
    <HomeTemplate.Page>
      <Grid>
        <TypographyGroup
          typographies={[
            {
              children: 'Hello World!',
              variant: 'h1',
            },
            {
              children: "It's nice to see you!",
              variant: 'body1',
            },
          ]}
        />
      </Grid>
    </HomeTemplate.Page>
  );
}
