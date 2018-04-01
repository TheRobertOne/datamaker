

class Boot {
    constructor() {
    }
    preload() {

    }
    create(game) {
        // console.log(game);
        let text = game.add.text(game.world.centerX, game.world.centerY, 'Hello wo', { fill: '#f00' });
        text.anchor.setTo(0.5, 0.5);
    }
}

module.exports = Boot;