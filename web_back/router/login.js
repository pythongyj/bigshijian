var login = {
    login: function (text, password,callback) {
        $.post(`${baseURL}admin/login`, {
                user_name: text,
                password: password
            },
            function (res) {
                callback(res)
            }
        );
    }
}