#!/usr/bin/env node
import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const createRound = () => {
  const task = getRandomNumber(1, 100);

  const correctAnswer = isEven(task) ? 'yes' : 'no';

  return [task, correctAnswer];
};

const gameEven = () => {
  playGame(rule, createRound);
};

export default gameEven;
