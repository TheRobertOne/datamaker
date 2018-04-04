
class D6 {
    init() {
      
    }
    preload(game) {
        game.scale.pageAlignHorizontally = true; //水平居中
        game.scale.pageAlignVertically = true; //垂直居中
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        game.load.spritesheet('mummy', require('../assets/sprites/metalslug_mummy37x45.png'), 37, 45, 18)
        game.load.image('sky', require('../assets/pics/thorn_lazur.png'));

    }
    create(game) {
        game.stage.disableVisibilityChange = true;

        this.sky = game.add.image(0, 0, 'sky');
        this.sky.width = game.world.width;

        this.mummy = game.add.sprite(300, 200, 'mummy');
        this.ani = this.mummy.animations.add('walk', null, 20, true);
        this.mytext = game.add.text(game.world.centerX, game.world.centerY, 'hello world', { fill: '#d3a' });
        this.ani.enableUpdate = true;

        this.ani.onUpdate.add(function (anim, frame) {
            this.mytext.text = frame.index;
        }, this);

        this.mummy.scale.set(3, 3);
        this.mummy.anchor.set(0.5);
        this.cursor = game.input.keyboard.createCursorKeys()
        window.game = game;
        let _self = this;
        this.cursor.right.onHoldCallback = function () {
            console.log('hh')
            if (_self.mummy.scale.x < 0) {
                _self.mummy.scale.x = 3;
            }
            if (!_self.ani.isPlaying) {
                _self.ani.play('walk');


            }

        }

        this.cursor.left.onHoldCallback = function () {
            if (_self.mummy.scale.x > 0) {
                _self.mummy.scale.x = -3;
            }
            if (!_self.ani.isPlaying) {
                _self.ani.play('walk');


            }

        }
        console.log(this.ani)

    }
    update(game) {
        if (this.cursor.right.isUp && this.cursor.left.isUp) {
            this.ani.stop('walk');
        }


    }
}


module.exports = D6;