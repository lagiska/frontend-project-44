#!/usr/bin/env node
import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const createRound = () => {
  const task = getRandomNumber(1, 100);

  const correctAnswer = isPrime(task) ? 'yes' : 'no';

  return [task, correctAnswer];
};

const playPrime = () => {
  playGame(rule, createRound);
};

export default playPrime;
