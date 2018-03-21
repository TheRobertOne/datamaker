function add_progress_bar(answer_time){
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