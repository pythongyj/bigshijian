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
            getShow()
        } else {
            alert(res.msg)
        }
    })
})
//  点击取消  取消弹出框
$('#model_shutoff').click(function () {
    $("#addModal").modal("hide");
})

//点击编辑按钮  进行编辑
$('#showList').on('click', '.edit', function () {
    var id = $(this).attr('data-id').trim()
    var name = $(this).attr('data-name').trim()
    var slug = $(this).attr('data-slug').trim()

    $('.editId').val(id)
    $('.editName').val(name)
    $('.editSlug').val(slug)
    $("#editModal").modal("show");
})

// 编辑   取消编辑
$('#model_shutoff_edit').click(function () {
    $("#editModal").modal("hide");
})

// 编辑   保存编辑内容
$('#model_edit').click(function () {
    var Pid = $('.editId').val().trim()
    var Pname = $('.editName').val().trim()
    var Pslug = $('.editSlug').val().trim()
    articleCategory.edit(Pid, Pname, Pslug, function (res) {
        if (res.code === 200) {
            alert('保存成功')
            $("#editModal").modal("hide");
        } else {
            alert(res.msg)
        }
    })
})


// 点击删除按钮   进行删除
$('#showList').on('click', '.delete', function () {
    if (confirm('你确定要删除？') === '') {
        // 取消删除
        return;
    }
    // 发起请求  删除文章分类中的单个分类内容
    articleCategory.delete($(this).attr('data-id'), function (res) {
        console.log(res);
        // 刷新页面
        getShow()
    })
})