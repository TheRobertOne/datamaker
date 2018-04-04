

class D7 {
    init() {

    }
    preload(game) {
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.load.image('arrow', require('../assets/sprites/longarrow.png'));
        game.load.image('dudu', require('../assets/sprites/phaser-dude.png'));
    }
    create(game) {
        game.stage.disableVisibilityChange = true;
        this.arrow = game.add.image(32, 100, 'arrow');

        this.dudu = game.add.image(100, 200, 'dudu');
        this.dudu.scale.setTo(2);
        this.dudu.anchor.set(0.5);
       
        this.dudu.inputEnabled = true;
        this.dudu.input.enableDrag();

    }
    update(game) {
        this.arrow.rotation = game.physics.arcade.angleBetween(this.arrow, this.dudu);
    }
    render(game) {

    }
}

module.exports = D7;