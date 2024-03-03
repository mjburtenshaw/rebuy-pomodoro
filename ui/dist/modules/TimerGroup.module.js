import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Button, LinearProgress, Typography, } from '../elements';
export function TimerGroup({ timers, centered, label, spacing, }) {
    return (_jsxs(Grid, { container: true, direction: "column", sx: { ...(centered && { justifyContent: 'center' }) }, children: [label && _jsx(Typography, { variant: "body1", children: label }), _jsx(Grid, { direction: "column", spacing: spacing || 0, children: timers.map((timer, index) => (_jsxs(Grid, { sx: { display: 'flex', flexWrap: 'nowrap' }, children: [_jsx(Button, { ...timer.button }), _jsxs(Grid, { direction: "column", width: "100%", children: [_jsx(Typography, { children: timer.label }), _jsx(LinearProgress, { ...timer.linearProgress })] })] }, index))) })] }));
}
