import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Typography, type TextFieldDataProps, TextField } from '../elements';

type TextFieldGroupProps = {
  columns?: 1 | 2 | 3 | 4 | 6 | 12;
  label?: string;
  textFields: TextFieldDataProps[];
};

export function TextFieldGroup({
  label,
  textFields,
  columns = 1,
}: TextFieldGroupProps) {
  return (
    <Grid container direction="column" spacing={2}>
      {label && (
        <Grid>
          <Typography>{label}</Typography>
        </Grid>
      )}
      <Grid container>
        {textFields.map((textField, index) => (
          <Grid key={index} xs={12 / columns}>
            <TextField {...textField} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
