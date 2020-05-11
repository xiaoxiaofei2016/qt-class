let ipUrl = 'http://127.0.0.1:7001/admin/'

let servicePath = {
  checkLogin: ipUrl + 'checkLogin',   //  检查用户名密码是否正确
  getTypeInfo: ipUrl + 'getTypeInfo',   //  获取文章类别信息
  updateArticle:ipUrl + 'updateArticle' ,  //  修改文章第api地址
  addArticle:ipUrl + 'addArticle' ,  //  添加文章
  getArticleList:ipUrl + 'getArticleList' ,  //  文章列表
}

export default servicePath

