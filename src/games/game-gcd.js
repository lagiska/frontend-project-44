import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  const minNum = num1 > num2 ? num2 : num1;

  let gcd = 1;

  for (let i = 2; i <= minNum; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
    }
  }
  return gcd;
};

const createRound = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);

  const task = `${number1} ${number2}`;

  const answer = getGcd(number1, number2);

  return [task, String(answer)];
};

const playGcd = () => {
  playGame(rule, createRound);
};

export default playGcd;
