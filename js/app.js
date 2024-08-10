
const startButton = document.getElementById('start-btn');
const submitButton = document.getElementById('submit-btn');
const restartButton = document.getElementById('restart-btn');
const question = document.getElementById('question');
const choices = document.getElementById('answer-choices');
const winMessage = document.getElementById('win-message');
const loseMessage = document.getElementById('lose-message');
const categorySelect = document.getElementById('category-select');


let currentQuestion = 0;
let score = 0;
let wrongAnswers = 0;
let quizActive = false;
let gameEnded = false;
let currentCategory = 'category1'

let questions = {
    category1: [
    {

        question: "Who is the Head of House Stark in Season 1?",
        choices: ["Cersei", "Peter", "Ned", "Tyrion"],
        correctAnswer: "Ned",
    },
    {
        question: "What is the name of Tyrion Lannister's nephew who becomes King of the Seven Kingdoms?",
        choices: ["Jaime Lannister", "Cersei Lannister", "Joffrey Baratheon", "Tommen Baratheon"],
        correctAnswer: "Joffrey Baratheon",
    },
    {
        question: "Who is the Mother of Dragons?",
        choices: ["Cersei Lannister", "Sansa Stark", "Arya Stark", "Daenarys Targaryen"],
        correctAnswer: "Daenarys Targaryen",
    },

    {
        question: "Who is the Lady of Winterfell at the beginning of the series?",
        choices: ["Catelyn Stark", "Daenerys Targaryen", "Cersei Lannister", "Sansa Stark"],
        correctAnswer: "Catelyn Stark",
    },

    {
        question: "Who is the brother of the Mother of Dragons?",
        choices: ["Lucerys Targaryen", "Aemond Targaryen", "Viserys Targaryen", "Daemon Targaryen"],
        correctAnswer: "Viserys Targaryen",
   
    },

    {
        question: "Which Stark child is known for their exceptional archery skills?",
        choices: ["Bran Stark", "Sansa Stark", "Arya Stark", "Robb Stark"],
        correctAnswer: "Arya Stark", 
    },

    {
        question: "Which character is often referred to as the Hound?",
        choices: ["Tyrion Lannister", "Jamie Lannister", "Brienne of Tarth", "Sandor Clegane"],
        correctAnswer: "Sandor Clegane", 

    },

    {
        question: "Who is the leader of the Unsullied?",
        choices: ["Grey Worm", "Petyr Baelish", "Jorah Mormont", "Renly Baratheon"],
        correctAnswer: "GreyWorm",

    },

    {
        question: "Which character is known as the Red Viper",
        choices: ["Tommen Lannister", "Gilly", "Sansa Stark", "Oberyn Martell"],
        correctAnswer: "Oberyn Martell",

    },

    {
        question: "What is the sigil of House Targaryen ?",
        choices: ["Three-Headed Dragon", "Grey Dire Wolf", "Golden-Lion", "Black-Stag"],
        correctAnswer: "Three-Headed Dragon",

    },
],
    category2: [
    {
        question: "How did Ned Stark die?",
        choices: ["He died of old age", "He was killed in battle by White Walkers", "He was beheaded", "He drowned in the Riverlands"],
        correctAnswer: "He was beheaded", 
 
    },

    {
        question: "How did Joffrey Baratheon meet his demise?",
        choices: ["Battle wounds", "Poisoning", "Natural Causes", "Execution"],
        correctAnswer: "Natural Causes", 

},

    {
        question: "What was the fate of Daenarys Targaryen?",
        choices: ["Killed in battle by Cersei Lannister", "Betrayed and murdered by Jon Snow", "Dies of Illness", "Disappears mysteriously"],
        correctAnswer: "Betrayed and murdered by Jon Snow", 

    },

    {
        question: "How did Catelyn Stark meet her tragic end?",
        choices: ["Assassinated by the Lannisters in King's Landing", "Killed in a battle against the Wildlings", "Murdered at the Red Wedding", "Died from a fatal illness"],
        correctAnswer: "Murdered at the Red Wedding", 

    },

    {
        question: "How does Arya Stark ultimately meet her fate in the series?",
        choices: ["Killed in battle against the White Walkers", "Assassinated by Cersei Lannister", "Dies of a mysterious illness", "Does not die but Continues her journey as a Faceless Assassin"],
        correctAnswer: "Does not die but Continues her journey as a Faceless Assassin",

    },

    {
        question: "How did Sandor Clegane, also known as The Hound, meet his end in the series?",
        choices: ["Killed in battle against the Night's Watch", "Dies from wounds sustained in combat", "Found peace and retires from fighting", "Meets a fiery end in a battle against his brother, the Mountain"],
        correctAnswer: "Meets a fiery end in a battle against his brother, the Mountain", 

    },

    {
        question: "Which one of Daenarys Targaryen's dragons was the first one to die?",
        choices: ["Drogon", "Rhaegal", "Viserion", "Syrax"],
        correctAnswer: "Viserion", 

    },

    {
        question: "How did Tommen Lannister meet his end?",
        choices: ["Suicided by jumping through a window", "Killed in battle against the Dothraki", "Killed by molten gold poured over his head", "Died from Dragon Fire"],
        correctAnswer: "Suicided by jumping through a window", 

    },

    {
        question: "How did Oberyn Martell meet his tragic end?",
        choices: ["Killed in a fair fight by The Mountain", "Betrayed by Tywin Lannister", "Killed in a sneak attack by the Lannister guards", "Crushed to death by The Mountain"],
        correctAnswer: "Crushed to death by The Mountain", 

    },

    {
        question: "How frequent do character deaths happen in Game of Thrones",
        choices: ["Every Season", "Every Battle", "Every Season Finale", "Nearly Every Episode"],
        correctAnswer: "Nearly Every Episode", 

    },
    ]   
};

function init() {
    render()
}

// function render() {
//     if (gameEnded) {
//         if (score >= questions[currentCategory].length / 2 ) {
//             winMessage.textContent = 'You Win!'
//         } else {
//             loseMessage.textContent = 'You Lose!'
//         } 
//         submitButton.style.display = 'none'
//         restartButton.style.display = 'block'
//     } else if (quizActive) {
//         loadQuestion()
//     } else {
//         startButton.style.display = 'block'
//         submitButton.style.display = 'none'
//         restartButton.style.display = 'none'
//         winMessage.textContent = ''
//         loseMessage.textContent = ''
//     }
// scoreDisplay.textContent = `Score: ${score}`; 
// }


function render() {
    if (gameEnded) {
      if (score >= 7) {
        winMessage.textContent = 'Congrats! You are the new Ruler';
      } else if (wrongAnswers > 3) {
        loseMessage.textContent = "You've been slain'";
      }
      submitButton.style.display = 'none';
      restartButton.style.display = 'block';
    } else if (quizActive) {
      loadQuestion();
    } else {
      startButton.style.display = 'block';
      submitButton.style.display = 'none';
      restartButton.style.display = 'none';
      winMessage.textContent = '';
      loseMessage.textContent = '';
    }
  }


function loadQuestion() {
    if (currentQuestion >= question.length) {
        return;
    }
    const currentQuizData = questions[currentCategory][currentQuestion];
    question.textContent = currentQuizData.question

    choices.innerHTML = ''
    currentQuizData.choices.forEach(choice => {
        const li = document.createElement('li')
        li.textContent = choice
        choices.appendChild(li)
    })
}

function checkAnswer(selectAnswer) {
    const currentQuizData = questions[currentCategory][currentQuestion]
    if (selectAnswer === currentQuizData.correctAnswer) {
        score++;
    } else {
        wrongAnswers++;
        if (wrongAnswers >= 3) {
            gameEnded = true;
            loseMessage.textContent = "You've been slain!";
          }
        }
        currentQuestion++;


        if (currentQuestion >= questions[currentCategory].length || score >= 7) {
            gameEnded = true;
            if (score >= 7) {
              winMessage.textContent = "Congrats! You are the new Ruler!";
            } else {
              loseMessage.textContent = "You've been slain!";
            }
          } else {
            
          render();
        }
      
        // if (currentQuestion < questions[currentCategory].length) {
        //   loadQuestion();
        // } else {
        //   gameEnded = true;
        // }
      
        // render();


    currentQuestion++
    if (currentQuestion < questions[currentCategory].length && wrongAnswers < 3) {
        loadQuestion()
    } else {
        gameEnded = true
    }
    render()
}


function startQuiz() {
    quizActive = true
    render()
}


function resetQuiz() {
    currentQuestion = 0
    score = 0
    wrongAnswers = 0
    quizActive = false
    gameEnded = false
    winMessage.textContent = ''
    loseMessage.textContent = ''
    location.reload()
}


categorySelect.addEventListener('change', handleCategoryChange)

function handleCategoryChange(event) {
    currentCategory = event.target.value
    currentQuestion = 0
    render()
}

startButton.addEventListener('click', startQuiz)
submitButton.addEventListener('click', () => {
    if (quizActive) {
        checkAnswer()
    }
})

restartButton.addEventListener('click', resetQuiz)

choices.addEventListener('click', (event) => {
    const selectAnswer = event.target.textContent
    checkAnswer(selectAnswer)
})

init()

//     const answersElement = document.getElementById("answers");
//     answersElement.innerHTML = ""; 
  
//     questions[currentQuestion].answers.forEach((answer, index) => {
//       const button = document.createElement("button");
//       button.classList.add("answer");
//       button.textContent = answer; 
  
//       button.dataset.index = index; 
//       button.addEventListener("click", checkAnswer);
//       answersElement.appendChild(button);
//     });

//   function checkAnswer(event) {
//     const userAnswer = event.target;
//     const correctAnswer = questions[currentQuestion].correctAnswer;
  
//     if (userAnswer == correctAnswer) {
//       score++;
//     }

//     const resultElement = document.getElementById("result");
//   if (userAnswer == correctAnswer) {
//     resultElement.textContent = "Correct!";
//   } else {
//     resultElement.textContent 
//  = `Wrong! The correct answer is ${questions[currentQuestion].answers[correctAnswer]}`;
//   }
//   currentQuestion++;

//   if (currentQuestion === questions.length) {
//     displayFinalResult();
//   } else {
//     displayQuestion(); 
//   }
// }

// function displayFinalResult() {
//     const resultElement = document.getElementById("result");
//     resultElement.textContent = `You answered ${score} out of ${questions.length} questions correctly.`;

//     const quizContainer = document.getElementById("quiz-container1");
//     quizContainer.style.display = "none";
//     const restartButton = document.getElementById("restart-btn");
//     restartButton.disabled = false;
//   }

//   function startQuiz() {
//     currentQuestion = 0;
//     score = 0;
//     displayQuestion();
//     isQuizStarted = true;

// const startButton = document.getElementById("start-btn");
//   startButton.disabled = true;
//   const submitButton = document.getElementById("submit-btn");
//   submitButton.disabled = false;
// }

//     const startButton = document.getElementById("start-btn");
//     startButton.addEventListener("click", startQuiz);

//     const submitButton = document.getElementById("submit-btn");
//     submitButton.addEventListener("click", checkAnswer); 

//     const restartButton = document.getElementById("restart-btn");
//     restartButton.addEventListener("click", function() {
//         currentQuestion = 0;
//         score = 0;
//         isQuizStarted = false;
//         displayQuestion();

//         const quizContainer = document.getElementById("quiz-container1");
//         quizContainer.style.display = "block";
//         restartButton.disabled = true;

//         startButton.disabled = false;
//         submitButton.disabled = true;
//         });

        