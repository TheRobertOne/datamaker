require('./index.scss');

// const Boot = require('./state/boot');
const D4 = require('./state/d4');
const game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.CANVAS, 'direct', this, true, true);

game.state.add('d4', new D4());

game.state.start('d4');