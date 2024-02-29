import { jsx as _jsx } from "react/jsx-runtime";
import { TypographyUnstyled } from './Typography';
export function Typography(props) {
    const centerTextStyles = { textAlign: 'center' };
    const smallTextStyles = { fontSize: '12px' };
    return (_jsx(TypographyUnstyled, { ...props, styles: {
            ...(props.centerText && centerTextStyles),
            ...(props.smallFont && smallTextStyles),
        } }));
}
