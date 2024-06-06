// task 1
document.getElementById("t1").addEventListener("click",function(){
    window.alert("Button clicked!")
});
// task 2
document.getElementById("t2").addEventListener("click",function(){
    document.getElementsByTagName("p")[0].style.color="red";
})
// task 3
document.getElementById("t3").addEventListener("dblclick",function(){
    document.getElementsByTagName("div")[0].style.backgroundColor="red";
})
// task 4 and task 5
document.getElementById("t4").addEventListener("mouseover",function(){
    document.getElementsByTagName("div")[1].style.backgroundColor="red";
})
document.getElementById("t4").addEventListener("mouseout",function(){
    document.getElementsByTagName("div")[1].style.backgroundColor="white";
})
// task 6

