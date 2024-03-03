/// <reference types="react" />
import { SxProps, Theme } from '@mui/material';
export type ButtonDataProps = {
    children: string;
    disabled?: boolean;
    onClick?: (event: React.MouseEvent) => void;
    skinny?: boolean;
    variant?: 'contained' | 'outlined' | 'text';
    iconOnly?: 'appearance' | 'trash';
};
type ButtonStyleProps = {
    styles: SxProps<Theme>;
};
export type ButtonProps = ButtonDataProps & ButtonStyleProps;
export declare function ButtonUnstyled({ children, disabled, onClick, styles, variant, iconOnly, }: ButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
