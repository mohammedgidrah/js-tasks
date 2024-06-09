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
const form1 = document.getElementById('submit');

form1.addEventListener("submit", function (event) {
    event.preventDefault()
    console.log("Form not submitted");
});

// task 7 and taask 8
function myFunction(x) {
    x.style.backgroundColor = "red";
}
document.getElementById("t7").addEventListener("blur", function () {
    document.getElementById("t7").style.backgroundColor = "transparent";
})
// taask 9
document.getElementById("t9").addEventListener("keydown", function () {
    console.log("key down is preesed")
})
// task 10
document.getElementById("t10").addEventListener("click", function () {
    document.getElementById("t10").classList.toggle("t10")
})
// task 11
const form2 = document.getElementById('form');

form2.addEventListener("submit", function (event) {
    event.preventDefault()
    console.log("not submited");
});
// task 12
let x = document.getElementById("myImg");
let y = document.getElementById("bimg");
y.addEventListener("click", function () {
    x.src = "Screenshot 2024-05-17 000929.png";

})
// task 13
let pass = document.getElementById("password");
let check = document.getElementById("checkbox");
check.addEventListener("click", function () {
    pass.type = "text";

})
// task 14
let div = document.getElementById("t14");
let color = document.getElementById("colors");
color.addEventListener("input", function () {
    var selectedColor = this.value;
    div.style.backgroundColor = selectedColor;

})
// task 15






