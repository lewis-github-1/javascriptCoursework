// Task #1:  Write a function expression named getItem() 
// that quickly grabs elements by id, rather than having to 
// rekey  "document.getElementById" repeatedly:
let getItem = function(id) {
  return document.getElementById(id);
};

// Task #2:  Create two empty arrays:  one for scores, one for names.	
let names = [];
let scores = [];

// Task #3:  Create a function expression named checkValid() that 
// accepts the name and score and makes sure they are not empty 
// and that the score is between 0 and 100.  The function expression 
// returns the message:
let checkValid = function(nm, sc) {
  let msg = "";
  if (nm == "") {
    msg += "You must enter a valid name\n";
    getItem("name").focus();
  } else if (isNaN(sc)) {
    msg += "You must enter a valid score\n";
    getItem("score").focus();
  } else if (sc < 0 || sc > 100) {
    msg += "Score must be between 0 and 100\n";
    getItem("score").focus();
  }
  return msg;
};

// Task #4:  Create a function expression named displayStats() 
// that iterates through the arrays and finds the highest score 
// and the name of the person who received it.  This is then 
// displayed in the HTML div id named results:
let displayStats = function() {
  // create variables for calculations
  let scoreTotal = 0;
  let highScore = 0;
  let highScoreName;
  let averageScore;

  // loop through scores array to get a total
  // and find the highest score
  for (let i = 0; i < scores.length; i++) {
    scoreTotal += scores[i];
    if (scores[i] > highScore) {
      highScore = scores[i];
      highScoreName = names[i];
    }
  }

  // calculate the average and display the results
  averageScore = (scoreTotal / scores.length).toFixed(0);
  let results = "<h2>Results</h2>";
  results += "<p>Average score = " + averageScore + "</p>";
  results += "<p>High score = " + highScoreName + " with a score of " + highScore + "</p>";
  getItem("results").innerHTML = results;
};

// Task #5:  Create a function expression named displayScores() 
// that displays all the scores in a table on the HTML page:
let displayScores = function() {
  let scoreDisplay = "<h2>Scores</h2>";
  scoreDisplay += "<tr><td><b>Name</b></td><td><b>Score</b></td></tr>";
  for (let i = 0; i < scores.length; i++) {
    scoreDisplay += "<tr><td>" + names[i] + "</td><td>" + scores[i] + "</td></tr>";
  }
  getItem("scores_table").innerHTML = scoreDisplay;
};

// Task #6:  Create a function expression named addScore() 
// that retrieves what the user typed in for the name and score field.  
// It then takes these two values and calls the checkValid() function expression. 
// If the values are valid, it then calls the displayStats() function expression 
// and also the displayScores() function expression. 
// If the values are not valid, an error message is displayed.
let addScore = function() {
  // get user entries
  let name = getItem("name").value;
  let score = parseInt(getItem("score").value);
  let message = "";

  let errorMessage = checkValid(name, score);

  if (errorMessage != "") {
    alert(errorMessage);
  } else {
    names[names.length] = name;
    scores[scores.length] = score;
    displayScores();
    displayStats();
    getItem("name").value = "";
    getItem("score").value = "";
    getItem("name").focus();
  }
  
};

// Task #7:  Add the event listener to the add button:
window.onload = function() {
  getItem("add").onclick = addScore;
  getItem("name").focus();
};






