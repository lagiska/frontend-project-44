#!/usr/bin/env node
import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rule = 'What is the result of the expression?';
const operands = ['+', '-', '*'];

const taskAndAnswer = () => {
  const firstNumber = getRandomNumber(1);
  const secondNumber = getRandomNumber(1);
  const operand = operands[Math.floor(Math.random() * operands.length)];
  const task = `${firstNumber} ${operand} ${secondNumber}`;
  let correctAnswer;
  switch (operand) {
    case '+':
      correctAnswer = (firstNumber + secondNumber).toString();
      break;
    case '-':
      correctAnswer = (firstNumber - secondNumber).toString();
      break;
    case '*':
      correctAnswer = (firstNumber * secondNumber).toString();
      break;
    default:
      break;
  }
  return [task, correctAnswer];
};

const gameCalc = () => {
  playGame(rule, taskAndAnswer);
};

export default gameCalc;
