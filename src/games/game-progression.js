import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const RULE = 'What number is missing in the progression?';

const PROGRESSION_LENGTH = 10;
const MAX_STEP = 10;

const getProgression = (progLen = PROGRESSION_LENGTH, maxStep = MAX_STEP) => {
  const firstNum = getRandomNumber(1, 100);
  const step = getRandomNumber(1, maxStep);
  const array = [];
  // оставила имя переменной как "array", чтобы избежать
  // путаницы с переменной progression в следующем блоке

  for (let i = 0; i < progLen; i += 1) {
    tempArray.push(firstNum + step * i);
  }

  return array;
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
