#!/usr/bin/env node
import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rule = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const createRound = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const operator = operators[getRandomNumber(0, 3)];
  const task = `${number1} ${operator} ${number2}`;

  const addNumber = number1 + number2;
  const substractNumber = number1 - number2;
  const multiplyNumber = number1 * number2;

  let correctAnswer;

  switch (operator) {
    case '+':
      correctAnswer = addNumber;
      break;
    case '-':
      correctAnswer = substractNumber;
      break;
    case '*':
      correctAnswer = multiplyNumber;
      break;
    default:
      break;
  }

  return [task, String(correctAnswer)];
};

const gameCalc = () => {
  playGame(rule, createRound);
};

export default gameCalc;
