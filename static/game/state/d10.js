

class D10 {
    init() {

    }
    preload(game) {
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.load.image('bg', require('../assets/sprites/debug-grid-1920x1920.png'));
        game.load.image('dudu', require('../assets/sprites/phaser-dude.png'));
    }
    create(game) {
        game.add.tileSprite(0, 0, 1920, 1920, 'bg');
        game.world.setBounds(0, 0, 1920, 1920);
        game.physics.startSystem(Phaser.Physics.P2JS);

        this.player = game.add.sprite(1024 / 2, 738 / 2, 'dudu');
        this.player.scale.setTo(2);
        game.physics.p2.enable(this.player);
        this.cursor = game.input.keyboard.createCursorKeys();
        game.camera.follow(this.player);
    }
    update(game) {
        this.player.body.setZeroVelocity();
        if (this.cursor.left.isDown) {
            this.player.body.velocity.x = -300;
        } else if (this.cursor.right.isDown) {
            this.player.body.velocity.x = 300;
        } else if (this.cursor.up.isDown) {
            this.player.body.velocity.y = -300;
        } else if (this.cursor.down.isDown) {
            this.player.body.velocity.y = 300;
        }

    }
    render(game) {
        game.debug.spriteInfo(this.player, 32, 32);
        game.debug.spriteCoords(this.player, 32, 264);
    }
}


module.exports = D10;