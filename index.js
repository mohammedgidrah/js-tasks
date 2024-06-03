// task 1
let cach;
let currentliabilities;
cach = 1000;
currentliabilities = 500;
let result1;
result1 = cach / currentliabilities;
console.log(" cach =1000");
console.log(" current liabilities=500");
console.log(" cach/current liabilities");
console.log(" the output =" + result1);
console.log("..........................................")
let revenues;
let expenses;
revenues = 1000;
expenses = 500;
let result2;
result2 = cach - currentliabilities;
console.log(" revenues =1000");
console.log(" expenses=500");
console.log(" revenues - expenses");
console.log(" the output =" + result2);
console.log("..........................................")
let liabilities;
let equity;
liabilities = 1000;
equity = 500;
let result3;
result3 = cach + currentliabilities;
console.log(" liabilities =1000");
console.log(" equity=500");
console.log(" liabilities + equity");
console.log(" the output =" + result3);
console.log("..........................................")
let profit;
let sales;
profit = 1000;
sales = 500;
let result4;
result4 = cach * currentliabilities;
console.log(" profit =1000");
console.log(" sales=500");
console.log(" profit * sales");
console.log(" the output =" + result4);
console.log("..........................................")
let num1;
let num2;
let num3;
num1 = 7;
num2 = 9;
num3 = 2;
let result5;
let avarege;
result5 = num1 + num2 + num3;
avarege = result5 / 3;
console.log(" num1 = 7");
console.log(" num2 = 9");
console.log(" num3 = 2");
console.log(" num1 + num2 + num3");
console.log(" avarege=result5/3");
console.log(" the output =" + avarege);
console.log(".........................................")
let price;
let discount;
price = 150;
discount = 45;
let result6;
result6 = price - discount;
console.log(" price =150");
console.log(" discount=30%");
console.log(" price - discount");
console.log(" the output =" + result6);
console.log("..........................................")
let age = 20;

if (age > 18 && age < 30) {
    console.log("true");
}
else {
    console.log("false")
}
console.log(".........................................")
let number1;
let number2;
number1 = 2;
number2 = 3;
let result7;
result7 = number1 ** number2;
console.log(" the output =" + result7);
console.log(".........................................")
let number3;
let number4;
number3 = 10;
number4 = 4;
let result8;
result8 = number3 / number4;
result8 = (Math.floor(result8))
console.log(" the output =" + result8);
// task 2
console.log(".........................................")
console.log(typeof (100));
console.log(typeof (73.9));
console.log(typeof (NaN));
console.log(typeof ("water"));
console.log(typeof (false));
console.log(typeof 9 != 11);
console.log("Orang" + "e");
console.log("Orange" - "s");
console.log("4" + "8");
console.log("4" - "8");
console.log("name" - 3);
console.log("name" - 3);
console.log(82 * "word");
console.log(1 + " hello");
console.log("hello " + 1);
console.log(1 + true);
console.log("hello " + true);
console.log(typeof (Infinity));
console.log(1 == '1');
console.log(1 === '1');
// task 3
console.log(".........................................")
let text;
text = "Welcome to Orange";
console.log(text[8].toUpperCase() + text[9].toUpperCase());
console.log(text.replace("Welcome to", "Hello from"));
console.log(text.toLowerCase());
console.log(text.length);
console.log(text + " jordan");
console.log(".........................................")
// task 4
alert("welcome ");
// task 5
var name1 = "mohhammed";
console.log(name1)
let name2 = "ali";
console.log(name2)
var name3 = "salah";
console.log(name3)
let name4 = "saleah";
console.log(name4)
var name5 = "abd";
console.log(name5)
let name6 = "abood";
console.log(name6)
var name7 = "hesam";
console.log(name7)
let name8 = "abdallah";
console.log(name8)
var name9 = "sami";
console.log(name9)
var name10 = "mothana";
console.log(name10)
console.log(".........................................")
var numbere1 = 10;
console.log(numbere1)
let numbere2 = 20;
console.log(numbere2)
var numbere3 = 30;
console.log(numbere3)
let numbere4 = 40;
console.log(numbere4)
var numbere5 = 50;
console.log(numbere5)
let numbere6 = 60;
console.log(numbere6)
var numbere7 = 70;
console.log(numbere7)
let numbere8 = 80;
console.log(numbere8)
var numbere9 = 90;
console.log(numbere9)
var numbere10 = 100;
console.log(numbere10)
console.log(".........................................")
var bool1 = true;
console.log(bool1)
let bool2 = false;
console.log(bool2)
var bool3 = true;
console.log(bool3)
let bool4 = false;
console.log(bool4)
var bool5 = true;
console.log(bool5)
let bool6 = false;
console.log(bool6)
var bool7 = true;
console.log(bool7)
let bool8 = false;
console.log(bool8)
var bool9 = true;
console.log(bool9)
var bool10 = false;
console.log(bool10)
console.log(".........................................")
const array1 = [10];
console.log(array1);
const array2 = [20];
console.log(array2);
const array3 = [30];
console.log(array3);
const array4 = [40];
console.log(array4);
const array5 = [50];
console.log(array5);
const array6 = [60];
console.log(array6);
const array7 = [70];
console.log(array7);
const array8 = [80];
console.log(array8);
const array9 = [90];
console.log(array9);
const array10 = [100];
console.log(array10);
console.log(".........................................")

const person = { firstName: "John", lastName: "Doe", age: "20", eyecolor: "black", locatione: "jordan", gender: "male", hiercolor: "black", helth: "good", id: "200045425", major: "engeniring" };
console.log(person.firstName +"," + person.lastName + "," + person.age + "," + person.eyecolor + "," + person.locatione + "," + person.gender + "," + person.hiercolor + "," + person.helth + "," + person.id + "," + person.major)
// task 6
function varScoping() {
    var x = 1;

    if (true) {
        var x = 2;
        console.log(x); // will print 2
    }

    console.log(x); // will print 2
}

function letScoping() {
    let number = 1;

    if (true) {
        let x = 2;
        console.log(x); // will print 2
    }

    console.log(x); // will print 1
}
// console.log(number);
letScoping()



// task7
var a = 10;
var b = 5
console.log("Addition:" + a + b);
console.log("Subtraction:" + a - b);
console.log("Multiplication:" + a * b);
console.log("Division:" + a / b);
console.log("Modulus (remainder):" + a % b);
console.log(".........................................")
console.log("Addition:" + a > b);
console.log("Subtraction:" + a < b);
console.log("Multiplication:" + a == b);
console.log("Division:" + a == b);
console.log("Modulus (remainder):" + a != b);
console.log(".........................................")
var x = true;
var y = false;
console.log("AND:" + x && y);
console.log("OR:" + x || y);
console.log("NOT:" + !x && !y);
console.log(".........................................")
console.log("Add and assign:" + (a += 5));
console.log("Subtract and assign:" + (a -= 5));
console.log("Multiplay and assign:" + (a *= 2));
// task 8
document.write("<h1>hello</h1>");
window.alert("to the page")
console.log("task 8")