#!/usr/bin/env node
import playGame from "../src/index.js";
import getRandomNumber from "../src/getRandomNumber.js";

const rule = "What is the result of the expression?";
const operands = ["+", "-", "*"];
const operand = operands[Math.floor(Math.random() * operands.length)];
const firstNumber = parseInt(getRandomNumber());
const secondNumber = parseInt(getRandomNumber());
const task = `${firstNumber}${operand}${secondNumber}`;
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

const gameCalc = () => {
  playGame(rule, correctAnswer, task)
};

export default gameCalc;