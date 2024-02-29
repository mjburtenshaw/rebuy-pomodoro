import { logUtil } from '../utils/log';
import express from 'express';

/**
 * Creates a middleware function for logging HTTP requests and responses.
 *
 * This function returns an Express middleware that logs the HTTP request as soon as it is received,
 * and then logs the HTTP response when it is closed. It uses a custom logging utility to manage
 * the logging process. The logging context is initialized with the provided route.
 *
 * @param {string} route - The route path associated with the middleware. This is used to initialize the logging context.
 * @returns {express.Handler} The middleware function that logs the request and response.
 *
 * @example
 * const express = require('express');
 * const app = express();
 *
 * app.get('/foo', logHttp('GET /foo'), fooController);
 * app.post('/bar', logHttp('POST /bar'), barController);
 */
export function logHttp(route: string): express.Handler {
  const middleware: express.Handler = (req, res, next) => {
    const ctx = new logUtil.Context(route, {
      parentCtx: req.app.locals.ctx,
    });

    res.locals.ctx = ctx;

    logUtil.Logger.http(ctx, 'logHttpRequest', {
      body: req.body,
      method: req.method,
      originalUrl: req.originalUrl,
      params: req.params,
      query: req.query,
      rawHeaders: req.rawHeaders,
      url: req.url,
    });

    let send = res.send;
    res.send = (data: string) => {
      let parsedData = null;
      try {
        parsedData = JSON.parse(data);
      } catch (error) {
        // Swallow the error: data was not parseable, just use it raw.
      }
      logUtil.Logger.http(ctx, 'logHttpResponse', {
        body: parsedData || data,
        status: res.statusCode,
      });
      res.send = send;
      return res.send(data);
    };

    next();
  };

  return middleware;
}
