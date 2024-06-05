// task 1
function calculateArea(radius) {
    let area = 3.14 * radius ** 2
    return area
}
console.log(calculateArea(5));
// task 2
let reverseString = function (str) {
    if (str === "")
        return "";
    else
        return reverseString(str.substr(1)) + str.charAt(0);
}

console.log(reverseString("hello"));
// task 3
filterEvenNumbers = (numbers) => {
    let temp = []
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            temp.push(numbers[i])
        }
    }
    return temp;

}
console.log(filterEvenNumbers([2, 4, 65, 7, 6]));
// task 4
let library = {
    books: [],
    addBook: function () {
        let book = { title: "1984", author: "George Orwell" }
        console.log(book)
    }
}
library.addBook()
// task 5
function sum(numbers) {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var total = 0;
    for (let a = 0; a < numbers.length; a++) {
        total += numbers[a];
    }
    return total;
}

console.log(sum())
// task 6
function rnum(str) {
    var counter = 0;
    var vawels = ["a", "e", "i", "u", "o"];
    for (let i = 0; i < str.length; i++) {
        for (let o = 0; o < vawels.length; o++) {
            if (str[i] == vawels[o]) {
                counter++;
            }
        }

    }

    return counter

}
console.log(rnum("hello"))
// task 7
function capital_letter(str) {
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}
console.log(capital_letter("hello world"))
// task 8
function rString(str) {
    let arr = str.split(" ");
    var j=[]
    for (let i = arr.length; i >= 0; i--) {
        j.push(arr[i]);
    }
    return j;
    
}
rString("hello world");

