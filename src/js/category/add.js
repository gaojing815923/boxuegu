require('../common/header.js');
require('../common/aside.js');

$.get('/v6/category/top', function(data) {
    if (data.code == 200) {
        $('#category-top').html(template('category-add-tpl', data.result));


    }
});

$('#category-add-form').ajaxForm(function(data) {
    if (data.code == 200) {
        alert("分类添加成功了！");

    }
})