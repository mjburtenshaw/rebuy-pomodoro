import { BREAKPOINTS } from './window.constants';
import { NoInfer } from '../../global.types';
import type {
  Breakpoint,
  BreakpointAnchorRule,
  XAnchor,
  YAnchor,
} from './window.types';

export const getWindowDimensions = () => {
  const windowHeight = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0,
  );
  const windowWidth = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0,
  );
  return { windowHeight, windowWidth };
};

export const getBreakpoint = () => {
  const { windowWidth } = getWindowDimensions();
  const breakpoints: Breakpoint[] = Object.values(BREAKPOINTS);
  const breakpoint = breakpoints.find((currentBreakpoint, index) => {
    if (index === breakpoints.length - 1) {
      return true;
    }
    const nextBreakpoint = breakpoints[index + 1];
    return currentBreakpoint <= windowWidth && windowWidth < nextBreakpoint;
  }) as Breakpoint;
  return breakpoint;
};

export const buildBreakpointAnchorRule = <
  T = 'Use XAnchor or YAnchor as a type parameter',
>(
  _in: NoInfer<T>, // 'in' is a reserved keyword
  out: NoInfer<T>,
): BreakpointAnchorRule<T> => ({
  in: _in,
  out,
});

export const getDynamicAnchorOrigin = (
  limit: Breakpoint,
  xRule: BreakpointAnchorRule<XAnchor>,
  yRule: BreakpointAnchorRule<YAnchor>,
) => {
  const breakpoint = getBreakpoint();
  const isInBreakpoint = breakpoint < limit;
  const horizontal = isInBreakpoint ? xRule.in : xRule.out;
  const vertical = isInBreakpoint ? yRule.in : yRule.out;
  const anchorOrigin = { horizontal, vertical };
  return anchorOrigin;
};
