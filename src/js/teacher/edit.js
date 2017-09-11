require('../common/header.js');
require('../common/aside.js');

var util = require('../common/util.js');


var tc_id = util.getSearch('tc_id');
$.get('/v6/teacher/edit', { tc_id: tc_id }, function(data) {
    $('.teacher-edit').html(template('teacher-edit-tpl', data.result));

})

$('#teacher-edit-form').ajaxForm({
    delegation: true,
    success: function(data) {
        if (data.code == 200) {
            alert("讲师信息修改成功了！");
        }
    }
})