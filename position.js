const fs = require('fs');
const path = require('path');

let str = fs.readFileSync(path.join(__dirname, './static/outdata.json'), 'utf-8');

let obj = JSON.parse(str);

let len = obj['courseware'].length;

let positionArr = [
    {
        "x": 182,
        "y": 222
    },
    {
        "x": 48,
        "y": 454
    },
    {
        "x": 316,
        "y": 454
    },
    {
        x: 2,
        y: 2
    },
    {
        x: 2,
        y: 2
    },
    {
        x: 2,
        y: 2
    },
    {
        x: 2,
        y: 2
    }

];

for (let i = 0; i < len; i++) {
    let item = obj['courseware'][i];
    if (item['type'] === 'survey' || item['type'] === 'choice') {
        let body = item['data']['body'];
        let len2 = body.length;
        for (let j = 0; j < len2; j++) {
            body[j]['pos']['x'] = positionArr[j]['x'];
            body[j]['pos']['y'] = positionArr[j]['y'];
        }

    }
}


fs.writeFile(path.join(__dirname, './static/outdata.json'), JSON.stringify(obj), (err) => { });
