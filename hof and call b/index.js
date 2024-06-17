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
{ firstName: 'ahmad', lastName: 'khallaf', age: 30 },]

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
let summation = v => v + v;


function plus(sum, times) {
    return function(num)  {
        let result = num;
        for (let i = 1; i <= times; i++) {
            result = sum(result)
            
        }
        return result;
    }
}
let one = plus(summation, 2)
console.log(one(20))


