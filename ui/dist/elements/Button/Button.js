import { jsx as _jsx } from "react/jsx-runtime";
import Button from "@mui/material/Button";
export function ButtonUnstyled({ children, disabled, onClick, styles, variant = "text", }) {
    return (_jsx(Button, { disabled: disabled, onClick: onClick, sx: styles, variant: variant, children: children }));
}
