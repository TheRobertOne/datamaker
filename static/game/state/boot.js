

class Boot {
    constructor() {

    }

    preload(game) {
        game.load.image('lazur', require('../images/thorn_lazur.png'));
        game.load.spritesheet('mummy', require('../images/metalslug_mummy37x45.png'), 37, 45, 18)
    }
    create(game) {
        // console.log(game);
        this.back = game.add.image(0, 0, 'lazur');
        this.back.scale.setTo(1);
        this.back.smoothed = true;
        this.mummy = game.add.sprite(game.world.centerX, game.world.centerY, 'mummy', 5);
        this.mummy.scale.setTo(4);
        this.mummy.anchor.setTo(0.5, 0.5);
        this.anim = this.mummy.animations.add('walk',null,10,true);

        this.anim.onStart.add(function () {
            console.log('start ')
        }, this);
        this.anim.play('walk');
        this.anim.onLoop.add(function () {
            console.log('on loop ')
        })
        this.anim.onComplete.add(function () {
            console.log('complete')
        }, this)


    }
    update() {

    }
}

module.exports = Boot;