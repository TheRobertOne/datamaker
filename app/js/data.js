/**
 * Created by klaus on 16/10/13.
 * 获取 IBL 直播课 预览数据
 */

var json_data;
var what = null;

function get_value() {
    var pare = window.opener;

    if (pare != null) {
        what = pare.temp_data;

        return what;
    }
    return null;
};
if (what == null) {
    json_data = {"lesson_title":"","lesson_points":"","courseware":[{"type":"multiselect","page":0,"content_type":"","content":"","id":1,"state":"05","data":{"title":"","text":"","image":"","fontSize":48,"fillColor":"#000000","text_pos":{"x":0,"y":79},"background":"","q_image":"","pos":{"x":0,"y":0},"ok_btnPos":{"x":450,"y":675},"answer":[],"body":[{"text":"","voice":"","allow":true,"image":"","pos":{"x":0,"y":0},"size":{"w":0,"h":0}}],"other_images":[{"image":"./image/courseimg/16/16_2.png","pos":{"x":0,"y":0}},{"image":"./image/courseimg/16/16_3.png","pos":{"x":300,"y":0}}]}}]};
} else {
    json_data = what;
};
