// 用户信息模块
var User = {
    // 获取用户信息
    getUser: function (callback) {
        $.get(APIURLS.userinfo_get, function (res) {
            callback(res)
        })
    },
    // 修改用户信息
    editUser: function (fd, callback) {
        $.ajax({
            type: 'post',
            url: APIURLS.userinfo_edit,
            data: fd,
            // 如果传递是formData对象，则要补充如下两项设置：
            processData: false, // 不要让jquery自动去转换data
            contentType: false, // 不要自动给content-type设置值。因为formData传参会有自己的请求头 multipart/form-data
            success: function (res) {
                callback(res)
            }
        })
    }
}