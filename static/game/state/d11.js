

class D11 {
    init() {

    }
    preload(game) {
        game.scale.pageAlignHorizontally = true; //水平居中
        game.scale.pageAlignVertically = true; //垂直居中
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        game.load.image('carrot', require('../assets/sprites/carrot.png'));
        game.load.image('star', require('../assets/sprites/star_particle.png'));
        game.load.image('diamon', require('../assets/sprites/diamond.png'));
    }
    create(game) {
        game.stage.disableVisibilityChange = true;
        this.emitter = game.add.emitter(game.world.centerX, game.world.centerY, 1000);
       
        window.ee = game.add.emitter;
        this.emitter.makeParticles(['carrot', 'star', 'diamon']);
        this.emitter.start(false);
   

    }
    update(game) {
       
    }
    render(game) {

    }
}

module.exports = D11;