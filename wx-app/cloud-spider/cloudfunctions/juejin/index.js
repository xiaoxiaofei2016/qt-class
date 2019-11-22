// 云函数入口文件
const cloud = require('wx-server-sdk')

const puppeteer = require('puppeteer');
const $ = require('cheerio');
const url = 'https://juejin.im/books';

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, {
    waitUntil: 'networkidle2' // 只有两个网络连接时触发
  });

  const html = await page.content();
  let res = [];
  const books = $('.info', html);
  books.each(function () {
    const price = $('.price-text', this).text();
    console.log(price);
    res.push(price)
  });

  return res;
}

