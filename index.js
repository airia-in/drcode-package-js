const serverSentry = require("@sentry/node");
const { nodeProfilingIntegration } = require("@sentry/profiling-node");
const browserSentry = require("@sentry/nextjs");

function constructDSN(config) {
  return `${config.protocol}://${config.publicKey}@${config.host}:${config.port}/${config.projectId}`;
}

function initDrcode(config, isServer = true) {
  const dsn = constructDSN(config);

  if (isServer) {
    serverSentry.init({
      dsn,
      integrations: [nodeProfilingIntegration()],
      tracesSampleRate: config.tracesSampleRate || 1.0,
      profilesSampleRate: config.profilesSampleRate || 1.0,
    });
  } else {
    browserSentry.init({
      dsn,
      tracesSampleRate: config.tracesSampleRate || 1.0,
    });
  }
}

function setUpErrorHandler(err, req, res, next) {
  serverSentry.captureException(err);
  next(err);
}

module.exports = { initDrcode, setUpErrorHandler };
