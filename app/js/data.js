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
    json_data = {"page_size":{"w":1024,"h":768},"lesson_title":"","lesson_points":"","courseware":[{"type":"display","id":1,"data":{"text":"","title":[{"image":"./image/courseimg/24/24-2.png","pos":{"x":33,"y":44},"size":{"w":195,"h":201}}],"other_images":[],"body":[],"timeout":9}},{"type":"read","id":2,"data":{"text":"","title":[{"image":"./image/courseimg/24/24-6.png","pos":{"x":33,"y":22},"size":{"w":81,"h":74}}],"other_images":[],"body":[],"timeout":9,"css_images":[]},"read_type":"sentence","read_content":"Hello"}]};
} else {
    json_data = what;
};
