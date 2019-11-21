var idxInfo = {
    // 显示用户信息
    getInfo: function (callback) {
        $.get(APIURLS.getuser, function (res) {
            callback(res);
        })
    },
    // 退出登录
    loginOut: function (callback) {
        $.post(APIURLS.logout, function (res) {
            callback(res);
        })
    }
}