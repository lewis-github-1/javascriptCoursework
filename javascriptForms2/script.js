// =====Task 1: create 3 arrays ========================================
// Declare 3 arrays to serve as parallel arrays.
// Be sure to name them as follows so that code
//	that has been provided will run:
//		arrEmployees  (to hold employee names)
//		arrHours  (to hold their hours
//		arrRates  (to hold their rates)
const arrEmployees = [];
const arrHours = [];
const arrRates = [];

// =====getItem function - this complete code has been written for you ============================
// getItem function:
// - already written for it.
// - it is just to have a short to say "getItem()" each time
// - instead of spellng out document.getElementById each time.

let getItem = function (id) { 
	return document.getElementById(id); 
};

// =====Task 2: complete the code for the addPay function ========================================
// addPay function:
// - partially written for you.  
// - Read the comments for missing code
// - invoked when Add to Payroll button is clicked
// - retrieves the values from the form
// - checks for errors:
//		- if there are errors, displays a message
//		- if there are no errors:
//				* adds the name, hours, rate to appropriate arrays
//				* calls the displayPay() function
//				* clears the form fields
//				* sets the focus on the name field

let addPay = function () {
	// get user entries
	let employee = getItem("employee").value;// write the code to get the employee name from the form
	let hours = parseFloat(getItem("hours").value);// write the code to get the hours the form
	let rate = parseFloat(getItem("rate").value);// write the code to get the rate from the form
	let errorMessage = checkValid(employee, hours, rate);// write the code to call the checkValid function, passing appropriate values
	
	if(errorMessage != "") {  
		// this code will run if the errorMessage is not empty (i.e., there was at least one error)
		alert(errorMessage);
	   } else {  
		// this code will run if the errorMessage is empty (i.e., no errors)
    
		// write the code to add the employee, hours, and rate to the appropriate arrays
    arrEmployees.push(employee);
    arrHours.push(hours);
    arrRates.push(rate);
		// call the displayPay() function [this has been done for you]
		displayPay();
		
		// write the code to set the form fields to empty values
		getItem("employee").value = "";
    getItem("hours").value = "";
		getItem("rate").value = "";
				
		// write the code to set the focus back on the employee field
    getItem("employee").focus();    
	}
};

// =====Task 3: complete the code for the checkValid function ========================================
// checkValid function:
// - accepts values for the name, hours, and rate
// - checks to see if name is empty
// - checks to see if hours is a number between 0 and 40
// - checks to see if rate is a number between 12 and 25
// - if any of those 3 values are invalid:
//		* append to the error message what the error is
//		* set the focus to the field causing the error
// 			form field that is causing the error
// - return the custom error message

let checkValid = function(emp, hr, rt ) {
	let errorMessage = "";  // this is the string that will be added to if there are errors
	
	// Write the code checks to see if the name field is empty.  If it is empty:
	//	* append appropriate text to the errorMessage
	//	* set the focus back to the name field
	if (emp === "") {
    errorMessage += "You must enter a valid employee name.\n";
    getItem("employee").focus();

  }
	
	// Write the code checks to see if the hours are invalid.  If they are invalid:
	//	* append to the errorMessage
	//	* set the focus back to the hours field
	//	NOTE:  valid hours:  must be a number that is between 0 and 40
  if (isNaN(hr) || hr < 0 || hr > 40) {
    errorMessage += "Invalid hours. Enter a value between 0 and 40.\n";
    getItem("hours").focus();

  }
  
	// Write the code checks to see if the rate is invalid.  If it is invalid:
	//	* append to the errorMessage
	//	* set the focus back to the rate field
	//	NOTE:  valid rate:  must be a number that is between 12 and 25
	if (isNaN(rt) || rt < 12 || rt > 25) {
    errorMessage += "Invalid rate. Enter a value between 12 and 25.\n";
    getItem("rate").focus();
  }

	// return the errorMessage
  return errorMessage;
};

// =====displayPay function - this complete code has been written for you ============================
// displayPay function:
// - loops through the arrays and displays the data
// 		in a table format, including gross pay and total gross pay
let displayPay = function () {
	let total = 0;
	let payDisplay = "<h2>Payroll</h2>";
	payDisplay += "<tr><td><b>Name</b></td><td><b>Hours</b></td><td><b>Rate</b></td><td><b>Gross</b></td></tr>";
	for ( let i = 0; i < arrHours.length; i++ ){
		let gross = arrHours[i] * arrRates[i];
		total += gross;
		payDisplay += "<tr><td>" + arrEmployees[i] + "</td>" 
			+ "<td class=\"right\">" + arrHours[i].toFixed(2) + "</td>"
			+ "<td class=\"right\">$" + arrRates[i].toFixed(2) + "</td>"
			+ "<td class=\"right\">$" + gross.toFixed(2) + "</td></tr>"
	}
	payDisplay += "<tr><td></td><td></td>"
		+ "<td>Total Gross:</td>"
		+ "<td class=\"right\">$" + total.toFixed(2) + "</td></tr>";
   	getItem("payroll").innerHTML = payDisplay;
};

// =====Task 4: complete the code for onload event ========================================
window.onload = function () {
	// write the code to call the appropriate function when the button is clicked
getItem("add").onclick = addPay;
  // write the code that will set the focus to the employee field when the form loads
getItem("employee").focus();
};


