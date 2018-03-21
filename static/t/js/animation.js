/**
 * Created by sundelong on 17/5/10.
 * 动画管理
 */
//入场动画
/****==left=,top==right=**==bottom=**Gradi2ent*/
var gameAdmissionAnimations;//入场动画
var gameDisplayAnimations; //展示动画
var gameErrorAnimations;//答题错误动画
var gameLoadingAnimation;
gameAdmissionAnimations = function(type,item,x,y) {
    if(type){
        switch (type){
            case "left" :
                console.log('展示数据==动画=3=',x,y);
                item.alpha = 1;
                item.x = game.width+500;
                game.add.tween(item).to({x:x,y:y}, 1800, null, true, 0, 0);
                break;
            case "left1" :
                item.alpha = 1;
                console.log('展示数据==动画=4=',x,y);
                item.x = -1000;
                game.add.tween(item).to({x:x,y:y}, 1800, null, true, 0, 0);
                break;
            case "left2" :
                item.alpha = 1;
                console.log('展示数据==动画=5=',x,y);
                game.add.tween(item).to({x:x+1000,y:y}, 1800, null, true, 0, 0);
                break;
            case  "Gradient":
                item.alpha = 0;
                game.add.tween(item).to({alpha:[0.1,0.6]}, 1800, null, true, 0, 0);
            case  "Gradient1":
                item.alpha = 0;
                game.add.tween(item).to({alpha:[0.1,1]}, 1800, null, true, 0, 0);
        }
    }
};
gameDisplayAnimations = function(type,item,x,y) {
    if(type){
        switch (type){
            case "rotate" :
                item.anchor.setTo(0.5,0.5);
                game.add.tween(item).to({angle: 360},7000,Phaser.Easing.Bounce.Outue, true,1, false);
                break;
            case "zoom" :
                // item.anchor.setTo(0.5,0.5);
                game.add.tween(item).to({width:item.width+40,height:item.height+40},300, null, true,0,2,true);
                break;

        }
    }
};
gameErrorAnimations = function () {
    game.sound.play("wrong");
    //添加进度动画
    var correct_animation = game.add.image(game.width/2-150, 434, 'wrongImage'); //加载进度动画
    correct_animation.animations.add('run');
    correct_animation.animations.play('run', 12, null, 1);
    setTimeout(function () {
        gameManager.sendScore(0,100,-1); //提交 给 直播云
    },1000)
};
gameLoadingAnimation = function (show) {
    var item1 = game.add.image(354.5,236,'loading1');

    var item2 = game.add.image(458,347,'loading2');
    item2.anchor.setTo(0.5,0.5);
    var item3 = game.add.image(560,307,'loading3');
    item3.anchor.setTo(0.5,0.5);
    var item4 = game.add.image(575,387,'loading4');
    item4.anchor.setTo(0.5,0.5);
    if(show){
        game.add.tween(item2).to({angle: 360},8000,"Linear", true,1, false);
        game.add.tween(item4).to({angle: -360},6000,"Linear", true,1, false);
        game.add.tween(item3).to({angle: 360},5000,"Linear", true,1, false);
    }else {
        item1.alpha=item3.alpha=item4.alpha =item2.alpha=0;

    }

}
gameScoreAnimtions = function () {
    //测试颗粒效果
    var item1 = game.add.image(game.world.centerX,game.height,'balls', 4);

    game.add.tween(item1).to({x: [game.world.centerX],y:[game.height,800,game.world.centerY],alpha:[1,0.5,0]}, 800,Phaser.Easing.Bounce.Outue, true,0, 0);
    setTimeout(function () {
        var emitter = game.add.emitter(game.world.centerX,game.world.centerY, 200);
        emitter.makeParticles('balls', [0, 1, 2, 3, 4, 5]);
        emitter.minParticleSpeed.setTo(-800, -800);
        emitter.maxParticleSpeed.setTo(900, 900);
        emitter.minParticleScale = 0.5;
        emitter.maxParticleScale = 2;
        emitter.gravity = 150;
        emitter.bounce.setTo(0.5, 0.5);
        emitter.angularDrag = 60;
        emitter.explode(2000,300);//一个点炸开 1颗粒存在时间 /2 砸开数量
        setTimeout(function () {
            console.log("销毁颗粒==1===")
            emitter.destroy();//销毁例子
            // emitter1.explode(2000,300);//一个点炸开 1颗粒存在时间 /2 砸开数量
        },2000)

    },800)
    // var item1 = game.add.image(game.world.centerX,game.height,'balls', 4);
    //
    //  game.add.tween(item1).to({x: [game.world.centerX],y:[game.height,800,game.world.centerY],alpha:[1,0.5,0]}, 800,Phaser.Easing.Bounce.Outue, true,0, 0);
    //  setTimeout(function () {
    //      var emitter = game.add.emitter(game.world.centerX,game.world.centerY, 500);
    //      emitter.makeParticles('balls', [0, 1, 2, 3, 4, 5]);
    //      emitter.minParticleSpeed.setTo(-400, 500);
    //      emitter.maxParticleSpeed.setTo(500, -400);
    //      emitter.minParticleScale = 0.5;
    //      emitter.maxParticleScale = 2;
    //
    //      emitter.gravity = 150;
    //      emitter.bounce.setTo(0.5, 0.5);
    //      emitter.angularDrag = 60;
    //
    //      emitter.start(false, 5000, 1);
    //      // emitter.minParticleSpeed.setTo(-800, -800);
    //      // emitter.maxParticleSpeed.setTo(900, 900);
    //      // emitter.gravity = 0;
    //      // emitter.gravity = 500;
    //      // emitter.bounce.setTo(0.5, 0.5);
    //      // emitter.start(false, 500, 2);
    //      game.add.tween(emitter).to({x: game.world.centerX,y:game.world.centerY,alpha:[1,0.5,0]}, 1000,Phaser.Easing.Bounce.Outue, true,0, 0);
    //      setTimeout(function () {
    //          console.log("销毁颗粒=====")
    //           emitter.destroy();//销毁例子
    //          //  emitter = undefined
    //      },1200)
    //
    //  },800)

}
//testclassRoom  答对动画
testgameScoreAnimtions = function () {
    //测试颗粒效果
    var x =game.world.centerX;
    var  y=game.height-10;
    var emitter = game.add.emitter(x,y, 400);
    emitter.makeParticles('test_balls', [0, 1, 2, 3, 4, 5]);
    emitter.minParticleSpeed.setTo(-700, -700);
    emitter.maxParticleSpeed.setTo(1000, 1000);
    emitter.minParticleScale = 0.5;
    emitter.maxParticleScale = 1;
    emitter.gravity = 100;
    emitter.bounce.setTo(0.5, 0.5);
    emitter.angularDrag = 65;
    // emitter.width = game.width;
    emitter.explode(2000,200);//一个点炸开 1颗粒存在时间 /2 砸开数量
    setTimeout(function () {
        console.log("==销毁例子==")
        emitter.destroy();//销毁例子
        down_emitter(100,200);
    },2000)
    setTimeout(function () {
        up_emitter(100,200)
    },1000)
    //向下飘落
    function down_emitter(min,max) {
        //向下票碎片
        emitter = game.add.emitter(game.world.centerX, -10, 400);
        emitter.makeParticles('test_balls',[0, 1, 2, 3, 4, 5]);
        emitter.setRotation(0, 40);
        emitter.setScale(0.6, 0.9);
        emitter.setYSpeed(min,max);
        emitter.width = game.world.width * 1.5;
        emitter.gravity = 600; //重力负数 向上票
        emitter.start(false, 5000, 100);
        var emitter2 = game.add.emitter(game.world.centerX, -10, 400);
        emitter2.makeParticles('test_balls',[0, 1, 2, 3, 4, 5]);
        emitter2.setRotation(0, 40);
        emitter2.setScale(0.3, 1);
        emitter2.setYSpeed(min+100,max+100);
        emitter2.width = (game.world.width -600);
        emitter2.gravity = 600; //重力负数 向上票
        emitter2.start(false, 5000, 100);
        setTimeout(function () {
            console.log("==销毁例子2==")
            emitter.destroy();//销毁例子
            emitter2.destroy();//销毁例子
        },3000)
    }
    //向上
    function up_emitter(min,max) {
        //向下票碎片
        var  up_emitter = game.add.emitter(game.world.centerX,game.height+10, 400);
        up_emitter.makeParticles('qiqiu',[0, 1, 2, 3, 4, 5]);
        up_emitter.setRotation(0, 40);
        // up_emitter.setScale(0.5, 1.5);
        up_emitter.setYSpeed(min,max);
        up_emitter.width = 900;
        up_emitter.gravity = -600; //重力负数 向上票
        up_emitter.start(false, 5000, 100);
        setTimeout(function () {
            console.log("==销毁例子3==")
            up_emitter.destroy();//销毁例子

        },4000)
    }
}

