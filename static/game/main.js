require('./index.scss');
const D3 = require('./state/d10');
// const Boot = require('./state/boot');

const game = new Phaser.Game(1024, 738, Phaser.CANVAS, 'direct', this, false, true);

game.state.add('d3', new D3());

game.state.start('d3');

