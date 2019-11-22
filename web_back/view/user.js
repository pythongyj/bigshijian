// 获取用户信息  并显示
function getUserItem() {
    User.getUser(function (res) {
        console.log(res);
        $('.name').val(res.data.username);
        $('.nicheng').val(res.data.nickname);
        $('.email').val(res.data.email);
        $('.passwd').val(res.data.password);
        $('.user_pic').prop('src', res.data.user_pic)
    })
}
getUserItem()
// 选择文件   当选择完成后预览图片
$('#exampleInputFile').change(function () {
    var file = this.files[0];
    var url = URL.createObjectURL(file);
    // console.log(url);
    $('.user_pic').prop('src', url)
})

// 修改用户信息
$('.edit').click(function () {
    // 创建一个formdata
    var fd = new FormData(document.querySelector('.article_form'));
    User.editUser(fd, function (res) {
        console.log(res);
        if (res.code === 200) {
            this.parent.location.href = 'index.html'
        }
    })
})