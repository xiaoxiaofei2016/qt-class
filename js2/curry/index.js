function add(a, b) {
  return a + b
}
// add(1, 2)

// var curry = function(fn) {
//   var args = [].slice.call(arguments, 1) // 去掉第一项
//   return function() {
//     var newArgs = args.concat([].slice.call(arguments))
//     return fn.apply(this, newArgs)
//   }
// }

// var addCurry = curry(add, 1, 2)
// console.log(addCurry())


// function sub_curry(fn) {
//   var args = [].slice.call(arguments, 1) // 去掉第一项
//   return function() {
//     return fn.apply(this, args.concat([].slice.call(arguments)))
//   }
// }

// function curry(fn, length) {
//   length = length || fn.length

//   var slice = Array.prototype.slice
//   return function() {
//     if (arguments.length < length) {
//       console.log(arguments, '+++++')
//       var combined = [fn].concat(slice.call(arguments))
//       console.log(combined, '-----------------------')
//       return curry(sub_curry.apply(this, combined), length - arguments.length)
//     } else {
//       return fn.apply(this, arguments)
//     }
//   }
// }

var fn = curry(function(a, b, c) {
  return [a, b, c]
})
// console.log(fn('a', 'b')('c'))
console.log(fn('a')('b')('c'))

function sub_curry(fn) {
  return function() {
    return fn()
  }
}

function curry(fn, length) {
  console.log(length)
  length = length || 4
  return function() {
    if (length > 1) {
      return curry(sub_curry(fn), --length)
    } else {
      return fn()
    }
  }
}




function curry(fn, args) {
  length = fn.length;

  args = args || [];

  return function() {

      var _args = args.slice(0),

          arg, i;

      for (i = 0; i < arguments.length; i++) {

          arg = arguments[i];

          _args.push(arg);

      }
      if (_args.length < length) {
          return curry.call(this, fn, _args);
      }
      else {
          return fn.apply(this, _args);
      }
  }
}
