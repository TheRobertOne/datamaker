const Boot = require('./state/boot');
const game = new Phaser.Game(800, 600, Phaser.CANVAS, 'direct', this, true, true);

game.state.add('boot', new Boot());

game.state.start('boot');