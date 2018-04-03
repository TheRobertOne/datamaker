
var xmlHttp;

function createxmlHttpRequest() {
    if (window.ActiveXObject) {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    } else if (window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
    }
}

function add_progress_bar(answer_time,item){
    var timerBarHeight = 10; //timer bar height
    var timerBarColour = 0x43CD80; //timer bar colour 进度条颜色
    var progress = game.add.graphics(0,0);
    progress.beginFill(timerBarColour);//颜色16进制，透明度0-1之间
    progress.drawRect(0,0, game.width, timerBarHeight);//矩形
    progress.endFill();
    var sprite = game.add.sprite(0,game.height - 10, progress.generateTexture());
    progress.destroy();
    game.add.tween(sprite).to({width:0,alpha:0}, 9000, Phaser.Easing.Linear.None, true).onComplete.add(function () {
        sprite.destroy();
        console.log(item)
        if(item.type == "jigsaw" || item.type == "survey" || item.type == "multiselect" || item.type == "cation"){  //拼图或投票题超时未答算答错
            if(!game.my.jigsawIsAnswerTrue){
                log("超时未答 0 颗星");
                console.log("超时未答 0 颗星");
                game.add.audio('wrong').play();
                game.my.set_star(0,item.page);//超时未答 0 颗星
                game.my.jigsawIsAnswerTrue = false; //初始状态
            }
        }
    });
}

function add_progress_by_record() {
    var timerBarHeight = 10; //timer bar height
    var timerBarColour = 0x43CD80; //timer bar colour 进度条颜色
    var progress = game.add.graphics(0,0);
    progress.beginFill(timerBarColour);//颜色16进制，透明度0-1之间
    progress.drawRect(0,0, game.width, timerBarHeight);//矩形
    progress.endFill();
    var sprite = game.add.sprite(0,game.height - 10, progress.generateTexture());
    progress.destroy();

    var btn_animation = game.add.image(387,560, 'luyin'); //加载进度动画
    var btn = game.add.image(377,550, 'luyinz');
    btn.width = btn.width *0.6;
    btn.height = btn.height *0.6;
    btn_animation.animations.add('run');
    btn_animation.animations.play('run', 7, true, 1);

    game.add.tween(sprite).to({width:0,alpha:0}, 9000, Phaser.Easing.Linear.None, true).onComplete.add(function () {
        sprite.destroy();
        btn.destroy();
        btn_animation.destroy();
    });
}

function flyStar() {
    var startLive = game.add.image(825, 5, 'startLvie');
    startLive.animations.add('run');
    startLive.animations.play('run', 24, 1, 1);
    game.sound.play("StarAddeds");
}

function doPost(url,data,callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.timeout ='30000';
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.onreadystatechange = function(){
        var XMLHttpReq = xhr;
        console.log(XMLHttpReq.readyState);
        if (XMLHttpReq.readyState == 4) {
            console.log(XMLHttpReq.status);
            if (XMLHttpReq.status == 200) {
                var text = XMLHttpReq.responseText;
                callback(JSON.parse(text));
            }else{

            }
        }
    };
    // xhr.ontimeout = function(event){
    //     aliyun_log('请求超时！');
    //     xhr.send(dataser(data));
    // }

    xhr.send(dataser(data));
}

function doGet(url,callback){
    // 注意在传参数值的时候最好使用encodeURI处理一下，以防出现乱码
    createxmlHttpRequest();
    xmlHttp.open("GET",url);
    xmlHttp.send(null);
    xmlHttp.onreadystatechange = function() {
        // console.log('111111111xmlHttp===',xmlHttp)
        //console.log('xmlHttp===',xmlHttp.readyState == 4 , xmlHttp.status == 200)
        log("xmlHttp.status："+xmlHttp.status)
        if ((xmlHttp.readyState == 4) && (xmlHttp.status == 200)) {
            //alert('success');
            // callback()
            console.log('请求成功',xmlHttp.responseText);
            callback(JSON.parse(xmlHttp.responseText));
        } else {
            // alert('fail');
        }
    }
}

//POST 请求json 转成服务器请求字符串
function dataser(obj) {
    var str = "";
    for(var prop in obj){
        str += prop + "=" + obj[prop] + "&"
    }
    return str;
};


var temp_data = [
        { _id: { uid: 124, avatar: 'http://', nickname: 'test' },total_score: 2 },
        { _id: { uid: 1234, avatar: 'http://', nickname: 'test' },total_score: 1 }
    ];



function renderRank(StudentsGulp) {
    var groups_div = document.getElementById("gulp_container");
    var temp_str = "";
    for (var i=0;i<StudentsGulp.length;i++){
        var item = StudentsGulp[i]._id;
        temp_str += '<li>' +
            '<p class="gulp_avator"> <span class="actor_me">'+(i+1)+'</span> ' +
            '<img src="' + item.avatar + '"> ' +
            '</p>' +
            '<p class="gulp_en_name">' + item.nickname + '</p>' +
            '</li>';
    }
    groups_div.innerHTML = temp_str;
    document.getElementById("gulp_view").style.display = "block";
}

var log_txt;
function log(txt) {
    var p = document.createElement("p");
        p.innerText = txt;
    var log_div = document.getElementById("log_div");
    log_div.appendChild(p);
    log_div.scrollTop = 999999;
}


function testan() {
    for (var a=1;a<4;a++){
        var target = document.getElementById("target"+a);
        var element = document.getElementById("top"+a);
        element.style.display = "block";
// 抛物线元素的的位置标记
        var parabola = funParabola(element, target,{
            complete:function () {
                // element.style.display = "none";
            }
        }).mark();
        element.style.marginLeft = "0px";
        element.style.marginTop = "0px";
        parabola.init();
    }

}