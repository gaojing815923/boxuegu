/**
 * 左边的头像和登录的用户名的头像一致
 * */
var userinfoStr = localStorage.getItem('userinfo');
var userinfo = JSON.parse(userinfoStr);
$('.aside img').attr('src', userinfo.tc_avatar);
$('.aside h4').text(userinfo.tc_name);

/**
 * 鼠标点击那个列表，列表下面的子列表会显示和隐藏
 */

$('.navs a').on('click', function() {
    $(this).next('ul').slideToggle();
})


/**
 * 鼠标点击那个列表，列表后面的背景就变化，获取焦点
 * [href="' + path + '"]'
 */
var path = location.pathname;
$('.navs a').removeClass('active');
$('.navs a[href="' + path + '"]').addClass('active').parents('ul').show();