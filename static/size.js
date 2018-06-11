let data = require('./outdata.json');

let fs = require('fs');
let path = require('path');

data['courseware'].map((item) => {
    let temArr = ['title', 'other_images', 'body', 'groupA', 'groupB', 'css_images'];

    for (let i = 0; i < temArr.length; i++) {
        if (!item['data'][temArr[i]]) {
            item['data'][temArr[i]] = [];
        }

        let aa = item['data'][temArr[i]];
        aa.map((aaItem) => {
            if (!aaItem['size']) {
                aaItem['size'] = {
                    w: 0,
                    h: 0
                };
            }
        });

        let arrTTTT = [];

        arrTTTT = item['data'][temArr[i]].filter((currentValue) => {
            // console.log(currentValue)

            if (currentValue['image'] !== '') {
                // console.log('shfslhf')
                return true;
            } else {
                return false;
            }

        });
        // console.log(arr)
        item['data'][temArr[i]] = arrTTTT;



    }

    return item;


})

fs.writeFile(path.join(__dirname, './outdata.json'), JSON.stringify(data), (err) => {
    console.log('转换成功--new.json！！！');
});