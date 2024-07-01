#!/usr/bin/env node
import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const taskAndAnswer = () => {
  const task = parseInt(getRandomNumber());
  const isPrime = (task) => {
    if (task <= 1) return false;
    if (task % 2 == 0 && num > 2) return false;
    const s = Math.sqrt(task);
    for (let i = 3; i <= s; i += 2) {
      if (task % i === 0) return false;
    }
    return true;
  };
  let correctAnswer;
  if (isPrime === true) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [task, correctAnswer];
};

const playPrime = () => {
  playGame(rule, taskAndAnswer);
};

export default playPrime;
