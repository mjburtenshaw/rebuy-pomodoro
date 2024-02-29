/// <reference types="react" />
import { SxProps, Theme } from '@mui/material';
type MuiTypographyVariant = 'body1' | 'body2' | 'button' | 'caption' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'inherit' | 'overline' | 'subtitle1' | 'subtitle2';
export type TypographyDataProps = {
    centerText?: boolean;
    children: string | JSX.Element;
    id?: string;
    smallFont?: boolean;
    variant?: MuiTypographyVariant;
};
type TypographyStyleProps = {
    styles: SxProps<Theme>;
};
export type TypographyProps = TypographyDataProps & TypographyStyleProps;
export declare function TypographyUnstyled({ children, id, styles, variant, }: TypographyProps): import("react/jsx-runtime").JSX.Element;
export {};
