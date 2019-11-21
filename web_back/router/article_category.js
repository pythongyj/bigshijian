// 文章分类模块
var articleCategory = {
    // 获取文章分类列表
    show: function (callback) {
        $.get(APIURLS.category_search, function (res) {
            callback(res)
        })
    },
    add:function (name,slug,callback) {
        $.post(APIURLS.category_add,{name:name,slug:slug},function (res) {
            callback(res)
        })
    }
}