// Rendering functions for each player's perspective in a split-screen format

function renderPlayerOne(perspectiveData) {
    // Code for rendering player one's view
    console.log('Rendering Player One View', perspectiveData);
}

function renderPlayerTwo(perspectiveData) {
    // Code for rendering player two's view
    console.log('Rendering Player Two View', perspectiveData);
}

function renderSplitScreen(playerOneData, playerTwoData) {
    // Code for rendering split-screen view
    console.log('Rendering Split Screen');
    renderPlayerOne(playerOneData);
    renderPlayerTwo(playerTwoData);
}