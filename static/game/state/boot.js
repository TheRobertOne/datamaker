
import D2 from './d2';

class Boot {
    constructor() {

    }

    preload(game) {
        game.load.image('lazur', require('../assets/pics/thorn_lazur.png'));
        game.load.spritesheet('mummy', require('../assets/sprites/metalslug_mummy37x45.png'), 37, 45, 18)
    }
    create(game) {
        game.stage.disableVisibilityChange = true;
        // console.log(game);
        this.back = game.add.image(0, 0, 'lazur');
        this.back.scale.setTo(1);
        this.back.smoothed = true;
        this.mummy = game.add.sprite(game.world.centerX, game.world.centerY, 'mummy', 5);
        this.mummy.scale.setTo(4);
        this.mummy.anchor.setTo(0.5, 0.5);
        this.anim = this.mummy.animations.add('walk', null, 10, true);
        this.title = game.add.text(game.world.centerX, game.world.centerY, 'hello world', { fill: 'blue' })

        this.anim.onStart.add(function (sprite, animations) {
            console.log('start ')
        }, this);
        this.anim.play('walk');

        this.anim.onLoop.add(function (sprite, animations) {
            console.log('loop')
            this.title.text = 'loop' + animations.loopCount;
            if (animations.loopCount >= 4) {
                animations.stop();
                game.state.add('d2', new D2());
                game.state.start('d2');
            }
        }, this);
        this.anim.onComplete.add(function (sprite, animations) {
            console.log('complete')
        }, this);


    }
    update() {
        if (this.anim.isPlaying) {
            this.back.x -= 1;
        }
    }
}

module.exports = Boot;