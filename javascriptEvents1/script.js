// Task 1
var task1 = document.getElementById("btnClick");
task1.addEventListener("click", clickfunction);

function clickfunction()
{
  alert("You clicked me");
}

// Task 2
var task2 = document.getElementById("divClick");
task2.addEventListener("dblclick", dblclickfunction);

function dblclickfunction()
{
  alert("You double clicked me");
}

// Task 3
document.getElementById("divMouseOver").addEventListener("mouseover", function(){ alert("You moused over me!"); });

// Task 4
function fieldchgfunction()
{
  var input = document.getElementById("textfield").value;
  alert("The field has changed to: " + input);
}








