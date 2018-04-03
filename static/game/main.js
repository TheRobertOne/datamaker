require('./index.scss');
const D3 = require('./state/d6');
// const Boot = require('./state/boot');

const game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.CANVAS, 'direct', this, false, true);

game.state.add('d3', new D3());

game.state.start('d3');

