#!/usr/bin/env node
import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const taskAndAnswer = () => {
  const task = parseInt(getRandomNumber());

  const isPrime = (task) => {
    if (task <= 1) return false;
    if (task <= 3) return true;
    if (task % 2 === 0 || task % 3 === 0) return false;
    for (let i = 5; i * i <= task; i = i + 6) {
      if (task % i === 0 || task % (i + 2) === 0) {
        return false;
      }
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
