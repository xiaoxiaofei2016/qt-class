function who(pname) {
  return function (target) {
    // target === function Man() {} === class Man{}
    console.log(target);
    target.pname = pname;
    return target;
  }
}
// @who @who('蜗牛') @who({ name: '蜗牛'})
@who('蜗牛弟弟')
class Man {
  xiangqin() {
    console.log(`${Man.pname}去相亲了`);
  }
}
var man = new Man();
man.xiangqin();
