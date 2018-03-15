
var apiData = [];
render(apiData);
addDv.onclick = function () {
    var len = apiData.length;
    var addItem = dataType[addType.value];
    addItem = JSON.parse(JSON.stringify(addItem));

    if ((insertInp.value || '').trim() === '') {

        addItem['id'] = len + 1;
        addItem['page'] = len;
        apiData.push(addItem);


    } else {
        addItem['id'] = parseInt(insertInp.value);
        addItem['ipaged'] = parseInt(insertInp.value) - 1;
        apiData.splice(parseInt(insertInp.value), 0, addItem);

    }

    apiData = apiData.map(function (item, index) {
        item['id'] = index + 1;
        item['page'] = index;
        return item;
    });

    render(apiData);


};

function render(apiData) {

    contentItemBox.innerHTML = '';
    for (var i = 0; i < apiData.length; i++) {
        var itemBox = document.createElement('div');
        var itemId = document.createElement('div');
        var itemType = document.createElement('div');
        var itemDel = document.createElement('div');
        var itemDelSpan = document.createElement('span');

        itemId.innerHTML = `id:${apiData[i]['id']}`;
        itemType.innerHTML = `type:${apiData[i]['type']}`;
        itemId.className = 'item-block-item';
        itemType.className = 'item-block-item';
        itemBox.appendChild(itemId);
        itemBox.appendChild(itemType);

        itemDelSpan.innerHTML = '删除';


        itemDelSpan.item = apiData[i];
        itemDelSpan.onclick = function (e) {
            var clickId = e.target.item;

            var temArr = [];
            for (var j = 0; j < apiData.length; j++) {
                if (apiData[j]['id'] + '' != clickId['id'] + '') {
                    temArr.push(apiData[j]);
                }
            }
            temArr = temArr.map(function (item, index) {
                item['id'] = index + 1;
                item['page'] = index;
                return item;
            });
            window.apiData = temArr;
            render(temArr);

        };
        itemBox.className = "item-block";
        itemDel.className = 'item-block-del';
        itemDel.appendChild(itemDelSpan);

        itemBox.appendChild(itemDel);
        contentItemBox.appendChild(itemBox);


    }
}

genData.onclick = function () {
    var ajax = new XMLHttpRequest();
    ajax.open('post', '/add');
    ajax.setRequestHeader('Content-Type', 'application/json;charset=utf-8');
    ajax.send(JSON.stringify(window.apiData));
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200) {
            alert('成功生成数据.  outdata.json');
        }
    }
}