import type { ButtonDataProps } from '../elements';
type ButtonGroupModuleProps = {
    buttons: ButtonDataProps[];
    centered?: boolean;
    direction?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
    label?: string;
    spacing?: number;
};
export declare function ButtonGroup({ buttons, centered, direction, label, spacing, }: ButtonGroupModuleProps): import("react/jsx-runtime").JSX.Element;
export {};
