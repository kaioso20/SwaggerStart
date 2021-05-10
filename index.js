const app = require('express')();
const swaggerTools = require('swagger-tools');

const { getDocument } = require('./config/fileConfig');
const { fluxoSwagger } = require('./config/swaggerConfig');

swaggerTools.initializeMiddleware(getDocument('./api/swagger.yaml'), (middleware) => fluxoSwagger(app, middleware))