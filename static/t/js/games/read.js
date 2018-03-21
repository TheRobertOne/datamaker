/**
 * Created by klaus on 16/8/22.
 * 新增跟读题
 */
(function(game){
   game.callbackerAddRead = function (data,index) {
       console.log("调到这里",data.type+index)
       game.state.add(data.type+index,function(){
           this.data = data.data
           this.init = function(){
                console.log("readinit")
           };
           this.preload = function(){

           };
           this.create = function(){

               var qtype = data.type;
               console.log("create=======",data)
               if (this.data.text_Image){
                    game.add.image(this.data.text_pos.x,this.data.text_pos.y,qtype+"_text_Image_"+index);
               }
               if (this.data.image){
                    game.add.image(this.data.pos.x,this.data.pos.y,qtype+"_image_"+index);
               }
               if(this.data.overviewImage){
                    game.add.image(this.data.overviewImage_pos.x,this.data.overviewImage_pos.y,qtype+"_overviewImage_"+index);
               }


               game.my.render_star_image()
           };

       });
   }
})(game);