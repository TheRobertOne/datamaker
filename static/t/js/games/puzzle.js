/**
 * Created by klaus on 16/8/22.
 * 新增跟读题
 */
(function(game){
    game.callbackerAddPuzzle = function (data,index) {
        game.state.add(data.type+index,function(){
            this.data = data.data
            this.init = function(){
                console.log("puzzle init")
            };
            this.preload = function(){

            };
            this.create = function(){
                var qtype = data.type;
                if (this.data.title_img){
                    game.add.image(this.data.text_pos.x,this.data.text_pos.y,qtype+'_title_img_'+index);
                }

                if (this.data.item){
                    for(var i = 0 ; i < this.data.item.length;i++){
                        if(this.data.item[i].image){
                            game.add.image(this.data.item[i].pos.x,this.data.item[i].pos.y,qtype+'_item_image'+i+"_"+index);
                        }
                    }
                }

                var groupA = game.add.group();
                    groupA.enableBody = true;
                    groupA.physicsBodyType = Phaser.Physics.ARCADE;
                    for(var i=0;i < this.data.groupA.length;i++){
                        var currenta = this.data.groupA[i];
                        if(currenta.pos){
                            groupA.create(currenta.pos.x,currenta.pos.y,qtype+'_groupA_image'+i+'_'+index);
                        }
                    }


                var groupB = game.add.group();
                    groupB.enableBody = true;
                    groupB.physicsBodyType = Phaser.Physics.ARCADE;
                for(var i=0;i<this.data.groupB.length;i++){
                    var currenta = this.data.groupB[i];
                    if(currenta.pos){
                        groupB.create(currenta.pos.x,currenta.pos.y,qtype+'_groupB_image'+i+'_'+index);
                    }
                }



                for (var i=0;i<groupB.children.length;i++){
                    var item = groupB.children[i];
                    console.log("groupB",item)
                    item.inputEnabled = true;
                    item.input.enableDrag();
                    item.events.onDragStop.add(function (x) {
                        for (var a=0;a<groupA.children.length;a++){
                            var m = game.physics.arcade.intersects(x,groupA.children[a]); //碰撞检测
                            console.log(m,x.key)
                        }

                    });
                }

                // for(var n in this.groupB.children){
                //     this.groupB.children[n].id = n; //
                //     this.groupB.children[n].answer = false; //
                //     for (var a = 0; a<this.groupA.children.length; a++){
                //         if(this.groupA.children[a].answer==n){
                //             this.groupB.children[n].x = this.groupA.children[a].x;
                //             this.groupB.children[n].y = this.groupA.children[a].y;
                //             this.groupB.children[n].width = this.groupA.children[a].width;
                //             this.groupB.children[n].height = this.groupA.children[a].height;
                //         }
                //     }
                // }

                // for(var n in this.groupA.children){
                //     this.groupA.children[n].id = n; //
                //     this.groupA.children[n].answer = this.data.groupA[n].answer;
                // }


                game.my.render_star_image()
            };

        });
    }
})(game);