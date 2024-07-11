#!/usr/bin/env node
import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';
import calculate from '../calculate.js';

const rule = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const createRound = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const task = `${number1} ${operator} ${number2}`;

  const correctAnswer = calculate(number1, number2, operator);

  return [task, String(correctAnswer)];
};

const gameCalc = () => {
  playGame(rule, createRound);
};

export default gameCalc;
