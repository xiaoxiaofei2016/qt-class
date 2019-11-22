const person = {
    ishuman: false,
    printIntroduction: function() {
        console.log('My name is ${this.name}. Am I human ? ${this.isHuman}');
    }
}
//手写一个Object.create
function create(proto) {
    function F() {};
    F.prototype = proto;
    return new F();
}
const me = create(person);
// console.log(me);
console.log(me.__proto__ === person);