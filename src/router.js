const Router = require('koa-router');
const path = require('path');
const walk = require('./readfile');
const sizeOf = require('image-size');
const fs = require('fs');
const dataType = require('./data');
const config = require('./config');

const router = new Router();

router.post('/generate', async (ctx, next) => {
    // console.log(ctx.request.body)
    toJs(ctx.request.body);
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

    await new Promise((resolve, reject) => {
        fs.writeFile(path.join(__dirname, '../app/outdata.json'), reqData, (err) => {

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

        fs.writeFile(path.join(__dirname, '../app/js/data.js'), readStr, (err) => {
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


// let tojspath = path.join(__dirname, '../static/data.js');
//保存js文件的位置。。。
let kejianPath = config.kejianPath;
let tojspath = path.join(kejianPath, 'data.js');
console.log(tojspath);

//读取图片的位置
let imagePath = path.join(kejianPath, 'image/courseimg');

async function toJs(reqData) {

    var readStr = fs.readFileSync(path.join(__dirname, '../static/finnalsourcedata.js'), 'utf-8');
    readStr = readStr.replace(`'$hello$'`, JSON.stringify(reqData));

    let myresult = await new Promise((resolve, reject) => {



        fs.writeFile(tojspath, readStr, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(200);
            }
        });
    })
}

router.get('/getInitData', async (ctx, next) => {
    let readStr = fs.readFileSync(tojspath, 'utf-8');
    let reg = /var\s*ABC_COURSE_DATA\s*=/;
    readStr = readStr.replace(reg, '');
    readStr = readStr.trim();
    let removeSemicolon = /}\s*;*$/;
    readStr = readStr.replace(removeSemicolon, '}');


    readStr = getSize(addArrs(JSON.parse(readStr)), getImages(imagePath));

    ctx.response.type = 'json';
    ctx.body = readStr;

})


router.get('/check-read', async (ctx, next) => {
    let str = fs.readFileSync(path.join(__dirname, '../static/outdata.json'), 'utf-8');
    let obj = JSON.parse(str);
    let len = obj['courseware'].length;
    let arr = [];
    for (let i = 0; i < len; i++) {
        if (obj['courseware'][i]['type'] === 'read') {
            let temp = {
                id: obj['courseware'][i]['id'],
                read_content: obj['courseware'][i]['read_content'],
                read_type: obj['courseware'][i]['read_type']
            };
            arr.push(temp);
        }
    }
    ctx.body = arr;
});

router.get('/images', async (ctx, next) => {
    let dir = path.join(__dirname, '../app/image/courseimg');
    if (config.isFinal) {
        // dir = path.join(__dirname, '../app2/image/courseimg');
        //读取图片的位置
        dir = imagePath
    }
    // var result = walk(path.join(__dirname, '../courseimg'));
    var result = walk(dir);

    result = result.filter((item) => {
        return (item || '').indexOf('.png') >= 0;

    });

    result = result.map((item) => {
        console.log(item)
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

function getSize(data, imageArr) {
    data['courseware'].map((item, index) => {
        if (!item['data']['body']) {
            item['data']['body'] = [];
        }

        if (!item['data']['text']) {
            item['data']['text'] = '';
        }

        let arr = [];

        arr = item['data']['body'].filter((currentValue) => {
            // console.log(currentValue)

            if (currentValue['image'] !== '') {
                // console.log('shfslhf')
                return true;
            } else {
                return false;
            }

        });
        // console.log(arr)
        item['data']['body'] = arr;

        let mySizeArr = ['body', 'title', 'other_images', 'groupA', 'groupB']

        for (let jj = 0; jj < mySizeArr.length; jj++) {
            if (item['data'][mySizeArr[jj]]) {
                setSizeArr(imageArr, item['data'][mySizeArr[jj]]);
            }
        }

        return item;

    });

    if (config.is169) {
        data["page_size"] = {
            "w": 1280,
            "h": 720
        };
    } else {

        data["page_size"] = {
            "w": 1024,
            "h": 768
        };
    }

    return data;
}

function addArrs(data) {

    data['courseware'].map((item, i) => {


        if (!item['data']['other_images']) {
            item['data']['other_images'] = [];
        }
        if (!item['data']['title']) {
            item['data']['title'] = [];
        }
        if (!item['data']['body']) {
            item['data']['body'] = [];
        }
        if (item['type'] === 'read') {
            if (!item['data']['css_images']) {
                item['data']['css_images'] = [];
            }
        }


        if (item['type'] === 'jigsaw' || item['type'] === 'cation') {

            if (!item['data']['groupA']) {
                item['data']['groupA'] = [];
            }
            if (!item['data']['groupB']) {
                item['data']['groupB'] = [];
            }
        }

        return item;
    });

    return data;
}


function setSizeArr(imageArr, arr) {
    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < imageArr.length; j++) {
            if (arr[i]['image'] === imageArr[j]['name']) {
                if (!arr[i]['size']) {
                    arr[i]['size'] = {};
                }
                arr[i]['size']['w'] = imageArr[j]['w'];
                arr[i]['size']['h'] = imageArr[j]['h'];
            }
        }

    }

}

function getImages(dir) {
    // let dir = path.join(__dirname, './image/courseimg');

    // var result = walk(path.join(__dirname, '../courseimg'));
    var result = walk(dir);

    result = result.filter((item) => {
        return (item || '').indexOf('.png') >= 0;

    });

    result = result.map((item) => {
        console.log(item)
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



    return result;
}

