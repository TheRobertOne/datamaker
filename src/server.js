const Koa = require('koa');
const fs = require('fs');
const path = require('path');
const staticServer = require('koa-static');
const bodyParser = require('koa-bodyparser');
const opn = require('opn');
const app = new Koa();


const router = require('./router');

function start() {
    app.use(bodyParser());
    app.use(router.routes());
    app.use(router.allowedMethods());
    app.use(staticServer(path.join(__dirname, '../courseimg')));
    app.use(staticServer(path.join(__dirname, '../static')));

    app.listen(8001, () => {
        console.log('课件辅助工具生成data');
        console.log('phaser练习');
        console.log(`server is running at port 8001`);

    });
}

exports.start = start;


