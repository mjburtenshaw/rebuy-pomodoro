import { useSnackbar } from './useSnackbar.hooks';
import { useState } from 'react';

type Messages = {
  success?: string;
  failure: string;
  invalid?: string;
};

type UseServiceOptions = {
  validator?: <I extends unknown[]>(...args: I) => boolean;
};

export function useService<I extends unknown[], O>(
  service: (...args: I) => Promise<O>,
  messages: Messages,
  options?: UseServiceOptions,
) {
  const [isWaiting, setIsWaiting] = useState(false);
  const { notify } = useSnackbar();

  const call = async (...args: I) => {
    setIsWaiting(true);
    try {
      if (options?.validator) {
        const isValid = options.validator();
        if (!isValid) {
          if (messages.invalid) {
            notify(messages.invalid, { variant: 'error' });
          }
          throw new Error(messages.invalid);
        }
      }
      const response = await service(...args);
      if (messages.success) {
        notify(messages.success, { variant: 'success' });
      }
      return response;
    } catch (error) {
      console.error(`${service.name} threw an error: `, error);
      if ((error as { message: string }).message !== messages.invalid) {
        notify(messages.failure, { variant: 'error' });
      }
    } finally {
      setIsWaiting(false);
    }
  };

  return { call, isWaiting };
}
