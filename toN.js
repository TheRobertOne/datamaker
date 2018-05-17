

const path = require('path');
const obj = require(path.join(__dirname, './my.json'));


const fs = require('fs');
obj['courseware'].map((item, index) => {
    item['id'] = index + 1;
    item['page'] = index;
    if (item['type'] === 'display' && item['data'] && !item['data']['body']) {
        item['data']['body'] = [];
    }
    return item;
})




fs.writeFile('./my.json', JSON.stringify(obj), () => { })