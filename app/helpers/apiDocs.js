const expressJSDocSwagger = require('express-jsdoc-swagger');

const options = {
  info: {
    version: '1.0.0',
    title: 'Bookworm API documentation',
    description: 'Documentation of the Bookworm API, and all routes to test',
  },
  baseDir: __dirname,
  filesPattern: ['../routers/**/*.js', '../errors/*.js', '../models/*.js'],
  swaggerUIPath: process.env.API_DOCUMENTATION_ROUTE,
  exposeApiDocs: true,
  apiDocsPath: '/api/docs',
};

/**
 * Swagger middleware factory
 * @param {object} app Express application
 * @returns {object} Express JSDoc Swagger middleware that creates web documentation
 */
module.exports = (app) => expressJSDocSwagger(app)(options);
