





//  Higher Order Functions and callback function


let myNums = [1, 2, 3, 4, 5, 6];

function addition(element) {
  return element + element;
}

let add = myNums.map(addition);

console.log(add);


//  map function

console.log("map function")
let arr = [2, 4, 8, 10]

let updatedArr = arr.map(function (val) {
  return val + 2;
})
console.log("the origenal array:" + "<br/>")
console.log(arr);
console.log("after map function :" + "<br/>")
console.log(updatedArr);

const users = [
  { firstName: 'mohammed', lastName: 'qedrah', age: 25 },
  { firstName: 'ahmad', lastName: 'khallaf', age: 30 },
  { firstName: 'abdallah ', lastName: 'tammimi', age: 35 },
  { firstName: 'tala', lastName: 'alosali', age: 40 },
  { firstName: 'Joe', lastName: 'Doe', age: 45 },
]

const result = users.map((user) => user.firstName + ' ' + user.lastName)
console.log(result);

//  filter function


console.log("filter function:")

let arr2 = [2, 4, 8, 10];
let updatedArr2 = arr2.filter((val) => val > 5);
console.log("the origenal array:")
console.log("after filter function :")
console.log(updatedArr2);


const output = users.filter(({ age }) => age > 30)
console.log(output);


//reduce function



let arr3 = [2, 4, 8, 10]

let updatedArr3 = arr3.reduce(function (sum, curr) {

  console.log(sum, curr);
  // console.log(curr);
  return sum + curr;

}, 0)
console.log("the origenal array:")
console.log(arr3);
console.log("after reduce function :")
console.log(updatedArr3);



function myFirst() {


  console.log("hi");


}

function mySecond() {
  console.log("bye");
}
function mythird() {
  console.log("خلص طولت");
}


setTimeout(myFirst, 1000);
setTimeout(mythird, 4000);
setTimeout(mySecond, 4500);