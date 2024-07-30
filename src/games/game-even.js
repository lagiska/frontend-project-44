import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const RULE = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const createRound = () => {
  const task = getRandomNumber(1, 100);

  const answer = isEven(task) ? 'yes' : 'no';

  return [task, answer];
};

const gameEven = () => {
  playGame(RULE, createRound);
};

export default gameEven;
