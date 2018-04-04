
class D8 {
    init() {

    }
    preload(game) {
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVerticalley = true;
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.load.image('dudu', require('../assets/sprites/phaser-dude.png'));
    }
    create(game) {
        game.stage.backgroundColor = '#ecc';
        this.dudu = game.add.sprite(32, 32, 'dudu');
        game.physics.arcade.enable(this.dudu);

        this.dudu.body.gravity.y = 20;
    }
    update(game) {

    }
    render(game) {

    }
}

module.exports = D8;