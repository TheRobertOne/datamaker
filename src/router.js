const Router = require('koa-router');
const path = require('path');
const walk = require('./readfile');
const sizeOf = require('image-size');
const fs = require('fs');
const dataType = require('./data');

const router = new Router();

router.post('/generate', async (ctx, next) => {
    // console.log(ctx.request.body)
    let reqData = JSON.stringify(ctx.request.body);
    let result = await new Promise((resolve, reject) => {
        fs.writeFile(path.join(__dirname, '../static/outdata.json'), reqData, (err) => {

            if (err) {
                reject(err);

            } else {
                resolve(200);


            }
        });
    });
    var readStr = fs.readFileSync(path.join(__dirname, '../static/sourcedata.js'), 'utf-8');
    readStr = readStr.replace(`'$hello$'`, reqData);

    let myresult = await new Promise((resolve, reject) => {

        fs.writeFile('/Users/pingyiluo/Desktop/job/TV/app/js/data.js', readStr, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(200);
            }
        });
    })



    if (myresult === 200) {
        ctx.response.type = 'json';
        ctx.body = [{
            code: 'success'
        }];
    } else {
        ctx.throw(500);
    }
});


router.get('/check-read', async (ctx, next) => {
    let str = fs.readFileSync(path.join(__dirname, '../static/outdata.json'), 'utf-8');
    let obj = JSON.parse(str);
    let len = obj['courseware'].length;
    let arr = [];
    for (let i = 0; i < len; i++) {
        if (obj['courseware'][i]['type'] === 'read') {
            let temp = {
                id: obj['courseware'][i]['id'],
                content: obj['courseware'][i]['content'],
                text: obj['courseware'][i]['data']['text'],
            };
            arr.push(temp);
        }
    }
    ctx.body = arr;
});

router.get('/images', async (ctx, next) => {
    let dir = '/Users/pingyiluo/Desktop/job/TV/app/image/courseimg';
    // var result = walk(path.join(__dirname, '../courseimg'));
    var result = walk(dir);

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
            url: temArr[1]
        };
    });
    ctx.type = 'json';
    ctx.body = result;
});

module.exports = router;

