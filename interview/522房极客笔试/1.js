// 用es5实现java效果
// public class Dog {
//   private String name; // 注意此处为私有属性，外部无法直接访问
//   public String getName() {
//     return this.name;
//   }
//   public void setName(String n) {
//     this.name = n
//   }
// }

function Dog(name) {
  var _name = name;
  this.getName = function() {
    return _name
  }
  this.setName = function(n) {
    _name = n
  }
}



class Dog {
  constructor(name) {
    let _name = name
    this.getName = () => {
      return _name
    }
    this.setName = (n) => {
      _name = n
    }
  }
}

var dog = new Dog('Tom')
console.log(dog._name)
console.log(dog.getName())
dog.setName('cat')
console.log(dog.getName())