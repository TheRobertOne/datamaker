var ajax = new XMLHttpRequest();
ajax.open("get", '/images');
ajax.onreadystatechange = function () {
    if (ajax.readyState == 4 && ajax.status == 200) {
        var data = ajax.responseText;
        data = JSON.parse(data);

        var str = '';
        data.forEach(function (item) {
            str += `<div class="box">
    <span  class="item item-u" >${item['name']}</span>
    <span class="item-s">宽:</span>
    <span  class="item " >${item['w']}</span>
    <span class="item-s">高:</span>
    <span  class="item " >${item['h']}</span>
    <div class="item-img">
        <img src="${item['url']}" alt=""  />
        </div>
    
    </div>`;

        });
        dv.innerHTML = str;
    }
};
ajax.send(null);