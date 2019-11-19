$("#login").click(function () {
    var text = $('[type=text]').val();
    var password = $('[type=password]').val();
    if (text == '' || password == '') {
        $('#msgInfo').text('账号或密码不能为空')
        $('#myModal').modal('show')
        return;
    }
    // 用户登录功能
    user.login( text,password);
});