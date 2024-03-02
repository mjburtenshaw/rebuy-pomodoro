export const ORIENTATIONS = {
  LANDSCAPE: 'landscape',
  PORTRAIT: 'portrait',
} as const;

export const X_ANCHORS = {
  CENTER: 'center',
  LEFT: 'left',
  RIGHT: 'right',
} as const;

export const Y_ANCHORS = {
  BOTTOM: 'bottom',
  TOP: 'top',
} as const;

export const ANCHORS = {
  ...X_ANCHORS,
  ...Y_ANCHORS,
} as const;

export const BREAKPOINTS = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
} as const;
