
(function(game){
    var images_path = "./states/01/images/";
    var audio_path = "./states/01/images/";
    game.callbackerAddDisplay = function (data,index) {
        game.state.add(data.type+index,function(){
            this.init=function(){
                console.log("displayinit")
                this.data = data.data;
            };
            this.preload = function(){

            }
            this.create = function(){
                if (this.data.overviewImage){
                    game.add.image(this.data.pos.x,this.data.pos.y,this.data.type+'_overviewImage_'+index);
                }
                //展示图片组
                if(this.data.body){
                    for(var i=0;i<this.data.body.length;i++){
                        if(this.data.body[i].image){
                            game.add.image(this.data.body[i].pos.x,this.data.body[i].pos.y,'display_displayImage'+i+"_"+index);
                        }
                    }
                }

                game.my.render_star_image()
            }
        });
    }
})(game);