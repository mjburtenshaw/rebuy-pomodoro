import { SxProps, Theme } from "@mui/material";
import Button from "@mui/material/Button";

export type ButtonDataProps = {
  children: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent) => void;
  skinny?: boolean;
  variant?: "contained" | "outlined" | "text";
};

type ButtonStyleProps = {
  styles: SxProps<Theme>;
};

export type ButtonProps = ButtonDataProps & ButtonStyleProps;

export function ButtonUnstyled({
  children,
  disabled,
  onClick,
  styles,
  variant = "text",
}: ButtonProps) {
  return (
    <Button disabled={disabled} onClick={onClick} sx={styles} variant={variant}>
      {children}
    </Button>
  );
}
