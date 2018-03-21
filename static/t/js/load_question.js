/**
 * Created by libi on 16/8/10.
 * 根据json加载js文件
 */
(function(game){
    //按需加载各题的资源
    game.state.add('load_question_resource',function(){
        //console.log("进入预加载 并加载相应模块素材");
        var self = this;
        this.init = function(){
            game.my = {};  //全局对象，存放diy data
            game.my.sounds = {}
            game.my.total_star = 0; //总星星数、全局维护

            game.my.sounds.great_sound = game.add.audio('Sound_Great');
            game.my.sounds.star_collected = game.add.audio('startCollected');
            game.my.render_star_image = function () {
                var star_num_image =  game.add.image(846,21.5,'startNum');
                star_num_image.width = star_num_image.width*0.5;
                star_num_image.height = star_num_image.height*0.5;
                game.my.total_star_obj = game.add.text(925, 42,game.my.total_star, { fill: "#ffffff", fontSize: 20 });
            }

            game.my.set_star = function (num) {
                game.my.total_star += num;
                game.my.total_star_obj.setText(game.my.total_star);
            }

            setTimeout(function () { //测试
                game.my.set_star(1)
            },3000)
        };
        this.preload = function(){
            //资源key、命名规则：类型_字段_索引
            for(var k=0;k<qdata.courseware.length;k++){
                var data_pre = qdata.courseware[k];
                switch (data_pre.type){
                    //对应数据源的索引加载资源
                    case "display":
                        if(data_pre.data.overviewImage){
                            game.load.image('display_overviewImage_'+k,data_pre.data.overviewImage);
                        }
                        if(data_pre.data.body){
                            for (var i=0;i<data_pre.data.body.length;i++){
                                if (data_pre.data.body[i].image!=""&&data_pre.data.body[i].image!=undefined){
                                    game.load.image('display_displayImage'+i+"_"+k,data_pre.data.body[i].image);
                                }
                            }
                        }
                        game.callbackerAddDisplay(data_pre,k)
                        break;
                    case "read":
                        /*====跟读题====*/
                        if (data_pre.data.image){
                            game.load.image('read_image_'+k,data_pre.data.image);
                        }
                        if (data_pre.data.text_Image){
                            game.load.image('read_text_Image_'+k,data_pre.data.text_Image);
                        }
                        if(data_pre.data.overviewImage){
                            game.load.image('read_overviewImage_'+k,data_pre.data.overviewImage);
                        }
                        game.callbackerAddRead(data_pre,k)
                        //console.log('lujing',data_pre.data.image)
                        break;
                    case "choice":
                        /*====单选选择题====*/
                        if(data_pre.data.background){
                            game.load.image("choice_background_"+k,data_pre.data.background);
                        }
                        if (data_pre.data.titleImage){
                            game.load.image('choice_titleImage_'+k,data_pre.data.titleImage);
                        }
                        if (data_pre.data.q_image){
                            game.load.image("choice_q_image_"+k,data_pre.data.q_image);
                        }
                        /*添加题支图片*/
                        for(var i=0;i<data_pre.data.body.length;i++){
                            console.log("choice_body_image"+i+"_"+k,data_pre.data.body[i].image)
                            game.load.image("choice_body_image"+i+"_"+k,data_pre.data.body[i].image);
                        }
                        game.callbackerAddRadio(data_pre,k)
                        break;
                    case "multiselect":
                        /*====多选选择题====*/

                        if(data_pre.data.background!=""){
                            game.load.image(k+"background",data_pre.data.background);
                        }
                        /*添加题支图片*/
                        for(var i=0;i<data_pre.data.body.length;i++){
                            game.load.image(k+"body_image"+i,data_pre.data.body[i].image);
                        }
                        /***题干图片**/
                        if(data_pre.data.q_image!=""&&data_pre.data.q_image!=undefined){
                            game.load.image(k+"questionImage",data_pre.data.q_image);
                        }

                        if (data_pre.data.image!=""&&data_pre.data.image!=undefined){
                            game.load.image(k+'titleImage',data_pre.data.image);

                        }
                        break;
                    case 5:
                        /*====横版连线题====*/
                        for(var i=0;i<data_pre.data.groupA.length;i++){
                            game.load.image(k+"groupA_image"+i,data_pre.data.groupA[i].image);
                        }
                        for(var n=0;n<data_pre.data.groupB.length;n++){
                            game.load.image(k+"groupB_image"+n,data_pre.data.groupB[n].image);
                        }
                        break;
                    case "survey":
                        /*====互动题====*/
                        if (data_pre.data.overviewImage!=""){
                            game.load.image(k+'overviewImage',data_pre.data.overviewImage);
                        }
                        if (data_pre.data.titleImage!=""&&data_pre.data.titleImage!=undefined){

                            game.load.image(k+'titleImage',data_pre.data.titleImage);
                        }
                        for (var i=0;i<data_pre.data.body.length;i++){
                            game.load.image(k+'body_image'+i,data_pre.data.body[i].image);
                        }
                        if(data_pre.data.voice!= "" && data_pre.data.voice!= undefined){
                            game.load.audio('voice',data_pre.data.voice);
                        }
                        break;
                    case "jigsaw" :
                        console.log("加载拼图题资源数据",data_pre.data)
                        if (data_pre.data.title_img){
                            game.load.image('jigsaw_title_img_'+k,data_pre.data.title_img);
                        }
                        //展示组
                        if(data_pre.data.item.length > 0){
                            for(var i=0;i<data_pre.data.item.length;i++){
                                if(data_pre.data.item[i].image!=""){
                                    game.load.image("jigsaw_item_image"+i+"_"+k,data_pre.data.item[i].image);
                                }
                            }
                        }
                        //A组是所有选框
                        for(var i=0;i<data_pre.data.groupA.length;i++){
                            game.load.image("jigsaw_groupA_image"+i+"_"+k,data_pre.data.groupA[i].image);
                        }
                        //B组是答案组
                        for(var n=0;n<data_pre.data.groupB.length;n++){
                            game.load.image("jigsaw_groupB_image"+n+"_"+k,data_pre.data.groupB[n].image);
                        }
                        game.callbackerAddPuzzle(data_pre,k)
                        break;

                    case "cation":

                        if (data_pre.data.title_img!=""&&data_pre.data.title_img!=undefined){
                            game.load.image(k+'title_img',data_pre.data.title_img);
                        }
                        //展示组
                        if(data_pre.data.item.length>0){

                            for(var i=0;i<data_pre.data.item.length;i++){
                                if(data_pre.data.item[i].image!=""){
                                    // console.log("加载拼图题资111111源数据",data_pre.data.item[i].image)
                                    game.load.image(k+"item_image"+i,data_pre.data.item[i].image);
                                }
                            }
                        }
                        //A组是所有选框
                        for(var i=0;i<data_pre.data.groupA.length;i++){
                            game.load.image(k+"groupA_image"+i,data_pre.data.groupA[i].image);
                        }
                        //B组是答案组
                        for(var n=0;n<data_pre.data.groupB.length;n++){
                            game.load.image(k+"groupB_image"+n,data_pre.data.groupB[n].image);
                        }
                        break;
                    case "drow":
                        if (data_pre.data.title_img!=""&&data_pre.data.title_img!=undefined){
                            game.load.image(k+'title_img',data_pre.data.title_img);
                        }
                        //展示组
                        if(data_pre.data.item.length>0){

                            for(var i=0;i<data_pre.data.item.length;i++){
                                if(data_pre.data.item[i].image!=""){
                                    // console.log("加载拼图题资111111源数据",data_pre.data.item[i].image)
                                    game.load.image(k+"item_image"+i,data_pre.data.item[i].image);
                                }
                            }
                        }
                        //起点终点
                        game.load.image(k+"lin_start",data_pre.data.linIcon.start);
                        game.load.image(k+"lin_end",data_pre.data.linIcon.end);
                        break
                }

            }
        };
        this.create =function(){


        }
    });
})(game);