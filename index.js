const startButton = document.querySelector('#start-Bttn');
// Section for questions
let questionSection = document.querySelector('#questions');

let firstPageStart = document.querySelector('#start-page');
let timeEl = document.querySelector('#timer');
let scoreEl = document.querySelector('#scores');
let quizTimer = document.querySelector('#timer');
let quizBody = document.querySelector('#quiz');
let scoreNameInput = document.querySelector('#nameForScore');
let userFinalScore = document.querySelector('#your-Score');

let questionBeingAnswered = 0;
let timeLeft = 80;
let timerInterval;
let score = 0;
let itsCorrect;

let buttonA = document.querySelector('#a');
let buttonB = document.querySelector('#b');
let buttonC = document.querySelector('#c');
let buttonD  = document.querySelector('#d');


let questionBank = [
  // Q,C,and  A for question 0
  {
    question: 'What is ... ?',
    choices: ['a. answer', 'b. answer', 'c. answer', 'd. answer'],
    correctAnswer: 'a. answer'
  },

  // Q,C,and A for question 1
  {
    question: 'What is ... ?',
    choices: ['a. answer', 'b. answer', 'c. answer', 'd. answer'],
    correctAnswer: 'b. answer'
  },

  // Q,C,and A for question 2
  {
    question: 'What is ... ?',
    choices: ['a. answer', 'b. answer', 'c. answer', 'd. answer'],
    correctAnswer: 'a. answer'
  },

  // Q,C,and A for question 3
  {
    question: 'What is ... ?',
    choices: ['a. answer', 'b. answer', 'c. answer', 'd. answer'],
    correctAnswer: 'a. answer'
  },
  
  // Q,C,and A for question 4
  {
    question: 'What is ... ?',
    choices: ['a. answer', 'b. answer', 'c. answer', 'd. answer'],
    correctAnswer: 'a. answer'
  },

  // Q,C,and A for question 5
  {
    question: 'What is ... ?',
    choices: ['a. answer', 'b. answer', 'c. answer', 'd. answer'],
    correctAnswer: 'a. answer'
  },

  // Q,C,and A for question 6
  {
    question: 'What is ... ?',
    choices: ['a. answer', 'b. answer', 'c. answer', 'd. answer'],
    correctAnswer: 'a. answer'
  },
];

let everyQuestionUsed = questionBank.length;

function generateQuestions() {

  if (questionBeingAnswered === everyQuestionUsed) {
    return finalScore();
  }
  var currentQuestion = questionBank[questionBeingAnswered];
  questionSection.innerHTML = '<p>' + currentQuestion.questionBank + '<p>';
  buttonA.innerHTML = currentQuestion.choices[0];
  buttonB.innerHTML = currentQuestion.choices[1];
  buttonC.innerHTML = currentQuestion.choices[2];
  buttonD.innerHTML = currentQuestion.choices[3];
};

function startQuiz(){
  firstPageStart.style.display = 'none';
  generateQuestions();

  // Timer start
  timerInterval = setInterval(function() {
    timeLeft--;
    quizTimer.textContent = 'Time Left: ' + timeLeft;
                                                     
  if (timeLeft === 0) { 
    clearInterval(timerInterval);
    finalScore();
  }
 }, 1000);

// function checkAnswer(answer){
//   itsCorrect = questionBank[questionBeingAnswered].correctAnswer;

//   if (answer === itsCorrect && questionBeingAnswered != everyQuestionUsed){
//     score++;
//     alert('That is Correct!');
//     questionBeingAnswered++;
//     generateQuestions();
  
//   } else if(answer !== itsCorrect && questionBeingAnswered !== everyQuestionUsed) {
//     alert('That is incorrect.')
//     currentQuestion++;
//     generateQuestions();
  
//   } else {
//     finalScore();
//   }
// }


function finalScore() {
    quizBody.style.display = 'none';
    clearInterval(timerInterval);
    scoreNameInput.value = '';
    userFinalScore.innerHTML = 'You got ' + score + ' out of ' + questionSection.length + ' correct!';
}
};

startButton.addEventListener('click', startQuiz);
