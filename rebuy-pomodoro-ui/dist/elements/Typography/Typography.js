import { jsx as _jsx } from "react/jsx-runtime";
import Typography from '@mui/material/Typography';
export function TypographyUnstyled({ children, id, styles, variant = 'body1', }) {
    return (_jsx(Typography, { id: id, sx: styles, variant: variant, children: children }));
}
