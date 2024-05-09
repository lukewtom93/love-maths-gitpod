// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }

    runGame("addition");
});

/**
 * The main game "loop", called when the script is first loaded
 * and after the users answer is processed
 */
function runGame(gameType) {
    let num1 = Math.floor(Math.random() *25) + 1;
    let num2 = Math.floor(Math.random() *25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unkown game type: ${gameType}. Aborting!`;
    }

}

function checkAnswer() {
    
}

/**
 * Gets the operands (the numbers) and the operator (plus, minus etc)
 * directly from the dom, and returns the correct answer.
 */
function calculateCorrectAnswer() {

    let oparand1 = parseInt(document.getElementById('operand1').innertext);
    let oparand2 = parseInt(document.getElementById('operand2').innertext);
    let operator = document.getElementById('operator').innertext;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else {
        alert(`Unimpliment operator ${operator}`);
        throw `Unimpliment operator ${operator}.Aborting!`;
      
    }
}

function incrementScore() {
    
}

function incrementWrongAnswer() {
    
}

function displayAdditionQuestion(oparand1, oparand2) {
    document.getElementById('operand1').textContent = oparand1;
    document.getElementById('operand2').textContent = oparand2;
    document.getElementById('operator').textContent = '+';
}

function displaySubtractQuestion() {
    
}

function displayMultiplyQuestion() {
    
}