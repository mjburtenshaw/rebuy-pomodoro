import { jsx as _jsx } from "react/jsx-runtime";
import { ButtonUnstyled } from "./Button";
export function Button(props) {
    const skinnyStyles = {
        width: "fit-content",
    };
    return (_jsx(ButtonUnstyled, { ...props, styles: props.skinny ? skinnyStyles : {} }));
}
