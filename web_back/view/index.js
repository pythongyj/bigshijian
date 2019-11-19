// 点击用户退出
$('#loginOut').click(function () {
    $.post(`${baseURL}admin/logout`, function (res) {
        location.href = './login.html'
    })
})

// 用户登录时显示用户登录的状态  获取用户的信息
$.get(`${baseURL}admin/getuser`, function (res) {
    $('.userImg').prop('src', res.data.user_pic)
    $('.userName').css({'font-style':'normal'}).text(res.data.nickname)
})