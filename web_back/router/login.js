var login = {
    // 用户登录
    login: function (text, password,callback) {
        $.post(APIURLS.login, {
                user_name: text,
                password: password
            },
            function (res) {
                callback(res)
            }
        );
    }
}