var user = {
    login: function (text, password,callback) {
        $.post(`${baseURL}admin/login`, {
                user_name: text,
                password: password
            },
            function (res) {
                callback(res)
            }
        );
    },
    loginOut: function (callback) {
        $.post(`${baseURL}admin/logout`, function (res) {
           callback(res);
        })
    },
    getInfo: function (callback) {
        $.get(`${baseURL}admin/getuser`, function (res) {
           callback(res);
        })
    }
}