// task 1
document.getElementById("header").innerHTML = ("Welcome to DOM Manipulation!");
// task 2
const collection = document.getElementsByClassName("item");
collection[0].innerHTML = ("Class Item");
// task 3
document.getElementsByTagName("p")[0].innerHTML = "Paragraph Element";
document.getElementsByTagName("p")[1].innerHTML = "Paragraph Element";
document.getElementsByTagName("p")[2].innerHTML = "Paragraph Element";
// task 4
const x= document.getElementsByClassName("highlight");
x[0].innerHTML = ("First Highlighted Item");



