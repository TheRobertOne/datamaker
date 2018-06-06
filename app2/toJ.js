const fs = require('fs');
const path = require('path');
const data = require('./outdata.json');

let isOld = true;

if (isOld) {
    data["page_size"] = {
        "w": 1024,
        "h": 768
    };
}

data['courseware'] = data['courseware'].map((item, i) => {
    let temp = {
        type: item['type'],
        data: item['data'],
        id: i + 1
    };

    if (!temp['data']['other_images']) {
        temp['data']['other_images'] = [];
    }
    if (!temp['data']['title']) {
        temp['data']['title'] = [];
    }
    if (!temp['data']['body']) {
        temp['data']['body'] = [];
    }

    if (temp['type'] === 'read') {
        temp['read_type'] = 'sentence';
        temp['read_content'] = item['content'];

        if (temp['data']['text_Image'] && temp['data']['text_Image'] !== '') {
            temp['data']['title'] = [{
                "image": temp['data']['text_Image'],
                "pos": {
                    x: temp['data']['text_pos']['x'],
                    y: temp['data']['text_pos']['y']
                }
            }];
        }





    }

    let temData = {
        "title": temp['data']['title'],
        "other_images": temp['data']['other_images'],
        "body": temp['data']['body'],
        "timeout": 9
    };

    if (temp['type'] === 'choice' || temp['type'] === 'multiselect') {
        temData['answer'] = temp['data']['answer'];



        if (temp['data']['titleImage'] && temp['data']['titleImage'] !== '') {
            temData['title'] = [{
                "image": temp['data']['titleImage'],
                "pos": {
                    x: temp['data']['text_pos']['x'],
                    y: temp['data']['text_pos']['y']
                }
            }];
        }
    }

    if (temp['type'] === 'jigsaw' || temp['type'] === 'cation') {

        if (temp['type'] === 'jigsaw') {
            temData['timeout'] = 9;
        }

        temData['groupB'] = temp['data']['groupB'];
        temData['groupA'] = temp['data']['groupA'];
        if (temp['data']['item']) {
            temData['body'] = temp['data']['item'];

        }

        if (temp['data']['title_img'] && temp['data']['title_img'] !== '') {
            temData['title'] = [{
                "image": temp['data']['title_img'],
                "pos": {
                    x: temp['data']['text_pos']['x'],
                    y: temp['data']['text_pos']['y']
                }
            }];
        }

    }

    temp['data'] = temData;

    return temp;
});

fs.writeFileSync(path.join(__dirname, './a.json'), JSON.stringify(data));




