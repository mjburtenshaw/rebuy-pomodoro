import type { ChangeTextField } from './useTextField.hook';
export type TextFieldDataProps = {
    disabled?: boolean;
    error?: boolean;
    handleChange: ChangeTextField;
    label?: string;
    helperText?: string;
    multiline?: boolean;
    name?: string;
    placeholder?: string;
    value: string;
};
type TextFieldStyleProps = object;
export type TextFieldProps = TextFieldDataProps & TextFieldStyleProps;
/** Always use fullWidth. Limit the size using layout components. */
export declare function TextFieldUnstyled({ disabled, error, handleChange, helperText, label, multiline, name, placeholder, value, }: TextFieldProps): import("react/jsx-runtime").JSX.Element;
export {};
