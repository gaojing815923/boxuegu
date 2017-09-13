require('../common/header.js');
require('../common/aside.js');

$('#course-add-form').ajaxForm(function(data) {
    if (data.code == 200) {
        alert("课程添加成功了！");
        location.href = "/dist/html/course/edit1.html?cs_id=" + data.result.cs_id;
        console.log(location.href);
    }
});