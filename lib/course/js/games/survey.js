
(function(game){
    game.callbackerAddSurvey = function (data,index) {
        game.state.add(data.type+index,function(){
            this.feeling_tween = [];
            this.mood= []; //心情 数组
            var percent = [];

            this.init = function() {
                this.data = data.data;
                dianji = false;
                if (data === undefined) {
                    this.data = {
                        title: 'heheheh',
                        num: [999, 66, 45]
                    };
                }
                this.groupA = null; //存放题支组
                this.score = 0;
                self=this;
                this.feeling_texts = [];
                this.game_but = null;
            };
            this.preload = function() {
                //学生显示加载
            };
            //学生获取投票结果
            this.getItemVote = function(item) {
                log("进入更新投票函数");
                for (var name in item){
                    for (var i=0;i<this.data.body.length;i++){
                        if(this.data.body[i].name == name){
                            if(item[name]==""){
                                item[name]=0;
                            }
                            this.feeling_texts[i].text = item[name];
                            log("显示人数");
                            this.feeling_texts[i].alpha = 1;
                        }
                    }
                }
            };

            game.my.getItemVote = function (item) {
                self.getItemVote(item);
            }

            this.create = function() {

                var self= this;
                if (this.data.overviewImage!=""){
                    game.add.image(this.data.pos.x,this.data.pos.y,data.type +'_overviewImage_'+index);
                }
                if (this.data.titleImage!=""&&this.data.titleImage!=undefined){
                    game.add.image(this.data.text_pos.x,this.data.text_pos.y,data.type +'_titleImage_'+index);
                }
                var title = game.add.text(this.data.text_pos.x,this.data.text_pos.y,this.data.title,{fill:this.data.fill_color,fontSize:this.data.font_size,align:"center",boundsAlignH: "center"});
                title.setTextBounds(10, 0, 700, 40);
                title.wordWrapWidth = 900;
                title.wordWrap = true;
                this.groupA = game.add.group();

                for (var i = 0; i < this.data.body.length; i++) {
                    this.groupA.add(game.add.button(this.data.body[i].pos.x, this.data.body[i].pos.y, data.type +'_body_image'+i+'_'+index,this.onClick,this));
                    var current = this.groupA.children[i];
                    current.id = i;
                    current.name = this.data.body[i].name;
                    current.alpha = 0.5;
                }

                for (var i=0;i<this.data.body.length;i++){
                    var x = (this.data.body[i].pos.x+(this.groupA.children[i].width/2))
                    this.feeling_texts[i]=game.add.text(this.data.body[i].pos.x,this.data.body[i].pos.y,this.data.body[i].nameNum,{fill:"#407eff",fontSize:28,align:"center",boundsAlignH: "center"})
                    this.feeling_texts[i].setTextBounds(0, 0, this.groupA.children[i].width, 40);//已题支宽度居中显示
                    this.feeling_texts[i].alpha = 0;
                }

                game.my.render_star_image();
            }
            //点击选择投票
            this.onClick = function(button){
                disableAnswer();
                game.my.jigsawIsAnswerTrue = true;
                game.add.tween(button).to({width:button.width+20,height:button.height+20}, 100, null, true,0,1,true);
                game.add.audio('Sound_Great').play();
                gameScoreAnimtions();
                setTimeout(function () {
                    game.add.audio('startCollected').play();
                    flyStar();
                    game.my.set_star(3,index);
                },1000)
                 //学生发送投票结果
                putVoteData(index,button.name)
            }
        });
    }
})(game);