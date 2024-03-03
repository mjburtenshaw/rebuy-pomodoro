# rebuy-pomodoro-api

The API for the rebuy-pomodoro application.

![Static Badge](https://img.shields.io/badge/version-0.2.0-aa3288?labelColor=3754d5)

## Table of Contents

- [Endpoints](#endpoints)
- [Logging](#logging)
- [Best Practices](#best-practices)

## Endpoints

| Endpoint                | Description                              |
| ----------------------- | ---------------------------------------- |
| `GET /`                 | Pings the server to see if it's running. |

## Logging

We have [a log utility](src/utils/log/logger.log.util.ts) that implements structured logging.

Every log requires a context and a message.

The context is suppressed by default in local environments to make scanning output easier.

To see this context, you have two options:

1. Set the `SHOULD_LOG_CONTEXT` environment variable to true. This turns on context for **all** logs.
2. Provide an options object after a log message (but before the data), to turn on context for just that log call:

```javascript
const ctx = new logUtil.Context('contextName', {
  /* Static context info and options*/
});

logUtil.Logger.info(
  ctx, // This is the context.
  `✅ This is the message!`,
  { logCtxForCall: true }, // This is the LogOptions object! It does NOT get logged.
  { foo: 'bar ' } // This is data, it gets logged!
  // ... even more data that also gets logged!
);
```

> 🫥 **Note:** When `SHOULD_LOG_CONTEXT` is not `true`, you won't see built-in timestamps and log servicer information,
> even if you turn on context for individual calls. This is a configuration option that only gets run once when the app starts.

## Best Practices

### Middleware

There are a few types of middleware functions:

- Static middleware. No invocation needed.
- Middleware builders. A function that accepts at least one parameter and uses it in middleware.
- Middleware bundlers. A function that exposes middleware as a coupled bundle.

#### Example

```typescript
/** This IS an Express handler. It doesn't need to be invoked on consumption.
 * @example
 * express().use(someStaticMiddleware);
 */
const someStaticMiddleware: Express.Handler = (req, res, next) => {
  // Does some stuff
  next();
};

/** This RETURNS an Express handler. It must be invoked on consumption.
 * @example
 * express().use(someMiddlewareBuilder('someArg'));
 */
function someMiddlewareBuilder(someParam): Express.Handler {
  const someMiddleware: Express.Handler = (req, res, next) => {
    // Does some things with someParam
    next();
  };
  return someMiddleware;
}

/** This returns a bundle of middleware. It must be invoked on consumption.
 * @example
 * express().use(someMiddlewareBundler());
 */
function someMiddlewareBundler(): Express.Handler[] {
  const preMiddleware: Express.Handler = (req, res, next) => {
    // Does some pre-processing.
    next();
  };
  const postMiddleware: Express.Handler = (req, res, next) => {
    // Does some post processing.
    next();
  };
  return [preMiddleware, postMiddleware];
}
```

> ⏸️ **Tip:** Use `npm run dev:debug` to have Node wait for you to attach a debugger and set a breakpoint before it executes the entrypoint. This is useful for debugging functions that run on start.
