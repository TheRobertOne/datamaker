/**
 * Created by klaus on 16/8/22.
 * 新增跟读题
 */
(function(game){
    game.callbackerAddPuzzle = function (data,index) {
        game.state.add(data.type+index,function(){
            var self=this;
            var bFlga = true;
            var temr = 10;
            var isAnswerTrue = false;
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
                    game.show_mengban();
                    //添加 倒计时进度 条
                    game.progressBar = this.add_progress_bar(0, 0, 758);
                    game.progressBar.alpha = 0;
            };
            //添加选项框
            this.addGroupA = function(){
                this.groupA=game.add.group();
                this.groupA.enableBody = true;
                this.groupA.physicsBodyType = Phaser.Physics.ARCADE;
                for(var i=0;i<this.data.groupA.length;i++){
                    var currenta = this.data.groupA[i];
                    if(currenta.pos != undefined || currenta.pos !=""){
                        this.groupA.create(currenta.pos.x,currenta.pos.y,data.type +'_groupA_image'+i+'_'+index);
                    }
                }
                for(var n in this.groupA.children){
                    this.groupA.children[n].id = n; //
                    this.groupA.children[n].answer = this.data.groupA[n].answer;

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
                    this.groupB.children[n].answer = false; //
                    for (var a = 0; a<this.groupA.children.length; a++){
                        if(this.groupA.children[a].answer==n){
                            this.groupB.children[n].x = this.groupA.children[a].x;
                            this.groupB.children[n].y = this.groupA.children[a].y;
                            this.groupB.children[n].width = this.groupA.children[a].width;
                            this.groupB.children[n].height = this.groupA.children[a].height;
                        }
                    }
                }
                //模拟测试开始答题
                setTimeout(function(){
                    self.startAnswer();
                },1000)
            }
            //开始答题
            this.startAnswer = function(){
                // console.log("开始答题并拖拽");
                var randlist = random( this.data.groupB.length ); //开启随机"
                for(var n in this.groupB.children){
                    this.groupB.children[n].id = n; //
                    var item =  this.groupB.children[n];
                    // console.log("开启随机",randlist[n]); //保证不是每次打开都是一样的
                    var x =  this.data.groupB[randlist[n]-1].pos.x;
                    var y =  this.data.groupB[randlist[n]-1].pos.y;
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
                console.log("拖拽结束===",image.answer)

                var ls =   game.physics.arcade.overlap(image,this.groupA, this.check_over, null, this);
                if(!ls) {
                    console.log("没发生碰撞的",ls)
                    var x = image.old.x;
                    var y = image.old.y;
                    // e1.answer = false;
                    game.add.tween(image).to({x: x, y: y}, 300, null, true, 0, 0).onComplete.add(function () {
                        image.inputEnabled = true;
                        self.TwisRunning = false;
                    });
                }
            };
            //检测碰撞
            this.check_over = function (e1,e2){
                // console.log("发生碰撞",e1.answer,e2.id);
                if(e1.answer){
                    console.log("已经碰撞",e1.answer);
                    return;
                }

                console.log("self.tw[1].isRunning",self.TwisRunning)
                if(e1.id == this.data.groupA[e2.id].answer){
                    if(self.TwisRunning){
                        // console.log("动画还在执行中0，取消点击事件",self.tw);
                        return;
                    }
                    self.TwisRunning = true;
                    game.add.tween(e1).to({x:this.data.groupA[e2.id].pos.x,y:this.data.groupA[e2.id].pos.y}, 300, null, true, 0, 0).onComplete.add(function(){
                        e1.answer = true;
                        e1.inputEnabled = false;
                        self.TwisRunning = false
                        var judge = self.judgeAnswer();
                        if(judge){
                            //答题完成
                            self.submitScore(100,3) //全部答对
                        }

                    });
                }else{
                    // console.log("动画还在执行中11111，取消点击事件",e1.answer, self.tw[0]);

                    if(self.TwisRunning){
                        // console.log("动画还在执行中1，取消点击事件");
                        return;
                    }
                    self.TwisRunning = true;
                    var x = e1.old.x;
                    var y = e1.old.y;
                    // e1.answer = false;
                    game.add.tween(e1).to({x:x,y:y}, 300, null, true, 0, 0).onComplete.add(function(){
                        e1.inputEnabled = true;
                        self.TwisRunning = false;
                    });;;
                }

            };
            //判卷
            this.judgeAnswer = function (){
                for(var n in this.groupB.children){
                    var item =  this.groupB.children[n];
                    if(!item.answer){
                        return false;
                    }
                }
                return true;
            }

            this.addItme = function (){
                if (this.data.item!=""&&this.data.item!=undefined){

                    for(var i =0 ; i<this.data.item.length;i++){

                        if(this.data.item[i].image !=""){
                            // console.log("22222",this.data.item[i].image)
                            game.add.image(this.data.item[i].pos.x,this.data.item[i].pos.y,data.type +'_item_image'+i+'_'+index);
                        }
                    }

                }
            }
            this.create = function(){
                game.my.render_star_image();
                var self = this;
                console.log("进入拼图==",this.data.item);
                //添加标题
                this.addTitle();
                this.addItme();
                //组A
                this.addGroupA();
                //组B
                this.addGroupB();
            }

            //提交分数
            this.submitScore = function(scores,animation){
                console.log(scores,animation);
                game.my.jigsawIsAnswerTrue = true;  //已经作答正确
                game.add.audio('Sound_Great').play();
                gameScoreAnimtions();
                setTimeout(function () {
                    game.add.audio('startCollected').play();
                    flyStar();
                    game.my.set_star(3,index);
                },1000)
            }

            /***这是运行游戏定时器的功能 游戏中的定时器 定义***/
            this.startgame = function(time_out){
                if(time_out == undefined){
                    time_out = 7;
                }
                game.progressBar.alpha =1;
                game.show_mengban(true);
                var timerStart = 8000; //timer start number  10秒
                game.add.tween(game.progressBar).to({width:0,alpha:0}, timerStart, Phaser.Easing.Linear.None, true).onComplete.add(function () {
                    //答题完成
                    self.submitScore(0,4) //时间到没打完就算错误
                });

            }
        });
    }
})(game);