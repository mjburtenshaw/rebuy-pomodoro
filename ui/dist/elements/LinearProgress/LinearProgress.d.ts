import { LinearProgressProps as MuiLinearProgressProps } from '@mui/material/LinearProgress';
export type LinearProgressProps = {
    hookProps: {
        initial: number;
        cap: number;
        increment: number;
        interval: number;
    };
    isCountdown: boolean;
    muiProps?: MuiLinearProgressProps;
    progressLabelFormatter?: (progress: number) => string;
};
export declare function LinearProgressUnstyled({ hookProps, isCountdown, muiProps, progressLabelFormatter, }: LinearProgressProps): import("react/jsx-runtime").JSX.Element;
