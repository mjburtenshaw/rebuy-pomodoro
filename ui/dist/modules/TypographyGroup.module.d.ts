import { type TypographyDataProps } from '../elements';
type TypographyGroupProps = {
    centered?: boolean;
    columns?: 1 | 2 | 3 | 4 | 6 | 12;
    typographies: TypographyDataProps[];
};
export declare function TypographyGroup({ centered, columns, typographies, }: TypographyGroupProps): import("react/jsx-runtime").JSX.Element;
export {};
