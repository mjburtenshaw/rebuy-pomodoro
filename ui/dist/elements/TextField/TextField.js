import { jsx as _jsx } from "react/jsx-runtime";
import TextField from '@mui/material/TextField';
/** Always use fullWidth. Limit the size using layout components. */
export function TextFieldUnstyled({ disabled, error, handleChange, helperText, label, multiline, name, placeholder, value, }) {
    return (_jsx(TextField, { disabled: disabled, error: error, fullWidth: true, helperText: helperText, label: label, maxRows: 5, minRows: 5, multiline: multiline, name: name, onChange: handleChange, placeholder: placeholder, sx: { marginTop: '3px' }, value: value }));
}
