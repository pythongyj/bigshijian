// 获取文章分类列表数据
function getShow() {
    articleCategory.show(function (res) {
        console.log(res);
        if (res.code === 200) {
            var htmlTemp = template('template', res);
            $('#showList').html(htmlTemp);
        }
    })
}
// 展示数据
getShow()

// 点击添加 文章分类列表种类
$('#model_add').click(function () {
    var name = $('.addName').val();
    var slug = $('.addSlug').val();
    articleCategory.add(name, slug, function (res) {
        if (res.code === 200) {
            alert(res.msg)
            $("#addModal").modal("hide");
        } else {
            alert(res.msg)
        }
    })
})
//  点击取消  取消弹出框
$('#model_shutoff').click(function () {
    $("#addModal").modal("hide");
})