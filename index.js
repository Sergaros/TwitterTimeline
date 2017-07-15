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

app.listen(config.get('port'));

if(require.main === module){
    // application run directly; start app server
    let port = process.env.PORT || config.get('port');
    app.listen(port);
} else {
    // application imported as a module via "require": export function to create server
    module.exports = app;
}
