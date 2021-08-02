// variables for time element and questions
let timeEl = document.querySelector('#time');
let timeLeft = 80;
let questionIndex = 0;

let introEl = document.querySelector('#first-Page');
let questionsEl = document.querySelector('#questions');
let allQuestions = document.querySelector('#all-Questions');
let questionBeingAnswered = 0
let yesNoEl = document.querySelector('#correct-Incorrect');

// variables for the buttons
const startBttn = document.querySelector('#start-Button')
const ansBtn = document.querySelectorAll('button.button-Used');
const answerA = document.querySelector('#buttonA')
const answerB = document.querySelector('#buttonB')
const answerC = document.querySelector('#buttonC')
const answerD = document.querySelector('#buttonD')
const viewScoreBtn = document.querySelector('#high-Scores');

// variables for the submitting and storing high scores 
let scoreEl = document.querySelector('#user-Score')
const submitScore = document.querySelector('#submit-Score')
const lastPageEl = document.querySelector('#last-Page')

let initialInput = document.querySelector('#initials')
let scoreRankEl = document.querySelector('#score-Rank')
let scoreRank = []
let highScoresEl = document.querySelector('#highscore-Display')
let goBack = document.querySelector('#go-Back');
let clearScores = document.querySelector('#clear-Scores');

const questionBank = [
  {
    question: 'What element in JS represents a TRUE or FALSE value ?',
    answers: [ 'A. Boolean', 
    'B. String', 
    'C. Function',
    'D. Truthy' ],
    correctAnswer: "0"
  },

  // Q,C,and A for question 1
  {
    question: 'What element in JavaScript would you use to store multiple values in a variable?',
    answers: [ 'A. If statement', 
    'B. Array', 
    'C. Function',
    'D. Header' ],
    correctAnswer: "1"
  },

  // Q,C,and A for question 2
  {
    question: 'Which HTML element would you use to link your JavaScript file ?',
    answers: [ 'A. <JavaScriptFile>', 
    'B. <link>', 
    'C. <section>',
    'D. <script>' ],
    correctAnswer: "3"
  },

  // Q,C,and A for question 3
  {
    question: 'What is concatenation ?',
    answers: [ 'A. Separating two strings apart.', 
    'B. Combining two strings together.', 
    'C. Converting text into numbers.',
    'D. Linking your HTML to your JavaScript. ' ],
    correctAnswer: "1"
  },
  
  // Q,C,and A for question 4
  {
    question: 'Which of the following is not a conditional statement in JS ?',
    answers: [ 'A. If... ', 
    'B. Else...', 
    'C. Code...',
    'D. Else if...' ],
    correctAnswer: "2"
  },

  // Q,C,and A for question 5
  {
    question: 'Function ______ are the names listed in the function.',
    answers: [ 'A. parameters', 
    'B. titles', 
    'C. call',
    'D. objects' ],
    correctAnswer: "0"
  }
];

// function that will control how time element is displayed and if time/questions run out
function setTime() {
  let timerInterval = setInterval(function () {
    timeLeft--;
    timeEl.textContent = 'Time Left: ' + timeLeft + 's';

  if (timeLeft === 0 || questionIndex === questionBank.length) {
    clearInterval(timerInterval);
    questionsEl.style.display = 'none';
    lastPageEl.style.display = 'block'
    scoreEl.textContent = timeLeft;
    }
  }, 1000);
}

// Function for events that occur once start quiz button is selected
function startQuiz() {
  introEl.style.display = 'none';
  questionsEl.style.display = 'block';
  highScoresEl.style.display = 'none'
  questionIndex = 0;

  setTime();
  generateQuestions(questionIndex);
}

// cycle through and display all questions in the question bank
function generateQuestions(index) {
  if (index < questionBank.length) {
    allQuestions.textContent = questionBank[index].question;
    answerA.textContent = questionBank[index].answers[0];
    answerB.textContent = questionBank[index].answers[1];
    answerC.textContent = questionBank[index].answers[2];
    answerD.textContent = questionBank[index].answers[3];
  }

}

// will check to see if answer is correct or not and display it on screen before going to the next question in the cycle
function checkAnswer(event) {
  event.preventDefault();

  yesNoEl.style.display = 'block'
  let p = document.createElement('p');
  yesNoEl.appendChild(p);

  // needed to keep incorrect/correct message from staying on page
  setTimeout(function () {
    p.style.display = 'none';
  }, 400);

  // keeps the incorrect/correct message that will pop up and under what circumstance it is considered correct/incorrect
  if (questionBank[questionIndex].correctAnswer === event.target.value) {
    p.textContent = 'That is Correct!'
  
  } else if (questionBank[questionIndex].correctAnswer !== event.target.value) {
    timeLeft = timeLeft - 5;
    p.textContent = 'That is Incorrect.'
  }

  if (questionIndex < questionBank.length) {
    questionIndex++;
  }

  generateQuestions(questionIndex);
}

// makes sure it cycles and is able to check answers for all questions in q bank
ansBtn.forEach(item => {
  item.addEventListener('click', checkAnswer);
});

startBttn.addEventListener('click', startQuiz);

// function to allow user to input their name to save their score with and display it on the screen 
function userScoreInput(event) {
  event.preventDefault();

  lastPageEl.style.display = 'none';
  highScoresEl.style.display = 'block'

  let uInitial = initialInput.value.toUpperCase();
  
  scoreRank.push({initials: uInitial, score: timeLeft});

  scoreRankEl.innerHTML= "";
  for (let i = 0; i < scoreRank.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${scoreRank[i].initials}: ${scoreRank[i].score}`;
    scoreRankEl.append(li); 
  }

  saveScores();
  showAllScores();
}

// saves the scores in local storage
function saveScores() {
  localStorage.setItem('scoreRank', JSON.stringify(scoreRank));
}

submitScore.addEventListener('click', userScoreInput);

// will display all saved scores
function showAllScores() {
  let savedRankList = JSON.parse(localStorage.getItem('scoreRank'));

  if (savedRankList !== null){
    scoreRank = savedRankList;
  }
}

// once go back button is pressed it will send back to first page
goBack.addEventListener('click', function() {
  highScoresEl.style.display = 'none';
  introEl.style.display = 'block';
  timeLeft = 80;
  timeEl.textContent = `Time Left: ${timeLeft}`
  
});


viewScoreBtn.addEventListener('click', function() {
  if (highScoresEl.style.display === 'none') {
    highScoresEl.style.display = 'block';
  } else if (highScoresEl.style.display === 'block'){
    highScoresEl.style.display = 'none';
  } else {
    return alert('Start Quiz to Save Your Score!')
  }

});

function deleteStoredScores() {
  localStorage.clear()
  scoreRankEl.innerHTML=''
}


clearScores.addEventListener('click', deleteStoredScores);

