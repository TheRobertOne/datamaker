const Koa = require('koa');
const fs = require('fs');
const path = require('path');
const staticServer = require('koa-static');
const bodyParser = require('koa-bodyparser');
const opn = require('opn');
const app = new Koa();
const config = require('./config');


const router = require('./router');

function start() {
    app.use(bodyParser());
    app.use(router.routes());
    app.use(router.allowedMethods());

    if (config.isDevLesson) {
        //开发课件时用
        app.use(staticServer(path.join(__dirname, '../static')));
        app.use(staticServer(path.join(__dirname, '../app/image/courseimg')));
        if (config.isOldReact) {
            app.use(staticServer(path.join(__dirname, '../oldmyreact')));
        } else {
            if (config.isFinal) {

                app.use(staticServer(path.join(__dirname, '../finalreact')));

            } else {
                app.use(staticServer(path.join(__dirname, '../myreact')));
            }
        }
        app.use(staticServer(path.join(__dirname, '../app')));
    } else {
        //开发游戏时用
        // app.use(staticServer(path.join(__dirname, '../build')));
        // app.use(staticServer(path.join(__dirname, '../lib')));

        app.use(staticServer(path.join(__dirname, '../examples')));
    }


    app.listen(8001, () => {
        console.log('课件辅助工具生成data');
        console.log('phaser练习');
        console.log(`server is running at port 8001`);

    });
}

exports.start = start;


