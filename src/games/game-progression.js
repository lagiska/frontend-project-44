#!/usr/bin/env node
import playGame from "../index.js";
import getRandomNumber from "../getRandomNumber.js";

const rule = 'What number is missing in the progression?';
const taskAndAnswer = () => {
  const progressionLength = 10;
  const maxDiffInProgression = 10;
  const firstNum = parseInt(getRandomNumber());
  const diffInProgression = parseInt(getRandomNumber(1, maxDiffInProgression));
  const skip = getRandomNumber(0, progressionLength-1);
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstNum + diffInProgression * i);
}
  const correctAnswer = progression[skip];
  progression[skip] = '..';
  const task = progression.join(' ');
  return [task, String(correctAnswer)];
};

const playProgression = () => {
  playGame (rule, taskAndAnswer);
};

export default playProgression;