import { useEffect, useState } from 'react';
function useLinearProgress(initial, cap, increment, interval) {
    const [progress, setProgress] = useState(initial);
    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => prevProgress < cap ? prevProgress + increment : prevProgress);
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
