
class D5 {

    preload(game) {
        game.load.image('phaser', require('../assets/sprites/phaser-dude.png'));
        game.load.spritesheet('veggies', require('../assets/sprites/fruitnveg32wh37.png'), 32, 32)
    }
    create(game) {


        game.input.onDown.add(function (p, y) {
            let mt = game.add.tween(this.sprite)
            mt.to({ x: p.x, y: p.y }, 200, 'Linear', true, 0, 0, false)

        }, this);

        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.disableVisibilityChange = true;

        this.group = game.add.group();
        for (let i = 0; i < 100; i++) {
            if (i < 70) {
                this.group.add(new Vegetable(game));

            } else {
                this.group.add(new Chilli(game));

            }
        }
        game.stage.backgroundColor = '#2d2d2d';

        this.sprite = game.add.sprite(game.world.centerX, game.world.centerY, 'phaser');
        this.sprite.anchor.set(0.5);
        this.sprite.inputEnabled = true;
        this.sprite.input.enableDrag();

        game.physics.arcade.enable(this.sprite);
        // this.sprite.body.velocity.x = 10;
        this.cursors = game.input.keyboard.createCursorKeys();

    }
    update(game) {
        // this.sprite.body.velocity.set(0);
        game.physics.arcade.overlap(this.sprite, this.group, function (player, chilli) {
            chilli.kill();
        }, null, this);

        // if (this.cursors.left.isDown) {
        //     this.sprite.body.velocity.x = -200;
        // } else if (this.cursors.right.isDown) {
        //     this.sprite.body.velocity.x = 200;

        // } else if (this.cursors.up.isDown) {
        //     this.sprite.body.velocity.y = -200;

        // } else if (this.cursors.down.isDown) {
        //     this.sprite.body.velocity.y = 200;

        // }


    }
}

module.exports = D5;

function Vegetable(game) {
    let frame = game.rnd.between(0, 35);
    if (frame === 17) {
        frame = 1;
    }
    let x = game.rnd.between(100, 770);
    let y = game.rnd.between(0, 570);
    Phaser.Image.call(this, game, x, y, 'veggies', frame);
}

Vegetable.prototype = Object.create(Phaser.Image.prototype);
Vegetable.prototype.constructor = Vegetable;

function Chilli(game) {
    let x = game.rnd.between(100, 770);
    let y = game.rnd.between(0, 500);
    Phaser.Sprite.call(this, game, x, y, 'veggies', 17);
    game.physics.arcade.enable(this);
}

Chilli.prototype = Object.create(Phaser.Sprite.prototype);
Chilli.prototype.constructor = Chilli;