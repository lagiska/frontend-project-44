#!/usr/bin/env node
import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getGCD = (num1, num2) => {
  const minNum = num1 > num2 ? num2 : num1;
  let gcd = 1;
  for (let i = 2; i <= minNum; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
    }
  }
  return gcd;
};

const createRound = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const task = `${num1} ${num2}`;
  const correctAnswer = getGCD(num1, num2);
  return [task, String(correctAnswer)];
};

const playGcd = () => {
  playGame(rule, createRound);
};

export default playGcd;
