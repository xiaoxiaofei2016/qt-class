// $('#nav-list-menu').on('mousemove',function(){
//     if($('#nav-list-menu').hasClass('up')) { 
//         $('.jiantou').removeClass('up')
//     }else{
//         $('.jiantou').addClass('up')
//     }
// })

// var test=document.getElementById('#nav-list-menu')
//     var isActive=false
//     test.addEventListener('mousemove',function(){
//         isActive=!isActive
//         if(isActive==true){
//             test.classList.add('up');

//         }
//         else{
//             test.classList.remove('up');
//         }

//     })




const as = document.querySelectorAll('.menu')  //获取下拉框ul标签 数组
const bs = document.querySelectorAll('.nav-list-menu') //获取 导航栏li标签  是一个数组
const cs = document.querySelectorAll('.jiantou')//获取箭头标签
for (let i = 0; i < bs.length; i++) {
  bs[i].addEventListener('mouseover', () => {
    //鼠标经过事件
    // as[i].classList.add('down');//添加down类名，实现鼠标经过，下拉框出现的效果
    as[i].style.opacity = '1'
    cs[i].classList.add('up')//添加up类名，实现鼠标经过，箭头向下翻转
    bs[i].classList.add('nav-list-menu-jiantou')//添加nav-list-menu-jiantou，导航栏边框阴影出现
    // bs[i].style.display = 'block' 此方法有问题，没有解决
  })
  //触发鼠标离开事件
  bs[i].addEventListener('mouseout', () => {

    // as[i].classList.remove('down')
    as[i].style.opacity = '0'
    cs[i].classList.remove('up')
    bs[i].classList.remove('nav-list-menu-jiantou')
    //    bs[i].style.display = 'none'  此方法有问题，没有解决
  })
}



//用数组循环来把触发了导航栏下拉框li标签，把下标传给li标签下span数组
// for(let j = 0;j <= lineList.length;j++ ){
// lineList[j].addEventListener('mouseover',() =>{       
//     spanLine[j].classList.add('spanline')  
// })
// lineList[j].addEventListener('mouseout',() =>{   
//     spanLine[j].classList.remove('spanline')
// })
// }




const winHeight = $(window).height(), // 浏览器可视的高度
  clsarr = []; //所有需要操作的元素
var tp = $(document).scrollTop() || 0;//滚轮下滑的大小


[].forEach.call($('.item'), item => {
  pusharr(clsarr, $(item).find('.p'))
  pusharr(clsarr, $(item).find('.bat'))
  pusharr(clsarr, $(item).find('.bgp'))

  function pusharr(arr1, arr2) {
    if (arr2.length <= 1) {
      arr1.push($(arr2[0]))
    } else {
      [].forEach.call(arr2, item => {
        arr1.push($(item))
      })
    }
  }
})

hid();

render(tp, winHeight);

$(document).scroll(() => {
  tp = $(document).scrollTop()
  render(tp, winHeight)
});



function hid() {
  clsarr.forEach(item => {
    item.addClass('hid')
  })
}

function render(tp, wh) {
  clsarr.forEach(ele => {
    if (ele.hasClass('bgp')) {
      if (ele.hasClass('logo')) {
        if (isrender(tp, wh, ele.offset().top, ele.height())) {
          ele.addClass('show')
        }
      } else {
        if (isbgprender(tp, wh, ele.offset().top, ele.height())) {
          ele.addClass('show')
        }
      }
    } else {
      if (isrender(tp, wh, ele.offset().top, ele.height())) {
        ele.addClass('anm')
      }
    }
  })
}

function md(num) {
  return Math.round(num)
}


function isrender(tp, wh, ot, oh) {
  if (((md(tp) + md(wh) - 20) > (md(ot) + md(oh))) && ((md(ot) + md(oh)) > md(tp))) {
    return true
  }
  return false
}

function isbgprender(tp, wh, ot, oh) {
  if (((md(tp) + md(wh)) > md(ot)) && (md(ot) + md(oh) > (md(tp)))) {
    return true
  }
  return false
}
