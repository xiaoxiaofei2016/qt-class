'use strict';

import util from '../../utils/index'
import config from '../../utils/config'

let app = getApp()
let isDEV = config.isDev

let handler = {
  data: {
    page: 1, //当前页数
    pageSize: 4,
    days: 3,
    totalSize: 0,
    hasMore: true, // 用来判断下拉加载更多内容操作
    articleList: [], //用来存放文章列表数据
    defaultImg: config.defaultImg
  },
  onLoad() {
    this.requestAticle()
    this.setData({
      hiddenLoading: false
    })
  },
  requestAticle() {
    util.request({
        url: 'list',
        mock: true,
        data: {
          tag: '微信热门',
          start: this.data.page || 1,
          days: this.data.days || 3,
          pageSize: this.data.pageSize,
          langs: config.appLang || 'en'
        }
      })
      .then(res => {
        if (res && res.status === 0 && res.data && res.data.length) {
          let articleData = res.data
          //格式化原始数据
          let formatData = this.formatArticleData(articleData)
          this.renderArticle(formatData)
          util.log(articleData)
        } else if (this.data.page === 1 && res.data && res.data.length === 0) {
          util.alert()
          this.setData({
            hasMore: false
          })
          //-------------     
        } else if (this.data.page !== 1 && res.data && res.data.length === 0) {
          this.setData({
            hasMore: false
          })
        } else {
          util.alert('提示', res)
          this.setData({
            hasMore: false
          })
          return null
        }
      })
  },
  //日期'2019-08-16 12:21:14' =>今日
  //'2019-08-15 12:21:14' =>2019-08-15
  dateConvert(dateStr) {
    if (!dateStr) {
      return ''
    }
    let today = new Date(),
      todayYear = today.getFullYear(),
      todayMonth = ('0' + (today.getMonth() + 1)).slice(-2),
      todayDay = ('0' + today.getDate()).slice(-2)

    let convertStr = ''
    let originYear = +dateStr.slice(0, 4)
    let todayFormat = `${todayYear}-${todayMonth}-${todayDay}`
    if (dateStr === todayFormat) {

      convertStr = '今日'
    } else if (originYear < todayYear) {
      console.log(111)
      let splitStr = dateStr.split('-')
      convertStr = `${splitStr[0]}年${splitStr[1]}月${splitStr[2]}日}`
    } else {
      convertStr = dateStr.slice(5).replace('-', '月') + '日'
    }
    return convertStr
  },
  formatArticleData(data) {
    let formatData = undefined
    console.log(123)
    if (data && data.length) {
      console.log(1234)
      formatData = data.map((group) => {
        console.log(group)
        group.formateData = this.dateConvert(group.date)
        if (group && group.articles) {
          let formatArticleItems = group.articles.map((item) => {
            // 判断是否已经访问过
            item.hasVisited = this.isVisited(item.contentId);
            return item;
          }) || [];
          group.articles = formatArticleItems;
        }
        return group
      })
    }
    console.log(formatData)
    return formatData
  },
  isVisited(contentId) { //判断文章是否访问过
    let visitedArticles = app.globalData && app.globalData.visitedArticles || ''
    return visitedArticles.indexOf(`${contentId}`) > -1
  },
  renderArticle(data) { //请求回来的新数据 和以前的数据连起来
    if (data && data.length) {
      let newList = this.data.articleList.concat(data) //concat 拼接数组
      this.setData({
        articleList: newList,
        hiddenLoading: true
      })
    }
  },
  onReachBottom() {
    if (this.data.hasMore) {
      let nextPage = this.data.page + 1
      this.setData({
        page: nextPage
      })
      this.requestAticle()
    }
  },
  onShareAppMessage() {
    let title = config.defaultShareText || ''
    return {
      title: title,
      path: `/pages/index/index`,
      success: function(res) {
        util.alert('转发成功', res)
        //转发成功
      },
      fail: function(res) {
        util.alert('转发失败', res)
        // 转发失败
      }
    }
  },
  showDetail(e) {
    console.log(e)
    let dataset = e.currentTarget.dataset
    // console.log(dataset)
    let item = dataset && dataset.item
    let contentId = item.contentId || 0
    wx.navigateTo({
      url: `../detail/detail?contentId=${contentId}`
    })
  },
  resetArticles() {
    let old = this.data.articleList;
    let newArticles = this.formatArticleData(old);
    this.setData({
      articleList: newArticles
    });
  },

  markRead(contentId) {
    //先从缓存中查找 visited 字段对应的所有文章 contentId 数据
    util.getStorageData('visited', (data) => {
      let newStorage = data;
      if (data) {
  //如果当前的文章 contentId 不存在，也就是还没有阅读，就把当前的文章 contentId 拼接进去
        if (data.indexOf(contentId) === -1) {
          newStorage = `${data},${contentId}`;
        }
      }
    // 如果还没有阅读 visited 的数据，那说明当前的文章是用户阅读的第一篇，直接赋值就行了 
      else {
        newStorage = `${contentId}`;
      }

    /*
      * 处理过后，如果 data(老数据) 与 newStorage(新数据) 不一样，说明阅读记录发生了变化
      * 不一样的话，我们就需要把新的记录重新存入缓存和 globalData 中 
      */
      if (data !== newStorage) {
        if (app.globalData) {
          app.globalData.visitedArticles = newStorage;
        }
        util.setStorageData('visited', newStorage, () => {
          this.resetArticles();
        });
      }
    });
  }
}

Page(handler)