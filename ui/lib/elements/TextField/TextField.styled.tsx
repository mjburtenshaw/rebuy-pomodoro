import { TextFieldUnstyled } from './TextField';
import type { TextFieldDataProps } from './TextField';

export function TextField(props: TextFieldDataProps) {
  return <TextFieldUnstyled {...props} />;
}
