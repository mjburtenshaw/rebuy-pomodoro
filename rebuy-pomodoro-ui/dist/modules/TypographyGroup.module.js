import { jsx as _jsx } from "react/jsx-runtime";
import { Typography } from '../elements';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
export function TypographyGroup({ centered, columns, typographies, }) {
    return (_jsx(Grid, { container: true, direction: columns ? 'column' : 'row', sx: {
            ...(centered && columns && { alignContent: 'center' }),
            ...(centered && !columns && { justifyContent: 'center' }),
        }, children: typographies.map((typographyProps, index) => (_jsx(Grid, { sx: { ...(typographyProps.centerText && { display: 'contents' }) }, xs: columns ? 12 / columns : 12, children: _jsx(Typography, { ...typographyProps }) }, index))) }));
}
