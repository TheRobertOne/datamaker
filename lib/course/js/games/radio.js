/**
 * Created by klaus on 16/8/10.
 * 模块数据展示  单选题
 */
(function(game){
    var state_name = "04";
    var images_path = "./states/04/images/";
    var audio_path = "./states/04/images/";
    game.callbackerAddRadio = function (data,index) {
        game.state.add(data.type + index,function(){
            this.init=function(){
                this.data = data.data;
            };

            this.preload = function(){

            };
            // //服务器的星星数量获取
            // this.getStarts = function(num) {
            //     if(num){
            //         game.startCont.text = num;
            //     }
            // };
            this.create = function(){
                var self = this
                if (this.data.q_image){
                   game.add.image(this.data.pos.x,this.data.pos.y,data.type+"_q_image_"+index);
                }
                if (this.data.titleImage){
                    game.add.image(this.data.text_pos.x,this.data.text_pos.y,data.type +'_titleImage_'+index);
                }
                /*==添加题支==*/
                this.body_group = game.add.group();
                for(var i=0;i<this.data.body.length;i++){
                    var x  = this.data.body[i].pos.x;
                    if(this.data.body[i].pos){
                        this.body_group.add(game.add.button(x,this.data.body[i].pos.y,data.type+"_body_image"+i+"_"+index,self.onClick,this));
                    }else{
                        this.body_group.add(game.add.button(200+i*200,400,game.stateIndex+data.type+"_body_image"+i+"_"+index,self.onClick,this));
                    }
                    //gameAdmissionAnimations(this.data.animation,current,this.data.body[i].pos.x,this.data.body[i].pos.y);
                }


                // public
                game.my.render_star_image();
            }
            this.onClick = function(button){
                disableAnswer();
                var dx = button.renderOrderID
                    if(dx - 1 == data.data.answer){
                        game.add.audio('Sound_Great').play();
                        gameScoreAnimtions();
                        setTimeout(function () {
                            game.add.audio('startCollected').play();
                            flyStar();
                            game.my.set_star(3,index)
                        },1000)
                        return
                    }
                    game.add.audio('wrong').play();
                    log("答错0星");
                    game.my.set_star(0,index)
                    // var ret = dsBridge.call("echo.getScore",{"code":"fail","score":0})
            };

        });
    }
})(game);