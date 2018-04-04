
class D9 {
    init() {

    }
    preload(game) {
        game.load.spritesheet('dudu', require('../assets/sprites/phaser-dude.png'), 27, 40);
    }
    create(game) {
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.physics.startSystem(Phaser.Physics.ARCADE);
        this.dudu = game.add.sprite(game.world.centerX, game.world.centerY, 'dudu');
        this.dudu.scale.set(2);
        this.dudu.anchor.set(0.5);
        game.physics.arcade.enable(this.dudu);
        this.dudu.body.velocity.y = 500;
        this.dudu.body.velocity.x = 300;
        this.dudu.body.collideWorldBounds = true;
        this.dudu.body.bounce.setTo(0.1, 0.5);
    }
    update(game) {

    }
    render(game) {

    }
}

module.exports = D9;