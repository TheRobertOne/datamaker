require('./index.scss');

const Boot = require('./state/boot');
const game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.CANVAS, 'direct', this, true, true);

game.state.add('boot', new Boot());

game.state.start('boot');