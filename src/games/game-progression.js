import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const RULE = 'What number is missing in the progression?';

const PROGRESSION_LENGTH = 10;
const MAX_STEP = 10;

const getProgression = () => {
  const firstNum = getRandomNumber(1, 100);
  const step = getRandomNumber(1, MAX_STEP);
  const tempArray = [];

  for (let i = 0; i < PROGRESSION_LENGTH; i += 1) {
    tempArray.push(firstNum + step * i);
  }

  return tempArray;
};

const createRound = () => {
  const gap = getRandomNumber(0, PROGRESSION_LENGTH);
  const progression = getProgression();
  const answer = progression[gap];

  progression[gap] = '..';
  const task = progression.join(' ');

  return [task, String(answer)];
};

const playProgression = () => {
  playGame(RULE, createRound);
};

export default playProgression;
