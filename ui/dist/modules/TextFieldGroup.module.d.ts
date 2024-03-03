import { type TextFieldDataProps } from '../elements';
type TextFieldGroupProps = {
    columns?: 1 | 2 | 3 | 4 | 6 | 12;
    label?: string;
    textFields: TextFieldDataProps[];
};
export declare function TextFieldGroup({ label, textFields, columns, }: TextFieldGroupProps): import("react/jsx-runtime").JSX.Element;
export {};
