// 类型断言
const person = {} as Person
person.name = 'xiaomuzhu'
person.age = 20

interface Person {
  name: string,
  age: number
}

// 双重断言
const person1 = 'xi' as any as Person

// 类型守卫
// instanceof
// in
class A {
  name = 'wn'
  age = 18
}
class B {
  name = 'petty'
  color = 'pink'
}

function getSomething(arg: A | B) {
  if (arg instanceof B) {
    console.log(arg.color)
    console.log(arg.name)
  }
  if (arg instanceof A) {
    console.log(arg.name)
    console.log(arg.age)
  }
}
// function getSomething(arg: A | B) {
//   if ('color' in B) {
//     console.log(arg.color)
//     console.log(arg.name)
//   }
//   if ('color' in A) {
//     console.log(arg.color)
//     console.log(arg.age)
//   }
// }

// 字面量类型守卫
type Foo = {
  kind: 'foo'
  foo: number
}
type Bar = {
  kind: 'bar'
  bar: number
}

function doStuff(arg: Foo | Bar) {
  if (arg.kind === 'foo') {
    console.log(arg.foo)
  } else {
    console.log(arg.foo)
  }
}
