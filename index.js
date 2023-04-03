// // const bodyElement = document.getElementsByTagName("body")[0];
// // console.log("body", bodyElement);

// // const divElement = document.createElement("div");
// // const paraElement = document.createElement("p");
// // paraElement.innerText = "javascript created text";
// // paraElement.style.color = "red";

// // divElement.append(paraElement);
// // bodyElement.append(divElement);

// const divElement = document.querySelector("div");
// const paraElement = document.querySelector("p");
// const buttonElement = document.querySelector("button");

// divElement.addEventListener("click", function (e) {
//   console.log("div clicked");
// });

// divElement.addEventListener(
//   "click",
//   function (e) {
//     console.log("div captured");
//   },
//   {
//     capture: true,
//   }
// );

// paraElement.addEventListener("click", function (e) {
//   console.log("para clicked");
// });

// paraElement.addEventListener(
//   "click",
//   function (e) {
//     console.log("para captured");
//   },
//   {
//     capture: true,
//   }
// );

// buttonElement.addEventListener("click", function (e) {
//   //   e.stopPropagation();
//   console.log("button clicked");
// });

// buttonElement.addEventListener(
//   "click",
//   function (e) {
//     console.log("button captured");
//   },
//   {
//     capture: true,
//   }
// );

// promise
const p1 = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   reject("p1 rejected");
      resolve("p1");
    }, 3000);
  });
};

const p2 = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("p2");
      //   reject("p2 rejected");
    }, 2000);
  });
};

// promise methods
// console.time();
// Promise.all([p1(), p2()])
//   .then((res) => {
//     console.log(res);
//     console.timeEnd();
//   })
//   .catch((err) => {
//     console.log("error ->", err);
//   });

// console.time();
// Promise.allSettled([p1(), p2()])
//   .then((res) => {
//     console.log(res);
//     console.timeEnd();
//   })
//   .catch((err) => {
//     console.log("error ->", err);
//   });

// console.time();
// Promise.race([p1(), p2()])
//   .then((res) => {
//     console.log(res);
//     console.timeEnd();
//   })
//   .catch((err) => {
//     console.log("error ->", err);
//   });

const personA = {
  name: "virat",
  age: 34,
};

// DRY - dont repeat yourself
// SOC - Separation of concern

const personB = {
  name: "Anushka",
  age: 35,
};

function display(place, country) {
  console.log(
    `My name is ${this.name} and my age is ${this.age}. Im from ${place}, ${country}`
  );
}

// function borrowing
// call(obj, args)
// display.call(personA, "delhi", "India");

// display.call(personB, "kerala", "India");

// apply(obj, [args])
// display.apply(personA, ["delhi", "India"]);

// bind -> returns new function
// let virat = display.bind(personA, "delhi", "India");
// virat();
// virat();
