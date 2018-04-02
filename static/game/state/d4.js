


class D4 {

    preload(game) {
        game.load.image('sky', require('../assets/sprites/deepblue.png'));
        game.load.image('dragonTexture', require('../assets/sprites/dragon.png'));
        game.load.json('dragonMesh', require('../assets/sprites/dragon_json.png'));

    }
    create(game) {
        game.add.image(0, 0, 'sky');

        this.dragon = Phaser.Creature(game, 0, 0, 'dragonTexture', 'dragonMesh');
        this.dragon.scale.set(26);
        this.dragon.play(true);
    }

}

module.exports = D4;