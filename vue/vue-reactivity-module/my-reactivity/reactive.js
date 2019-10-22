import { track, trigger } from './effect.js'
export function reactive(target) {
  const observed = new Proxy(target, {
    set: (target, key, reciver) => {
      // 恢复它 “赋值” 的一个行为
      const result = Reflect.set(target, key, reciver);
      trigger(target, key);
      return result;
    },
    get: (target, key, receiver) => { 
      // 依赖收集
      // mobx 也有effect 也有依赖收集
      console.log('依赖收集');
      const res = Reflect.get(target, key, receiver);
      // {
      //   origin: {
      //     count: {
      //       fn1,
      //       fn2
      //     }
      //   }
      // }
      track(target, 'get', key); // 
      return res;


    }
  })
  return observed;
}