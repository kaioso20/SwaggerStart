'use strict'

const http = require('http')
const cors = require('cors')
const path = require('path')

const porta = 9000
const ambiente = {
    url: `http://localhost:${porta}`,
    urlSwagger: `http://localhost:${porta}/docs`
}

module.exports.fluxoSwagger = (app, middleware) => {
    setHeaders(app)

    setStartSwagger(app, middleware)
}

const setHeaders = (app) => {

    app.use(cors()) //Habilita cors

    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        res.setHeader('Access-Control-Allow-Credentials', true);
        next();
    });
}

const setRoutes = (app, middleware) => {
    app.use(
        middleware.swaggerRouter({
            swaggerUi: path.join(__dirname, './../swagger.json'),
            controllers: path.join(__dirname, './../controllers'),
            useStubs: true, // Ative condicionalmente os stubs (mock mode)
        })
    )
}

const setStartSwagger = (app, middleware) => {
    app.use(middleware.swaggerMetadata());
    app.use(middleware.swaggerValidator());
    setRoutes(app, middleware)
    app.use(middleware.swaggerUi());

    http.createServer(app).listen(porta, () => {
        console.log(`listen in port ${porta}`);
        console.log(`listen in URL ${ambiente.url}`);
        console.log(`listen Swagger URL ${ambiente.urlSwagger}`);
    })
}