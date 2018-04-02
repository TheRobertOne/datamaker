
class D2 {
    constructor() {

    }
    preload(game) {

        game.load.atlas('seacreatures', require('../assets/sprites/seacreatures_json.png'), require('../assets/sprites/seacreatures_json.json.png'));
        game.load.image('undersea', require('../assets/pics/undersea.jpg'));

    }
    create(game) {
        this.myimage = game.add.image(0, 0, 'undersea');
        this.myimage.inputEnabled = true;
        console.log(this.myimage.events)
        this.myimage.events.onInputDown.add(function (s, a) {
            console.log(a)
        }, this)
        this.greenJellyfish = game.add.sprite(0, 0, 'seacreatures', 'greenJellyfish0000');
    }

}

module.exports = D2;