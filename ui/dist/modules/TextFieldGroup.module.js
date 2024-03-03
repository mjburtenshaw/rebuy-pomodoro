import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Typography, TextField } from '../elements';
export function TextFieldGroup({ label, textFields, columns = 1, }) {
    return (_jsxs(Grid, { container: true, direction: "column", spacing: 2, children: [label && (_jsx(Grid, { children: _jsx(Typography, { children: label }) })), _jsx(Grid, { container: true, children: textFields.map((textField, index) => (_jsx(Grid, { xs: 12 / columns, children: _jsx(TextField, { ...textField }) }, index))) })] }));
}
