
/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/

/*------------------------ Cached Element References ------------------------*/


/*-------------------------------- Functions --------------------------------*/

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
