// 点击用户退出
$('#loginOut').click(function () {
    $.post(`${baseURL}admin/logout`, function (res) {
        location.href = './login.html'
    })
})