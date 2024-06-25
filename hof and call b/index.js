//task 1
let arr = [2, 4, 8, 10]

let updatedArr = arr.map(function (val) {
    return val ** 2;
})
console.log(updatedArr);
// task 2
let arr2 = [5, 15, 20, 25];
let updatedArr2 = arr2.filter((val) => val > 10);
console.log(updatedArr2);
// task 3
let strin = ["hi", " wellcome", "bye"];
strin.forEach((i) => {


    console.log(i.toUpperCase())

});
// task 4
let arr4 = [{ firstName: 'mohammed', lastName: 'qedrah', age: 25 },
{ firstName: 'ahmad', lastName: 'khallaf', age: 3 },]

let updatedArr4 = arr4.map((ar) => ar.firstName)

console.log(updatedArr4)
// task 5

const output = arr4.filter(({ age }) => age < 30)
console.log(output);
// task 6
let strin6 = [1, 5, 10, 9];
let sum = 0;
strin6.forEach((z) => {
    let acc = sum += z

});
console.log(sum)
// task 7
let arr7 = ["hi", "wellcome"]

let updatedArr7 = arr7.map((val) => {
    return arr7.slice(" ").reverse().join("");
})
console.log(updatedArr7)
// task 8
const arr8 = [1, 3, 2, 5, 10];
const isPrime = num => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return num !== 1;
};


const prime = arr8.filter(element => isPrime(element));
console.log(prime);
// task 9
const arr9 = [true, false, true, true];
arr9.forEach((ele, ind) => {
    console.log(`Value:${ele} | index:${ind}`);
});
// task 10

let arr10 = [1, 2, 3, 20, 23, 15];
let arr10New = arr10.map((num) => String(num));
console.log(arr10New);

// task 11

let arr11 = [10, 2, 15, 20, 10, 15];
let arr11New = arr11.filter((num, index) => arr11.indexOf(num, index + 1) === -1);
console.log(arr11New);

// task 12

const t12 = arr4.forEach((user) => console.log(user));


// task 13

let arr13 = ["one", "two", "three", "four"];
let arr13New = arr13.map((ele, index) => ele +" of index "+ index);
console.log(arr13New);

// task 14

let arr14 = [1, 2, 4, 23, 12, 15, 3, 6];
let arr14New = arr14.filter((ele) => ele % 2 === 0);
console.log(arr14New);

// task 15

let arr15 = [1, 2, 3, 4, 5, 6];
arr15.forEach((ele) => console.log(ele * 2));



// task 16


let arr16 = [10, 20, 30, 40, 50, 60];
let arr16New = arr16.map((ele, index) => ele - index);
console.log(arr16New);

// task 17

let arr17 = arr4.filter(({ age }) => age > 5)
console.log(arr17);

// task 18

let arr18 = ["o", "tw", "thr", "four"];
arr18.forEach((ele) => console.log(ele.length))

// task 19

let arr19 = ["oneone", "two", "three", "four"];
let arr19New = arr19.map((ele) => ele.toUpperCase());
console.log(arr19New);

// task 20

let arr20 = [10, 20, 30, 40, 50, 60];
sum = 0;
arr20.forEach((num) => sum += num)
let avg = sum / arr20.length;
let arr20New = arr20.filter((ele) => ele > avg);
console.log(arr20New);


// task 21

let arr21 = [10, 20, 30, 40, 50, 60];
arr21.forEach((num) => console.log(num / 2))

// task 22

let arr22 = [1, -2, 3, -4, -5, 6];
let arr22New = arr22.map((ele) => Math.abs(ele));
console.log(arr22New);

// task 23

let arr32 = arr4.filter(({ age }) => age !== null)
console.log(arr32);

// task 24

let arr24 = ["aoneone", "atwo", "three", "four","afivi","ahi"];
let coount = 0;
arr24.forEach(function (ele) {
    if (ele.startsWith("a")) coount++;
})
console.log(coount);


// task 40
// let summation = v => v + v;


// function plus(sum, times) {
//     return function(num)  {
//         let result = num;
//         for (let i = 1; i <= times; i++) {
//             result = sum(result)
            
//         }
//         return result;
//     }
// }
// let one = plus(summation, 2)
// console.log(one(20))


