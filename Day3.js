// prototype - parent properties
// const nums = [1, 2, 3];
// nums["place"] = "chennai";
// nums["name"] = "vasanth";
// nums[10] = 10;
// nums.push(11);

// nums.map((num) => console.log(num));
// to handle await
// for (let num of nums) {
//   console.log(num);
// }
// for (let key in nums) {
//   console.log(nums[key]);
// }

// prototypes
// let parent = {
//   name: "vasanth",
//   age: 5,
// };
// let child = {
//   name: "aadya",
//   age: 3,
// };

// child.__proto__ = parent;

// console.log(child.__proto__);

// const nums = [1, 2, 3];
// nums.__proto__ = parent;
// console.log(nums);

// let personObj = {
//   name: "gabbar",
//   age: 54,
// };

// console.log(Object.getPrototypeOf(personObj));
// to get keys and values
// console.log(Object.keys(personObj), Object.values(personObj));

// to check key
// console.log(Object.hasOwn(personObj, "age"));

// Object.freeze(personObj);
// personObj["age"] = 98; // will not work
// personObj["place"] = "chennai";

// console.log(personObj);

// let person = {
//   age: 54,
//   "full name": "vasanthkumar vinayagam",
// };

// // hidden property
// Object.defineProperty(person, "name", {
//   value: "vasanth",
//   writable: false,
// });

// person["name"] = "dhoni";
// // console.log(person);
// console.log(person["name"]);

// polyfills  -> writing our custom (user defined) methods
// functions written outside class -> functions
// variables written outside class -> variables

// variables written inside class -> properties
// functions written inside class -> methods

// function add(a, b) {
//   return 10;
// }

// class Arithmetic {
//   length = 10;

//   methodAdd(a, b) {
//     return 10;
//   }
// }

// let obj = Arithmetic();
// obj.methodAdd();

// [].le;

// map
// let nums = [10, 20, 30];
// HOF
// let sqNums = nums.map(function (num, index, arr) {
//   console.log(num, index, arr);
//   return num * num;
// });

// // Array.prototype.myMap = function (callbackFn) {
// //   //   console.log("this ---", this);
// //   let newArr = [];
// //   for (let i = 0; i < this.length; i++) {
// //     let result = callbackFn(this[i], i, this);
// //     newArr.push(result);
// //   }

// //   return newArr;
// // };

// // let sqNums = nums.myMap((num, index, arr) => {
// //   //   console.log("num ->", num, index, arr);
// //   return num * num;
// // });

// console.log(`sq nums - ${sqNums}`);

// filter
// let nums = [10, 20, 30];
// let filteredNums = nums.filter((num, index, arr) => {
//   //   console.log(num, index, arr);
//   return num > 20;
// });

// Array.prototype.myFilter = function (callbackFn) {
//   let newArr = [];
//   for (let i = 0; i < this.length; i++) {
//     let isTrue = callbackFn(this[i], i, this);
//     if (isTrue) newArr.push(this[i]);
//   }

//   return newArr;
// };

// let filteredNums = nums.myFilter((num, index, arr) => {
//   console.log(num, index, arr);
//   return num > 20;
// });

// console.log(filteredNums);

let nums = [1, 2, 3, [4, 5, [6, 7, [8]]]];
// console.log(nums.flat(3));

// Array.prototype.myDeepFlat = function () {
//   let result = [];

//   (function flatten(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       if (Array.isArray(arr[i])) {
//         flatten(arr[i]);
//       } else {
//         result.push(arr[i]);
//       }
//     }
//   })(this);

//   //   flatten(this);

//   return result;
// };

// console.log(nums.myDeepFlat());

// Array.prototype.myFlat = function (depth = 1) {
//   const result = [];

//   function flatten(arr, depth) {
//     for (let i = 0; i < arr.length; i++) {
//       if (Array.isArray(arr[i]) && depth > 0) {
//         flatten(arr[i], depth - 1);
//       } else {
//         result.push(arr[i]);
//       }
//     }
//   }

//   flatten(this, depth);

//   return result;
// };

// console.log(nums);
// console.log(nums.myFlat(Infinity));
