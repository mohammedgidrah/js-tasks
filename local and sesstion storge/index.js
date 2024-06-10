// task 1
localStorage.setItem("string", "Hello, World!")
console.log(localStorage.getItem("string"));
// task 2
localStorage.setItem("number", "123")
console.log(localStorage.getItem("number"));
// task 3
localStorage.setItem("boolean", "true")
console.log(localStorage.getItem("boolean"));
// task 4
localStorage.setItem("remove", "hi")
localStorage.removeItem("remove");
// task 5
localStorage.clear();
// task 6
localStorage.setItem("exist", "me")
if (localStorage.getItem("exist") == localStorage.getItem("exist")) {
    console.log("it is there")
}
else {
    console.log("it is not there")
}
// task 7
localStorage.setItem("array", JSON.stringify([1, 2, 3]))
console.log(localStorage.getItem(("array")))
// task 8
localStorage.setItem("obj", JSON.stringify({ "Name": "john", "age": 30 }))
console.log(localStorage.getItem(("obj")))
// task 9
console.log(localStorage.getItem("exist"))
console.log(localStorage.getItem("array"))
console.log(localStorage.getItem("obj"))
// task 10
localStorage.setItem("update", "hi")
localStorage.setItem("update", "bye")
console.log(localStorage.getItem("update"))
console.log("..............................................")
// task 11
sessionStorage.setItem("string", "Hello, World!")
console.log(sessionStorage.getItem("string"));
// task 12
sessionStorage.setItem("number", "123")
console.log(sessionStorage.getItem("number"));
// task 13
sessionStorage.setItem("boolean", "true")
console.log(sessionStorage.getItem("boolean"));
// task 14
sessionStorage.setItem("remove", "hi")
sessionStorage.removeItem("remove");
// task 15
sessionStorage.clear();
// task 16
sessionStorage.setItem("exist", "me")
if (sessionStorage.getItem("exist") == sessionStorage.getItem("exist")) {
    console.log("it is there")
}
else {
    console.log("it is not there")
}
// task 17
sessionStorage.setItem("array", JSON.stringify([1, 2, 3]))
console.log(sessionStorage.getItem(("array")))
// task 18
sessionStorage.setItem("obj", JSON.stringify({ "Name": "john", "age": 30 }))
console.log(sessionStorage.getItem(("obj")))
// task 19
console.log(sessionStorage.getItem("exist"))
console.log(sessionStorage.getItem("array"))
console.log(sessionStorage.getItem("obj"))
// task 20
sessionStorage.setItem("update", "hi")
sessionStorage.setItem("update", "bye")
console.log(sessionStorage.getItem("update"))




