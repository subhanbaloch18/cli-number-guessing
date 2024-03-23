#! /usr/bin/env node
import inquirer from "inquirer";
// (1) System will genrate a random number.
// (2) User input for guessing number.
// (3) Compare user input with computer generated number and show result.
const randomNumber = Math.floor(Math.random() * 7 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-7: ",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Great job! you guessed the right number.");
}
else {
    console.log("Oops! you guessed the wrong number.");
}
