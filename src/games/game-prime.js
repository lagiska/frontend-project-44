#!/usr/bin/env node
import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';
import isPrime from '../isPrime.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const createRound = () => {
  const task = getRandomNumber(1, 100);
  const correctAnswer = isPrime(task) ? 'yes' : 'no';
  return [task, correctAnswer];
};

const playPrime = () => {
  playGame(rule, createRound);
};

export default playPrime;
