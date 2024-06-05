// task 1
function sayHello(Name) {
    var Name = prompt("enter your name")
    document.writeln("Hello, " + Name +"<br/>");
}
sayHello();
// task 2
var square = function (numbers) {
    return numbers ** 2;

}
console.log(square(5));
// task 3
var multiply = (num1, num2) => num1 * num2;
console.log(multiply(5, 2));
// task 4
const car = {
    make: 'toyota', model: 'camry', year: '(2017)',
    getCarInfo: function () {
        console.log(car.make + " " + car.model + " " + car.year)
    }


}
car.getCarInfo();
// task 5
const colors = ["red", "blue", "green"];
function print() {
    for (let i = 0; i < 3; i++) {
        document.writeln(colors[i] + "<br/>")
    }
}
print()
// task 6
function getStringLength(str) {
    return str.length;
}
console.log(getStringLength('Hello'));
console.log(getStringLength('JavaScript'));
// task 7
function toUpperCase(str) {
    return str.toUpperCase();
}
console.log(toUpperCase('hello'));
console.log(toUpperCase('world'));
// task 8
function split(str,delimiter){
    return str.split(delimiter);
}
console.log(split('Hello World', ' '));
console.log(split('JavaScript is fun', ' '))
