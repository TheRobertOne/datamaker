
class D9 {
    init() {

    }
    preload(game) {
        game.load.spritesheet('dudu', require('../assets/sprites/phaser-dude.png'), 27, 40);
        game.load.spritesheet('mummy', require('../assets/sprites/metalslug_mummy37x45.png'), 37, 45)
    }
    create(game) {
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.physics.startSystem(Phaser.Physics.ARCADE);

        this.mummy = game.add.sprite(0, 0, 'mummy');
        this.mummy.scale.setTo(2);
        game.physics.arcade.enable(this.mummy);
        this.dudu = game.add.sprite(game.world.centerX, game.world.centerY, 'dudu');
        this.dudu.scale.set(2);
        this.dudu.anchor.set(0.5);
        game.physics.arcade.enable(this.dudu);
        game.physics.arcade.enable(this.mummy);
        // this.dudu.body.velocity.y = 500;
        // this.dudu.body.velocity.x = 300;
        this.dudu.body.collideWorldBounds = true;
        this.dudu.body.bounce.setTo(0.1, 0.5);
        game.input.onDown.add(function (p, t) {

            game.add.tween(this.dudu).to({ x: p.x, y: p.y }, 1000, Phaser.Easing.Linear.None, true);
        }, this)
    }
    update(game) {
        game.physics.arcade.overlap(this.dudu, this.mummy, function (dudu, mummy) {
            console.log(dudu);
            mummy.kill();

        }, null, this)
    }
    render(game) {
        game.debug.spriteInfo(this.dudu, 30, 30)
    }
}

module.exports = D9;