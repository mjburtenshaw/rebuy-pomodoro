import { TypographyUnstyled } from './Typography';
import type { TypographyDataProps } from './Typography';

export function Typography(props: TypographyDataProps) {
  const centerTextStyles = { textAlign: 'center' };
  const smallTextStyles = { fontSize: '12px' };
  return (
    <TypographyUnstyled
      {...props}
      styles={{
        ...(props.centerText && centerTextStyles),
        ...(props.smallFont && smallTextStyles),
      }}
    />
  );
}
