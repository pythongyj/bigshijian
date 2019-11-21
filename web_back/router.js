var baseURL = "http://localhost:8000/";

// 统一设置路由
var APIURLS = {
    // index.js
    // 获取用户信息
    getuser: `${baseURL}admin/getuser`,
    // 退出登录
    logout: `${baseURL}admin/logout`,


    // login.js
    // 登录
    login: `${baseURL}admin/login`,


    // article_list.js
    // 文章操作
    // 文章搜索
    search: `${baseURL}admin/search`,
    // 发布文章
    article_publish: `${baseURL}admin/article_publish`,
    // 编辑文章
    article_edit: `${baseURL}admin/article_edit`,
    // 删除文章
    article_delete: `${baseURL}admin/article_delete`,

    // 文章统计
    // 文章数量统计
    article_count: `${baseURL}admin/article_count`,
    // 月曾文章数量
    month_article_count: `${baseURL}admin/month_article_count`,
    // 类型文章统计
    article_category_count: `${baseURL}admin/article_category_count`,
    // 月文章访问量
    article_category_visit: `${baseURL}admin/article_category_visit`,

    // 文章类别
    // 新增文章类别
    category_add: `${baseURL}admin/category_add`,
    // 修改文章类别
    category_edit: `${baseURL}admin/category_edit`,
    // 搜索文章类别
    category_search: `${baseURL}admin/category_search`,
    // 删除文章类别
    category_delete: `${baseURL}admin/category_delete`,

    // 文章评论
    // 文章评论搜做
    comment_search: `${baseURL}admin/comment_search`,
    // 评论审核通过
    comment_pass: `${baseURL}admin/comment_pass`,
    // 评论审核失败
    comment_reject: `${baseURL}admin/comment_reject`,
    // 删除评论
    comment_delete: `${baseURL}admin/comment_delete`,
    // 评论数量统计
    comment_count: `${baseURL}admin/comment_count`,

    // 用户信息
    // 获取用户信息
    userinfo_get: `${baseURL}admin/userinfo_get`,
    // 编辑用户信息
    userinfo_edit: `${baseURL}admin/userinfo_edit`,
}