// task 1
localStorage.setItem("string","Hello, World!")
console.log(localStorage.getItem("string"));
// task 2
localStorage.setItem("number","123")
console.log(localStorage.getItem("number"));
// task 3
localStorage.setItem("boolean","true")
console.log(localStorage.getItem("boolean"));
// task 4
localStorage.setItem("remove","hi")
localStorage.removeItem("remove");
// task 5
localStorage.clear();
// task 6
localStorage.setItem("exist","me")
if(localStorage.getItem("exist")==localStorage.getItem("exist")){
    console.log("it is there")
}
else{
    console.log("it is not there")
}
// task 7
localStorage.setItem("array",JSON.stringify([1,2,3]))
console.log(localStorage.getItem(("array")))
// task 8
localStorage.setItem("obj",JSON.stringify({"Name":"john","age":30}))
console.log(localStorage.getItem(("obj")))
// task 9
console.log(localStorage.getItem("exist"))
console.log(localStorage.getItem("array"))
console.log(localStorage.getItem("obj"))
// task 10
localStorage.setItem("update","hi")
localStorage.setItem("update","bye")
console.log(localStorage.getItem("update"))


