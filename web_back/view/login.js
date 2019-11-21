$("#login").click(function () {
    var text = $('[type=text]').val();
    var password = $('[type=password]').val();
    if (text == '' || password == '') {
        $('#msgInfo').text('账号或密码不能为空')
        $('#myModal').modal('show')
        return;
    }
    // 用户登录功能
    login.login(text, password, function (res) {
        if (res.code === 200) {
            location.href = './index.html';
        } else {
            $('#msgInfo').text(res.msg)
            $('#myModal').modal('show')
        }
    });
});