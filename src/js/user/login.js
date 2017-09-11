var userinfo = JSON.parse(localStorage.getItem('userinfo')) || {};
var tc_avatar = userinfo.tc_avatar || '/public/uploads/monkey.png';
$('.avatar img').attr('src', tc_avatar);



$("#login-form").ajaxForm({
    success: function(data) {
        if (data.code == 200) {
            alert("登录成功");
            localStorage.setItem('userinfo', JSON.stringify(data.result));
            location.href = '/dist';
        } else {
            alert("登录失败");
        }
    },
    error: function() {
        alert("登录失败");
    }
});