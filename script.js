// Need to add a start quiz button



// Questions for quiz

var index = 0;
let myQuestions = [
    {
        question: "Who invented JavaScript?",
        answers: {
            a: "Douglas Crockford",
            b: "Sheryl Sandberg",
            c: "Brendan Eich"
        },
        correctAnswer: "c"
    },
    {
        question: "What's an Array?",
        answers: {
            a: "Node.js",
            b: "TypeScript",
            c: "An array is a special variable, which can hold more than one value at a time."
        },
        correctAnswer: "c"
    },
    {
        question: "What's a boolean value?",
        answers: {
            a: "Angular",
            b: "jQuery",
            c: "RequireJS",
            d: "Yes/No"
        },
        correctAnswer: "d"
    },
    {
        question: "What's a boolean value?",
        answers: {
            a: "Angular",
            b: "jQuery",
            c: "RequireJS",
            d: "True/False"
        },
        correctAnswer: "d"
    },
    {
        question: "How is a function defined?",
        answers: {
            a: "Angular",
            b: "jQuery",
            c: "RequireJS",
            d: "A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses (). "
        },
        correctAnswer: "d"
    },
    {
        question: "What can functions names be made of?",
        answers: {
            a: "Angular",
            b: "jQuery",
            c: "RequireJS",
            d: "Function names can contain letters, digits, underscores, and dollar signs (same rules as variables). "
        },
        correctAnswer: "d"
    },
    {
        question: "What does math.round do?",
        answers: {
            a: "Angular",
            b: "jQuery",
            c: "RequireJS",
            d: "Math.round(x) returns the value of x rounded to its nearest integer"
        },
        correctAnswer: "d"
    },
    {
        question: "What does math.sqrt do?",
        answers: {
            a: "Angular",
            b: "jQuery",
            c: "RequireJS",
            d: "Math.sqrt(x) returns the square root of x:"
        },
        correctAnswer: "d"
    },
    {
        question: "What does math.ceil do?",
        answers: {
            a: "Angular",
            b: "jQuery",
            c: "RequireJS",
            d: "Math.ceil(x) returns the value of x rounded up to its nearest integer"
        },
        correctAnswer: "d"
    },
    {
        question: "What does math.floor do?",
        answers: {
            a: "Angular",
            b: "jQuery",
            c: "RequireJS",
            d: "Math.floor(x) returns the value of x rounded down to its nearest integer"
        },
        correctAnswer: "d"
    }
];


//DOM Variables
var start = document.getElementById("start")
var game = document.getElementById("game")
var highscores = document.getElementById("HighScores")
var question = document.getElementById("question")
var option1 = document.getElementById("option1")
var option2 = document.getElementById("option2")
var option3 = document.getElementById("option3")
var option4 = document.getElementById("option4")


// Adding event listeners
start.addEventListener("click", startQuiz);
option1.addEventListener("click", checkAnswer);
option2.addEventListener("click", checkAnswer);
option3.addEventListener("click", checkAnswer);
option4.addEventListener("click", checkAnswer);

//Hide
game.style.display = "none"
highscores.style.display = "none"
function startQuiz() {
    console.log("Start")
    game.style.display = "block"
    start.style.display = "none"
}
function displayQuestion() {
question.innerText=myQuestions[index].question
option1.innerText=myQuestions[index].answers.a
option2.innerText=myQuestions[index].answers.b
option3.innerText=myQuestions[index].answers.c
option4.innerText=myQuestions[index].answers.d

}
//         // for loop to run through all of the questions, used DOM method
//         // for (var i = 0; i<myQuestions.length; i++) {
//             var pEL = document.createElement("p");
//             pEL.textContent = myQuestions[i];
//             myQuestions.appendChild(pEL);
//           }
// // arrows to right and left to switch the questions
// var currentmyQuestions;
// function navigate(direction) {
//   index = index + direction;
//   if (index < 0) { 
//     index = myQuestions.length - 1; 
//   } else if (index > myQuestions.length - 1) { 
//     index = 0;
//   }
//   currentImage = myQuestions[index];
//   myQuestions.style.backgroundImage = "url('" + currentImage + "')";
// }

// myQuestions.addEventListener("click", function() {
//   window.location.href = myQuestions[index];
// });

// next.onclick= function(event) {
//   event.stopPropagation();

//   navigate(1);
// };

// prev.addEventListener("click", function(event) {
//   event.stopPropagation();

//   navigate(-1);
// });

// navigate(0);

// // This is to track the score
// var storedScores = localStorage.getItem('scores');

// if(storedScores){
//     storedScores = JSON.parse(storedScores);
// } else {
//     storedScores = []
// }

// storedScores.forEach(score => {
//     scoresList.append(`<li> ${score.userInits} -- ${score.userScore}`)
// })






// // These are the stop and go functions for the timer
// var statusSpan = document.querySelector("#status");
// var statusToggle = document.querySelector("#status-toggle");
// var playButton = document.querySelector("#play");
// var pauseButton = document.querySelector("#pause");
// var stopButton = document.querySelector("#stop");
// var minutesDisplay = document.querySelector("#minutes");
// var secondsDisplay = document.querySelector("#seconds");
// var workMinutesInput = document.querySelector("#work-minutes");
// var restMinutesInput = document.querySelector("#rest-minutes");
// var inputs = document.querySelector(".inputs")

// var totalSeconds = 0;
// var secondsElapsed = 0;
// var status = "Working";
// var interval;


// getTimePreferences();

// // These two functions are just for making sure the numbers look nice for the html elements
// function getFormattedMinutes() {
//   var secondsLeft = totalSeconds - secondsElapsed;

//   var minutesLeft = Math.floor(secondsLeft / 60);

//   var formattedMinutes;

//   if (minutesLeft < 10) {
//     formattedMinutes = "0" + minutesLeft;
//   } else {
//     formattedMinutes = minutesLeft;
//   }

//   return formattedMinutes;
// }

// function getFormattedSeconds() {
//   var secondsLeft = (totalSeconds - secondsElapsed) % 60;

//   var formattedSeconds;

//   if (secondsLeft < 10) {
//     formattedSeconds = "0" + secondsLeft;
//   } else {
//     formattedSeconds = secondsLeft;
//   }

//   return formattedSeconds;
// }

// /* This function retrieves the values from the html input elements; Sort of
//    getting run in the background, it sets the totalSeconds variable which
//    is used in getFormattedMinutes/Seconds() and the renderTime() function.
//    It essentially resets our timer */
// function setTime() {
//   var minutes;

//   if (status === "Working") {
//     minutes = workMinutesInput.value.trim();
//   } else {
//     minutes = restMinutesInput.value.trim();
//   }

//   clearInterval(interval);
//   totalSeconds = minutes * 60;
// }

// // This function does 2 things. displays the time and checks to see if time is up.
// function renderTime() {
//   // When renderTime is called it sets the textContent for the timer html...
//   minutesDisplay.textContent = getFormattedMinutes();
//   secondsDisplay.textContent = getFormattedSeconds();

//  // ..and then checks to see if the time has run out
//   if (secondsElapsed >= totalSeconds) {
//     if (status === "Working") {
//       alert("Time for a break!");
//     } else {
//       alert("Time to get back to work!");
//     }

//     stopTimer();
//   }
// }

// // This function is where the "time" aspect of the timer runs
// // Notice no settings are changed other than to increment the secondsElapsed var
// function startTimer() {
//   setTime();

//   // We only want to start the timer if totalSeconds is > 0
//   if (totalSeconds > 0) {
//     /* The "interval" variable here using "setInterval()" begins the recurring increment of the
//        secondsElapsed variable which is used to check if the time is up */
//       interval = setInterval(function() {
//         secondsElapsed++;

//         // So renderTime() is called here once every second.
//         renderTime();
//       }, 1000);
//   } else {
//     alert("Minutes of work/rest must be greater than 0.")
//   }
// }

// /* This function stops the setInterval() set in startTimer but does not
//    reset the secondsElapsed variable and does not reset the time by calling "setTime()" */
// function pauseTimer() {
//   clearInterval(interval);
//   renderTime();
// }

// /* This function stops the interval and also resets secondsElapsed
//    and calls "setTime()" which effectively reset the timer
//    to the input selections workMinutesInput.value and restMinutesInput.value */
// function stopTimer() {
//   secondsElapsed = 0;
//   setTime();
//   renderTime();
// }

// /* Our timer is fancy enough to handle 2 different settings at once this toggle
//    function basically just specifies which of our 2 timer settings to use. */
// function toggleStatus(event) {
//   var checked = event.target.checked;

//   if (checked) {
//     status = "Working";
//   } else {
//     status = "Resting";
//   }

//   statusSpan.textContent = status;

//   secondsElapsed = 0;
//   setTime();
//   renderTime();
// }

// function getTimePreferences() {
//   /* Here we check to see if any preferences have
//      been set in the local storage via "setTimePreferences()" */
//   var preferences = JSON.parse(localStorage.getItem("preferences"));

//   // If preferences have been set then use any value available
//   if (preferences) {
//     if (preferences.workMinutes) {
//       workMinutesInput.value = preferences.workMinutes;
//     }

//     if (preferences.restMinutes) {
//       restMinutesInput.value = preferences.restMinutes;
//     }
//   }

//   // This is where the app is really kicked-off, setTime and renderTime are the two main routines.
//   setTime();
//   renderTime();
// }

// function setTimePreferences() {
//   localStorage.setItem(
//     "preferences",
//     JSON.stringify({
//       workMinutes: workMinutesInput.value.trim(),
//       restMinutes: restMinutesInput.value.trim()
//     })
//   );
// }

// playButton.addEventListener("click", startTimer);
// pauseButton.addEventListener("click", pauseTimer);
// stopButton.addEventListener("click", stopTimer);
// statusToggle.addEventListener("change", toggleStatus);
// inputs.addEventListener("change", setTimePreferences);
// inputs.addEventListener("keyup", setTimePreferences);


// function endGame(){
//     var userInits = prompt("Please enter you initials: ")
//     var userObj = {
//         userInits: userInits,
//         userScore: kittenCounter
//     }

//     storedScores.push(userObj);

//      JSON.stringify(currentScore);

//     localStorage.setItem('scores', JSON.stringify(storedScores))





