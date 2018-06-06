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
    json_data = {"page_size":{"w":1280,"h":720},"lesson_title":"","lesson_points":"","courseware":[{"type":"display","id":1,"data":{"title":[{"image":"./image/courseimg/13/13-2.png","pos":{"x":232,"y":79},"size":{"w":260,"h":224}}],"other_images":[],"body":[],"timeout":9}}]};
} else {
    json_data = what;
};
