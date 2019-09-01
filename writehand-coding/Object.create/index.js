const person = {
    ishuman: false,
    printIntroduction: function() {
        console.log('My name is ${this.name}. Am I human ? ${this.isHuman}');
    }
}
const me = Object.create(person);
console.log(me.__proto__);