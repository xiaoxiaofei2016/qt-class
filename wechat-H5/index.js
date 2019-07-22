var send=document.getElementById('send');
var parent=document.getElementById('content-items')
send.addEventListener('click',function(){
    //jq
     var html=$('<li class="content-item">'+
         '<div class="left-pic">'+
               '<img src="./images/images/user.jpg" alt="">'+
          '</div>'+
          '<div class="message">'+
               '<p class="name">鱼大妈</p>'+
                '<p class="detail">在吗？*（^。^）*</p>'+
           '</div>'+
           '<div class="time">'+
                '<span>下午 3:40</span>'+
           '</div>'+
      '</li>')
html.appendTo(parent);



//原生js
// var li=document.createElement('li')
// li.setAttribute('class','content-item')

// var divPic=document.createElement('div')
// divPic.setAttribute('class','left-pic')
// li.appendChild(divPic)//把divPic放进li里
// var img=document.createElement('img')
// img.setAttribute('src','./images/images/user.jpg')
// divPic.appendChild(img)

// var message=document.createElement('div')
// message.setAttribute('class','message')
// li.appendChild(message)
// var p1=document.createElement('p')
// p1.setAttribute('class','name')
// var p1Txt=document.createTextNode('鱼大妈')
// p1.appendChild(p1Txt)
// message.appendChild(p1)
// var p2=document.createElement('p')
// p2.setAttribute('class','name')
// var p2Txt=document.createTextNode('在吗？')
// p2.appendChild(p2Txt)
// message.appendChild(p2)

// var time=document.createElement('div')
// time.setAttribute('class','time')
// li.appendChild(time)
// var span=document.createElement('span')

// var spanTxt=document.createTextNode('3:40')

// time.appendChild(span)
// span.appendChild(spanTxt);
// parent.appendChild(li);
})