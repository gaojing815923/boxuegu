require('../common/header.js');
require('../common/aside.js');


// $.get('/v6/category/top', function(data) {
//     if (data.code == 200) {
//         $('#teacher-add-form').append(template('category-add-tpl', data.result));


//     }
// });

$('#teacher-add-form').ajaxForm(function(data) {
    if (data.code == 200) {
        $('#teacher-add-form').append(data.result);
        alert("讲师添加成功了！");

    }
})