
game.transparent = true;
game.state.add('load_public_resources',function(){
    this.init=function(){
        // game.clearBeforeRender  = true;
        game.scale.pageAlignHorizontally = true; //水平居中
        game.scale.pageAlignVertically = true; //垂直居中
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    };
    this.preload = function(){
        // game.load.spritesheet("wait","./image/game/wait.png",300,300,48);//等待
        /******====loading动画===******/
        game.load.image('loading1',"./image/game/loading_img01.png");
        game.load.image('loading4',"./image/game/loading_img04.png");
        game.load.image('loading2',"./image/game/loading_img02.png");
        game.load.image('loading3',"./image/game/loading_img03.png");
        /*==公共素材==跟读题====*/
        // game.load.image('btn',"./common_images/gendu/btn.png");
        // game.load.image('read_speak',"./common_images/gendu/read_speak1.png");
        game.load.spritesheet("luyin","./image/game/yinliang.png",250,250,7);
        game.load.spritesheet("startLvie","./image/game/web_heart_animation-stars.png",100,100,29);
        game.load.image('luyinz',"./image/game/luyinz.png");
        game.load.image('go',"./image/game/go.png");
        game.load.spritesheet('tv_btn_team',"./image/game/tv_btn_team.png",116,124,2);
        game.load.image('start',"./image/game/start.png");
        game.load.image('startNum',"./image/game/startnum.png");
        game.load.image('pre',"./image/game/pre.png");
        game.load.image('next',"./image/game/next.png");
        // game.load.image('flower',"./common_images/flower.png");
        // game.load.audio('good',"./states/sound/finish.mp3");
        game.load.audio('wrong',"./audio/Sound_Wrong2.wav");
        game.load.spritesheet('wrongImage',"./image/game/wrong.png",300,300,19); //答错动画
        /*====互动题====*/
        /*====单选题====*/
        game.load.spritesheet("choice","./image/game/spritesheet.png",43.3,40,3);
        /*====多选题====*/
        game.load.spritesheet("OK","./image/game/queren@2x.png",200,96,2);
        /*******====正确动画素材===******/
        // game.load.image('guanghuan',"./common_images/live_ibl_classroom_reward_light111.png");//光环
        // game.load.image('amazing',"./common_images/live_ibl_classroom_amazing.png");//盾牌
        game.load.audio('startAdded',"./audio/Sound_Amazing.m4a");
        game.load.audio('fantastic',"./audio/Sound_Fantastic.m4a");
        game.load.audio('Sound_Super',"./audio/Sound_Super.m4a");
        game.load.audio('Sound_Awesome',"./audio/Sound_Awesome.m4a");
        game.load.audio('Sound_Great',"./audio/Sound_Great.m4a");
        game.load.audio('Sound_Wonderful',"./audio/Sound_Wonderful.m4a");
        game.load.audio('Sound_Wow_stupendous',"./audio/Sound_Wow_stupendous.m4a");
        game.load.audio('startCollected',"./audio/Star_Collected.m4a"); //飞星音效
        game.load.audio('StarAddeds',"./audio/StarAdded.m4a"); //星星碰撞
        //测试 动画
        game.load.spritesheet('balls', './image/game/css_star.png', 30, 30,5);
        game.load.image('ant',"./image/game/ant_03.png");
        game.load.audio('goodplay',"./audio/pla.mp3"); //星星碰撞
        game.load.audio('errolplay',"./audio/error.mp3"); //星星碰撞
        // game.load.spritesheet('test_balls', './image/game/test_balls.png', 48.2, 34,5);
        // game.load.spritesheet('qiqiu', './image/game/qiqiu.png', 82.17, 129,6);

    };
    this.create = function(){
        //game.stage.setBackgroundColor(0xffffff);
        game.stage.disableVisibilityChange = true;//禁止暂停
        game.state.start("load_question_resource");//加载每个题的资源
        setTimeout(function(){
            toQuestion(0) //默认跳到第0题
            var loadingMask = document.getElementById('loader').style.display = "none";
        },1000);
        // game.callbacker("read",currentState)
    }
});
game.state.start('load_public_resources');