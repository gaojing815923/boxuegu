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