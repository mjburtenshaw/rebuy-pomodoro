import {
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router';
import { Pages } from './pages';

export const ROUTES = {
  INDEX: '/',
  SPLAT: '*',
};

const rootRoute = createRootRoute();

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.INDEX,
  component: Pages.HomePage,
});

const splatRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTES.SPLAT,
  component: Pages.SplatPage,
});

const routeTree = rootRoute.addChildren([indexRoute, splatRoute]);

export const router = createRouter({ routeTree });
