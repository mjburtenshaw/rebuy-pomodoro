import { TimerContextProvider } from '../contexts/TimerContext';
import { TimerPage } from './Timer.page';
import { SplatPage } from './Splat.page';

const Pages = {
  TimerPage: () => (
    <TimerContextProvider>
      <TimerPage />
    </TimerContextProvider>
  ),
  SplatPage,
};

export { Pages };
