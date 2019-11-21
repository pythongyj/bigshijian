// 点击用户退出
$('#loginOut').click(function () {
    idxInfo.loginOut(function (res) {
        if (res.code === 200) {
            location.href = './login.html'
        }
    })
})

// 用户登录时显示用户登录的状态  获取用户的信息
idxInfo.getInfo(function (res) {
    $('.userImg').prop('src', res.data.user_pic)
    $('.userName').css({
        'font-style': 'normal'
    }).text(res.data.nickname)
});

