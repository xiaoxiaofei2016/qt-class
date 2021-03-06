const cheerio = require('cheerio');
const fs = require('fs'); // node.js自带的写模块，后面会用来将爬好的数据写到你的根文件夹中
const Nightmare = require('nightmare');
const nightmare = Nightmare({show: true});  // show:true  显示内置模拟浏览器
var newsList = [] // 用来存新闻数据

nightmare
.goto('https://www.mi.com/')
.wait(1000) // 6000 的意思是当模拟浏览器打开后会等待6秒再爬取页面数据，有这段时间就可以做你想要的动态加载操作
.evaluate(() => document.querySelector("div.header-nav-menu").innerHTML) // 这里一定要取到你想要爬取数据区域的容器的类名
.then(htmlStr => {
  console.log(htmlStr, '123455534443');
  
  navList = getnavList(htmlStr) // getnavList() 函数将执行对原始数据的选择和处理
  console.log(navList);
  
  navList = JSON.stringify(navList) // 将数据转化为字符串，以便进行fs写文件操作
  fs.writeFile("navList.json", navList, "utf-8", (error) => {
    //监听错误，如正常输出，则打印null
    if (error == null) {
      console.log("恭喜您，navList数据爬取成功!)");
    }
  })
})
.catch(error => {
  console.log(`数据抓取失败 - ${error}`);
})

let getnavList  = (res) => {
  if (res) {
    console.log(res, '----------');
    
    let $ = cheerio.load(res);
    $('ul.children-list li').each(function (index, item) {
      // let a = item.find('a')

      $('a', this).each(function(index, item) {
        let navList = {
          img: $(this).children().children().attr('src'),
          text: $(this).children('.title').text(),
          price: $(this).children('.price').text()
        }
        newsList.push(navList)
      })
    })
    return newsList
  } else {
    console.log('无数据传入!')
    return
  }
}
