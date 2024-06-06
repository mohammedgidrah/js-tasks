// // task 1
// document.getElementById("header").innerHTML = ("Welcome to DOM Manipulation!");
// // task 2
// const collection = document.getElementsByClassName("item");
// collection[0].innerHTML = ("Class Item");
// // task 3
// document.getElementsByTagName("p")[0].innerHTML = "Paragraph Element";
// document.getElementsByTagName("p")[1].innerHTML = "Paragraph Element";
// document.getElementsByTagName("p")[2].innerHTML = "Paragraph Element";
// // task 4
// const x = document.getElementsByClassName("highlight");
// x[0].innerHTML = ("First Highlighted Item");
// // task 5
// let y = document.querySelectorAll("li");
// y[0].innerHTML = "List Item";
// y[1].innerHTML = "List Item";
// y[2].innerHTML = "List Item";
// // task 6
// document.querySelector("#footer").innerHTML = "Footer Updated";
// // task 7
// let z = document.querySelectorAll(".box");
// z[0].innerHTML = "Box Item";
// z[1].innerHTML = "Box Item";
// z[2].innerHTML = "Box Item";
// // task 8
// let a = document.querySelector("div.container p").innerHTML = "wellcome";
// // task 9
// let b =document.querySelector("[data-role]");
// b.innerHTML="Admin Role";
// // task 10
// document.getElementsByTagName("span")[0].innerHTML="2 hi";
function displayDate() {
    document.getElementById("demo").innerHTML = Date();
  }

document.getElementsByTagName("button")[0].style.fontSize="200px";
document.getElementById('demo').style.fontSize="20px";
document.getElementById("demo").innerHTML=Date();
document.getElementById("demo").addEventListener("mouseover,displayDate");





