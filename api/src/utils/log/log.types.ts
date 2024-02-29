import { LOG_LEVELS, envLevels } from './log.constants';

export type LogLevelKey = keyof typeof LOG_LEVELS;

export type LogLevel = (typeof LOG_LEVELS)[LogLevelKey];

export type LogFn = (message: any, ...rest: any[]) => void;

export type Adapter = {
  [K in LogLevel]: LogFn;
};

export type EnvLevelKey = keyof typeof envLevels;

export type EnvLevel = (typeof envLevels)[EnvLevelKey];

export function isEnvLevelKey(arg: any): arg is EnvLevelKey {
  return Object.keys(envLevels).some((key) => key === arg);
}

export type LogOptions = {
  logCtxForCall?: boolean;
};

export function isLogOptions(arg: any): arg is LogOptions {
  return arg.logCtxForCall !== undefined;
}
