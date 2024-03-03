import TextField from '@mui/material/TextField';
import type { ChangeTextField } from './useTextField.hook';

export type TextFieldDataProps = {
  disabled?: boolean;
  error?: boolean;
  handleChange: ChangeTextField;
  label?: string;
  helperText?: string;
  multiline?: boolean;
  name?: string;
  placeholder?: string;
  value: string;
};

type TextFieldStyleProps = object;

export type TextFieldProps = TextFieldDataProps & TextFieldStyleProps;

/** Always use fullWidth. Limit the size using layout components. */
export function TextFieldUnstyled({
  disabled,
  error,
  handleChange,
  helperText,
  label,
  multiline,
  name,
  placeholder,
  value,
}: TextFieldProps) {
  return (
    <TextField
      disabled={disabled}
      error={error}
      fullWidth
      helperText={helperText}
      label={label}
      maxRows={5}
      minRows={5}
      multiline={multiline}
      name={name}
      onChange={handleChange}
      placeholder={placeholder}
      sx={{ marginTop: '3px' }}
      value={value}
    />
  );
}
