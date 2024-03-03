import { ButtonDataProps, LinearProgressProps } from '../elements';
type TimerGroupModuleProps = {
    timers: Array<{
        button: ButtonDataProps;
        label: string;
        linearProgress: LinearProgressProps;
    }>;
    centered?: boolean;
    label?: string;
    spacing?: number;
};
export declare function TimerGroup({ timers, centered, label, spacing, }: TimerGroupModuleProps): import("react/jsx-runtime").JSX.Element;
export {};
