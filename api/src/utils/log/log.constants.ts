export const LOG_LEVELS = {
  ERROR: 'error',
  WARN: 'warn',
  INFO: 'info',
  HTTP: 'http',
  VERBOSE: 'verbose',
  DEBUG: 'debug',
  SILLY: 'silly',
} as const;

export const envLevels = {
  production: LOG_LEVELS.HTTP,
  test: LOG_LEVELS.DEBUG,
  local: LOG_LEVELS.SILLY,
} as const;
