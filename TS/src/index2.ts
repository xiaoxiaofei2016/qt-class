// 函数类型

// const add: (a: number, b: number) => 
// number = (a: number, b: number) => a + b


// const add = (a: number, b?: number) => a + (b ? b : 0) 参数可能不存在的情况

// const add = (a: number, b = 10) => a + b 参数给默认值的情况

// const add = (a: number, ...rest: number[]) => rest.reduce((a, b) => a + b) // ...rest代表剩余参数


// 重载
interface Directions {
  top: number
  right: number
  bottom: number
  left: number
}

function assigned(all: number): Directions
function assigned(topAndBottom: number, leftAndRight: number): Directions
function assigned(top: number, right: number, left: number, bottom: number): Directions

function assigned (a: number, b?: number, c?: number, d?: number) {
  if (b === undefined && c === undefined && d === undefined) {
    b = c = d = a
  } else if (c === undefined && d === undefined) {
    c = a
    d = b
  }
  return {
    top: a,
    right: b,
    bottom: c,
    left: d
  }
}

// 代码实现函数不可被调用
assigned(1)
assigned(1, 2)
assigned(1, 2, 3)
assigned(1, 2, 3, 4)

// 泛型
// function returnItem (para: number): number {
//   return para
// }
// function returnItem (para: string): string {
//   return para
// }

function returnItem<T>(para: T): T { // 捕获参数类型
  return para
}
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}

// 泛型变量
function getArrayLength<T>(arg: Array<T>): Array<T> {
  console.log((arg as Array<any>).length)
  return arg
}

// 泛型接口
interface ReturnItemFn<T> {
  (paras: T): T
}
const returnItem2: ReturnItemFn<number> = paras => paras

// 泛型类
// class Stack<T> {
//   private arr: T[] = []

//   public push(item: T) {
//     this.arr.push(item)
//   }

//   public pop() {
//     this.arr.pop()
//   }
// }

// 泛型约束
type Params = number | string
class Stack<T extends Params> {
  private arr: T[] = []

  public push(item: T) {
    this.arr.push(item)
  }

  public pop() {
    this.arr.pop()
  }
}
const stack1 = new Stack<string>()

// 使用多重类型进行泛型约束
interface FirstInterface {
  doSomething(): string
}
interface SecondInterface {
  doSomethingElse(): string
}


interface ChildInterface extends FirstInterface, SecondInterface {
  
}

class Demo<T extends ChildInterface>{
  private test: T

  useT() {
    this.test.doSomething()
    this.test.doSomethingElse()
  }
}

// new 
function factory<T>(type: {new(): T}): T { // 允许泛型变量T可以是构造函数
  return new type()
}