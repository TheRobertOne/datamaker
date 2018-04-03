//functions
function toQuestion(qnum) {  //跳转到某题
    var item = qdata.courseware[qnum];
    game.state.start(item.type + qnum);
    return "success";
}

function disableAnswer(cmd) {//禁止答题
    document.getElementById("temp_shadow").style.display = "block";
    return "success";
}

function enableAnswer(qnum) {
    var item = qdata.courseware[qnum];
    log("释放第"+qnum+"题 type: "+item.type);
    document.getElementById("temp_shadow").style.display = "none";
    switch (item.type){
        case "read":
            add_progress_by_record()  //录音带喇叭的进度条
            return {"type":"read","read_type":"word","read_content":item.content}
        case "survey":
            add_progress_bar(9000,item);
            setTimeout(function () {
                //如果是投票题，延时7s去获取投票结果
                log("执行获取投票结果，禁止继续答题");
                disableAnswer();
                var temp_options = [];
                for(var b=0;b<item.data.body.length;b++){
                    var b_item = item.data.body[b];
                    temp_options.push(b_item.name);
                }
                getVoteData(qnum,temp_options.join())
            },7000)
            return {"type":item.type}
        default:
            add_progress_bar(9000,item)
            return {"type":item.type}
    }
}

function stopRecord(param) {
    param = JSON.parse(param)
    var star = 1;
    game.my.sounds.great_sound.play();
    gameScoreAnimtions();
    if(param.code == "success"){
        if(param.score <= 60){
            star = 1;
        }
        if(param.score >= 80){
            star = 2;
        }
        if(param.score >= 90){
            star = 3;
        }
    }
    setTimeout(function () {
        game.my.set_star(star,param.qnum)
        game.my.sounds.star_collected.play();
        flyStar()
    },1000)
    return star;
}

function setTotalStar(star) {  //星星总数
    log("native调用setTotalStar:"+star);
    game.my.set_star(star);
}

var top_three = [{_id: "5ab898001902ed3faaaf657a", lesson_id: 1234, uid: 124, qnum: 2, group: "0",avatar:"http://"},{_id: "5ab898001902ed3faaaf657a", lesson_id: 1234, uid: 124, qnum: 2, group: "0",avatar:"http://"},{_id: "5ab898001902ed3faaaf657a", lesson_id: 1234, uid: 124, qnum: 2, group: "0",avatar:"http://"}];
function shwoTopThree(data) {
    log("native 调用 top three 参数 ："+data);
    data = JSON.parse(data);
    var speed = {};
    var ths = document.getElementById("top-three-shadow");
    var top = document.getElementById("top-three");
        ths.style.display = "block";
        top.innerHTML = "";

        for(var l=0;l<3;l++){
            var li = document.createElement("li");
            li.id = "top"+l;
            var img = document.createElement("img");
            if(l == 0){
                if(data[1]){
                    img.src = data[1].avatar;
                }else{
                    img.src = "";
                }
            }
            if(l == 1){
                if(data[0]){
                    img.src = data[0].avatar;
                }else{
                    img.src = "";
                }
            }
            if(l == 2){
                if(data[2]){
                    img.src = data[2].avatar;
                }else{
                    img.src = "";
                }

            }
            li.appendChild(img);
            top.appendChild(li);
        }
        setTimeout(function () {
            for (var a=0;a<3;a++){
                var target = document.getElementById("target"+a);
                var element = document.getElementById("top"+a);
                element.style.display = "block";
// 抛物线元素的的位置标记
                var parabola = funParabola(element, target,{
                    complete:function () {
                        ths.style.display = "none";
                    }
                }).mark();
                element.style.marginLeft = "0px";
                element.style.marginTop = "0px";
                parabola.init();
            }
        },2000)
}

//dsbreafe

//注册 javascript API
dsBridge.register('disableAnswer',disableAnswer);

dsBridge.register('jumpQuestion',toQuestion);

dsBridge.register('enableAnswer',enableAnswer);

dsBridge.register('stopRecord',stopRecord);

dsBridge.register('setTotalStar',setTotalStar);

dsBridge.register('shwoTopThree',shwoTopThree);



// ===============================================================================

//js call native
//http 所需参数 lesson_id item page
//post投票数据
function putVoteData(page,item) {
    log("js 调用 echo.putVoteData 参数："+JSON.stringify({"item":item,"page":page}));
    dsBridge.call("echo.putVoteData",{"item":item,"page":page});
    log("js 调用 echo.putVoteData 结束");
}

//get投票数据
function getVoteData(page,items) {
    log("js 调用 echo.getVoteData 参数："+JSON.stringify({"items":items,"page":page}));
    var res = dsBridge.call("echo.getVoteData",{"items":items,"page":page});
    log("js 调用 echo.getVoteData 返回结果："+res);
    game.my.getItemVote(JSON.parse(res));
}

//获取小组排行
var rank_flag = false;
function gulpView() {
    if(!rank_flag){
        log("js 调用 echo.getRank");
        var res = dsBridge.call("echo.getRank",{});
        log("js 调用 echo.getRank 返回结果："+res);
        var json_res = JSON.parse(res);
        if(json_res.length != 0){
            log("小组排名为空数组，不显示");
            return;
        }
        renderRank(json_res);
        rank_flag = true;
    }else{
        rank_flag = false;
        document.getElementById("gulp_view").style.display = "none";
    }
}












