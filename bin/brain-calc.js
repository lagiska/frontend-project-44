#!/usr/bin/env node
import readlineSync from "readline-sync";
import getRandomNumber from "../src/getRandomNumber.js";

let askName;
console.log("Welcome to the Brain Games!");
const greetUser = () => {
  askName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${askName}!`);
  return askName;
};
greetUser();

let userName = askName;
const rule = "What is the result of the expression?";
console.log(rule);
const operands = ["+", "-", "*"];

const roundsPlayed = 3;
let correctAnswersCount = 0;

const taskAndAnswer = () => {
  while (correctAnswersCount < roundsPlayed) {
    const firstNumber = parseInt(getRandomNumber());
    const secondNumber = parseInt(getRandomNumber());
    const operand = operands[Math.floor(Math.random() * operands.length)];
    const task = `${firstNumber}${operand}${secondNumber}`;
    console.log("Question: " + task);
    const getAnswer = readlineSync.question("Your answer: ");
    let correctAnswer;
    switch (operand) {
      case "+":
        correctAnswer = (firstNumber + secondNumber).toString();
        break;
      case "-":
        correctAnswer = (firstNumber - secondNumber).toString();
        break;
      case "*":
        correctAnswer = (firstNumber * secondNumber).toString();
        break;
      default:
        break;
    }
    if (getAnswer === correctAnswer) {
      console.log("Correct!");
      correctAnswersCount += 1;
    } else {
      console.log(
        `"${getAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

taskAndAnswer();
