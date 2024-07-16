#!/usr/bin/env node
import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rule = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const addNumber = (num1, num2) => num1 + num2;

const substractNumber = (num1, num2) => num1 - num2;

const multiplyNumber = (num1, num2) => num1 * num2;

const createRound = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const operator = operators[getRandomNumber(0, 3)];

  const task = `${number1} ${operator} ${number2}`;

  let correctAnswer;

  switch (operator) {
    case '+':
      correctAnswer = addNumber(number1, number2);
      break;
    case '-':
      correctAnswer = substractNumber(number1, number2);
      break;
    case '*':
      correctAnswer = multiplyNumber(number1, number2);
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
