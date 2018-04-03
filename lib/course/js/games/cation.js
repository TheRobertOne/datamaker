
(function(game){
    game.callbackerAddCation = function (data,index) {
        game.state.add(data.type+index,function(){
            var self=this;
            var bFlga = true;
            var temr = 10;
            this.init=function(){
                bFlga = true;
                this.dianji = false;
                this.data = data.data;
                this.fensu =0;
                this.wrong =false;  //是否答错
                this.buttonId = null;
                this.body_group = null
                this.game_but =null;
                this.groupA = null ; //选项框
                this.groupB = null ; //选项
                this.isAnswer = false ; //是否开始答题
                this.TwisRunning = false; //是否动画中
                this.random  = false; //不开启
                this.answerNum = 0; //答案数量 根据答对
                for(var a = 0 ; a< this.data.groupA.length ; a++){
                    this.answerNum = this.data.groupA[a].answer.length +this.answerNum;
                }
                this.scoreNum = 0; //用户答对数量
                // console.log('答案数量',this.answerNum)
            };

            this.preload = function(){

            };
            /***添加标题***/
            this.addTitle = function(){
                if (this.data.title_img!=""&&this.data.title_img!=undefined){
                    game.add.image(this.data.text_pos.x,this.data.text_pos.y,data.type +'_title_img_'+index);
                }
            };

            this.roleInit = function(){


            };
            //添加选项框
            this.addGroupA = function(){
                this.groupA=game.add.group();
                this.groupA.enableBody = true;
                this.groupA.physicsBodyType = Phaser.Physics.ARCADE;
                for(var i=0;i<this.data.groupA.length;i++){
                    var currenta = this.data.groupA[i];
                    if(currenta.pos != undefined || currenta.pos !=""){
                        this.groupA.create(currenta.pos.x,currenta.pos.y,data.type +'_groupA_image'+i+"_"+index);
                    }
                }
                for(var n in this.groupA.children){
                    this.groupA.children[n].id = n; //
                    this.groupA.children[n].answers = this.data.groupA[n].answer;
                }
            };
            //填加选项
            this.addGroupB = function(){
                this.groupB=game.add.group();
                this.groupB.enableBody = true;
                this.groupB.physicsBodyType = Phaser.Physics.ARCADE;
                for(var i=0;i<this.data.groupB.length;i++){
                    var currenta = this.data.groupB[i];
                    if(currenta.pos != undefined || currenta.pos !=""){
                        this.groupB.create(currenta.pos.x,currenta.pos.y,data.type +'_groupB_image'+i+'_'+index);
                    }
                }
                for(var n in this.groupB.children){
                    this.groupB.children[n].id = n; //
                    this.groupB.children[n].answer = false; //是否答对
                    this.groupB.children[n].anchor.setTo(0.5,0.5);

                }

                self.startAnswer();

            }
            //开始答题
            this.startAnswer = function(){
                // console.log("开始答题并拖拽");
                var randlist = random( this.data.groupB.length ); //开启随机"
                if(this.random){
                    var randlist = random( this.data.groupB.length ); //开启随机"
                }
                for(var n in this.groupB.children){
                    this.groupB.children[n].id = n; //
                    var item =  this.groupB.children[n];
                    // console.log("开启随机",randlist[n]); //保证不是每次打开都是一样的
                    if(this.random){
                        var x =  this.data.groupB[randlist[n]-1].pos.x + item.width /2;
                        var y =  this.data.groupB[randlist[n]-1].pos.y + item.height /2;
                    }else{
                        var x =  this.data.groupB[n].pos.x + item.width /2;
                        var y =  this.data.groupB[n].pos.y +  item.height /2;
                    }

                    this.groupB.children[n].old ={"x":x,"y":y};
                    item.inputEnabled = true;
                    item.input.enableDrag();
                    item.events.onDragStop.add(this.DragStop,this);
                    item.events.onDragStart.add(this.DragStart,this);
                    self.TwisRunning = true;
                    game.add.tween(item).to({x:x,y:y}, 400, null, true, 0, 0).onComplete.add(function(){
                        // console.log("开始答题动画完成",self.isAnswer);
                        self.TwisRunning = false; //动画完成可以拖拽

                    });
                }
                //随机函数
                function random(m){
                    var arr=[];
                    for(var i=0;i<m;i++)
                    {
                        var n=rnd(1,m+1);
                        if(!findinArr(arr,n))
                        {
                            arr.push(n);
                        }
                        else
                        {
                            i--;
                        }
                    }
                    function findinArr(arr,n) {
                        for (var i = 0; i < arr.length; i++) {
                            if (arr[i] == n) {
                                return true;
                            }
                        }
                        return false;
                    }
                    function rnd(n,m){
                        return parseInt(Math.random()*(m-n)+n);
                    }
                    return arr;

                }
            };
            /*****===开始拖拽==***/
            this.DragStart = function (image){
                // console.log("开始拖拽===",!image.answer);
            };
            /*****===拖拽结束==***/
            this.DragStop = function (image){

                var ls =   game.physics.arcade.overlap(image,this.groupA, this.check_over, null, this);
                // console.log("拖拽结束=2==",ls)
                // console.log("拖拽结束===",image.answer)

                if(!ls) {
                    console.log("没发生碰撞的",ls)
                    var x = image.old.x;
                    var y = image.old.y;
                    // e1.answer = false;

                    game.add.tween(image).to({x: x, y: y}, 300, null, true, 0, 0).onComplete.add(function () {
                        //    image.inputEnabled = true;
                        //    self.TwisRunning = false;
                        game.sound.play('errolplay')
                    });
                }
            };
            //检测碰撞
            this.check_over = function (e1,e2){
                for(var i=0; i< e2.answers.length ; i++){
                    if(e1.id == e2.answers[i]){
                        //  e1.anchor.setTo(0.5,0.5);
                        var width = e1.width +30;
                        var height = e1.height +30;
                        var x = this.data.groupA[e2.id].pos.x;
                        var y = this.data.groupA[e2.id].pos.y

                        var w = this.groupA.children[e2.id].width/2;
                        var h = this.groupA.children[e2.id].height/2;
                        game.add.tween(e1).to({x:this.data.groupA[e2.id].pos.x+w,y:this.data.groupA[e2.id].pos.y+h}, 300, null, true, 0, 0).onComplete.add(function(){
                            // e1.inputEnabled = false;
                            e1.anchor.setTo(0.5,0.5);
                            game.sound.stopAll();
                            game.sound.play('goodplay')
                            var tw = game.add.tween(e1).to({height: height,width:width,alpha:[1,0.5,0]}, 400,Phaser.Easing.Bounce.Outue, true,0,0);
                            tw.onComplete.add(function(){
                                self.scoreNum = self.scoreNum+1;
                                if(self.scoreNum == self.answerNum){
                                    console.log("全部答对");
                                    game.my.jigsawIsAnswerTrue = true;
                                    game.add.audio('Sound_Great').play();
                                    gameScoreAnimtions();
                                    setTimeout(function () {
                                        game.add.audio('startCollected').play();
                                        flyStar();
                                        game.my.set_star(3,index)
                                    },1000)
                                }
                                e1.inputEnabled = false;
                            })

                        });
                        return true;
                    }else{
                        //错返回
                        var x = e1.old.x;
                        var y = e1.old.y;

                        game.add.tween(e1).to({x: x, y: y}, 300, null, true, 0, 0).onComplete.add(function () {
                            game.sound.stopAll();
                            game.sound.play('errolplay')
                        });
                    }
                }


            };
            //判卷
            this.judgeAnswer = function (){

                return true;
            }

            this.addItme = function (){
                if (this.data.item!=""&&this.data.item!=undefined){

                    for(var i =0 ; i<this.data.item.length;i++){

                        if(this.data.item[i].image !=""){
                            // console.log("22222",this.data.item[i].image)
                            game.add.image(this.data.item[i].pos.x,this.data.item[i].pos.y,game.stateIndex +'item_image' +i);
                        }
                    }

                }
            }
            this.create = function(){
                var self = this;
                console.log("进入分类==",this.data.item);
                //添加标题
                this.addTitle();
                this.addItme();
                //组A
                this.addGroupA();
                //组B
                this.addGroupB();
                game.my.render_star_image();

            }


        });
    }
})(game);