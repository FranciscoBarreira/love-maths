document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType); 
            }
        });
    }

    runGame("addition")
});


/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */

function runGame(gameType) {

   
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown Game Type: ${gameType}`);
        throw `Unknown Game Type: ${gameType}. Aborting!`;
    }

}

 


function checkAnswer() {}

function calculateCorrectAnswer() {
   let operand1 = parseInt(document.getElementById("operand1").innerText);
   let operand2 = parseInt(document.getElementById("operand2").innerText);
   let operator = document.getElementById("operand1").innerText;

   if (operator === "+") {
       return (operand1 + operand2, "addition");
   } else {
       alert(`Unimplemented Operator: ${operator} `);
       throw `Unimplemented Operator: ${operator}. Aborting!`;
   }


}

function incrementScore() {}

function incrementWrongAnswer() {}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
}

function displaySubstractQuestion () {}

function displayMultiplyQuestion () {}

