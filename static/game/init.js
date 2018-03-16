



const game = new Phaser.Game(1024, 768, Phaser.CANVAS, 'direct');

var back;
var mummy;
var anim;
var loopText;

game.state.add('boot', function () {
    this.preload = function () {

        game.load.image('lazur', './images/thorn_lazur.png');
        game.load.spritesheet('mummy', './images/metalslug_mummy37x45.png', 37, 45, 18);

    }

    this.create = function () {

        back = game.add.image(0, -400, 'lazur');
        back.scale.set(2);
        back.smoothed = false;

        mummy = game.add.sprite(200, 360, 'mummy', 5);
        mummy.scale.set(4);
        mummy.smoothed = false;
        anim = mummy.animations.add('run');
        mummy.inputEnabled = true;
        mummy.input.enableDrag();
        var dd = game.add.text(100, 200, '胖胖胖', { fill: 'blue' })
        dd.inputEnabled = true;
        dd.input.enableDrag();

        anim.onStart.add(animationStarted);
        anim.onLoop.add(animationLooped);
        anim.onComplete.add(animationStopped);

        anim.play(10, true);



        mummy.events.onDragStop.add(function (x, y) {
            // var m = game.physics.arcade.intersects(mummy, dd);
            // if (m) {
            //     console.log(dd.position)
            //     game.add.tween(mummy).to(dd.position, 500, null, true, 0, 0).onComplete.add(function () {
            //         console.log("移动完成")
            //         // mummy.input.disableDrag();//开启拖拽

            //     });
            // }

        })
        mummy.events.onDragUpdate.add(function () {
            var m = game.physics.arcade.intersects(mummy, dd);
            if (m) {
                console.log(dd.position)
                game.add.tween(mummy).to({ x: 800, y: 500 }, 500, null, true, 0, 0).onComplete.add(function () {
                    console.log("移动完成")
                    // mummy.input.disableDrag();//开启拖拽


                });
            }
        })

        dd.events.onDragStop.add(function (x, y) {
            var m = game.physics.arcade.intersects(mummy, dd);

            if (m) {
                console.log('dd')

            }
        })



    }
    this.update = function () {

        if (anim.isPlaying) {
            back.x -= 1;
        }

    }

})







function animationStarted(sprite, animation) {

    var text = game.add.text(32, 100, 'Animation started', { fill: 'white' });
    text.inputEnabled = true;
    text.input.enableDrag();

}

function animationLooped(sprite, animation) {

    if (animation.loopCount === 1) {
        loopText = game.add.text(32, 64, 'Animation looped', { fill: 'white' });
        loopText.inputEnabled = true;
        loopText.events.onInputDown.add(function (a, b, c, d) {
            console.log(a)
            a.text = '第几了';
            console.log(b);
            console.log(c)
            console.log(d);
        })
    }
    else {
        loopText.text = 'Animation looped x2gg';
        // animation.loop = false;
    }

}

function animationStopped(sprite, animation) {

}




module.exports = game;