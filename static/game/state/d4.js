
class D4 {
    constructor() {

    }
    preload(game) {
        game.load.image('sky', require('../assets/sprites/deepblue.png'));
        game.load.image('dragonTexture', require('../assets/sprites/dragon.png'));
        game.load.json('dragonMesh', '/sprite-json/dragon.json');
    }
    create(game) {
        game.add.image(0, 0, 'dragonTexture');
        // game.add.creature(0, 0, 'dragonTexture', 'dragonMesh');

    }
}

module.exports = D4;