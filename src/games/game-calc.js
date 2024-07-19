import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const rule = 'What is the result of the expression?';

const OPERATORS = ['+', '-', '*'];

const add = (num1, num2) => num1 + num2;

const substract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const createRound = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const operator = OPERATORS[getRandomNumber(0, 3)];

  const task = `${number1} ${operator} ${number2}`;

  let answer;

  switch (operator) {
    case '+':
      answer = add(number1, number2);
      break;
    case '-':
      answer = substract(number1, number2);
      break;
    case '*':
      answer = multiply(number1, number2);
      break;
    default:
      break;
  }

  return [task, String(answer)];
};

const gameCalc = () => {
  playGame(rule, createRound);
};

export default gameCalc;
