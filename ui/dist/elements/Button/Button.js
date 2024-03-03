import { jsx as _jsx } from "react/jsx-runtime";
import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
const Icons = {
    appearance: _jsx(Brightness4Icon, {}),
    muted: _jsx(VolumeOffIcon, {}),
    trash: _jsx(DeleteIcon, {}),
    unmuted: _jsx(VolumeUpIcon, {}),
};
export function ButtonUnstyled({ children, disabled, onClick, styles, variant = 'text', iconOnly, }) {
    if (!iconOnly) {
        return (_jsx(Button, { disabled: disabled, onClick: onClick, sx: styles, variant: variant, children: children }));
    }
    return (_jsx(IconButton, { disabled: disabled, onClick: onClick, sx: styles, children: Icons[iconOnly] }));
}
