import { ChangeEvent } from 'react';
export type ChangeTextField = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
export declare function useTextField(defaultValue?: string): {
    handleChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    reset: () => void;
    value: string;
};
