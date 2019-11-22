// 文章分类模块
var articleCategory = {
    // 获取文章分类列表
    show: function (callback) {
        $.get(APIURLS.category_search, function (res) {
            callback(res)
        })
    },
    // 添加文章分类列表
    add:function (name,slug,callback) {
        $.post(APIURLS.category_add,{name:name,slug:slug},function (res) {
            callback(res)
        })
    },
    // 修改  编辑文章分类列表
    edit:function (id,name,slug,callback) {
        $.post(APIURLS.category_edit,{id:id,name:name,slug:slug},function (res) {
            callback(res)
        })
    },
    delete:function (id,callback) {
        $.post(APIURLS.category_delete,{id:id},function (res) {
            callback(res)
        })
    }
}