const serverless = require('serverless-http');
const expressApp = require('../../backend/app');

exports.handler = serverless(expressApp);