const Router = require('koa-router');
const path = require('path');
const walk = require('./readfile');
const sizeOf = require('image-size');
const fs = require('fs');

const router = new Router();

router.get('/', async (ctx, next) => {
    ctx.type = 'html';
    ctx.body = fs.createReadStream(path.join(__dirname, './index.html'));
});
router.get('/images', async (ctx, next) => {

    var result = walk(path.join(__dirname, '../courseimg'));
    
    result = result.filter((item) => {
        return (item || '').indexOf('.DS_Store') < 0;

    });

    result = result.map((item) => {
        var dimensions = sizeOf(item);
        let temArr = item.split('/courseimg');
        let str = temArr[1];
        str = './image/courseimg' + str;
        return {
            name: str,
            w: dimensions.width,
            h: dimensions.height,
            url:temArr[1]
        };
    });
    ctx.type = 'json';
    ctx.body = result;
});

module.exports = router;

