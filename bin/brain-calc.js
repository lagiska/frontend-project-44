#!/usr/bin/env node
import readlineSync from "readline-sync";
import getRandomNumber from "../src/getRandomNumber";

let askName;
console.log("Welcome to the Brain Games!");
const greetUser = () => {
  askName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${askName}!`);
  return askName;
};
greetUser();

let userName = askName;
const rule = 'What is the result of the expression?';
console.log(rule);
const operands = [+, -, *];

const roundsPlayed = 3;
let correctAnswersCount = 0;

while (correctAnswersCount < roundsPlayed) {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  let correctAnswer;
  switch (operands) {
    case '+':
      correctAnswer = firstNumber + secondNumber;
      break;
    case '-':
      correctAnswer = firstNumber - secondNumber;
      break;
    case '*':
      correctAnswer = firstNumber * secondNumber;
    break;
  }
}