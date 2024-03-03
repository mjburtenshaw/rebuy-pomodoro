import { ChangeEvent, useState } from 'react';

export type ChangeTextField = (
  event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
) => void;

export function useTextField(defaultValue?: string) {
  const [value, setValue] = useState(defaultValue || '');
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setValue(event.target.value);
  const reset = () => setValue(defaultValue || '');
  return { handleChange, reset, value };
}
