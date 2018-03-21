function toQuestion(qnum) {  //跳转到某题
    var item = qdata.courseware[qnum];
    console.log(item.type + qnum);
    game.state.start(item.type + qnum);
}

function disableAnswer() {
    document.getElementById("temp_shadow").style.display = "block";
}

function enableAnswer(qum) {
    var item = qdata.courseware[qum];
    document.getElementById("temp_shadow").style.display = "none";
    if(item.type == "read"){
        add_progress_by_record()  //录音带喇叭的进度条
        return {"type":"read","read_type":"word","read_content":item.content}
    }else{
        add_progress_bar(9000)
        return {"type":item.type}
    }
}

function getScore() {
    game.add.audio('Sound_Great').play();
    gameScoreAnimtions()
    setTimeout(function () {
        game.my.set_star(3)
        game.add.audio('startCollected').play();
        flyStar()
    },1000)
}

//dsbreafe

//注册 javascript API
dsBridge.register('disableAnswer',function(cmd){    //禁止答题
    document.getElementById("temp_shadow").style.display = "block";
    return "success";
})

dsBridge.register('jumpQuestion',function(qnum){    //跳转到某题
    var item = qdata.courseware[qnum];
    game.state.start(item.type + qnum);
    return "success";
})

dsBridge.register('enableAnswer',function(qnum){    //允许答题
    var item = qdata.courseware[qnum];
    document.getElementById("temp_shadow").style.display = "none";
    if(item.type == "read"){
        add_progress_by_record()  //录音带喇叭的进度条
        return {"type":"read","read_type":"word","read_content":item.content}
    }else{
        add_progress_bar(9000)
        return {"type":item.type}
    }
})

dsBridge.register('stopRecord',function(param){    //停止录音
    game.my.sounds.great_sound.play();
    gameScoreAnimtions();
    setTimeout(function () {
        game.my.set_star(3)  //临时写死 +3 颗星星
        game.my.sounds.star_collected.play();
        flyStar()
    },1000)
})