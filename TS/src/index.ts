function greeter(person: string) {
  // return 'hello,' + person
  return function greeter(person: string) {

  }
}
const user = 'wn'

greeter(user)

// string number boolean null undefined symbol void bigint

const isLoading: boolean = false

const a: number = 6
const b: number = 0xf00d
const book: string = 'ts'

function warnUser(): void { // 没有返回值void(空)
  alert('test')
}

const c: void = undefined

let u: undefined = undefined
let n: null = null

// const sym1 = Symbol('key1')
// const sym2 = Symbol('key1')
// sym1 === sym2 // false

const max = Number.MAX_SAFE_INTEGER // 2*53 -1
const max1 = max + 1
const max2 = max1 + 1

declare let foo: number
declare let bar: bigint
// foo === bar // false

// any
// unknow 跟any一样,但是unkown更加严格
// never
// object

let notSure: any = 4
notSure = '324'
notSure.foo.bar = 1
let value: unknown = 4 // 不能进行深层赋值,不能被new
value = 'q34'
// value.foo.bar = 23

function error(message: string): never { // 值永远不存在定义为never
  throw new Error(message)
}
const empty: never[] = []

const list: Array<number> = [1, 2, 3] // 泛型
const list2: number[] = [1, 2, 3]

// 元祖
let x: [string, number]
x = ['hello', 12]


// object
enum Direction { // enum枚举属性
  Center = 1
}
let val: object
val = Direction
val = [2]
val = [1, 'hello'] // 元祖也是对象

enum Direction {
  up = '10',
  down = 'down',
  left = 'left',
  right = 'right'
}
console.log(Direction.down)

//接口 interface
interface User {
  name: string
  age?: number
  readonly isMale: boolean
  say: (words: string) => string // words形参
}
const getUserName = (user: User) => user.name


// 属性检查
interface Config {
  width?: number
  [propName: string]: any // 添加字符串索引签名
}

function CalculateAreas(config: Config): {area: number} {
  let square = 100
  if (config.width) {
    square = config.width * config.width
  }
  return {area: square}
}

// let mySquare = CalculateAreas({widths: 5})
// 类型断言
// let mySquare = CalculateAreas({widths: 5} as Config)

// 将字面量赋值给另一个变量
let options = {widths: 5}
let mySquare = CalculateAreas(options)


// 抽象类 不能被实例化
abstract class Animal {
  abstract makeSound(): void
  move(): void {
    console.log('aoao')
  }
}
// 实例化抽象类需要创建子类来继承基类,然后可以实例化子类
class Cat extends Animal {
  makeSound() {
    console.log('miao')
  }
}
const cat = new Cat()
cat.makeSound() // 'miao'
cat.move() // 'aoao'

// public
class Car {
  protected run() { // 被public修饰的成员是可以被外部访问的, private私有的, protected被保护的可以被内部和子类访问,new出来的实例不能访问
    console.log('启动')
  }
}
const car = new Car()
car.run()
class GTR extends Car {
  init () {
    this.run()
  }
}
