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
    json_data = {"page_size":{"w":1280,"h":720},"lesson_title":"day14","lesson_points":"I Can Touch","courseware":[{"type":"display","id":1,"data":{"title":[],"other_images":[],"body":[],"timeout":7,"text":""}},{"type":"display","id":2,"data":{"title":[],"other_images":[],"body":[],"timeout":7,"text":""}},{"type":"display","id":3,"data":{"title":[],"other_images":[],"body":[],"timeout":7,"text":""}},{"type":"read","id":4,"data":{"title":[],"other_images":[],"body":[],"timeout":7,"css_images":[],"text":"head"},"read_type":"word","read_content":"head"},{"type":"display","id":5,"data":{"title":[],"other_images":[],"body":[],"timeout":7,"text":""}},{"type":"display","id":6,"data":{"title":[],"other_images":[],"body":[],"timeout":7,"text":""}},{"type":"read","id":7,"data":{"title":[],"other_images":[],"body":[],"timeout":7,"css_images":[],"text":"mouth"},"read_type":"word","read_content":"mouth"},{"type":"display","id":8,"data":{"title":[],"other_images":[],"body":[],"timeout":7,"text":""}},{"type":"display","id":9,"data":{"title":[],"other_images":[],"body":[],"timeout":7,"text":""}},{"type":"read","id":10,"data":{"title":[],"other_images":[],"body":[],"timeout":7,"css_images":[],"text":"chin"},"read_type":"word","read_content":"chin"},{"type":"display","id":11,"data":{"title":[],"other_images":[],"body":[],"timeout":7,"text":""}},{"type":"display","id":12,"data":{"title":[],"other_images":[],"body":[],"timeout":7,"text":""}},{"type":"read","id":13,"data":{"title":[],"other_images":[],"body":[],"timeout":7,"css_images":[],"text":"tummy"},"read_type":"word","read_content":"tummy"},{"type":"display","id":14,"data":{"title":[],"other_images":[],"body":[],"timeout":7,"text":""}},{"type":"display","id":15,"data":{"title":[],"other_images":[],"body":[],"timeout":7,"text":""}},{"type":"read","id":16,"data":{"title":[],"other_images":[],"body":[],"timeout":7,"css_images":[],"text":"shoulders"},"read_type":"word","read_content":"shoulders"},{"type":"display","id":17,"data":{"title":[],"other_images":[],"body":[],"timeout":7,"text":""}},{"type":"display","id":18,"data":{"title":[],"other_images":[],"body":[],"timeout":7,"text":""}},{"type":"read","id":19,"data":{"title":[],"other_images":[],"body":[],"timeout":7,"css_images":[],"text":"knees"},"read_type":"word","read_content":"knees"},{"type":"display","id":20,"data":{"title":[],"other_images":[],"body":[],"timeout":7,"text":""}},{"type":"display","id":21,"data":{"title":[],"other_images":[],"body":[],"timeout":7,"text":""}},{"type":"read","id":22,"data":{"title":[],"other_images":[],"body":[],"timeout":7,"css_images":[],"text":"toes"},"read_type":"word","read_content":"toes"},{"type":"display","id":23,"data":{"title":[],"other_images":[],"body":[],"timeout":7,"text":""}},{"type":"display","id":24,"data":{"title":[],"other_images":[],"body":[],"timeout":7,"text":""}},{"type":"display","id":25,"data":{"title":[],"other_images":[],"body":[],"timeout":7,"text":""}}]};
} else {
    json_data = what;
};
