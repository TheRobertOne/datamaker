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
            log("课件加载中。。。")
            game.my = {};  //全局对象，存放diy data
            game.my.sounds = {}
            game.my.total_star = 0; //总星星数、全局维护
            game.my.jigsawIsAnswerTrue = false;
            game.my.sounds.great_sound = game.add.audio('Sound_Great');
            game.my.sounds.star_collected = game.add.audio('startCollected');

            game.my.render_star_image = function () {
                var star_num_image =  game.add.image(846,21.5,'startNum');
                star_num_image.width = star_num_image.width*0.5;
                star_num_image.height = star_num_image.height*0.5;
                game.my.total_star_obj = game.add.text(925, 42,game.my.total_star, { fill: "#ffffff", fontSize: 20 });


                var gulp_btn = game.add.button(750, 30,'tv_btn_team',gulpView,this,1,0,1,0);
                    gulp_btn.width = 58;
                    gulp_btn.height = 58;
            }

            game.my.render_star_image();
            game.my.set_star = function (num,page) {  //全局更新星星数
                game.my.total_star += num;
                game.my.total_star_obj.setText(game.my.total_star);
                log("更新星星："+num+"个");
                if(page){
                    log("开始调用native [uploadScore]，参数："+JSON.stringify({"num":num,"page":page}));
                    dsBridge.call("echo.uploadScore",{"num":num,"page":page});
                    log("调用native [uploadScore] 完毕，参数："+JSON.stringify({"num":num,"page":page}));
                }
            }


            // setTimeout(function () { //测试
            //     game.my.set_star(1)
            // },3000)
        };
        this.preload = function(){
            //资源key、命名规则：类型_字段_索引
            for(var k=0;k<qdata.courseware.length;k++){
                var data_pre = qdata.courseware[k];
                switch (data_pre.type){
                    //对应数据源的索引加载资源
                    case "display":  //完成
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
                    case "read": //完成
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
                    case "choice":  //完成
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
                        game.callbackerAddRadio(data_pre,k);
                        break;
                    case "multiselect":  //完成
                        /*====多选选择题====*/

                        if(data_pre.data.background!=""){
                            game.load.image("multiselect_background_"+k,data_pre.data.background);
                        }
                        /*添加题支图片*/
                        for(var i=0;i<data_pre.data.body.length;i++){
                            game.load.image("multiselect_body_image"+i+"_"+k,data_pre.data.body[i].image);
                        }
                        /***题干图片**/
                        if(data_pre.data.q_image!=""&&data_pre.data.q_image!=undefined){
                            game.load.image("multiselect_questionImage_"+k,data_pre.data.q_image);
                        }

                        if (data_pre.data.image!=""&&data_pre.data.image!=undefined){
                            game.load.image('multiselect_titleImage_'+k,data_pre.data.image);
                        }
                        game.callbackerAddMultiselect(data_pre,k);
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
                    case "survey":  //完成
                        /*====互动题====*/
                        if (data_pre.data.overviewImage!=""){
                            game.load.image('survey_overviewImage_'+k,data_pre.data.overviewImage);
                        }
                        if (data_pre.data.titleImage!=""&&data_pre.data.titleImage!=undefined){

                            game.load.image('survey_titleImage_'+k,data_pre.data.titleImage);
                        }
                        for (var i=0;i<data_pre.data.body.length;i++){
                            game.load.image('survey_body_image'+i+'_'+k,data_pre.data.body[i].image);
                        }
                        if(data_pre.data.voice!= "" && data_pre.data.voice!= undefined){
                            game.load.audio('voice',data_pre.data.voice);
                        }
                        game.callbackerAddSurvey(data_pre,k);
                        break;
                    case "jigsaw" :   //完成
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
                        game.callbackerAddPuzzle(data_pre,k);
                        break;

                    case "cation": //完成

                        if (data_pre.data.title_img!=""&&data_pre.data.title_img!=undefined){
                            game.load.image('cation_title_img_'+k,data_pre.data.title_img);
                        }
                        //展示组
                        if(data_pre.data.item.length>0){

                            for(var i=0;i<data_pre.data.item.length;i++){
                                if(data_pre.data.item[i].image!=""){
                                    // console.log("加载拼图题资111111源数据",data_pre.data.item[i].image)
                                    game.load.image("cation_item_image"+i+"_"+k,data_pre.data.item[i].image);
                                }
                            }
                        }
                        //A组是所有选框
                        for(var i=0;i<data_pre.data.groupA.length;i++){
                            game.load.image("cation_groupA_image"+i+"_"+k,data_pre.data.groupA[i].image);
                        }
                        //B组是答案组
                        for(var n=0;n<data_pre.data.groupB.length;n++){
                            game.load.image("cation_groupB_image"+n+"_"+k,data_pre.data.groupB[n].image);
                        }
                        game.callbackerAddCation(data_pre,k);
                        break;
                    case "drow":
                        if (data_pre.data.title_img!=""&&data_pre.data.title_img!=undefined){
                            game.load.image('title_img',data_pre.data.title_img);
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
            log("传递课件数据："+JSON.stringify(qdata))
            setTimeout(function () {
                var ret = dsBridge.call("echo.courseLoaded",{"courseData":JSON.stringify(qdata)});  //课件加载完毕
                log("课件加载完毕，已回调native")
            },1000)
        }
    });
})(game);