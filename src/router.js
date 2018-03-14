const Router = require('koa-router');
const path = require('path');
const walk = require('./readfile');
const sizeOf = require('image-size');

const router = new Router();

router.get('/images', async (ctx, next) => {

    var result = walk(path.join(__dirname, '../courseimg'));

    result = result.slice(1);

    result = result.map((item) => {
        var dimensions = sizeOf(item);
        let temArr = item.split('/courseimg');
        let str = temArr[1];
        str = './image/courseimg' + str;
        return {
            name: str,
            w: dimensions.width,
            h: dimensions.height
        };
    });
    ctx.type = 'json';
    ctx.body = result;
});

module.exports = router;

