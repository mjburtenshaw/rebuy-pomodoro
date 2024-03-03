import { IconButton, SxProps, Theme } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

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

const Icons = {
  appearance: <Brightness4Icon />,
  trash: <DeleteIcon />,
};

export function ButtonUnstyled({
  children,
  disabled,
  onClick,
  styles,
  variant = 'text',
  iconOnly,
}: ButtonProps) {
  if (!iconOnly) {
    return (
      <Button
        disabled={disabled}
        onClick={onClick}
        sx={styles}
        variant={variant}
      >
        {children}
      </Button>
    );
  }

  return (
    <IconButton disabled={disabled} onClick={onClick} sx={styles}>
      {Icons[iconOnly]}
    </IconButton>
  );
}
