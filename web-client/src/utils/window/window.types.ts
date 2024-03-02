import { ANCHORS, BREAKPOINTS, X_ANCHORS, Y_ANCHORS } from './window.constants';

export type XAnchorKey = keyof typeof X_ANCHORS;

export type XAnchor = (typeof X_ANCHORS)[XAnchorKey];

export type YAnchorKey = keyof typeof Y_ANCHORS;

export type YAnchor = (typeof Y_ANCHORS)[YAnchorKey];

export type AnchorKey = keyof typeof ANCHORS;

export type Anchor = (typeof ANCHORS)[AnchorKey];

export type BreakpointKey = keyof typeof BREAKPOINTS;

export type Breakpoint = (typeof BREAKPOINTS)[BreakpointKey];

export type BreakpointAnchorRule<T> = {
  in: T;
  out: T;
};
