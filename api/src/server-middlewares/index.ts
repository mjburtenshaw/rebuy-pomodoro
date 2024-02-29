import { useRouters } from './router.middleware';

/** Do NOT use this in the api directory. It will create a circular dependency and fail to compile. */
export const serverMiddlewares = {
  useRouters,
};
