/*-------------------------------- Constants --------------------------------*/

const startButton = document.getElementById('Start-Quiz')
const restartButton = document.getElementById('Restart-Quiz')
const submitButton = document.getElementById('Submit')
const clickSound = document.getElementById('click-sound')

const quizContainer = document.getElementById('quiz-container');
// const questionElement = document.getElementById('question');
const answerList = document.getElementById('answers');

const questionEls = document.querySelectorAll('.question');

// - Define a const for a quiz layout/board
// - Define a const for the actual question
// - Define a const for the answer options
// - Define a const for the correct answer

/*---------------------------- Variables (state) ----------------------------*/


let currentScore = 0; // - Define the variable for the current score

let currentQuestion = 0; // - Define a variable for What question the user is currently on


let firstCategory = [
    {
        number: 1,
        question: "Who is the Head of House Stark in Season 1?",
        options: ["A. Cersei", "B. Peter", "C. Ned", "D. Tyrion"],
        correctAnswer: "C. Ned"
 
    },

    {
        number: 2,
        question: "What is the name of Tyrion Lannister's nephew who becomes King of the Seven Kingdoms?",
        options: ["A. Jaime Lannister", "B. Cersei Lannister", "C. Joffrey Baratheon", "D. Tommen Baratheon"],
        correctAnswer: "C. Joffrey Baratheon"
        
},

    {
        number: 3,
        question: "Who is the Mother of Dragons?",
        options: ["A. Cersei Lannister", "B. Sansa Stark", "C. Arya Stark", "D. Daenarys Targaryen"],
        correctAnswer: "D. Daenarys Targaryen"

    },

    {
        number: 4,
        question: "Who is the Lady of Winterfell at the beginning of the series?",
        options: ["A. Catelyn Stark", "B. Daenerys Targaryen", "C. Cersei Lannister", "D. Sansa Stark"],
        correctAnswer: "A. Catelyn Stark"
        
    },

    {
        number: 5,
        question: "Who is the brother of the Mother of Dragons?",
        options: ["A. Lucerys Targaryen", "B. Aemond Targaryen", "C. Viserys Targaryen", "D. Daemon Targaryen"],
        correctAnswer: "C. Viserys Targaryen"
   
    },

    {
        number: 6,
        question: "Which Stark child is known for their exceptional archery skills?",
        options: ["A. Bran Stark", "B. Sansa Stark", "C. Arya Stark", "D. Robb Stark"],
        correctAnswer: "C. Arya Stark"

    },

    {
        number: 7,
        question: "Which character is often referred to as the Hound?",
        options: ["A. Tyrion Lannister", "B. Jamie Lannister", "C. Brienne of Tarth", "D. Sandor Clegane"],
        correctAnswer: "D. Sandor Clegane",

    },

    {
        number: 8,
        question: "Who is the leader of the Unsullied?",
        options: ["A. Grey Worm", "B. Petyr Baelish", "C. Jorah Mormont", "D. Renly Baratheon"],
        correctAnswer: "A. Grey Worm"

    },

    {
        number: 9,
        question: "Which character is known as the Red Viper",
        options: ["A. Tommen Lannister", "B. Gilly", "C. Sansa Stark", "D. Oberyn Martell"],
        correctAnswer: "D. Oberyn Martell"

    },

    {
        number: 10,
        question: "What is the sigil of House Targaryen ?",
        options: ["A. Three-Headed Dragon", "B. Grey Dire Wolf", "C. Golden-Lion", "D. Black-Stag"],
        correctAnswer: "A. Three-Headed Dragon"

    },

]

let secondCategory = [
    {
        number: 11,
        question: "How did Ned Stark die?",
        options: ["A. He died of old age", "B. He was killed in battle by White Walkers", "C. He was beheaded", "D. He drowned in the Riverlands"],
        correctAnswer: "C. He was beheaded"
 
    },

    {
        number: 12,
        question: "How did Joffrey Baratheon meet his demise?",
        options: ["A. Battle wounds", "B. Poisoning", "C. Natural Causes", "D. Execution"],
        correctAnswer: "B. Poisoning"

},

    {
        number: 13,
        question: "What was the fate of Daenarys Targaryen?",
        options: ["A. Killed in battle by Cersei Lannister", "B. Betrayed and murdered by Jon Snow", "C. Dies of Illness", "D. Disappears mysteriously"],
        correctAnswer: "B. Betrayed and Murdered by Jon Snow"

    },

    {
        number: 14,
        question: "How did Catelyn Stark meet her tragic end?",
        options: ["A. Assassinated by the Lannisters in King's Landing", "B. Killed in a battle against the Wildlings", "C. Murdered at the Red Wedding", "D. Died from a fatal illness"],
        correctAnswer: "C. Murdered at the Red Wedding"

    },

    {
        number: 15,
        question: "How does Arya Stark ultimately meet her fate in the series?",
        options: ["A. Killed in battle against the White Walkers", "B. Assassinated by Cersei Lannister", "C. Dies of a mysterious illness", "D. Does not die but Continues her journey as a Faceless Assassin"],
        correctAnswer: "D. Does not die but Continues her journey as a Faceless Assassin"

    },

    {
        number: 16,
        question: "How did Sandor Clegane, also known as The Hound, meet his end in the series?",
        options: ["A. Killed in battle against the Night's Watch", "B. Dies from wounds sustained in combat", "C. Found peace and retires from fighting", "D. Meets a fiery end in a battle against his brother, the Mountain"],
        correctAnswer: "D. Meets a fiery end in a battle against his brother, the Mountain"

    },

    {
        number: 17,
        question: "Which one of Daenarys Targaryen's dragons was the first one to die?",
        options: ["A. Drogon", "B. Rhaegal", "C. Viserion", "D. Syrax"],
        correctAnswer: "C. Viserion"

    },

    {
        number: 18,
        question: "How did Tommen Lannister meet his end?",
        options: ["A. Suicided by jumping through a window", "B. Killed in battle against the Dothraki", "C. Killed by molten gold poured over his head", "D. Died from Dragon Fire"],
        correctAnswer: "A. Suicided by jumping through a window"

    },

    {
        number: 19,
        question: "How did Oberyn Martell meet his tragic end?",
        options: ["A. Killed in a fair fight by The Mountain", "B. Betrayed by Tywin Lannister", "C. Killed in a sneak attack by the Lannister guards", "D. Crushed to death by The Mountain"],
        correctAnswer: "D. Crushed to death by The Mountain"

    },

    {
        number: 20,
        question: "How frequent do character deaths happens in Game of Thrones",
        options: ["Every Season", "Every Battle", "Every Season Finale", "Nearly Every Episode"],
        correctAnswer: "D. Nearly Every Episode"

    },

]

Init();
// - Define a variable to invoke the init() function

// - Define a variable that will allow audio for a click or background sound

/*------------------------ Cached Element References ------------------------*/




/*-------------------------------- Functions --------------------------------*/


// - Create an if-else statement for passing/failing the quiz
// - Create a function for the question and correct answer
// - IF the player scores above 70% THEN pass
// - IF the player scores below 70% THEN fail
// - Define a function to render the game message



/*----------------------------- Event Listeners -----------------------------*/



// - Add an event listener for the submit button to input answer
submitButton.addEventListener('Submit')

// - Add an event listener for a start button to start the game
startButton.addEventListener('Start-Quiz')


// - Add an event listener for a restart button to play again
restartButton.addEventListener('Restart-Quiz', init)

// - Add an event listener for a click sound to hear a sound when clicking
clickSound.addEventListener('click', () => {
    clickSound.play();
});

