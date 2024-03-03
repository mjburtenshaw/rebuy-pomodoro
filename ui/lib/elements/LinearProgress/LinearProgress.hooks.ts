import { useEffect, useState } from 'react';

function useLinearProgress(
  initial: number,
  cap: number,
  increment: number,
  interval: number,
) {
  const [progress, setProgress] = useState<number>(initial);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress < cap ? prevProgress + increment : prevProgress,
      );

      if (progress >= cap) {
        clearInterval(timer);
      }
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [progress, cap, increment, interval]);

  return { progress };
}

export const hooks = { useLinearProgress };
