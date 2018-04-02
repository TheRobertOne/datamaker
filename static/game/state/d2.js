
class D2 {
    constructor() {

    }
    preload(game) {

        game.load.atlas('seacreatures', require('../assets/sprites/seacreatures_json.png'), require('../assets/sprites/seacreatures_json.json.png'));
        game.load.image('undersea', require('../assets/pics/undersea.jpg'));

    }
    create(game) {
        this.myimage = game.add.image(0, 0, 'undersea');

        this.greenJellyfish = game.add.sprite(0, 0, 'seacreatures', 'stingray0003');
        this.greenJellyfish.inputEnabled = true;
        this.greenJellyfish.input.draggable = true;
        game.physics.enable(this.greenJellyfish, Phaser.Physics.ARCADE);
        this.greenJellyfish.body.gravity.y = 9.8;
        this.greenJellyfish.body.gravity.x = 20;

        // this.greenJellyfish.events.onInputDown.add(function () {
        //     this.greenJellyfish.frameName = 'octopus0009';
        //     console.log('down')
        // }, this)
        // this.greenJellyfish.events.onDragStop.add(function () {

        // }, this)
    }

}

module.exports = D2;