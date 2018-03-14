const Koa = require('koa');
const fs = require('fs');
const path = require('path');
const app = new Koa();

const router = require('./router');

function start() {
    app.use(router.routes());
    app.use(router.allowedMethods());
    // app.use(async ctx => {
    //     var r = walk(path.join(__dirname, '../courseimg'));
    //     console.log(r);
    //     ctx.body = 'Hello World koa';
    // });

    app.listen(8001, () => {
        console.log(`server is running at port 8001`);
    });
}

exports.start = start;


