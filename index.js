const Koa = require('koa');
const app = new Koa();

const config = require('config');

const path = require('path');
const fs = require('fs');

const handlers = fs.readdirSync(path.join(__dirname, 'handlers')).sort();
handlers.forEach(handler => require('./handlers/' + handler).init(app));

const Router = require('koa-router');
const router = new Router();

require('./routes/timeline')(router);
app.use(router.routes());

if(require.main === module){
    let port = process.env.PORT || config.get('port');
    app.listen(port);
} else {
    module.exports = app;
}
