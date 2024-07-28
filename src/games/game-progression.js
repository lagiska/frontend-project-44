import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rule = 'What number is missing in the progression?';

const PROGRESSION_LENGTH = 10;
const MAX_STEP = 10;

const createRound = () => {
  const firstNum = getRandomNumber(1, 100);

  const step = getRandomNumber(1, MAX_STEP);

  const gap = getRandomNumber(0, PROGRESSION_LENGTH);

  const progression = [];

  for (let i = 0; i < PROGRESSION_LENGTH; i += 1) {
    progression.push(firstNum + step * i);
  }

  const answer = progression[gap];

  progression[gap] = '..';

  const task = progression.join(' ');

  return [task, String(answer)];
};

const playProgression = () => {
  playGame(rule, createRound);
};

export default playProgression;
