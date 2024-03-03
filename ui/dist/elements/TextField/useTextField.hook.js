import { useState } from 'react';
export function useTextField(defaultValue) {
    const [value, setValue] = useState(defaultValue || '');
    const handleChange = (event) => setValue(event.target.value);
    const reset = () => setValue(defaultValue || '');
    return { handleChange, reset, value };
}
