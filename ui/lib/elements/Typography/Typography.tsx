import { SxProps, Theme } from '@mui/material';
import Typography from '@mui/material/Typography';

type MuiTypographyVariant =
  | 'body1'
  | 'body2'
  | 'button'
  | 'caption'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'inherit'
  | 'overline'
  | 'subtitle1'
  | 'subtitle2';

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

export function TypographyUnstyled({
  children,
  id,
  styles,
  variant = 'body1',
}: TypographyProps) {
  return (
    <Typography id={id} sx={styles} variant={variant}>
      {children}
    </Typography>
  );
}
