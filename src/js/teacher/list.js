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

//注销和启用

// $(document).on('click', '#teacher-status', function() {
//     //获取当前记录的id号
//     var tc_id = $(this).attr('data-tc-id');
//     var tc_status = $(this).attr('data-tc-status');
//     var $this = $(this);
//     $.post('/v6/teacher/handle', { tc_id: tc_id, tc_status: tc_status }, function(data) {
//         $this.attr('data-tc-status', data.result.tc_status).text(data.result.tc_status == 0 ? '注销' : '启用');
//     });
// });

$(document).on('click', '#teacher-status', function() {
    //获取当前记录的id号，和tc_status状态码
    var data = {
        tc_id: $(this).attr('data-tc-id'),
        tc_status: $(this).attr('data-tc-status')
    };
    var $this = $(this);
    $.post('/v6/teacher/handle', data, function(data) {
        var newStatus = data.result.tc_status;

        $this.text(newStatus == 0 ? '注销' : '启用');
        $this.attr('data-tc-status', newStatus);
    });
});