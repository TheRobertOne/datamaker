

class D11 {
    init() {

    }
    preload(game) {
        game.load.image('carrot', require('../assets/sprites/carrot.png'));
        game.load.image('star', require('../assets/sprites/star_particle.png'));
        game.load.image('diamon', require('../assets/sprites/diamond.png'));
    }
    create(game) {
        game.stage.disableVisibilityChange = true;
        this.emitter = game.add.emitter(game.world.centerX, game.world.centerY, 200);
       
        window.ee = game.add.emitter;
        this.emitter.makeParticles(['carrot', 'star', 'diamon']);
        this.emitter.start(false, 20000, 20);
   

    }
    update(game) {
       
    }
    render(game) {

    }
}

module.exports = D11;