
class D2 {
    constructor() {

    }
    preload(game) {

        game.load.atlas('seacreatures', require('../assets/sprites/seacreatures_json.png'), '/sprite-json/seacreatures_json.json');
        game.load.image('undersea', require('../assets/pics/undersea.jpg'));

    }
    create(game) {
        this.myimage = game.add.image(0, 0, 'undersea');

        this.greenJellyfish = game.add.sprite(0, 0, 'seacreatures', 'stingray0003');

        this.squid0015 = game.add.sprite(400, 0, 'seacreatures', 'squid0015');
        this.greenJellyfish.inputEnabled = true;
        this.greenJellyfish.input.draggable = true;
        game.physics.enable([this.greenJellyfish, this.squid0015], Phaser.Physics.ARCADE);
        // this.greenJellyfish.body.gravity.y = 9.8;
        // this.greenJellyfish.body.gravity.x = 20;
        // this.squid0015.body.velocity.x = -2;
        // this.greenJellyfish.body.velocity.x = 55;


        // this.greenJellyfish.events.onInputDown.add(function () {
        //     this.greenJellyfish.frameName = 'octopus0009';
        //     console.log('down')
        // }, this)
        // this.greenJellyfish.events.onDragStop.add(function () {
        let tw = game.add.tween(this.greenJellyfish)
        tw.to({ x: 300 }, 500, null, true, 2000, 2, false);
        // tw.start();
        //     //    tw.stop();
        // }, this)
        // game.time.events.loop(100, function () {
        //     console.log('hjh')
        // }, this)
        // game.time.events.stop(false); 
    }
    update(game) {
        // game.physics.arcade.collide(this.squid0015, this.greenJellyfish, function (s1, s2) {
        //     s2.body.velocity.x = -50;
        // }, null, this)
    }

}

module.exports = D2;