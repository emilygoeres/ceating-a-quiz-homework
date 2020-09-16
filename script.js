// Need to add a start quiz button



// Questions for quiz

var index = 0;
let myQuestions = [
    {
        question: "Who invented JavaScript?",
        answers: {
            a: "Douglas Crockford",
            b: "Sheryl Sandberg",
            c: "Brendan Eich",
            d: "Donald  Duck"
        },
        correctAnswer: "c"
    },
    {
        question: "What's an Array?",
        answers: {
            a: "Node.A type of brush",
            b: "a pony",
            c: "An array is a special variable, which can hold more than one value at a time.",
            d: "a rainbow"
        },
        correctAnswer: "c"
    },
    {
        question: "What's a boolean value?",
        answers: {
            a: "A Ghostr",
            b: "A set of tools",
            c: "Something to do with Holloween",
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
        question: "In Javascript, how is a function defined?",
        answers: {
            a: "Something you do",
            b: "Something you attend",
            c: "RequireJS",
            d: "A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses (). "
        },
        correctAnswer: "d"
    },
    {
        question: "What can functions names be made of?",
        answers: {
            a: "Bubbles",
            b: "Circles",
            c: "Triangles",
            d: "Function names can contain letters, digits, underscores, and dollar signs (same rules as variables). "
        },
        correctAnswer: "d"
    },
    {
        question: "What does math.round do?",
        answers: {
            a: "Makes something into a circle",
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
            b: "Something to do with plants",
            c: "RequireJS",
            d: "Math.sqrt(x) returns the square root of x"
        },
        correctAnswer: "d"
    },
    {
        question: "What does math.ceil do?",
        answers: {
            a: "Makes everything secure",
            b: "jQuery",
            c: "RequireJS",
            d: "Math.ceil(x) returns the value of x rounded up to its nearest integer"
        },
        correctAnswer: "d"
    },
    {
        question: "What does math.floor do?",
        answers: {
            a: "Makes sure everything goes to the floor",
            b: "jQuery",
            c: "RequireJS",
            d: "Math.floor(x) returns the value of x rounded down to its nearest integer"
        },
        correctAnswer: "d"
    }
];
var score = 0;

//DOM Variables
var start = document.getElementById("start");
var game = document.getElementById("game");
var highscores = document.getElementById("HighScores");
var question = document.getElementById("question");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var correct = document.getElementById("correct");
var nextBtn = document.getElementById("nextBtn");
var timer = document.getElementById("timer");
var header = document.getElementById("header");


// Adding event listeners
start.addEventListener("click", startQuiz);
option1.addEventListener("click", checkAnswer);
option2.addEventListener("click", checkAnswer);
option3.addEventListener("click", checkAnswer);
option4.addEventListener("click", checkAnswer);
nextBtn.addEventListener("click", nextQuestion);


//Hide
game.style.display = "none";
highscores.style.display = "none";
function startQuiz() {
    console.log("Start");
    game.style.display = "block";
    start.style.display = "none";
    header.style.display = "none";
    displayQuestion();
    setTime();
}
function displayQuestion() {
    question.innerText = myQuestions[index].question;
    option1.innerText = myQuestions[index].answers.a;
    option2.innerText = myQuestions[index].answers.b;
    option3.innerText = myQuestions[index].answers.c;
    option4.innerText = myQuestions[index].answers.d;

}
function checkAnswer() {
    var userSelection = this.getAttribute("data-value")
    console.log("checkAnswer", userSelection)
    if (userSelection == myQuestions[index].correctAnswer) {
        score++;
        correct.textContent = "Correct Answer";
    } else {
        correct.textContent = "incorrect Answer";
    }
}
function nextQuestion() {
    index++;
    correct.textContent = "";
    if (index >= myQuestions.length) {
        endTest();
    } else {
        displayQuestion();
    }
}
function setTime() {
    var secondsLeft = 60;
    timerInterval = setInterval(function () {
      if (secondsLeft > 0) {
        secondsLeft--;
        timer.textContent = secondsLeft;
      }
      if (secondsLeft === 0) {
        endTest();
      }
  
    }, 1000);
  }
  function endTest() {
      clearInterval(timerInterval);
    var initials = prompt("Initials Here");
    alert(initials+" Scored "+score);

  }