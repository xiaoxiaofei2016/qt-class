const https = require('https');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
//GET POST
//http.createServer(())
https.get('https://www.smzdm.com/youhui/',function(res) {
    res.setEncoding('utf-8');
    let html = '';
    res.on('data',function(chunk) {
        html += chunk;
    })
    res.on('end',function(chunk) {
        const $ = cheerio.load(html, {
            decodeEntities:false
        })
        //只有一个参数 整个document
        let lists = [];
        $('.list.list_preferential').each(
            function() {
                const _this = this//循环的每一项
               
                //document.queryselector('.itemName a');
                //$('.list').queryselector('.itemName a');
                let title = $('.itemName a', _this).text();
                const price = $('.red', _this).text();
                const img = $('.picLeft img', _this).attr('src');
                lists.push({
                    title:title,
                    price,
                    img
                })
                saveImage('./img/',img);
            })
        saveList('./data/lists.json',lists)
    })
})

function saveImage(ImgDir,imgUrl) {
    https.get(imgUrl,(res) => {
        res.setEncoding('binary');
        var data = '';
        const imgName = path.basename(imgUrl);
        res.pipe(
        res.createWriteStream(imgDir + imgName)
        )
        // res.on('data',(chunk) => {
        //     data += chunk;
        // })
        // res.on('end',function() {
        //     const imgName = path.basename(imgUrl);
        //     fs.writeFile(ImgDir + imgName,data, 'binary',(err) => {
        //         if(!err) {
        //             console.log('img saved');
        //         }
        //     })
        // })
    })
}
function saveList(path,list) {
    fs.writeFile(path,JSON.stringify(list),
        (err) => {
            if(!err) {
                console.log('lists saved')
            }
        }
    )
}