#!/usr/bin/env node
import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rule = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const createRound = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const task = `${number1} ${operator} ${number2}`;

  let correctAnswer;
  switch (operator) {
    case '+':
      correctAnswer = (number1 + number2).toString();
      break;
    case '-':
      correctAnswer = (number1 - number2).toString();
      break;
    case '*':
      correctAnswer = (number1 * number2).toString();
      break;
    default:
      break;
  }
  return [task, correctAnswer];
};

const gameCalc = () => {
  playGame(rule, createRound);
};

export default gameCalc;
