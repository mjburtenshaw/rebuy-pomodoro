import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { hooks } from './LinearProgress.hooks';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
export function LinearProgressUnstyled({ hookProps, isCountdown, muiProps, progressLabelFormatter, }) {
    const { progress } = hooks.useLinearProgress(hookProps.initial, hookProps.cap, hookProps.increment, hookProps.interval);
    const normalize = (value) => (value * 100) / hookProps.cap;
    let progressLabel = progressLabelFormatter
        ? progressLabelFormatter(progress)
        : progress;
    if (isCountdown) {
        const progressRemaining = hookProps.cap - progress;
        progressLabel = progressLabelFormatter
            ? progressLabelFormatter(progressRemaining)
            : progressRemaining;
    }
    return (_jsx(Box, { sx: { width: '100%' }, children: _jsxs(Box, { sx: { display: 'flex', alignItems: 'center' }, children: [_jsx(Box, { sx: { width: '100%', mr: 1 }, children: _jsx(LinearProgress, { variant: "determinate", color: "secondary", value: normalize(progress), ...muiProps }) }), _jsx(Box, { sx: { minWidth: 35 }, children: _jsx(Typography, { variant: "body2", color: "text.secondary", children: progressLabel }) })] }) }));
}
