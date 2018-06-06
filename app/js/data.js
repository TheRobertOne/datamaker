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
    json_data = {"page_size":{"w":1280,"h":720},"lesson_title":"","lesson_points":"","courseware":[{"type":"display","id":1,"data":{"title":[],"other_images":[],"body":[],"timeout":9}},{"type":"jigsaw","id":2,"data":{"title":[],"other_images":[],"body":[],"timeout":9,"groupA":[],"groupB":[]}}]};
} else {
    json_data = what;
};
