## 堆内存与栈内存
  1. 基本数据类型保存在栈内存，引用数据类型保存在堆内存，根本原因在于栈内存保存的是大小固定的数据，引用类型的大小不固定，只能把它的地址写在堆内存中供我们访问

## 深拷贝与浅拷贝
  浅拷贝：复制指向某个对象的指针，而不是对象本身，新旧对象还是共享同一块内存
        只是拷贝基本数据类型，即基本数据类型不会随着拷贝出来的对象对它里面的基本数据类型的的改变而改变,
        但是该对象的属性为一个数组或另一个对象，子对象获得的只是一个内存地址，而不是对象本身，所以当克隆出来的对象的该属性发生改变时，原对象的该属性也发生改变
        如：var obj = {
          a: 1,
          b: {
            c: 22
          }
        }
        var obj1 = simpleClone(obj) // 浅拷贝obj
        obj1.a = 2; obj1.b.c = 33;
        则obj为 { a: 1, b: { c: 33 }}
  浅拷贝：会另外创造一个一摸一样的对象，与原对象不共享内存
    常见的浅拷贝方法：Object.assign({}, obj), 以及用for in遍历该对象并把每一项赋值给一个空对象、slice、arr.concat([])
    上面提到的方法只针对引用数据类型是浅拷贝，他们对基本数据类型还是进行深拷贝的

  深拷贝：
    1. JSON.parse(JSON.stringify(obj)) -> 对象值出现undefinde、function、symbol会失败
    2. function deepCopy(obj) {
        var result = Array.isArray(obj) ? [] : {}
        for (let key in obj) {
          if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object' && obj[key] != null) {
              result[key] = deepCopy(obj[key])
            } else {
              result[key] = obj[key]
            }
          }
        }
      return result
    }

