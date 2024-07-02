#!/usr/bin/env node
import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const taskAndAnswer = () => {
  const task = getRandomNumber(1, 100);
  let correctAnswer;
  if (task % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [task, correctAnswer];
};

const gameEven = () => {
  playGame(rule, taskAndAnswer);
};

export default gameEven;
