// task 1
document.getElementById("t1").addEventListener("click", function () {
    window.alert("Button clicked!")
});
// task 2
document.getElementById("t2").addEventListener("click", function () {
    document.getElementsByTagName("p")[0].style.color = "red";
})
// task 3
document.getElementById("t3").addEventListener("dblclick", function () {
    document.getElementsByTagName("div")[0].style.backgroundColor = "red";
})
// task 4 and task 5
document.getElementById("t4").addEventListener("mouseover", function () {
    document.getElementsByTagName("div")[1].style.backgroundColor = "red";
})
document.getElementById("t4").addEventListener("mouseout", function () {
    document.getElementsByTagName("div")[1].style.backgroundColor = "white";
})
// task 6
// document.getElementById("t6").addEventListener("submit", function (event) {
//     event.preventDefault();
//     var name = document.getElementById("t6").value; 
//     if (!t6) { 
//         alert("Name field is required."); 
//         return false; 
//       } 
// })
// task 7 and taask 8
function myFunction(x) {
    x.style.backgroundColor = "red";
  }
document.getElementById("t7").addEventListener("blur", function () {
    document.getElementById("t7").style.backgroundColor="transparent";
})
// taask 9
document.getElementById("t9").addEventListener("keydown", function () {
    console.log("key down is preesed")
})
// task 10
document.getElementById("t10").addEventListener("click",function(){
    document.getElementById("t10").classList.toggle("t10")
})
// task 11



