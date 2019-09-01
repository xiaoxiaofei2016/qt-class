
function Animal(name) {
    this.name = name
}
Animal.prototype = {
    canRun:function() {
        console.log('I can run')
    }
}
function dog() {
    hob : 'play'
}


// dog.prototype.constructor = dog
dog.prototype = new Animal('dog')
var cat = new dog('cat ')
function instance_of(L,R) {
    var R = R.prototype
    var L = L.__proto__
    while(true) {
        if (L.__proto__ == null) {
            return false
        }
        if (L === R) {
            return true
        }
        L = L.__proto__
    }
   
}
console.log(instance_of(cat,Animal))
console.log(cat.__proto__ === dog.prototype)//true
console.log(cat.__proto__.__proto__ === Animal.prototype)//true
console.log(cat  instanceof Animal)