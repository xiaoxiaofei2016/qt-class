// function Man(){}
// Man.prototype.xiangqing = function() {}
// Object.defineProperty(Man.prototype, 'xiangqing', () => { value: function() {} })

function betterWn(target, name, descriptor) {
  // Man.prototype  xiangqing
  const originalXiangqin = descriptor.value;
  descriptor.value = () => {
    console.log('我家在红谷滩有房');
    console.log('我家有车');
    originalXiangqin();
  }
}
class Man {
  @betterWn
  xiangqing() {
    // console.log('我家在红谷滩有房');
    console.log('和我在一起');
  }
}
var man = new Man();
man.xiangqing();