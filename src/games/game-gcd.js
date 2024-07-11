#!/usr/bin/env node
import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';
import getGcd from '../getGcd.js';

const rule = 'Find the greatest common divisor of given numbers.';

const createRound = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const task = `${number1} ${number2}`;
  const correctAnswer = getGcd(number1, number2);
  return [task, String(correctAnswer)];
};

const playGcd = () => {
  playGame(rule, createRound);
};

export default playGcd;
