require('../common/header.js');
require('../common/aside.js');
var util = require('../common/util.js');

var cs_id = util.getSearch('cs_id');
$.get('/v6/course/basic', { cs_id: cs_id }, function(data) {
    if (data.code == 200) {
        $('#course-edit1').append(template('course-edit1-tpl', data.result));
    }
});



$(document).on('change', '#category-top-select', function() {
    var topCgid = $(this).val();
    console.log(topCgid)
    $.get('/v6/category/child', { cg_id: topCgid }, function(data) {
        var html = '';
        var childList = data.result;
        if (data.code == 200) {
            for (var i = 0; i < childList.length; i++) {
                html = '<option value="' + childList[i].cg_id + '">' + childList[i].cg_name + '</option>'
            }
        }
        $('#category-child-select').html(html);
    });
});
$('#course-edit1-form').ajaxForm({
    delegation: true,
    success: function(data) {
        if (data.code == 200) {
            alert('修改成功');
            location.href = '/dist/html/course/edit2.html?cs_id=' + cs_id;
        }
    }
});