require('../common/header.js');
require('../common/aside.js');

$.get('/v6/teacher', function(data) {
    $('#teacher-list-table').append(template('teacher-list-tpl', data.result));
});


// $('.modal-dialog').ajaxForm({
//     delegation: true,
//     success: function(data) {
//         if (data.code == 200) {
//             alert("查看讲师信息了！");
//         }
//     }
// })

//讲师的模态框渲染

$(document).on('click', '[ href="#teacherModal"]', function() {
    //获取当前记录的id号
    var tc_id = $(this).attr('data-tc-id');
    $.get('/v6/teacher/view', { tc_id: tc_id }, function(data) {
        $('#teacherModal').html(template('teacher-modal-tpl', data.result));

    })

})