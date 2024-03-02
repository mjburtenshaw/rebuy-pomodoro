import { createElement as _createElement } from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Button, Typography } from '../elements';
export function ButtonGroup({ buttons, centered, direction, label, spacing, }) {
    return (_jsxs(Grid, { container: true, direction: "column", sx: { ...(centered && { justifyContent: 'center' }) }, children: [label && _jsx(Typography, { variant: "body1", children: label }), _jsx(Grid, { direction: direction || 'row', spacing: spacing || 0, children: buttons.map((button, index) => (_createElement(Button, { ...button, key: index }))) })] }));
}
