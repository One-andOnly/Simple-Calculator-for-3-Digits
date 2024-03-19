#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "firstNumber" },
    {
        message: "Select one of the oprator to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
    { message: "Enter Second Number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the oprator to perform operation",
        type: "list",
        name: "sOperator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Skip"],
    }, { message: "Enter Third Number", type: "number", name: "thirdNumber" },
]);
// conditional statement
if (answer.operator === "Addition" && answer.sOperator === "Skip") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Addition" && answer.sOperator === "Addition") {
    console.log((answer.firstNumber + answer.secondNumber) + answer.thirdNumber);
}
else if (answer.operator === "Addition" && answer.sOperator === "Subtraction") {
    console.log((answer.firstNumber + answer.secondNumber) - answer.thirdNumber);
}
else if (answer.operator === "Addition" && answer.sOperator === "Multiplication") {
    console.log((answer.firstNumber + answer.secondNumber) * answer.thirdNumber);
}
else if (answer.operator === "Addition" && answer.sOperator === "Division") {
    console.log((answer.firstNumber + answer.secondNumber) / answer.thirdNumber);
}
else if (answer.operator === "Subtraction" && answer.sOperator === "Skip") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Subtraction" && answer.sOperator === "Addition") {
    console.log((answer.firstNumber - answer.secondNumber) + answer.thirdNumber);
}
else if (answer.operator === "Subtraction" && answer.sOperator === "Subtraction") {
    console.log((answer.firstNumber - answer.secondNumber) - answer.thirdNumber);
}
else if (answer.operator === "Subtraction" && answer.sOperator === "Multiplication") {
    console.log((answer.firstNumber - answer.secondNumber) * answer.thirdNumber);
}
else if (answer.operator === "Subtraction" && answer.sOperator === "Division") {
    console.log((answer.firstNumber - answer.secondNumber) / answer.thirdNumber);
}
else if (answer.operator === "Multiplication" && answer.sOperator === "Skip") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Multiplication" && answer.sOperator === "Addition") {
    console.log((answer.firstNumber * answer.secondNumber) + answer.thirdNumber);
}
else if (answer.operator === "Multiplication" && answer.sOperator === "Subtraction") {
    console.log((answer.firstNumber * answer.secondNumber) - answer.thirdNumber);
}
else if (answer.operator === "Multiplication" && answer.sOperator === "Multiplication") {
    console.log((answer.firstNumber * answer.secondNumber) * answer.thirdNumber);
}
else if (answer.operator === "Multiplication" && answer.sOperator === "Division") {
    console.log((answer.firstNumber * answer.secondNumber) / answer.thirdNumber);
}
else if (answer.operator === "Division" && answer.sOperator === "Skip") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else if (answer.operator === "Division" && answer.sOperator === "Addition") {
    console.log((answer.firstNumber / answer.secondNumber) + answer.thirdNumber);
}
else if (answer.operator === "Division" && answer.sOperator === "subtraction") {
    console.log((answer.firstNumber / answer.secondNumber) - answer.thirdNumber);
}
else if (answer.operator === "Division" && answer.sOperator === "Multiplication") {
    console.log((answer.firstNumber / answer.secondNumber) * answer.thirdNumber);
}
else if (answer.operator === "Division" && answer.sOperator === "Division") {
    console.log((answer.firstNumber / answer.secondNumber) / answer.thirdNumber);
}
else {
    console.log("your operator is invalid");
}
