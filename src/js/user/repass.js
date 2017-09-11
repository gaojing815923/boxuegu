require('../common/header.js');
require('../common/aside.js');

console.log($('#input-pass').val());
$('#repass-form').on('submit', function() {
    if ($('#input-pass').val() != $('#input-pass-repeat').val()) {
        alert('两次密码输入不一样！');
        return false;
    }

    $('#repass-form').ajaxSubmit({
        success: function(data) {
            console.log(data)
            location.href = '/dist/html/user/login.html';
        }
    });
    return false;
});