
(function(game){
    game.callbackerAddMultiselect = function (data,index) {
        game.state.add(data.type+index,function(){
            var self=this;
            this.buttonId = null;
            var bFlga = true;
            var temr = 10;
            var anwArr = new Array();//存放答案数组;
            var count_btn = 0; //选择次数
            var tijiao = false; //提交
            this.init=function(){
                this.data = data.data;
                this.fensu =0;
                this.wrong =false;  //是否答错
                anwArr = new Array();//存放答案数组;
                bFlga = true;
                temr = 10;
                anwArr = new Array();//存放答案数组;
                count_btn = 0; //选择次数
                tijiao = false; //提交
                this.body_group =null
                this.game_but = null;  //GO按钮
            };

            this.preload = function(){
                /*加载题干图片*/
                // /*添加题支图片*/
                // for(var i=0;i<this.data.body.length;i++){
                //     game.load.image(game.stateIndex+"body_image"+i,this.data.body[i].image);
                // }
                // /*确认*/
                // /***题干图片**/
                // if(this.data.questionImage!=""&&this.data.questionImage!=undefined){
                //     game.load.image("questionImage",this.data.questionImage);
                // }
            };

            this.create = function(){
                var self= this;
                var title_text=game.add.text(this.data.text_pos.x,this.data.text_pos.y,this.data.title,{fill:this.data.fontColor,fontSize:this.data.fontSize,align:"center"});

                title_text.setTextBounds(0, 0, 250,40); //文字居中效果
                title_text.wordWrapWidth = 900;//文本自动换行

                title_text.wordWrap = true;
                //题干图片
                if (this.data.q_image !="" && this.data.q_image !=undefined){
                    if (this.data.pos!="" && this.data.pos !=undefined){
                        game.add.image(this.data.pos.x,this.data.pos.y,data.type +"_questionImage_"+index);
                    }

                }

                if (this.data.image!=""&&this.data.image!=undefined){

                    var s =game.add.image(this.data.text_pos.x,this.data.text_pos.y,data.type +'_titleImage_'+index);

                }
                /*==添加题支==*/
                self.body_group=game.add.group();
                for(var i=0;i<this.data.body.length;i++){
                    if(this.data.body[i].pos!=""){
                        self.body_group.add( game.add.button(this.data.body[i].pos.x,this.data.body[i].pos.y,data.type+"_body_image"+i+"_"+index,self.onClick,this));
                    }else{
                        self.body_group.add( game.add.button(200+i*200,400,data.type+"_body_image"+i+"_"+index,self.onClick,this));
                    }
                    var current=self.body_group.children[i];
                    //current.width =  current.width*0.6;
                    //current.height =current.height*0.5;
                    current.id=i;
                    current.have_image = null;
                    current.isFlag = false;
                    current.alpha = 0.5;

                }

                if(this.data.ok_btnPos !="" &&this.data.ok_btnPos != undefined){
                    self.queren = game.add.button(this.data.ok_btnPos.x,this.data.ok_btnPos.y,"OK",self.check_answer,this,1,0,1,0);
                }else {
                    self.queren = game.add.button(450,620,"OK",self.check_answer,this,1,0,1,0);
                }

                game.my.render_star_image();

            }

            var bFlag=true;
            this.onClick = function(button){

                if(tijiao){
                    console.log("已经提交无法重复选择");
                    return false;
                }


                if(button.have_image != null){
                    button.have_image = null;//清空
                    button.isFlag = false; //未选
                    // button.frame=0;
                    console.log('1',button.isFlag);
                    if(button.id+1>anwArr.length){
                        console.log('取消选择==2=',1);
                        anwArr.splice(anwArr.length-1,1);
                    }else{
                        console.log('取消选择==3=',button.id);
                        for (var i= 0 ;i<anwArr.length;i++){
                            if (anwArr[i]==button.id){
                                anwArr.splice(i,1);
                            }
                        }

                    }
                    button.children[0].destroy()//删除子元素
                    console.log('取消选择===',anwArr);
                    return;
                }

                if(button.have_image == null){
                    console.log('2',button.isFlag);
                    button.isFlag = true;
                    // button.frame=1;
                    button.have_image = button.id;
                    anwArr.push(button.have_image);
                    game.add.tween(button).to({width:button.width+20,height:button.height+20}, 100, null, true,0,1,true);
                    setTimeout(function(){
                        //button.width =   button.width+40;
                        //button.height = button.height+40;
                        var garphics= game.add.graphics(0,0);
                        var xxk = "0xA2FCFA";
                        if(button.id==0){
                            xxk = "0xF5E843";
                            garphics.lineStyle(10,xxk);
                        }else if(button.id==1){
                            xxk = "0xec003a";
                            garphics.lineStyle(10,xxk);
                        }else if(button.id==2){
                            xxk = "0xA2FCFA";
                            garphics.lineStyle(10,xxk);
                        }else{
                            garphics.lineStyle(10,xxk);
                        }
                        garphics.drawRoundedRect(button.x,button.y,button.width-20,button.height-20);
                        var sub = button.addChild(game.add.image(0,0,garphics.generateTexture()));//转化精灵到imgae 并添加到子类删除时子删除当前子类addChild 添加子类方法
                        garphics.destroy(); //删除当前精灵绘制图形
                    },100);
                    console.log("选中的答案",anwArr);
                }



            };

            //判断当前题目正确与否
            this.check_answer = function(btn){
                disableAnswer();
                if(self.data.answer.length == anwArr.length) {
                    for (var k in anwArr) {
                        var id = anwArr[k];
                        if (!self.check_sub(id)) {//如果有一个答案ID 不行等就是错误false
                            self.fensu =0;
                            self.wrong = true;
                            console.log("哪些选错了",id);
                            for(s in self.data.body){
                                //var l = self.data.body[s];
                                if (!self.check_sub(s)) {
                                    // console.log(s);
                                    //var uid = self.data.answer[s];
                                    if(this.data.body[s].pos!=""){
                                        game.add.image( (this.data.body[s].pos.x+20),this.data.body[s].pos.y+25,"choice",2);
                                    }else{
                                        game.add.image( 510,115,"choice",2);
                                    }

                                }else{
                                    if(this.data.body[s].pos!=""){
                                        game.add.image( (this.data.body[s].pos.x+20),this.data.body[s].pos.y+25,"choice",1);
                                    }else{
                                        game.add.image( 510,115,"choice",2);
                                    }
                                }


                            }
                            console.log("答错了");
                            game.add.audio('wrong').play();
                            log("答错0星");
                            game.my.set_star(0,index)
                            return false;
                        }
                    }
                    for(var l in self.data.body){
                        if (!self.check_sub(l)) {
                            // console.log(s);
                            //var uid = self.data.answer[s];
                            if(this.data.body[l].pos!=""){
                                game.add.image( (this.data.body[l].pos.x+20),this.data.body[l].pos.y+25,"choice",2);
                            }else{
                                game.add.image( 510,115,"choice",2);
                            }

                        }else{
                            if(this.data.body[l].pos!=""){
                                game.add.image( (this.data.body[l].pos.x+20),this.data.body[l].pos.y+25,"choice",1);
                            }else{
                                game.add.image( 510,115,"choice",2);
                            }
                        }
                    }
                    //全是对的答案
                    console.log("答对啦");
                    game.my.jigsawIsAnswerTrue = true;
                    game.add.audio('Sound_Great').play();
                    gameScoreAnimtions();
                    setTimeout(function () {
                        game.add.audio('startCollected').play();
                        flyStar();
                        game.my.set_star(3,index)
                    },1000)
                }else{
                    self.fensu =0;
                    self.wrong = true;
                    //添加选错 超出答案数组 给正确答案提示
                    for(var s in self.data.body){
                        if (!self.check_sub(s)) {
                            if(this.data.body[s].pos!=""){
                                game.add.image( (this.data.body[s].pos.x+20),this.data.body[s].pos.y+25,"choice",2);
                            }else{
                                game.add.image( 510,115,"choice",2);
                            }

                        }else{
                            if(this.data.body[s].pos!=""){
                                game.add.image( (this.data.body[s].pos.x+20),this.data.body[s].pos.y+25,"choice",1);
                            }else{
                                game.add.image( 510,115,"choice",2);
                            }
                        }


                    }
                    console.log("答错了");
                    game.add.audio('wrong').play();
                    log("答错0星");
                    game.my.set_star(0,index)
                }
                // btn.frame= 1;
                self.queren.frame=1;
                tijiao = true;

            };
            this.check_sub = function(id){
                for(n in self.data.answer){
                    var aid = self.data.answer[n];
                    if(aid == id){
                        return true;
                    }
                }
                return false;
            };

            /***===提交分数===****/
            this.submitScore = function(scores,animation){
                console.log(scores,animation)
            }

            /***这是运行游戏定时器的功能 游戏中的定时器 定义***/

        });
    }
})(game);