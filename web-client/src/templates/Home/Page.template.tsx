import Grid from '@mui/material/Unstable_Grid2/Grid2';

type PageProps = {
  children: React.ReactNode;
};

export function Page({ children }: PageProps) {
  return (
    <Grid
      container
      direction="column"
      spacing={3}
      sx={{
        alignItems: 'center',
        height: '100%',
        justifyContent: 'center',
        overflow: 'scroll',
      }}
    >
      {children}
    </Grid>
  );
}
