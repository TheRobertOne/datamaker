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
    json_data = {"page_size":{"w":1280,"h":720},"lesson_title":"","lesson_points":"","courseware":[{"type":"read","id":1,"data":{"text":"","title":[],"other_images":[],"body":[],"timeout":9,"css_images":[]},"read_type":"sentence","read_content":"Hello"}]};
} else {
    json_data = what;
};
