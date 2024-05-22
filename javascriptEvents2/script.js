// Task 1
var task1 = document.getElementById("btnClick");
task1.addEventListener("click", taskOneFunction);

function taskOneFunction()
{
  var hours = window.prompt("Enter your hours: ");
  var rate = window.prompt("Enter your rate: ");
  var grossPay = hours * rate;
  window.alert("Your pay is $" + grossPay.toFixed(2));
};

// Task 2
var task2 = document.getElementById("divClick");
task2.addEventListener("dblclick", taskTwoFunction);

function taskTwoFunction()
{
  var task2Color = document.getElementById("divClick");
  task2Color.style.backgroundColor = "pink";
};

// Task 3
var task3 = document.getElementById("divMouseOut");
task3.addEventListener("mouseout", taskThreeFunction);

function taskThreeFunction()
{
  var task3Color = document.getElementById("divMouseOut");
  task3Color.style.backgroundColor = "green";
};

// Task 4
function fieldchgfunction()
{
  var input = document.getElementById("textfield").value;
  var answer = input * input;
  alert("The number squared is " + answer.toFixed());
};









