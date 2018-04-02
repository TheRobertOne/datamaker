
class D3 {
    constructor() {

    }
    preload(game) {
        game.load.spritesheet('mummy', require('../assets/sprites/metalslug_mummy37x45.png'), 37, 45, 18);
        game.load.atlasJSONHash('bot', require('../assets/sprites/running_bot.png'), require('../assets/sprites/running_bot_json.png'));
    }
    create(game) {
        game.stage.disableVisibilityChange = true;
        this.bot = game.add.sprite(100, 100, 'bot');
        this.botAnim = this.bot.animations;
        this.botAnim.add('walk', null, 5, true);

        this.botAnim.play('walk');
        game.input.onDown.add(function () {
            this.bot.loadTexture('mummy', 0);
            this.bot.animations.add('run', null, 10, true);
            this.bot.animations.play('run')
        }, this);
    }
    render(game) {
        game.debug.body(this.bot);
    }

}

module.exports = D3;