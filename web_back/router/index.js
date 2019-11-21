var idxInfo = {
    getInfo: function (callback) {
        $.get(`${baseURL}admin/getuser`, function (res) {
           callback(res);
        })
    },
    loginOut: function (callback) {
        $.post(`${baseURL}admin/logout`, function (res) {
           callback(res);
        })
    }
}