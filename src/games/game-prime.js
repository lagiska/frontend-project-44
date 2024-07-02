#!/usr/bin/env node
import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const taskAndAnswer = () => {
  const task = getRandomNumber(1);
  const isPrime = (task) => {
    if (task < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(task); i += 1) {
      if (task % i === 0) {
        return false;
      }
    }
    return true;
  };

  const correctAnswer = isPrime(task) ? 'yes' : 'no';
  return [task, correctAnswer];
};

const playPrime = () => {
  playGame(rule, taskAndAnswer);
};

export default playPrime;
