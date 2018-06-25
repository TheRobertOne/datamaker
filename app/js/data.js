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
    json_data = {"lesson_title":"","lesson_points":"","courseware":[{"type":"display","id":1,"state":"01","page":0,"content_type":"","data":{"background_image":"","overviewImage":"","pos":{"x":0,"y":79},"title":"","text_pos":{"x":460,"y":30},"body":[{"image":"","pos":{"x":0,"y":79}}],"font_size":68,"fill_color":"#0a152a"}},{"type":"cation","id":2,"state":"10","page":1,"content_type":"","data":{"title_img":"","text_pos":{"x":0,"y":79},"item":[{"image":"","pos":{"x":0,"y":0}}],"groupA":[{"image":"","pos":{"x":0,"y":0},"answer":[]},{"image":"","pos":{"x":0,"y":0},"answer":[]}],"groupB":[{"image":"","pos":{"x":0,"y":0}}]}}]};
} else {
    json_data = what;
};
