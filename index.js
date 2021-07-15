const startButton = document.querySelector('#start-Bttn')
// Section for questions
const questionSection = documennt.querySelector('#questions')

let firstPageStart = document.querySelector('#start-page');
let timeEl = document.querySelector('#timer');
let scoreEl = document.querySelector('#scores')
let quizTimer = document.querySelector('#timer')
let quizBody = document.querySelector('#quiz')
let scoreNameInput = document.querySelector('#nameForScore')

let questionsAnswered = 0;
let timeLeft = 80;

let buttonA = document.querySelector('#a')
let buttonB = document.querySelector('#b')
let buttonC = document.querySelector('#c')
let buttonD  = document.querySelector('#d')


const questionBank = [
  // Q,C,and  A for question 0
  {
    question: 'What is ... ?',
    choices: ['a. answer', 'b. answer', 'c. answer', 'd. answer'],
    correctAnswer: 'a'
  },

  // Q,C,and A for question 1
  {
    question: 'What is ... ?',
    choices: ['a. answer', 'b. answer', 'c. answer', 'd. answer'],
    correctAnswer: 'a'
  },

  // Q,C,and A for question 2
  {
    question: 'What is ... ?',
    choices: ['a. answer', 'b. answer', 'c. answer', 'd. answer'],
    correctAnswer: 'a'
  },

  // Q,C,and A for question 3
  {
    question: 'What is ... ?',
    choices: ['a. answer', 'b. answer', 'c. answer', 'd. answer'],
    correctAnswer: 'a'
  },
  
  // Q,C,and A for question 4
  {
    question: 'What is ... ?',
    choices: ['a. answer', 'b. answer', 'c. answer', 'd. answer'],
    correctAnswer: 'a'
  },

  // Q,C,and A for question 5
  {
    question: 'What is ... ?',
    choices: ['a. answer', 'b. answer', 'c. answer', 'd. answer'],
    correctAnswer: 'a'
  },

  // Q,C,and A for question 6
  {
    question: 'What is ... ?',
    choices: ['a. answer', 'b. answer', 'c. answer', 'd. answer'],
    correctAnswer: 'a'
  },
]

function generateQuestions() {
  if (questionsAnswered === questionBank.length) {
    return finalScore
  }
  var currentQuestion = questionBank[questionsAnswered];
  questionSection.innerHTML = '<p>' + currentQuestion.questionBank + '<p>';

}

function startQuiz() { {
  firstPageStart.style.display = 'none';
  generateQuestions();

  // Timer start
  timerInterval = setInterval(function() {
    timeLeft--;
    quizTimer.textContent = 'Time Left: ' + timeLeft;
  },
    if (timeLeft === 0) {
      clearInterval(timerInterval)
      showScore();
      // showscore();
    }
},

  function showScore() {
    quizBody.style.display = 'none';
    clearInterval(timerInterval);
    scoreNameInput.value = '';


  }


 startButton.addEventListener('click', startQuiz)
