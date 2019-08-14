//一个字符
// let phoneReg = /^1[3-9][0-9]{9}$/ //^以什么开头  $以什么结尾
// console.log(phoneReg.test("13888888888"))

let phoneReg = /(1[3-9][0-9])[0-9]{8}/  //加()分组
let str = "我的号码是13899992222,收下吧"
console.log(str.match(phoneReg)[0])//从文本找出号码
console.log(str.match(phoneReg)[1])//从文本找出号码前三位 得到手机号，判断服务商

// 2695647975@qq.com   邮箱服务商
let emailReg = /^[0-9a-zA-Z]+@[0-9a-zA-Z]+\.[0-9a-zA-Z]+$/  //+表示匹配一次或多次他前面的   \表示转义字符
console.log(emailReg.test('2695647975@qq.com'))





