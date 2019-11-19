
$("#login").click(function () {
    var text = $('[type=text]').val();
    var password = $('[type=password]').val();
    console.log(text);

    if (text == '' || password == '') {
        $('#msgInfo').text('账号或密码不能为空')
        $('#myModal').modal('show')
        return;
    }
    $.post(`${baseURL}admin/login`, {
            user_name: text,
            password: password
        },
        function (res) {
            if (res.code === 200) {
                location.href = './index.html';
            } else {
                $('#msgInfo').text(res.msg)
                $('#myModal').modal('show')
            }

        }
    );
});