'use strict';

const page = require('./page_router');
const api = require('./api_router');

module.exports = function (app) {
    app.use('/api', api);
    app.use('/', page);
}
