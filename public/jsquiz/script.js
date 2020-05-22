var start = document.getElementById("start");
var timerEl = document.getElementById("timer");
var seconds = 91;
var questionHead = document.getElementById("questions");
var ansChoices = document.getElementById("answers");
var userScore = document.getElementById("userScore");
var submitBtn = document.querySelector("button.submitBtn")
var submitScore = document.getElementById("submit");
var userName;



var questionNumber = -1;
var answer;




function startTimer() {
   document.getElementById("welcome").classList.add("d-none");
   document.getElementById("quiz").classList.remove("d-none");
   
   setTimer();
   makeQuestions();
   console.log(this)
}

function setTimer() {

   var countdown = setInterval(function () {
       seconds--;
       timerEl.textContent = "Time: " + seconds;

       if (seconds === 0 || questionNumber === questions.length) {
           clearInterval(countdown);
           setTimeout(displayScore, 500);
           console.log(this)
       }
   }, 1000);
   console.log(this)
}

function makeQuestions() {
   questionNumber++;
   answer = questions[questionNumber].answer

   questionHead.textContent = questions[questionNumber].title;
   ansChoices.innerHTML = "";

   var choices = questions[questionNumber].choices;

   for (var q = 0; q < choices.length; q++) {
       var nextChoice = document.createElement("button");

       nextChoice.textContent = choices[q]
       answerBtn = ansChoices.appendChild(nextChoice).setAttribute("class", " m-1 btn btn-primary btn-l");
       console.log(this)
   }
}

function displayScore() {
   document.getElementById("quiz").classList.add("d-none");
   document.getElementById("submit").classList.remove("d-none");
   userScoreEl.textContent = "Your final score is " + seconds;
}

start.addEventListener("click", startTimer);
submitBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    addScore();
    
    window.location.href = "./highscores.html"
});

function addScore () {
   userName = document.getElementById("userName").value

var newScore = {
      name: userName,
      score: seconds
  };
 
  var highScores = JSON.parse(localStorage.getItem("highScores") || "[]");
  highScores.push(newScore)
  localStorage.setItem("highScores", JSON.stringify(highScores));

}

function hideFeedback(){
   var pEl= document.getElementsByClassName("feedback")[0]
   pEl.style.display="none"
}

function showFeedback(){
   var pEl= document.getElementsByClassName("feedback")[0]
   pEl.removeAttribute("style");
}

ansChoices.addEventListener("click", function (event) {
   var pEl= document.getElementsByClassName("feedback")[0]
   
   if (answer === event.target.textContent) {   
       pEl.innerHTML = "Correct!";
       setTimeout(hideFeedback,1000);
       showFeedback();   
   } else {
       pEl.innerHTML = "Sorry, that's incorrect.";
       setTimeout(hideFeedback,1000);
       seconds = seconds - 10;
       showFeedback();
   }    
   makeQuestions();
});


