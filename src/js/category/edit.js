require('../common/header.js');
require('../common/aside.js');


$.ajax({
    url: '/v6/category/modify',
    type: 'post',
    success: function(data) {
        if (data.code == 200) {
            $('#category-edit').html(template('category-edit-tpl', data.result));
        }
    }
})

$('#category-edit-form').ajaxForm({
    delegation: true,
    function(data) {
        if (data.code == 200) {
            alert("分类修改成功了！");

        }
    }
})