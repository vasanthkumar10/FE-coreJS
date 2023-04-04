// // pure function -> for a constant input I'll get a const output

// // memoization -> optimisation

// const memoize = (fn) => {
//   const cache = {};

//   return (...arg) => {
//     const stringifiedArg = JSON.stringify(arg);
//     if (stringifiedArg in cache) {
//       console.log("from cache...");
//       return cache[stringifiedArg];
//     } else {
//       console.log("computing from the scratch");
//       const result = fn.apply(this, arg);
//       cache[stringifiedArg] = result;
//       return result;
//     }
//   };
// };

// function factorial(num) {
//   let fact = 1;

//   if (num < 0) return -1;
//   if (num == 0) return fact;

//   for (let i = 1; i <= num; i++) {
//     fact = fact * i;
//   }

//   return fact;
// }

// const memoisedFactorial = memoize(factorial);
// console.log(memoisedFactorial(5));
// console.log(memoisedFactorial(5));
// console.log(memoisedFactorial(5));
// console.log(memoisedFactorial(5));
// console.log(memoisedFactorial(10));
// console.log(memoisedFactorial(5));

// function add(a, b) {
//   return a + b;
// }

// const memoisedAdd = memoize(add);
// console.log(memoisedAdd(1, 2));
// console.log(memoisedAdd(1, 2));
// console.log(memoisedAdd(1, 2));

// const a = {
//   a: 10,
//   b: 20,
// };
// const b = a;

// console.log(a, b);
// b["a"] = 100;
// // a["b"] = 200;
// console.log(a, b);

// function search(word) {
//   console.log("searching", word);
// }

// function debounce(func, delay = 500) {
//   let timer;
//   return (...args) => {
//     console.log(`timer - ${timer} args ${args}`);
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func.apply(this, args);
//     }, delay);
//   };
// }

// const debouncedSearch = debounce(search);

// function throttle(func, delay = 500) {
//   let shouldWait = false;

//   return (...args) => {
//     if (shouldWait) return;

//     func.apply(this, args);
//     shouldWait = true;

//     setTimeout(() => {
//       shouldWait = false;
//     }, delay);
//   };
// }

// const throttledSearch = throttle(search);
// throttledSearch("a");
// throttledSearch("ab");
// throttledSearch("abc");
// throttledSearch("abcd");

// setTimeout(() => {
//   throttledSearch("vasanth");
// }, 1000);

// debouncedSearch("a");
// debouncedSearch("ab");
// debouncedSearch("abc");

const fun1 = (a) => {
  console.log("fn1");
  return a + 2;
};

const fun2 = (b) => {
  console.log("fn2");
  return b + 1;
};

const fun3 = (c) => {
  console.log("fn3");
  return c;
};

// console.log(fun1(fun2(fun3(15)))); // output: 18
// console.log(fun3(fun2(fun1(15)))); // output: 18

const compose = (...functions) => {
  return (initialValue) => {
    return functions.reduceRight((currentValue, currentFn) => {
      return currentFn(currentValue);
    }, initialValue);
  };
};

const pipe = (...functions) => {
  return (initialValue) => {
    return functions.reduce((currentValue, currentFn) => {
      return currentFn(currentValue);
    }, initialValue);
  };
};

console.log(compose(fun1, fun2, fun3)(15));
console.log(pipe(fun1, fun2, fun3)(15));
